FROM node:24.11.1
ARG APP_VERSION
ENV APP_VERSION ${APP_VERSION}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]
