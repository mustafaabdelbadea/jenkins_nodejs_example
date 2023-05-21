FROM node:12
COPY nodeapp /nodeapp
WORKDIR /nodeapp

ENV RDS_HOSTNAME="${BUILD_NUMBER}"
ENV RDS_USERNAME="${RDS_USERNAME}"
ENV RDS_PASSWORD="$RDS_PASSWORD"
ENV RDS_PORT="$RDS_PORT"
ENV REDIS_HOSTNAME="$REDIS_HOSTNAME"
ENV REDIS_PORT="$REDIS_PORT"

RUN npm install
CMD ["node", "/nodeapp/app.js"]