@echo off
:: This script assumes that the necessary commands (npm, git) are available in the system environment path.

:: Execute npm command to build docs
npm run docs:build

:: Change directory to the docs build output
cd docs\.vitepress\dist

:: Initialize a new git repository
git init

:: Stage all files for commit
git add -A

:: Commit the changes
git commit -m "deploy"

:: Checkout main branch
git checkout -b main

:: Push the changes to GitHub repository
git push -f git@github.com:gongqx/gongyuanpark.git main:gh-pages

:: Return to the previous directory
cd ..