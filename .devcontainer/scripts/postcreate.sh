#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

npm -g install npm-check-updates

npm install

if [ -f $SCRIPT_DIR/postcreate.own.sh ]; then
    $SCRIPT_DIR/postcreate.own.sh
fi