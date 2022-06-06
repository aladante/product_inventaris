FROM postgres:13.7

ARG PG_POSTGRES_PWD=postgres
ARG DBUSER=postgres
ARG DBUSER_PWD=postgres
ARG DBNAME=vaccinatiepunt
ARG DB_DUMP_FILE=example.pg

ENV POSTGRES_DB vaccinatiepunt

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD ${PG_POSTGRES_PWD}
ENV PGDATA /pgdata

COPY ./docker-entrypoint-initdb.d/ /docker-entrypoint-initdb.d/
