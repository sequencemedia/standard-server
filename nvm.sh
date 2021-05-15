#!/bin/bash

NVM=~/.nvm

if [ -f "$NVM/nvm.sh" ];
then
  unset npm_package_scripts_nvm
  unset npm_config_prefix
  unset npm_lifecycle_script

  source $NVM/nvm.sh
else
  NVM=$(brew --prefix nvm)
  if [ -f "$NVM/nvm.sh" ];
  then
    unset npm_package_scripts_nvm
    unset npm_config_prefix
    unset npm_lifecycle_script

    source $NVM/nvm.sh
  fi
fi

VERSION=$(nvm --version)

if [ -z "$VERSION" ];
then
  echo NVM not available
else
  echo NVM version $VERSION available

  set -e

  nvm use

  if [[ $? != 0 ]];
  then
    echo NVM not configured
  else
    echo NVM configured
  fi
fi
