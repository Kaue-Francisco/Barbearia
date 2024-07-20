# Barbearia
Aplicação Web para fazer agendamento em uma barbearia.

# Execução
``` bash
# Primeiramente este projeto esta sendo utilizado para o front react e para o back node com Ts.

# Ao clonar o repostiório entre na pasta do front e de um npm install.

# Para executar o frontend basta rodar:
npm start

# Agora para o backend você precisa ter o  mysql instalado em seu computador e em execução.

# É necessário dar npm install também dentro da pasta backend e na pasta prisma existe um arquivo aonde tem uma linha que é a configuração para a conexão com o banco de dados.

datasource db {
  provider = "mysql"
  url      = "mysql://root:@localhost:3306/barbearia"
}

# root - nome de usuário do mysql
# Logo após o : antes do @. Você deve colocar sua senha do mysql, no meu caso não tenho senha então deixei vazio.


# Agora para rodar o backend basta rodar:
npm run dev
```