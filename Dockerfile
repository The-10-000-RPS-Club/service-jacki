FROM node:12.18.4

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run build

EXPOSE 3001

CMD [ "npm", "start" ]