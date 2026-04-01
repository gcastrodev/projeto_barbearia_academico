// Variável para armazenar o valor total da compra
let total = 0;

// Seleção dos elementos do DOM
const botoes = document.querySelectorAll(".btn-adicionar");
const totalizador = document.getElementById("valor-total");

// Função para atualizar a exibição do total na tela
const atualizarTotal = () => {
    totalizador.innerText = `R$ ${total.toFixed(2)}`;
};

