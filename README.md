# TLDR Lint API

This repository contains a simple Express.js server that provides an API for linting and formatting TLDR (Too Long; Didn't Read) markdown files. It was created for the [tldr-editor](https://github.com/spageektti/tldr-editor) project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [GET /](#get-)
  - [GET /check/:fileContent](#get-checkfilecontent)
  - [GET /format/:fileContent](#get-formatfilecontent)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/spageektti/tldr-lint-api.git
   cd tldr-lint-api
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed. Then run:

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   node server.js
   ```

   The server will start and listen on port 3000.

## Usage

Once the server is running, you can interact with the API using a web browser or tools like `curl` or Postman.

### API Endpoints

#### GET /

This endpoint returns a simple message indicating that the TLDR Lint API is running.

**Response:**

```
tldr-lint API
Copyright (c) 2024 spageektti

tldr-lint
Copyright (c) 2016 Ruben Vereecken
Copyright (c) 2016 - present The tldr-pages team and contributors
```

#### GET /check/:fileContent

This endpoint checks the provided markdown content for linting errors.

- **Parameters:**
  - `fileContent`: The markdown content to be checked. It should be URL-encoded.

- **Response:**
  - If there are linting errors, it returns a list of errors with their line numbers and descriptions.
  - If no errors are found, it returns "No errors found".

**Example Request:**

```bash
curl "http://localhost:3000/check/# My TLDR Example"
```

#### GET /format/:fileContent

This endpoint formats the provided markdown content.

- **Parameters:**
  - `fileContent`: The markdown content to be formatted. It should be URL-encoded.

- **Response:**
  - If formatting is successful, it returns the formatted content.
  - If there is an error during formatting, it returns an error message.

**Example Request:**

```bash
curl "http://localhost:3000/format/# My TLDR Example"
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
