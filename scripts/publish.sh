#!/bin/bash

yarn build
cd dist || exit
npm publish
