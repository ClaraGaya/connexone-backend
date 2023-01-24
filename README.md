# API with Node.js, Express, and TypeScripts

##  Getting started
To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition (instructions) and run it by executing mongod
- `npm run dev` to start the local server
- `npm run test` to test

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-prometheus-middleware](https://www.npmjs.com/package/express-prometheus-middleware) - A middleware for express servers, that expose metrics for prometheus. The metrics exposed allows to calculate common RED (Request, Error rate, Duration of requests), and USE (Utilisation, Error rate, and Saturation), metrics.
- [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [Ajv](https://www.npmjs.com/package/ajv) - A JSON validator for Node.js and browser. Supports JSON Schema draft-04/06/07/2019-09/2020-12 (draft-04 support requires ajv-draft-04 package) and JSON Type Definition RFC8927.


## Application Structure

- `index.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions.
- `tests/` - This folder contains the test.

## Authentication
Requests are authenticated using the Authorization header with value ‘mysecrettoken’. 
The required value is configured using our application's secret and will return a 403 status code if the request cannot be authenticated. 





## Dependencies

### Express

### Typescript
typescript package is the key library in all the applications using TypeScript inside the codebase. It transforms the TypeScript code to JavaScript in a process called transcompiling or transpiling.

### ts-node
ts-node is a useful package that enables running TypeScript files (ones having the .ts extension) from the command line within the Node environments.

### Express Prometheus Middleware
[express-prometheus-middleware](https://github.com/joao-fontenele/express-prometheus-middleware) is a middleware for express servers, that expose metrics for prometheus.

The metrics exposed allows to calculate common RED (Request, Error rate, Duration of requests), and USE (Utilisation, Error rate, and Saturation), metrics



