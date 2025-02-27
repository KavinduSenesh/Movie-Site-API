# Movie Site API

## Overview
Movie Site API is a backend service built using Node.js, Express, and TypeScript. It provides endpoints for user authentication and movie-related data management.

## Features
- User authentication (Sign up, Login)
- Secure API routes
- Movie-related CRUD operations
- Organized project structure following MVC pattern

## Technologies Used
- Node.js
- Express.js
- JavaScript
- MongoDB (if applicable)

## Folder Structure
```
Movie-Site-API/
├── controllers/
│   ├── user-controllers.js
├── models/
│   ├── user-models.js
├── routes/
│   ├── user-routes.js
├── node_modules/  # Dependencies
├── package.json   # Project metadata
├── package-lock.json  # Dependency lock file
├── server.ts      # Entry point
├── tsconfig.json  # TypeScript configuration
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/KavinduSenesh/Movie-Site-API.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Movie-Site-API
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
### Running the Server
To start the server, use:
```sh
npm start
```

If using TypeScript, run:
```sh
npm run dev
```

## API Endpoints
| Method | Endpoint        | Description             |
|--------|----------------|-------------------------|
| GET    | /api/movies       | Get all movies        |
| POST   | /api/movies       | Add a new movie       |
| DELETE | /api/movies/:id   | Remove a movie        |

## Contribution
Feel free to fork the repository and submit pull requests!

## License
This project is licensed under the MIT License.

