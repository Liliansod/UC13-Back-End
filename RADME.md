## API de Carros - WebAPI

Está é uma API RESTful desenvolvida para gerenciamento de informações de carros, utilizando **Node.js** e **Express**.
A API permite criar, lerm atualizar e excluiir carros, com validação dos dados utilizando a biblioteca **Joi**.

Este é um projeto inicial de CRUD (Create, Read, Update, Delete), que será expandido no futuro. Este é apenas o escopo inicial.

## Funcionalidades 

- **GET /**: retorna a lista completa de carros;
- **GET /:singla**: Retorna a informação de um carro expecífico, indentificando pela sigla;
- **POST /**: Adiciona um novo carro na lista;
- **PUT /:sigla**: Atualiza as informações de um carro expecífico, indentificado pela sigla;
-**DELETE /:sigla**: Remove um carro expecífico pela sigla.

## Estrutura do Projeto

- **app.js**: Arquivo principal que configura o servidor Express e as rotas da API.
- **tabelacarros.js**: Contém a lista de carros (dados fictícios).
- **Validacao.js**: Contém as validações Joi para os dados dos carros.

## Endpoints

### 1. **GET /**

Retorna a lista complesta de carros disponíveis.

#### Exemplo de Resposta:

```json
[
 {
    "nome": "Ferrari",
    "sigla": "FER",
    "velocidadeMaxima": 340,
    "potencia":800,
    "Consumo": 5.5,
    "preco": 300000,
 },
]