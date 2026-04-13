const NOMES = ["Ana", "Bruno", "Carla", "Diego", "Eduarda", "Felipe", "Gabriela", "Henrique", "Isabela", "João", "Karina", "Lucas", "Marina", "Natália", "Otávio", "Patrícia", "Rafael", "Sofia", "Thiago", "Vanessa"];
const SOBRENOMES = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira", "Lima", "Gomes", "Costa", "Ribeiro", "Martins", "Carvalho", "Almeida"];
const RUAS = ["Rua das Flores", "Avenida Brasil", "Rua XV de Novembro", "Avenida Paulista", "Rua da Praia", "Rua do Comércio", "Avenida Atlântica", "Rua São João"];
const CIDADES = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre", "Curitiba", "Salvador", "Recife", "Fortaleza", "Manaus", "Brasília"];
const UFS = ["SP", "RJ", "MG", "RS", "PR", "BA", "PE", "CE", "AM", "DF"];

function rand(max: number) {
  return Math.floor(Math.random() * max);
}

export function nome(): string {
  return NOMES[rand(NOMES.length)];
}

export function sobrenome(): string {
  return SOBRENOMES[rand(SOBRENOMES.length)];
}

export function nomeCompleto(): string {
  return `${nome()} ${sobrenome()} ${sobrenome()}`;
}

export function cpf(formatted = true): string {
  const n: number[] = Array.from({ length: 9 }, () => rand(10));
  const d1 = calcDigit(n, 10);
  const d2 = calcDigit([...n, d1], 11);
  const all = [...n, d1, d2].join("");
  return formatted ? `${all.slice(0, 3)}.${all.slice(3, 6)}.${all.slice(6, 9)}-${all.slice(9)}` : all;
}

function calcDigit(nums: number[], start: number): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i] * (start - i);
  const r = (sum * 10) % 11;
  return r === 10 ? 0 : r;
}

export function cnpj(formatted = true): string {
  const base = Array.from({ length: 12 }, () => rand(10));
  const w1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const w2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const d = (nums: number[], w: number[]) => {
    const s = nums.reduce((a, v, i) => a + v * w[i], 0);
    const r = s % 11;
    return r < 2 ? 0 : 11 - r;
  };
  const d1 = d(base, w1);
  const d2 = d([...base, d1], w2);
  const all = [...base, d1, d2].join("");
  return formatted ? `${all.slice(0, 2)}.${all.slice(2, 5)}.${all.slice(5, 8)}/${all.slice(8, 12)}-${all.slice(12)}` : all;
}

export function telefone(): string {
  const ddd = 11 + rand(88);
  const n = Array.from({ length: 9 }, () => rand(10)).join("");
  return `(${ddd}) 9${n.slice(0, 4)}-${n.slice(4, 8)}`;
}

export function cep(): string {
  const n = Array.from({ length: 8 }, () => rand(10)).join("");
  return `${n.slice(0, 5)}-${n.slice(5)}`;
}

export function endereco() {
  const i = rand(CIDADES.length);
  return {
    rua: RUAS[rand(RUAS.length)],
    numero: String(rand(9999) + 1),
    bairro: "Centro",
    cidade: CIDADES[i],
    uf: UFS[i % UFS.length],
    cep: cep(),
  };
}

export function email(): string {
  const n = nome().toLowerCase();
  const s = sobrenome().toLowerCase();
  return `${n}.${s}${rand(999)}@exemplo.com.br`;
}
