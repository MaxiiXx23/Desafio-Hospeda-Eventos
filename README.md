### Desafio Técnico - Hospeda Eventos - 2023
### ***Desafio Hospeda Eventos***

<img src="./assets/IconeHospeda.svg" alt="ícone" title="ícone Hospeda Eventos" width="600px" height="300">

#### Sobre o desafio:
 * O desafio consiste em cria uma API RESTful com Node.js capaz de realizar um CRUD, além de integrar a API desenvolvida ao Front-end em React, utilizando Typescript tanto no Back-end quanto no Front-end.


### Principais tecnologias usadas no desenvolvimento:

* TypeScript
* Vite
* Axios
* Express
* Prisma
* Docker

### Bibliotecas em destaque:

* Zod
* react-hook-form
* Dayjs
* Styled-components
* Radix

### Design seguido:

<a href="https://www.figma.com/file/L62JBZt5wnyzZQEgUw1FOC/Prova-Tecnica---Hospeda-Eventos?type=design&node-id=0-1&mode=design&t=atIsqyYxlMdg26E8-0" aria-label="Link Design Figma" target="_blank">
<img src="https://img.shields.io/badge/Figma-f87171?style=for-the-badge&logo=figma&logoColor=white" alt="Design Figma" align="center" />
</a>

### Decições tomadas para o desafio:

- Com o projeto/desafio construído totalmento com Typescript, decidi usar as melhores tecnologias atuais para o ecossistema React e Node. Aqui destaco duas bibliotecas de suma importância para um desenvolvimento ágil, sendo elas:

* Zod: Biblioteca excelente para validação tanto no Front-end quanto no Back-end, possui validações nativas e flexibilidade para validações customizadas, além de ter uma grande compatibilidade com o Typescript, como por exemplo inferências de tipos.

* Prisma: um Typescript ORM que possui grande compatibilidade com diversos Banco de Dados, como por exemplo MySQL, PostgreSQL, entre outros. O que se destaca nele são as migrations automatizadas e models intuítivos.

### Link vídeo do projeto no Youtube:

<a href="https://youtu.be/StgjOfTgqFM" aria-label="Link Design Figma" target="_blank">
<img src="https://img.shields.io/badge/Youtube-b91c1c?style=for-the-badge&logo=youtube&logoColor=white" alt="Design Figma" align="center" />
</a>

### Portas da aplicação:

- ***Front-end*** está rodando em: http://localhost:5173
- ***Back-end*** está rodando em: http://localhost:3000

### Configuração API:

1. Entre na pasta API;
2. Use o comando: ***yarn*** ou ***npm install/i*** para instalar os pacotes;
3. Use os seguintes comandos para configurar o ambiente Docker com Prisma:

    1. use o comando: ***docker compose up*** na pasta root da API;
    2. use o comando(script): ***npm run migrate-dev***
    3. use o comando: ***npm run dev*** para rodar a aplicação backend;
    4. Seguindo esses comandos a API estará rodando em: http://localhost:3000

### Observação:

- Arquivo ***.env*** e ***docker-compose.yml*** estão com variáveis expostas no repositório para SOMENTE facilitar a configuração do projeto. É de suma importância para a segurança do projeto que variáveis de ambientes não estejam 'commitadas', ou seja, expostas.


### Passo-a-passo para rodar a aplicação:

1. Entre na pasta Desafio-Hospeda-Eventos;
2. Use o comando: ***yarn*** ou ***npm install/i*** para instalar os pacotes(Back-end e Front-end);

3. use o comando para rodas ambas aplicações:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
