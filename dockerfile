FROM node:12
COPY nodeapp /nodeapp
WORKDIR /nodeapp

ARG RDS_HOSTNAME=localhost
ARG RDS_USERNAME=emqx
ARG RDS_PASSWORD=password
ARG RDS_PORT=6379
ARG REDIS_HOSTNAME=test
ARG REDIS_PORT=test

RUN npm install
CMD ["node", "/nodeapp/app.js"]