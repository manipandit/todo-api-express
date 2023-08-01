# TODO CRUD API

This is a straightforward and efficient TODO CRUD (Create, Read, Update, Delete) API built using Express.js, dotenv, and Mongoose. The API allows users to manage their TODO items through simple and intuitive endpoints.

## Table of Contents
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
  - [POST /api/todo](#post-apitodo)
  - [GET /api/todo](#get-apitodo)
  - [GET /api/todo/:id](#get-apitodoid)
  - [PUT /api/todo/:id](#put-apitodoid)
  - [DELETE /api/todo/:id](#delete-apitodoid)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Contribution](#contribution)


## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Set up your environment variables: Create a `.env` file in the root directory and define the following variables:
   PORT=<port_number>
   MONGODB_URI=<your_mongodb_connection_uri>
   
   Replace `<port_number>` with the desired port for running the server (e.g., 3000), and `<your_mongodb_connection_uri>` with the URI of your MongoDB database.
4. Start the server: `npm start`

## Folder Structure

The project is organized with a clean folder structure, making it easy to navigate and maintain:

- `controllers`: Contains the logic for handling different API endpoints. Each controller is responsible for processing incoming requests and returning the appropriate responses.
- `models`: Defines the Mongoose schema and model for the TODO items. The models represent the structure of the data stored in the MongoDB database.
- `routes`: Contains Express.js router files that define the API routes. Each route is associated with a specific controller, allowing for a clear separation of concerns.
- `config`: Includes configuration files, such as setting up the database connection using Mongoose.

## API Endpoints

The API provides the following endpoints for managing TODO items:

- `POST /api/v1/createTodo`: Create a new TODO item. Users can send a JSON object with the `title` and `description` fields to create a new task.
- `GET /api/v1/getTodos`: Get all TODO items. This endpoint returns a JSON array containing all the TODO items stored in the database.
- `GET /api/v1/getTodos/:id`: Get a specific TODO item by ID. Users can provide the unique ID of the task as a URL parameter to retrieve the corresponding task details.
- `PUT /api/v1/updateTodo/:id`: Update a specific TODO item by ID. Users can send a JSON object with updated `title` and/or `description` fields to modify an existing task.
- `DELETE /api/v1/deleteTodo/:id`: Delete a specific TODO item by ID. Users can provide the unique ID of the task as a URL parameter to remove the task from the database.

## Environment Variables

The project uses environment variables to configure certain settings, ensuring flexibility and security. Make sure to create a `.env` file in the root directory and define the following variables:
   - PORT=<port_number>
   - MONGODB_URI=<your_mongodb_connection_uri>

## Testing

You can test the API endpoints using Postman or any other API testing tool. Send HTTP requests to the defined endpoints to interact with the TODO items.

## Contribution

Contributions to this project are welcome! If you would like to contribute, please fork the repository and create a pull request. Please follow the existing code style and conventions.

