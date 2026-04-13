[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/fake-data-br/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/fake-data-br/actions)
[![License](https://img.shields.io/github/license/Tox1469/fake-data-br?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/fake-data-br?style=flat-square)](https://github.com/Tox1469/fake-data-br/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/fake-data-br?style=flat-square)](https://github.com/Tox1469/fake-data-br/stargazers)

---

# fake-data-br

Gera dados brasileiros falsos para testes: nomes, CPF, CNPJ, telefones, CEP e enderecos.

## Instalacao

```bash
npm install fake-data-br
```

## Uso

```ts
import { nomeCompleto, cpf, cnpj, telefone, endereco } from "fake-data-br";

console.log(nomeCompleto());
console.log(cpf());
console.log(cnpj());
console.log(telefone());
console.log(endereco());
```

## API

- `nome()`, `sobrenome()`, `nomeCompleto()`
- `cpf(formatted?)` CPF valido (digitos verificadores corretos)
- `cnpj(formatted?)` CNPJ valido
- `telefone()`, `cep()`, `email()`
- `endereco()` objeto com rua, numero, bairro, cidade, uf, cep

## Licenca

MIT (c) 2026 Tox