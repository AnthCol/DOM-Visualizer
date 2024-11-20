#!/bin/bash

runProfile="run"
testProfile="test"


if [[ "$1" == "--test" ]]; then
    docker compose --profile $testProfile up --build
elif [[ "$1" == "--down" ]]; then
    docker compose --profile $testProfile down
    docker compose --profile $runProfile down
else
    docker compose --profile $runProfile up --build
fi


