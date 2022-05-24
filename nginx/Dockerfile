FROM nginxinc/nginx-unprivileged:1-alpine
LABEL maintainer="ajmalk.com"

COPY ./default.conf.tpl /etc/nginx/default.conf.tpl
COPY ./certs /etc/nginx/certs/
COPY ./run.sh /run.sh

ENV LISTEN_PORT=8000
ENV APP_HOST=app
ENV APP_PORT=9000

USER root

RUN mkdir -p /vol/static && \
    chmod 755 /vol/static && \
    mkdir -p /vol/web/media && \
    chmod 755 /vol/web/media && \
    touch /etc/nginx/conf.d/default.conf && \
    chown nginx:nginx /etc/nginx/conf.d/default.conf && \
    chown nginx:nginx /etc/nginx/certs/privkey.pem && \
    chown nginx:nginx /etc/nginx/certs/fullchain.pem && \
    chmod +x /run.sh

VOLUME /vol/static

USER nginx

CMD ["/run.sh"]