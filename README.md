# Reading List

[![Build Status](https://travis-ci.org/ngshiheng/reading-list.svg?branch=master)](https://travis-ci.org/ngshiheng/reading-list)

![alt text](https://i.imgur.com/BDhMcsb.png)

This is a simple reading list web application which is built using:

-   Frontend: _React, Apollo_

-   Backend: _Node.js Express + GraphQL_

-   Database: _MongoDB_

## Requirements

-   [Node.js](https://nodejs.org/en/) v11 OR above

-   Package manager [npm](https://docs.npmjs.com/cli/install) to install the all dependencies

-   Setup a [MongoDB](https://www.mongodb.com/) account and create a database there

-   Setup environment variables in `.env` file, place it in the `/server` folder
    -   _Reference: `.env.example`_

## Setup for Ubuntu

This project is tested and develop on Ubuntu 18.04 LTS.

### Bash Script :page_with_curl:

```bash
./setup.sh
./run.sh
```

### Manual Way :wrench:

Starting the GraphQL API backend server first:

```bash
cd server
npm start
```

`cd` back to the project directory, then start the React frontend:

```bash
cd client
npm start
```

### Docker :whale:

Make sure you have [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) installed on your machine

```
docker-compose build
docker-compose up
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
