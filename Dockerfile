FROM node:18-alpine3.16

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 80/tcp

CMD ["npm", "start"]