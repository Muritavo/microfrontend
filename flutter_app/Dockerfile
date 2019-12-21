FROM cirrusci/flutter:beta-web as build
WORKDIR /build
COPY ./ /build
RUN sudo chown -R cirrus:cirrus /build
RUN flutter config --enable-web
RUN flutter build web

FROM nginx
COPY --from=build /build/build/web /usr/share/nginx/html