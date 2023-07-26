# Back-end da aplicação de sistema de imoveis

Desenvolvimento da parte Back-end ( NodeJs ) de um sistema de imóveis com cadastro de usuário, sessions e cadastro de imóveis com imagens. 


## Tecnologias utilizadas

##### - NODEJS
Para iniciar o projeto:
```bash
     npm init
```
Para "rodar" o servidor devidamente configurado com o nome de dev
```bash
     npm run dev
```

##### - EXPRESS
Para o gerenciamento de requisiçoes HTTP (GET, POST, PUT, PATCH, DELETE)
```bash
     npm install express
```

##### - NODEMON
Para contribuir com o desenvolvimento monitorando mudanças nos arquivos reiniciando o servidor NODE.js quando necessário
```bash
     npm install --save-dev nodemon
```

##### - SUCRASE
Um auxiliador transpilador de código para ajudar no desenvolvimento
```bash
     npm install --save-dev sucrase
```

##### - PRISMA
Ferramenta de ORM (mapeamento objeto-relacional) para auxiliar no desenvolvimento do uso de banco de dados
Para instalação:
```bash
     npm install prisma --save-dev
     npm install @prisma/client
```
Para criação de arquivos iniciais/essenciais:
```bash
     npx prisma init
```
Para migrações:
```bash
     npx prisma migrate dev
     npx prisma migrate reset
```

##### - BCRYPT
Para trabalhar com criptografia
```bash
     npm install bcrypt
 ```

##### - INSOMNIA
Para fazer os testes de rotas/endpoints com protocolos HTTP

##### - JWT
Para utilização de token na autenticação de sessão de usuário
```bash
     npm install jsonwebtoken
```

##### - MULTER
Para trabalhar com upload de imagens no banco de dados
```bash
     npm install --save multer
```

##### - MYSQL
Banco de dados utilizado