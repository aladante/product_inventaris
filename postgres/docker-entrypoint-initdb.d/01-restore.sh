#!/bin/bash

file="/docker-entrypoint-initdb.d/dump.sql"

echo "Restoring DB using $file"
# psql -U postgres < "$file";
