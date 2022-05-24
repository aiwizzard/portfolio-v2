FROM node:18-alpine3.14
LABEL maintainer="ajmalk.com"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install -g npm@8.8.0

RUN npm install --silent

RUN npm install react-scripts -g --silent

RUN npm i -g serve

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "build" ]