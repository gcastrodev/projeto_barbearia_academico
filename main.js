// Variável para armazenar o valor total da compra
let total = 0;

// Seleção dos elementos do DOM
const botoes = document.querySelectorAll(".btn-adicionar");
const totalizador = document.getElementById("valor-total");
const btnLimpar = document.getElementById("btn-limpar");

// Função para atualizar a exibição do total na tela com animação
const atualizarTotal = () => {
    totalizador.innerText = `R$ ${total.toFixed(2)}`;
    totalizador.style.color = total > 0 ? '#27ae60' : '#333';
};

// Função para limpar o total
const limparTotal = () => {
    total = 0;
    atualizarTotal();
};

// Adicionando evento de clique em todos os botões usando forEach
botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        // Capturando o elemento pai (card) para buscar o preço
        const card = botao.parentElement;
        const precoTexto = card.querySelector(".preco").innerText;

        // Extraindo apenas os números e convertendo para float
        const precoValor = parseFloat(precoTexto.replace("R$ ", ""));

        // Somando ao total
        total += precoValor;

        // Atualizando a interface
        atualizarTotal();

        // Feedback visual simples
        botao.innerText = "Adicionado!";
        setTimeout(() => {
            botao.innerText = "Adicionar";
        }, 1000);

        console.log(`Adicionado: R$ ${precoValor}. Novo total: R$ ${total}`);
    });
});

// Evento para o botão limpar
btnLimpar.addEventListener("click", limparTotal);