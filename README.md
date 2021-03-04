# basic-node-api
This is a basic NodeJS API, meant to serve as a starting point for projects. It is built with Express and comes with:
- Basic JWT auth structure
- Base components to serve as templates
- Structured error handling
- Route schema validation
- Integration with a local PostgreSQL instance with docker-compose
- Testing with Jest

## Usage
Clone the repository to your machine and run `npm install` in its root.

Create a `.env` file by copying the provided `.env.example` and providing your chosen values

### Database
You can point it at an external DB or spin up a local PostgreSQL instance with docker-compose (you may need to use `sudo` with docker-compose depending on your settings):

```
docker-compose build
docker-compose up
```

You can then manually access this DB with `psql` by running:
```
psql -h ${DB_HOST} -p ${DB_PORT} -U S{DB_USER} ${DB_NAME}
```
then providing `${DB_PASSWORD}` at the prompt.

### API
Start the API with `npm run dev` for hot-reload with `nodemon`.

You can verify it is up with a `GET` request to `http://localhost:${PORT}/health-check`.

You can also start it with a debugger:
```js
// VSCode example
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/src/app/index.js"
    }
  ]
}
``` 

## Design
This basic API uses a layered architecture.

The primary motivation for choosing this style was its ease of development and high testability. Since this project is meant as a starting point for small to medium projects, these are essential characteristics to help develop quality code quickly.

As the project grows, the layered architecture's shortcomings in performance and scalability can become more pronounced, at which point it may be worth considering an alternative. But until getting there, where we will have greater visibility of our real business needs, the layered architecture's all-around simplicity can provide a solid foundation on which to grow fast and confidently.

### Components
The basic API comes with template components you can extend to create your domains. See the provided `example` domain for a guide on how to structure your domains.

- Use a routing file to create your routes and apply middlewares. An auth middleware using JWT comes ready to use.
- **Controllers** handle route logic, parsing and validation
- **Services** should handle all your business logic
- **Repositories** take care of all your DB and other external connections

You can instantiate these components as you prefer, using factories, singletons and dependency injections.
