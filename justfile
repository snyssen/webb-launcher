default:
  @ just --list

setup:
  @ just setup-pre-commit
  @ just setup-npm

setup-pre-commit:
  pre-commit install

setup-npm:
  npm install

dev:
  npm run dev
