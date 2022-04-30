FROM node:16 as base

WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/

RUN yarn install

COPY . . 

FROM base as production

ENV NODE_PATH=./build

RUN yarn build