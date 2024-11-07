#!/bin/bash

runProfile="run"
testProfile="test"

docker compose down

if [[ "$1" == "--test" ]]; then
    docker compose --profile $testProfile up --build
else
    docker compose --profile $runProfile up --build
fi


