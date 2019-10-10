# Reading List

[![Build Status](https://travis-ci.org/ngshiheng/reading-list.svg?branch=master)](https://travis-ci.org/ngshiheng/reading-list)

![alt text](https://i.imgur.com/BDhMcsb.png)

This is a simple reading list web application which is built using:

- Frontend: _React, Apollo_

- Backend: _Node.js Express + GraphQL_

- Database: _MongoDB_

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/install) to install the all dependencies.

```bash
npm install
```

## Usage

Create an `.env` file in the `server` folder. _This step is crucial if you want to use Docker_

```
$ cd server
$ touch .env
```

Example of how your `.env` file should look like:

```
MONGO_USER=your_own_username
MONGO_PASSWORD=your_super_secretive_password
MONGO_DB=your_wonderful_database_name
```

### Normal deployment

Starting the GraphQL API backend server first:

```
cd server
npm
```

`cd` back to the project directory, then start the React frontend:

```
cd client
npm start
```

Enjoy!

### Using Docker

Make sure you have Docker installed in your machine

```
docker-compose build
docker-compose up
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
