# Reading List

![alt text](https://i.imgur.com/BDhMcsb.png)

This is a simple reading list web application which is built using:

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

Create a `.env` file with all the required information and environment variables
```
$ touch .env
```

Example of how your `.env` file should look like:
```
MONGO_USER=your_own_username
MONGO_PASSWORD=your_super_secretive_password
MONGO_DB=your_wonderful_database_name
```


Running the Node.js backend:

```
$ cd simple-book-library/server
$ npm install
$ npm start
```

Running the React front-end client server:

```
$ cd simple-book-library/client
$ npm install
$ npm start
```

Enjoy!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
