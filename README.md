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
