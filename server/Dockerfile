FROM node

WORKDIR /server

COPY package*.json /server/

RUN npm i

RUN npm run lint

COPY . /server/

EXPOSE 4000

CMD [ "npm", "start"]