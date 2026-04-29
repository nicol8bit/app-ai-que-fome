
const produtos = [
    {
        id: 1,
        nome: "X-Burger Clássico",
        descricao: "Pão brioche, hambúrguer artesanal 160g e queijo.",
        preco: 25.90,
        imagem: "img/x-burguer.jpg" 
    },
    {
        id: 2,
        nome: "Batata Frita",
        descricao: "Porção média de batatas com bacon e cheddar.",
        preco: 18.50,
        imagem: "img/batata-frita.jpg"
    },
    {
        id: 3,
        nome: "Refrigerante Coca-Cola",
        descricao: "Garrafa de 250ml.",
        preco: 6.00,
        imagem: "img/refrigerante.jpg"
    }
];


function renderizarCardapio() {
    const container = document.getElementById('container-cardapio');
    
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card-produto';
        
        const precoFormatado = produto.preco.toFixed(2).replace('.', ',');

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="preco">R$ ${precoFormatado}</p>
        `;
        

        container.appendChild(card);
    });
}

window.onload = renderizarCardapio;