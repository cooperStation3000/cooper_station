#!/bin/sh
echo 'install ...'
npm i
echo 'vue building...';
vue-cli-service build;
echo 'ziping ...'
tar -cvf  release.tar.gz ./dist


