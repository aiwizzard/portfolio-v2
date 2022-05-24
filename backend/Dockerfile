FROM python:3.9-alpine3.13
LABEL maintainer="ajmalk.com"


ENV PYTHONUNBUFFERED 1
COPY ./requirements.txt /requirements.txt
COPY ./scripts /scripts

WORKDIR /app

EXPOSE 8000

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \   
    #--virtual .tmp-deps
    apk add --update --upgrade --no-cache \
        gcc freetype-dev linux-headers \
        musl-dev jpeg-dev zlib-dev libffi-dev cairo-dev \
        pango-dev gdk-pixbuf-dev && \
    /py/bin/pip install -r /requirements.txt && \
    # apk del .tmp-deps && \
    adduser --disabled-password --no-create-home app && \
    mkdir -p /vol/web/static && \
    mkdir -p /vol/web/media && \
    chown -R app:app /vol && \
    chmod -R 755 /vol && \
    chmod -R +x /scripts

COPY ./app /app

ENV PATH="/scripts:/py/bin:$PATH"

USER app

CMD ["run.sh"]