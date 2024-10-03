## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Desciption

Api desarrollada con funcionalidad de la creacion de un super usuario en cuanto levante el servidor, asegurando siempre que no exista alguno.
Autenticacíon realizada con estrategia de JWT con la libreria passport.js
Arquitectura modular, basada en modulos(Autenticacion, publicaciones,usuario y producto)
La conexion con la base de datos se realiza mediante TypeOrm
Las contrasennas de cada usuario se encriptan antes de ser guardadas para cumplir con los requisitos de seguridad que plantea el MININT
