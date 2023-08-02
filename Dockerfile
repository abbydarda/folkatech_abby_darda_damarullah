FROM node:18.16.0 as base
WORKDIR /app
COPY package*.json /

FROM base as development
ENV NODE_ENV=development
RUN npm i
COPY . .
CMD [ "npm","run","start:dev" ]

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . .
CMD [ "npm","start" ]