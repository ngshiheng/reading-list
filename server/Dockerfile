FROM node

WORKDIR /server

COPY package*.json /server/

RUN npm i

COPY . /server/

EXPOSE 4000

CMD [ "npm", "start"]