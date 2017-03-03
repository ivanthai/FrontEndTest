FROM node:boron
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install webpack -g

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]