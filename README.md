cadastroDeUsuarios.

#Projetinho: Armazenamento de Dados de Usuários com Banco de Dados
Este projeto consiste em um sistema simples para cadastro, armazenamento e gerenciamento de informações de usuários, utilizando um banco de dados para persistência dos dados. A aplicação foi desenvolvida com foco na separação clara entre o back-end e o front-end, proporcionando uma arquitetura escalável e organizada.#

Funcionalidades
Cadastro de usuários com campos de nome, idade e e-mail.
Listagem de todos os usuários cadastrados.
Edição de informações de usuários existentes.
Exclusão de usuários do sistema.
Persistência de dados em um banco de dados utilizando o Prisma (ORM) e MongoDB.
Tecnologias Utilizadas
Back-end:
Node.js: Plataforma de desenvolvimento para o servidor.
Express: Framework web para criar as APIs REST.
Prisma: ORM para interação com o banco de dados.
MongoDB: Banco de dados NoSQL para armazenar as informações dos usuários.
Front-end:
React: Biblioteca para construção da interface de usuário.
Axios: Biblioteca para fazer as requisições HTTP entre o front-end e o back-end.
Vite: Ferramenta de build e servidor de desenvolvimento rápido para o front-end.
Estrutura do Projeto
bash
Copiar código
/meu-projeto
│
├── /back-end
│   ├── node_modules
│   ├── package.json
│   ├── prisma/
│   ├── src/
│   └── ...
│
├── /front-end
│   ├── node_modules
│   ├── package.json
│   ├── src/
│   └── public/
│
├── .gitignore
└── README.md
Como Executar o Projeto
1. Clonar o Repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
cd meu-projeto
2. Configurar o Back-end:
Navegue até a pasta do back-end:

bash
Copiar código
cd back-end
Instale as dependências:

bash
Copiar código
npm install
Configure o Prisma e o banco de dados MongoDB no arquivo .env.

Execute as migrações do banco de dados (se necessário):

bash
Copiar código
npx prisma migrate dev
Inicie o servidor do back-end:

bash
Copiar código
npm run dev
3. Configurar o Front-end:
Navegue até a pasta do front-end:

bash
Copiar código
cd ../front-end
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento do front-end:

bash
Copiar código
npm run dev
4. Acessar a Aplicação:
A aplicação estará disponível em http://localhost:3000 (ou outra porta configurada no Vite).
Contribuições
