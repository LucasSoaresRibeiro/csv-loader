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
  - [Swagger](https://swagger.io) - Good to generate project documentation.
  - [Jest](https://jestjs.io) - Javascript testing framework with a focus on simplicity.

- IDE
  - [Visual Studio Code](https://code.visualstudio.com) - Flexible IDE to develop in any language.
  - [Sonarlint](https://www.sonarlint.org/vscode) - Detect Code Quality and Code Security issues on the fly.

### STEP 3) Folder Structure

<pre>
📦src
 ┣ 📂__tests__          test suites
 ┣ 📂config             config settings
 ┣ 📂controllers        api route endpoints
 ┣ 📂database           database file, seeds and migrations
 ┣ 📂entities           orm entities to map database table
 ┣ 📂repositories       entity managers
 ┣ 📂services           business logic
</pre>