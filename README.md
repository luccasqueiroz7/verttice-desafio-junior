# Desafio Verttice

Este repositório contém cinco desafios em JavaScript que são utilizados como parte do processo de seleção de candidatos a desenvolvedor(a) júnior.

# Instruções de configuração:

1. Faça o clone da aplicação no seu computador:

```bash
git clone https://github.com/luccasqueiroz7/verttice-desafio-junior.git
```

2. Abra o terminal da pasta da aplicação e instale as dependências:

```bash
yarn
```

2. Inicie a aplicação:

```bash
yarn start
```

# Desafios:

## Desafio 1

Escreva uma função que receba uma string e retorne a contagem de cada caractere nessa string. Por exemplo, para a string "hello world", a função deve retornar um objeto que mapeia cada caractere ao seu número de ocorrências:

```js
{
  "h": 1,
  "e": 1,
  "l": 3,
  "o": 2,
  "w": 1,
  "r": 1,
  "d": 1
}
```

Você pode assumir que a entrada consiste apenas de caracteres alfanuméricos (ou seja, letras e números) e espaços em branco.

## Desafio 2

Você precisa implementar uma função que recebe uma lista de objetos com informações de um filme e retorna o valor total do orçamento de todos os filmes que tiveram uma classificação maior ou igual a 7.0.

A lista de filmes tem o seguinte formato:

```js
const filmes = [
  {
    titulo: "The Godfather",
    classificacao: 9.2,
    orcamento: 6000000,
  },
  {
    titulo: "The Shawshank Redemption",
    classificacao: 9.3,
    orcamento: 25000000,
  },
  {
    titulo: "The Dark Knight",
    classificacao: 9.0,
    orcamento: 185000000,
  },
  {
    titulo: "Pulp Fiction",
    classificacao: 8.9,
    orcamento: 8000000,
  },
  {
    titulo: "The Lord of the Rings: The Return of the King",
    classificacao: 8.9,
    orcamento: 94000000,
  },
  {
    titulo: "The Good, the Bad and the Ugly",
    classificacao: 8.8,
    orcamento: 1200000,
  },
];
```

A função deve retornar o valor total do orçamento dos filmes que tiveram uma classificação maior ou igual a 7.0.

## Desafio 3

Você precisa implementar uma função que recebe um array de números inteiros e retorna o maior produto possível entre dois números nesse array.

Por exemplo, para o array [10, 3, 5, 6, 20], a função deve retornar o valor 200 (que é o produto entre os números 10 e 20, que são os maiores números do array).

A função deve suportar arrays de qualquer tamanho (incluindo arrays vazios e com apenas um elemento), e deve ser eficiente em termos de tempo de execução e uso de memória.

## Desafio 4: Lista de Tarefas

Crie uma página web responsiva que apresente uma lista de tarefas a fazer, com a possibilidade de adicionar e remover itens da lista. Você deve implementar a página usando JavaScript, HTML e CSS.

Requisitos:

- A página deve ter uma lista de tarefas, com a possibilidade de adicionar novas tarefas e remover tarefas existentes.
- Cada tarefa deve ter um checkbox que permite marcar a tarefa como concluída ou não.
- As tarefas concluídas devem ser exibidas em uma cor diferente.
- A página deve ser responsiva, funcionando bem em dispositivos móveis e desktops.
- O uso de frameworks e bibliotecas é permitido, mas não é obrigatório.

## Desafio 5: Calculadora Web

Crie uma aplicação web que simule uma calculadora. A aplicação deve ser responsiva e utilizar JavaScript, HTML e CSS.

Requisitos:

- A aplicação deve ter uma interface com um display para exibir o resultado das operações.
- A aplicação deve permitir a realização de operações básicas de matemática, como adição, subtração, multiplicação e divisão.
- A aplicação deve permitir a entrada dos valores através de botões.
- A aplicação deve permitir a entrada dos valores através do teclado.
- A aplicação deve permitir a limpeza do display.
- A aplicação deve permitir a utilização do último resultado como o primeiro valor da próxima operação.
- A aplicação deve ser responsiva, funcionando bem em dispositivos móveis e desktops.
- O uso de frameworks e bibliotecas é permitido, mas não é obrigatório.
