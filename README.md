# CSV LOADER TO DATABASE
NodeJS API to load CSV files to a Database.

## TABLE OF CONTENTS
  - [COMMANDS](#commands)
    - [Build](#build)
    - [Run](#run)
    - [Test endpoint (Curl command example)](#test-endpoint-curl-command-example)
    - [Run automated tests](#run-automated-tests)
  - [ENDPOINT DETAILS](#endpoint-details)
  - [BIG FILES AND MEMORY CONSIDERATIONS](#big-files-and-memory-considerations)
  - [DEVELOPMENT STEPS](#development-steps)
    - [STEP 1) Understand Business Requirements](#step-1-understand-business-requirements)
    - [STEP 2) Choose appropriate framework and libraries](#step-2-choose-appropriate-framework-and-libraries)
    - [STEP 3) Define the folder Structure](#step-3-define-the-folder-structure)
    - [STEP 4) Setup NodeJS project](#step-4-setup-nodejs-project)
    - [STEP 5) Create database structure](#step-5-create-database-structure)
    - [STEP 6) Create upload route with multer](#step-6-create-upload-route-with-multer)
    - [STEP 7) Open CSV file and load to database using papaparse](#step-7-open-csv-file-and-load-to-database-using-papaparse)
    - [STEP 8) Add endpoint test with Mocha and Supertest](#step-8-add-endpoint-test-with-mocha-and-supertest)
    - [NEXT STEPS)](#next-steps)

## COMMANDS

### Build
```
npm install
```

### Run
```
npm run dev
```
![image](/readme_images/command_npm_run_dev.jpg)

### Test endpoint (Curl command example)
```
curl -F "csv=@vehicles.csv" http://localhost:3333/csvtodatabase
```
![image](/readme_images/command_curl_test.jpg)

### Run automated tests
```
npm test
```
![image](/readme_images/out_tests.jpg)

NOTE: An automated test creates a file database. When running the server, a memory database is created.

## ENDPOINT DETAILS

- Name: csvtodatabase
- Url: http://localhost:3333/csvtodatabase
- Method: POST
- Parameter: CSV (file with vehicles data)
- Response codes:

  - Status code: 200
    - JSON: {status: "completed"}
    - Detail: Records successfully inserted into the database.

  - Status code: 500
    - JSON: {status: "error", "message": "[Error details]"}
    - Detail: Operation failed. See log errors for more details.

## BIG FILES AND MEMORY CONSIDERATIONS

This implementation uses Papa Parse for optimized handling of large csv files and inserts one record at a time into the database to avoid memory overhead during the option and ensure maximum records will be inserted in case of partial failure.

## DEVELOPMENT STEPS

### STEP 1) Understand Business Requirements
- Read and understand the project requirements.
- Think if the information is enough to start implementing or define missing requirements first.

### STEP 2) Choose appropriate framework and libraries

- From business requirements:
  - [NodeJS](https://nodejs.org)
  - [SQLite](https://www.sqlite.org)

- My choices
  - [Express](http://expressjs.com) - Popular web framework for NodeJS.
  - [TypeORM](https://typeorm.io) - ORM to help and padronize database manipulation in NodeJS.
  - [Multer](https://www.npmjs.com/package/multer) - NodeJS middleware for uploading files.
  - [Papa Parse](https://www.papaparse.com) - Powerful CSV parser.
  - [Mocha](https://mochajs.org/) - Javascript testing framework.
  - [Supertest](https://www.npmjs.com/package/supertest) - Module to create HTTP tests.

- IDE
  - [Visual Studio Code](https://code.visualstudio.com) - Flexible IDE to develop in any language.
  - [Sonarlint](https://www.sonarlint.org/vscode) - Detect Code Quality and Code Security issues on the fly.
  - [Postman](https://www.postman.com) - To test API endpoint and upload csv files.

### STEP 3) Define the folder Structure

<pre>
📦src
 ┣ 📂__tests__          test suites
 ┣ 📂config             config settings
 ┣ 📂controllers        api route endpoints
 ┣ 📂database           database file, seeds and migrations
 ┣ 📂entities           orm entities to map database table
 ┣ 📂repositories       entity managers
</pre>

### STEP 4) Setup NodeJS project

![image](/readme_images/first_run.jpg)

### STEP 5) Create database structure

- Create entity Vehicle.ts

- Generate migration:

```
ts-node ./node_modules/typeorm/cli.js  migration:generate -n CreateVehicleTable
```

- Run migration to create database and Vehicles table:

```
npm run migrations
```

Example using a local file database (the final version is using memory database):

![image](/readme_images/database_migration.jpg)

### STEP 6) Create upload route with multer

Testing upload a CSV with Postman:

![image](/readme_images/upload_csv_to_backend.jpg)

### STEP 7) Open CSV file and load to database using papaparse

![image](/readme_images/load_csv_to_database.jpg)

### STEP 8) Add endpoint test with Mocha and Supertest

Test location:
```
src\__tests__\Vehicle.test.ts
```

```
npm test
```

![image](/readme_images/out_tests.jpg)

### NEXT STEPS)

- Add Swagger documentation
  - [Swagger](https://swagger.io) - Good to generate project documentation.
- Delete uploaded CSVs
- Test different csv schemas
- Load test into a database