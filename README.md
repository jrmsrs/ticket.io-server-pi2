###### <p align="center">[UNIRIO-BSI | Projeto Integrador II (PI2) 2024.1](https://github.com/Projeto-e-Construcao-de-Sistemas-2022-2)</p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/jrmsrs/ticket.io-server-pi2/main/logo-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/jrmsrs/ticket.io-server-pi2/main/logo-light.png">
  <img alt="logo" src="https://raw.githubusercontent.com/jrmsrs/ticket.io-server-pi2/main/logo-light.png" style="width:100%">
</picture>

<div align="center">

###  **Repositório Backend 🖥️** | [Repositório Frontend 💻](https://github.com/jrmsrs/ticket.io-client-pi2)

</div>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Aplicação web com soluções de gerenciamento de problemas voltados para desenvolvedores divididos em grupos solucionadores. Backend contruído usando [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## 📚 Docs 

### Requisições HTTP

#### Usuários
- Obter usuários:  
(get) `/user`
- Obter usuário por ID:  
(get) `/user/UUID`
- Obter usuário por e-mail:  
(get) `/user?email=EMAIL`
- Cadastrar usuário  
(post) `/user`
- Alterar usuário  
(patch) `/user/UUID`
- Remover usuário  
(delete) `/user/UUID`

#### Grupos solucionadores
- Obter grupos solucionadores  
(get) `/group`
- Obter grupo solucionador  
(get) `/group/UUID`
- Obter membros de um grupo solucionador  
(get) `/group/UUID?members=true`
- Cadastrar grupo solucionador  
(post) `/group`
- Alterar grupo solucionador  
(patch) `/group/UUID`
- Remover grupo solucionador  
(delete) `/group/UUID`

#### Tickets de Problema
- Obter TPs  
(get) `/issue`
- Obter TP  
(get) `/issue/UUID`
- Cadastrar TP  
(post) `/issue`
- Alterar TP  
(patch) `/issue/UUID`
- Remover TP  
(delete) `/issue/UUID`

#### Soluções
- Obter Soluções  
(get) `/solution`
- Obter Solução  
(get) `/solution/UUID`
- Cadastrar Solução  
(post) `/solution`
- Alterar Solução  
(patch) `/solution/UUID`
- Remover Solução  
(delete) `/solution/UUID`

#### Relatórios gerenciais
- Obter relatório mais recente  
(get) `/report`
- Cadastrar relatório  
(post) `/report`

## ❓ Guia

### Installation

```bash
pnpm install
```

### Running the app

Start app
```
pnpm run start
```

Start dev server
```
pnpm run start:dev
```

Start prod server
```
pnpm run start:prod
```

### Test

Tests
```
pnpm run test
```

E2E Tests
```
pnpm run test:e2e
```

Test Coverage
```
pnpm run test:cov
```

## License

[MIT licensed](LICENSE).
