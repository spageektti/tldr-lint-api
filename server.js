const linter = require('./tldr-lint.js');
const fs = require('fs');
const path = require('path');
const os = require('os');
const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('tldr-lint API<br>Copyright (c) 2024 spageektti<br><br>tldr-lint<br>Copyright (c) 2016 Ruben Vereecken<br>Copyright(c) 2016 - present The tldr-pages team and contributors');
});

app.get('/check/:fileContent', (req, res) => {
    const fileContent = decodeURIComponent(req.params.fileContent);

    const tempFilePath = path.join(os.tmpdir(), 'temp-file.md');
    fs.writeFileSync(tempFilePath, fileContent);

    const linterResult = linter.processFile(tempFilePath, true, false, []);

    if (linterResult.errors.length > 0) {
        const errorsText = linterResult.errors.map(error => {
            return `Line ${error.locinfo.first_line || error.locinfo.last_line - 1}: ${error.code} - ${error.description}`;
        }).join('\n');

        res.send(errorsText);
    } else {
        res.send('No errors found');
    }

    fs.unlinkSync(tempFilePath);
});
