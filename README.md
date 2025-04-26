# @adonitech/sample-github-package

Um pacote de exemplo para demonstração de publicação no GitHub Packages.

## Instalação

Este pacote pode ser instalado usando npm ou yarn:

```bash
# Instalação com npm
npm install @adonitech/sample-github-package

# Instalação com yarn
yarn add @adonitech/sample-github-package
```

## Uso

Este pacote fornece funções utilitárias que podem ser importadas e usadas em seu projeto:

```javascript
// Importando o pacote
const utils = require('@adonitech/sample-github-package');

// Usando as funções
const resultado = utils.soma(5, 3);
console.log(resultado); // 8

const valorFormatado = utils.formataMoedaBR(1234.56);
console.log(valorFormatado); // R$ 1.234,56

const cpfValido = utils.validaCPF('123.456.789-09');
console.log(cpfValido); // false ou true, dependendo se o CPF é válido

const telefoneValido = utils.validaTelefoneBR('(11) 98765-4321');
console.log(telefoneValido); // true
```

## Funções disponíveis

- `soma(a, b)`: Soma dois números
- `subtrai(a, b)`: Subtrai o segundo número do primeiro
- `formataMoedaBR(valor)`: Formata um valor numérico para o formato de moeda brasileira
- `validaCPF(cpf)`: Valida se uma string é um CPF válido
- `validaCNPJ(cnpj)`: Valida se uma string é um CNPJ válido
- `validaTelefoneBR(telefone)`: Valida se uma string é um número de telefone brasileiro válido

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit de suas alterações (`git commit -am 'Adiciona nova funcionalidade'`)
4. Envie para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

ISC