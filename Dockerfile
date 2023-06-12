FROM node:18

WORKDIR /usr/src/app

COPY .env /usr/src/app/
COPY . .

RUN npm run build

EXPOSE 4000

CMD [ "node","dist/src/index.js" ]
