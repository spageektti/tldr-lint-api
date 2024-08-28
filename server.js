const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('tldr-lint API<br>Copyright (c) 2024 spageektti<br><br>tldr-lint<br>Copyright (c) 2016 Ruben Vereecken<br>Copyright(c) 2016 - present The tldr-pages team and contributors');
});