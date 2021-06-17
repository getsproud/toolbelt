FROM node:14.15.0-stretch
# Default value; will be overridden by build_args, if passed
ARG NODE_ENV=development
ARG NPM_TOKEN=

ENV NODE_ENV $NODE_ENV
ENV NPM_TOKEN $NPM_TOKEN

WORKDIR /app
ADD docker/.npmrc .npmrc

ADD package.json .
ADD package-lock.json .
RUN npm install

ADD dist/ .

ENTRYPOINT [ "npm", "run", "start" ]
