# CSV LOADER TO DATABASE
NodeJS API to load CSV files to Database.

## DEVELOPMENT STEPS

### STEP 1) Understand Business Requirements
- Read and understand the project requirements.
- Think if all collected informations are enough to start the sprint.

### STEP 2) Choose appropriate framework and libraries

- From business requirements:
  - [NodeJS](https://nodejs.org)
  - [SQLite](https://www.sqlite.org)

- My choices
  - [Express](http://expressjs.com) - Popular web framework for NodeJS.
  - [TypeORM](https://typeorm.io) - ORM to help and padronize database manipulation in NodeJS.
  - [Multer](https://www.npmjs.com/package/multer) - NodeJS middleware for uploading files.
  - [Papa Parse](https://www.papaparse.com) - Powerful CSV parser.
  - [Jest](https://jestjs.io) - Javascript testing framework with a focus on simplicity.
  - [Supertest](https://www.npmjs.com/package/supertest) - Module to crete HTTP tests.
  - [Swagger](https://swagger.io) - Good to generate project documentation.

- IDE
  - [Visual Studio Code](https://code.visualstudio.com) - Flexible IDE to develop in any language.
  - [Sonarlint](https://www.sonarlint.org/vscode) - Detect Code Quality and Code Security issues on the fly.
  - [Postman](https://www.postman.com) - To test API endpoint and upload csv files.

### STEP 3) Folder Structure

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

```shell
ts-node ./node_modules/typeorm/cli.js  migration:generate -n CreateVehicleTable
```

- Run migration to create database and Vehicles table:

```shell
npm run migrations
```

![image](/readme_images/database_migration.jpg)

### STEP 6) Create upload route with multer

Testing upload a CSV with Postman:

![image](/readme_images/upload_csv_to_backend.jpg)

### STEP 7) Open CSV file and load to database using papaparse

![image](/readme_images/load_csv_to_database.jpg)

### STEP 8) Test upload endpoint with Jest and Supertest

![image](/readme_images/out_tests.jpg)

### STEP ...) TODO:

- Add Swagger documentation
- Delete uploaded CSVs
- Improve tests with database migrations and connection management