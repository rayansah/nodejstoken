FROM node:24

RUN npm install -g nodemon

#avoid windows rights issues on node_modules when not using wsl...
USER root

WORKDIR /home/node/app
COPY app/package.json .

RUN npm install
COPY app/ ./ 

EXPOSE 8083

CMD ["nodemon", "server.mjs"]
