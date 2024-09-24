## Proposta: Criar um novo projeto usando clean architecture e TypeScript

Esta é uma API que servirá para o gerenciamento de pagamentos, permitindo a:
criação;
listagem;
atualização;
deleção de registros de pagamentos.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript


Para a criação do projeto, primeiro precisei fazer a configuração do meu ambiente de execução instalando algumas fremework que ajudam a tornar o meu projeto confiável, escalável, dinâmico e de fácil execução. NSendo assim, tive de seguir os seguintes passos:

1-Criei uma pasta para o meu projeto no meu github com o nome: Projeto-pagamento-online, uma vez que o projeto irá se referir a realização de pagamentos onlines. Apois a criação da pasta, fiz o clone para o meu vs code afim de começar a execução. Usando os comandos:

git clone (link do repositório)
cd nome da pasta (para entrar na pasta do projeto)
code . (para abrir a pasta no vs Code)

# Começando a configuração do projeto

1- Apois a criação da pasta e chamar ela no terminal, inicializei o projeto com o comando

```
npm init -y 

```
Este comando tem a função de criar ou inicializar o projeto trazendo nele uma estrutura de arquivos json, que acopla várias dependecias a serem usadas no projeto.

3- Instalar o globalmente o Typescript, uma vez instalada poderei sempra criar projetos sem o instalar novamente, para isso, usei o comando:

```
npm install -g typescript

```
4- instalar o express

```
npm install express
```
O express tem a função de trazer para o projeto um pacote chamado package.lock.json, que tras algumas ou várias depencias.

5- instalação do typescript, e os tipos afim de evitar buggs na execução do projeto

```
npm install typescript ts-node-dev @types/node @types/express

```

6- iniciar o ts-config através do comando

`´`
npx tsc --init
`´`

7- Alteração do script com no package.json para nos permitir rodar o typescript
 "scripts": {
    "start": "ts-node-dev --respawn src/interface/index.ts",
    "test": "jest"
  },

Durante as ulas, vimos tambem que podemos adicionar a funcionalidade que nos permit testar a nossa aplicação, conforme no scripr acima, consta o comando para rodar ele no terminar usando o jest. Para instalação do jeste, usou-se:

1- instalar o jest com o comando

```
npm install jest ts-jest @types/jest
```
2- instalar o supertest

```
npm install supertest @types/supertest

```
3- inicializar o jest config através do comando:

```
npx ts-jest config:init

```


E por fim, chamar ele no script do arquivo pachage.json

"test": "jest"

**Assim finalizou-se a coonfiguração do meu ambiente para a criação do projeto typescript com clean architecture.**

# Aplicando os principios de DDD, POO, SOLID e Clean Architecture:

### Para começar a colocar a mão na massa e criar o código na minha aplicação, precisei criar 4 pastas que em clean architecture são comsideradas de camadas, são elas:

//application - repositories(paymentRepository.ts, id-generateInterface.ts)

//domain - payment.ts É a parte em que não devo alterar no meu código, constam nele os paramêtros que devo seguir na aplicação.

//infrastructure - database(repositoy.ts)
                - utils(config.ts)

//interface - index.ts e paymentController.ts



-Método:** `POST`
-Endpoint:** `/payments`
-Body:**
-json
{
    "name": "Nome do Pagamento",
    "description": "Descrição do Pagamento",
    "value": 100.0
}

# Testando no insominia para os obter os seguintes resultados:
{
    "name": "Nome do Pagamento",
    "description": "Descrição do Pagamento",
    "value": 100.0
}


Realizei uma requisição POST para /payments com o corpo especificado. A resposta foi 201 Created, confirmando que o pagamento foi criado com sucesso;

![Criar](https://github.com/user-attachments/assets/7a2f141f-71d8-4e33-b681-3da8c1b66efc)


Listar Pagamentos:

Uma requisição GET para /payments retornou uma lista de pagamentos em formato JSON, com status 200 OK.
Atualizar Pagamento:

![Listar](https://github.com/user-attachments/assets/1f8a2498-29b3-4543-b788-6b46307d88ee)

Executei um PATCH em /payments/:id (substituindo :id pelo ID de um pagamento existente) e recebi uma confirmação de que o pagamento foi alterado;

![Atualizar](https://github.com/user-attachments/assets/85e59f76-a8fe-43d4-9f12-cd90ea8bf654)

Deletar Pagamento:

Com uma requisição DELETE para /payments/:id, o pagamento foi removido com sucesso, recebendo a resposta 200 OK.

![Deletar](https://github.com/user-attachments/assets/5efa18cc-2bb8-48e6-a60f-e5a30edb9123)

# Resumo:

Durante a semana, aprendi sobre a importancia de implementar a clean architecture nos projetos para fim de faciliar na elaboração de projetos maiores uma vez que o projeto adquire uma característica de fácil a ser ajustado e em momentos de muita demanda a divisão das tarefas serão bem mais distribuidas e podemos fazer alteração no proeto sem danificar a aplicação e isso ajuda bastante as empresas na hora no momento da manutenção, elaboração e implementação ou surgimento de novas demandas. Sendo assim, esse método é recomendável, pois permite-nos guiarmos no projeto de forma a conhecermos cada implementação a ser feita.

O mesmo se aplica a POO, DDD e SOLID, elas trazem no projeto esse mesmo pensamento de organização do softwere, impelementando novas instancias e objetos no código afim de garantir a modularidade, reusabilidade e organização de código como é o caso do POO.
