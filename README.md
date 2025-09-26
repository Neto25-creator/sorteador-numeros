# Sorteador de Números

## 📖 Sobre o Projeto

Este é um projeto simples de um **sorteador de números**, desenvolvido como parte dos estudos no curso **"Lógica de programação: mergulhe em programação com JavaScript"** da Alura. A aplicação permite ao usuário definir um intervalo de valores (mínimo e máximo) e a quantidade de números que deseja sortear dentro desse intervalo, exibindo o resultado na tela.

O objetivo principal foi aplicar conceitos fundamentais de lógica de programação utilizando JavaScript para manipular elementos da página web (DOM).

## ✨ Funcionalidades

*   **Sorteio de Números:** Sorteia uma quantidade definida de números únicos dentro de um intervalo especificado.
*   **Validação de Entradas:**
    *   Verifica se o número mínimo é menor que o máximo.
    *   Impede o sorteio se a quantidade solicitada for maior que o número de possibilidades no intervalo.
*   **Interatividade:**
    *   O botão "Reiniciar" é habilitado após um sorteio ser realizado.
    *   A página pode ser limpa para um novo sorteio com o clique no botão "Reiniciar".

## 🛠️ Tecnologias e Conceitos Utilizados

O projeto foi construído com as seguintes tecnologias e conceitos de programação:

*   **HTML5:** Para a estruturação da página, incluindo os campos de entrada (`input`) e os botões (`button`).
*   **CSS3:** Para a estilização dos elementos, como a aparência dos botões e a organização do layout.
*   **JavaScript:** Para toda a lógica e interatividade da aplicação. Os principais conceitos de JS abordados foram:
    *   **Manipulação do DOM:** Uso de `document.getElementById()` para selecionar e alterar elementos HTML.
    *   **Funções:** Criação de funções reutilizáveis como `sortear()`, `reiniciar()` e `alterarStatusBotao()`.
    *   **Eventos:** Utilização de `addEventListener` para capturar o clique nos botões.
    *   **Estruturas Condicionais:** Uso de `if`/`else` para validações.
    *   **Estruturas de Repetição:** Uso de `for` e `while` para garantir que os números sorteados sejam únicos.
    *   **Manipulação de Classes:** Adição e remoção de classes CSS para alterar a aparência dos botões (`classList.add`, `classList.remove`).

    *   **Geração de Números Aleatórios:** Uso de `Math.random()` e `parseInt()`.
 
Link para acesso : https://sorteador-numeros-gamma-azure.vercel.app/
