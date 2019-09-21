# Simple Book Library

This is a simple book library web application which is built using:

- Frontend: *React, Apollo*

- Backend: *Node.js Express + GraphQL*

- Database: *MongoDB*

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/install) to install the dependencies.

```bash
npm install
```

## Usage

To run the entire application, you'll need to keep both the client and server running.

Create a `.env` file with all the required information and environment variables:
```
# Content of your .env file:
MONGO_USER=your_own_username
MONGO_PASSWORD=your_super_secretive_password
MONGO_DB=your_wonderful_database_name
```


Running Node.js backend:

```
cd simple-book-library/server
npm install
nodemon app
```

Running the front-end client server:

```
cd simple-book-library/client
npm install
npm start
```

Enjoy!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)