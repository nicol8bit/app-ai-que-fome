# AI Que Fome

Este repositório contém o desenvolvimento do aplicativo "AI Que Fome", realizado em iterações e focado nos princípios do Extreme Programming (XP). O objetivo de cada iteração é entregar um incremento funcional do sistema que atenda às histórias de usuário priorizadas.

## Tecnologias Utilizadas

*   **HTML5**: Para a estrutura das páginas web.
*   **CSS3**: Para a estilização e layout responsivo.
*   **JavaScript**: Para a lógica de interação do usuário e manipulação do DOM.

## Organização do Projeto (Extreme Programming - XP)

O desenvolvimento deste projeto seguiu as práticas de Extreme Programming (XP), incluindo:

*   **Jogo do Planejamento**: Definição das histórias de usuário, priorização e estimativa de complexidade.
*   **Histórias do Usuário**: Utilizadas como base para o planejamento e desenvolvimento.
*   **Programação em Pares**: Desenvolvimento colaborativo, alternando os papéis.
*   **Releases Curtas**: Foco na entrega de uma primeira iteração funcional.

## Backlog Geral do Projeto

Abaixo está o backlog completo do projeto "AI Que Fome", com todas as histórias de usuário priorizadas e estimadas em pontos de complexidade.

| ID | Descrição (História de Usuário) | Prioridade | Complexidade (em pontos) | Critérios de Aceitação |
|----|---------------------------------|------------|--------------------------|------------------------|
| 01 | Como usuário, quero visualizar a lista de lanches, pratos e bebidas disponíveis para escolher o que desejo comer. | Alta | 3 | - O sistema deve exibir nome, descrição e preço.\n- Os itens devem estar organizados em uma lista clara.\n- Deve ser possível ver uma imagem ilustrativa. |
| 02 | Como usuário, quero realizar login no sistema para acessar minhas informações e fazer pedidos. | Alta | 5 | - Deve haver campos para e-mail e senha.\n- O sistema deve validar se os campos foram preenchidos.\n- Após o login, o usuário deve ser levado ao cardápio. |
| 03 | Como usuário, quero adicionar itens ao carrinho para preparar meu pedido. | Média | 4 | - Ao clicar em "adicionar", o item deve ser listado em uma área de carrinho. |
| 04 | Como usuário, quero ver o total do meu pedido no carrinho para saber o valor final. | Média | 4 | - O sistema deve somar os preços de todos os itens no carrinho.\n- O valor total deve ser atualizado automaticamente ao remover/adicionar itens. |
| 05 | Como usuário, quero filtrar o cardápio por categorias para achar mais rápido o que quero. | Baixa | 5 | - Deve haver botões ou um menu de categorias.\n- Ao selecionar uma categoria, apenas os itens dela devem aparecer. |

## Detalhamento das Iterações Realizadas

Para a iteração atual, as seguintes histórias de usuário foram selecionadas com base em sua prioridade e complexidade, visando entregar um incremento funcional do sistema.

| ID | História de Usuário | Pontos | Tarefas Técnicas Necessárias para Implementação |
|----|---------------------|--------|-------------------------------------------------|
| 01 | Como usuário, quero visualizar a lista de lanches, pratos e bebidas disponíveis para escolher o que desejo comer. | 3 | 1. Criar estrutura HTML (index.html) com a lista de produtos.\n2. Criar o arquivo CSS (style.css) para estilizar o cardápio.\n3. Criar um arquivo JavaScript (script.js) com um array de objetos contendo os dados dos lanches.\n4. Implementar função JS para renderizar os itens na tela. |
| 02 | Como usuário, quero realizar login no sistema para acessar minhas informações e fazer pedidos. | 5 | 1. Criar a interface do formulário de login no HTML.\n2. Estilizar a tela de login para centralizar o formulário.\n3. Criar função em JavaScript para capturar os dados do formulário.\n4. Implementar lógica simples de redirecionamento para a página do cardápio após o clique no botão "Entrar". |

## Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/nicol8bit/app-ai-que-fome.git
    cd app-ai-que-fome
    ```
2.  **Abra os arquivos HTML:**
    *   Para a tela de login, abra o arquivo `login.html` em seu navegador web preferido.
    *   Após o login (usuário: `teste@gmail.com`, senha: `1234`), você será redirecionado para a página principal do cardápio (`index.html`). Alternativamente, você pode abrir `index.html` diretamente para visualizar o cardápio sem a necessidade de login.

## Estrutura do Repositório

```
app-ai-que-fome/
├── img/                   # Imagens dos produtos
│   ├── batata-frita.jpg
│   ├── refrigerante.jpg
│   └── x-burguer.jpg
├── index.html             # Página principal do cardápio
├── login.html             # Página de login
├── login.js               # Lógica JavaScript para o login
├── script.js              # Lógica JavaScript para renderização do cardápio
├── style.css              # Estilos CSS do aplicativo
├── Tabela 1 - Backlog Geral - Sistema Ai que Fome.pdf # Backlog geral do projeto
├── Tabela 2 - Iterações - Sistema Ai que Fome.pdf # Histórias da primeira iteração
└── README.md              # Este arquivo README
```

## Contribuição

Este projeto foi desenvolvido em dupla, aplicando a prática de Programação em Pares. Ambos os membros da dupla participaram ativamente do planejamento e da implementação das histórias de usuário selecionadas para as iterações.
