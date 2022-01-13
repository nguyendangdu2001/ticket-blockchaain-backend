FROM node:16.13.1-alpine as build

WORKDIR /var/www/html
RUN yarn
COPY package.json ./
RUN yarn install
COPY . /var/www/html

FROM node:16.13.1-alpine as development

WORKDIR /var/www/html
COPY --from=build /var/www/html ./
CMD ["yarn", "dev"]

FROM node:16.13.1-alpine as build_prod

WORKDIR /var/www/html
RUN yarn
COPY package.json ./
ENV YARN_CACHE_FOLDER=/usr/local/yarn-cache
VOLUME /usr/local/yarn-cache
RUN apk add --update make gcc g++ python2 curl bash
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin 
RUN yarn install
# RUN apk del make gcc g++ python2
COPY . /var/www/html
RUN yarn build
RUN npm prune --production
RUN /usr/local/bin/node-prune
FROM node:16.13.1-alpine3.14 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /var/www/html

COPY --from=build_prod /var/www/html/dist ./dist
# COPY --from=build_prod /var/www/html/distClient ./distClient
COPY --from=build_prod /var/www/html/.env ./.env

COPY --from=build_prod /var/www/html/node_modules ./node_modules
EXPOSE 5000 
CMD ["node", "dist/main.js"]
