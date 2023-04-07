<h1 align='center'> Nest Rest Api</h1>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

<p align="center">
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</p>

- [📑 About the project](#-about)
- [📖 Documentation](#-documentation)
- [📥 Package manager](#-packages)
- [🚀 Starting](#-starting)

## 📑 About
The code was developed using TypeScript and the Node framework [Nest](https://github.com/nestjs/nest). For accessing and manipulating the database, Prisma was used. For authentication/login, JSON Web Tokens (JWT) and Passport were used. Finally, for the documentation, Prisma ERD was used.

## 📖 Documentation

- [[Project] - Class diagram](./DOCS/diagram.png)

- [[Project] - Entity relationship diagram](./DOCS/ERD.png)

# 📥 Packages
The project was developed using NPM, but you can use any of the following package managers:
- Yarn
- PNPM
- NPM

## 🚀 Starting

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```
### Databse
```bash
# restart database
$ db:dev:restart

# prisma deploy
$ prisma:dev:deploy

```


### Test

```bash
# e2e tests
$ npm run test:e2e
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
## License

This project is under the [MIT license](LICENSE).
