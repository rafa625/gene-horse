# gene-horse

Este projeto é uma **prova de conceito (PoC)** para visualização de árvore genealógica de cavalos, utilizando [Next.js](https://nextjs.org) e a biblioteca [`@balkangraph/familytree.js`](https://balkangraph.com/OrgChartJS/Docs/FamilyTree).

## Objetivo

Demonstrar como montar, exibir e manipular árvores genealógicas de cavalos, incluindo informações como nome, pais, habilidades e características de cada animal. Ideal para criadores, competições ou estudos genéticos.

## Tecnologias

- **Next.js**: Framework React para aplicações web modernas.
- **@balkangraph/familytree.js**: Biblioteca para renderização de árvores genealógicas interativas.
- **TypeORM** (PoC): Simulação de persistência de dados dos cavalos.

## Como rodar

```bash
npm install
npm run dev
# ou
yarn install
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar a árvore genealógica.

## Estrutura

- `src/app/page.tsx`: Página principal que renderiza a árvore.
- `src/app/components/FamilyTree/FamilyTree.tsx`: Componente da árvore genealógica.
- `src/app/data/horses.ts`: Dados simulados dos cavalos.
- `src/app/horses/Horse.entity.ts`: Entidade TypeORM para estrutura dos dados.

## Exemplo de uso

A árvore mostra relações familiares e atributos dos cavalos, permitindo fácil visualização e análise.

## Referências

- [Documentação Next.js](https://nextjs.org/docs)
- [FamilyTree.js Docs](https://balkangraph.com/OrgChartJS/Docs/FamilyTree)

---

Projeto para fins de estudo e validação de conceito.
