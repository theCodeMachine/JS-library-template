#!/bin/bash

# Setting .npmrc
cat > ~/.npmrc <<EOL
# user=$NEXUS_RM_USERNAME
# _auth=$NPM_TOKEN
# always-auth=true
# registry=https://domain/repository/npm-group/
# //domain/repository/npm-group/:_authToken=$NPM_TOKEN
EOL

cat ~/.npmrc
