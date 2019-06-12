#!/bin/bash

unset IFS
for var in $(compgen -e); do
    sed -i -- "s|<<$var>>|${!var}|g" $*
done
