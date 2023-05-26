FROM node:12
COPY nodeapp /nodeapp
WORKDIR /nodeapp

ENV RDS_HOSTNAME=''
ENV RDS_USERNAME=''
ENV RDS_PASSWORD=''
ENV RDS_PORT=''
ENV REDIS_HOSTNAME=''
ENV REDIS_PORT=''

RUN npm install
CMD ["node", "/nodeapp/app.js"]