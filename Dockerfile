FROM node:19
WORKDIR /usr/src/node_modules

COPY package*.json ./

RUN npm install

COPY . .