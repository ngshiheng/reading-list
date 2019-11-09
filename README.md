# Reading List :books:

[![Build Status](https://travis-ci.org/ngshiheng/reading-list.svg?branch=master)](https://travis-ci.org/ngshiheng/reading-list)

![alt text](https://i.imgur.com/BDhMcsb.png)

This is a basic reading list web application.

The main purpose of building this application is to have a quick taste of the listed tech stack:

-   Frontend: _React, Apollo_

-   Backend: _Node.js Express + GraphQL_

-   Database: _MongoDB_

-   CI/CD: _Docker_ + _TravisCI_

## Requirements :notebook:

-   [Node.js](https://nodejs.org/en/) v11 OR above

-   Package manager [npm](https://docs.npmjs.com/cli/install) to install the all dependencies

-   Setup a [MongoDB](https://www.mongodb.com/) account and create a database there

-   Setup environment variables in `.env` file, place it in the `/server` folder
    -   _Reference: `.env.example`_

## Setup for Ubuntu :nut_and_bolt:

This project is tested and develop on Ubuntu 18.04 LTS.

### Bash Script :page_with_curl:

```bash
./setup.sh
./run.sh
```

### Manual Way :hammer:

Setup for Linux users

```bash
./setup.sh
```

Note: _If you're not using Linux, you need to manually run `npm i` at both `server` and `client` folder._

Start Express + GraphQL API backend:

```bash
cd server
npm start
```

`cd` back to the project directory

Start the React frontend:

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

## Contributing :family:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License :oncoming_police_car:

[MIT](https://choosealicense.com/licenses/mit/)
