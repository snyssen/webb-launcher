FROM node:18
ARG LAUNCHER_VERSION
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]
