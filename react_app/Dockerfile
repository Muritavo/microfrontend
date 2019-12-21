FROM node:12.2.0-alpine as build
WORKDIR /tmp
COPY ./package.json /tmp/package.json
RUN npm install
COPY . /tmp
RUN npm run build

FROM nginx
COPY --from=build /tmp/build /usr/share/nginx/html