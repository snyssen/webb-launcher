FROM node:21.6.0
ARG LAUNCHER_VERSION
ENV LAUNCHER_VERSION ${LAUNCHER_VERSION}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]
