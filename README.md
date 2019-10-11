## Setting up database

- Install and start PostgreSQL:
  - `brew install postgresql`
  - `brew services start postgresql`

- Login to postgres:
  - `psql postgres`

- Create a user and password, and give the user access to create database:
  - `CREATE ROLE labber WITH LOGIN PASSWORD 'labber';`
  - `ALTER ROLE labber CREATEDB;`

- Log out of the root user and log in to the newly created user:
  - `\q`
  - `psql -d postgres -U labber`

- Create a test database and connect to it:
  - `CREATE DATABASE test;`
  - `\c test`

## Getting started

  - Install all dependencies (using the `npm install` command)
  - Run `npm run db:reset` to create table and populate the table with seeds
  - Run `npm run start` and go to http://localhost:8080/