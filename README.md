# Desafio TodoList

Este projeto é uma aplicação de lista de tarefas desenvolvida com Node.js no backend e React no frontend. Utiliza Tailwind CSS para o estilo, Shadcn para componentes adicionais e MySQL para o banco de dados.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Instalação

### 1. Clonar o Repositório

Clone o repositório do projeto:

git clone https://github.com/seu-usuario/todolist.git
cd todolist
###2. Instalar Node.js
Para instalar o Node.js, siga as instruções para seu sistema operacional:

Windows/MacOS/Linux: Baixe o instalador do site oficial do Node.js e siga as instruções.
Verifique a instalação:

node -v
npm -v

### 3. Configurar o Backend (Node.js)
Instalar Dependências do Backend

Navegue até a pasta do backend e instale as dependências:

cd api
npm install
Configurar o Banco de Dados MySQL

Crie um banco de dados MySQL e configure as credenciais no arquivo .env:

PORT=3000
DB_HOST=localhost 
DB_USER=root 
DB_PASSWORD=acess12345
DB_NAME=databaseApi

Crie as tabelas necessárias no banco de dados (arquivo init,sql):


npm start
O servidor deve estar rodando em http://localhost:3000.

### 4. Configurar o Frontend (React)
Instalar Dependências do Frontend

Navegue até a pasta do frontend e instale as dependências:

cd ../frontend
npm install
Instalar Tailwind CSS

Configure o Tailwind CSS:

npx tailwindcss init
Edite o arquivo tailwind.config.js para incluir os paths do seu projeto:

javascript
Copy code
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Adicione o Tailwind CSS aos seus estilos no src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
Instalar Shadcn

Para instalar e configurar o Shadcn, siga as instruções no documento oficial.

 ### Iniciar o Servidor Frontend

Inicie o servidor React:

npm start
O frontend deve estar rodando em http://localhost:3001.

### Uso
Aqui estão as rotas da API disponíveis para a aplicação:

Obter Todos os Membros

Endpoint: GET /api/members
Descrição: Recupera a lista de todos os membros.
Obter um Membro por ID

Endpoint: GET /api/getMember/:id
Descrição: Recupera detalhes de um membro específico pelo ID.
Registrar um Novo Membro

Endpoint: POST /api/registerMember
Descrição: Registra um novo membro.
Obter uma Tarefa por ID

Endpoint: GET /api/getTask/:id
Descrição: Recupera detalhes de uma tarefa específica pelo ID.
Atualizar uma Tarefa por ID

Endpoint: PUT /api/updateTask/:id
Descrição: Atualiza uma tarefa existente pelo ID.
Obter Todas as Tarefas

Endpoint: GET /api/getAllTasks
Descrição: Recupera a lista de todas as tarefas.
Excluir uma Tarefa por ID

Endpoint: DELETE /api/deleteTask/:id
Descrição: Exclui uma tarefa existente pelo ID.
Criar uma Nova Tarefa

Endpoint: POST /api/createTask
Descrição: Cria uma nova tarefa.
