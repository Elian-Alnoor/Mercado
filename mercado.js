const rs = require("readline-sync")

function carregarProdutos() {
    let divProdutos = document.getElementById("todosOsProdutos")
    axios.get('http://localhost:3000/Produtos')
    .then(res => {
        let produtos = res.data
    })
    
    for (let i = 0; i <= produtos.length; i++) {
        let produtoAtual = document.createElement("div")
        produtoAtual.innerHTML = `
        <div class="card col-lg-3">
  
          <article>
            <div class="imagens">
              <img src="${produtos.foto}" alt="${produtos.nome}">
            </div>
            <i class="heart">
              <img width="20" src="http://www.onlygfx.com/wp-content/uploads/2017/08/red-watercolor-heart-2-1-300x267.png"
                alt="">
            </i>
  
            <button class="trucky">
              <img width="30" src="https://cdn3.iconfinder.com/data/icons/sympletts-part-10/128/truck-speed-512.png"
                alt="lil truck">
            </button>
          </article>
          <article class="price">
            <h2>${produtos.preco}</h2>
            <input class="quantidade">
        <button id="comprarAlface" type="button" class="btn btn-outline-success">Comprar</button>
          </article>
          <article class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </article>
        </div>`
        divProdutos.appendChild(produtoAtual)
    }
}
carregarProdutos()

let carrinho = []

class produtoNoCarrinho {
    constructor(nome, valor, quantidade) {
      this.nome = nome
      this.valor = valor
      this.quantidade = quantidade
    }
  }

  function colocarProdutoNoCarrinho(nome, valor, quantidade) {
    if (quantidade !== "") {
      let produtoNoCarrinho = new ProdutoNoCarrinho(nome, valor, quantidade)
      carrinho.push(produtoNoCarrinho)
      console.log("Coloquei " + produtoNoCarrinho.quantidade + " " + produtoNoCarrinho.nome + "(s) no carrinho!")
      calcularValorTotalDoCarrinho()
    } else {
      alert("Voce esqueceu de selecionar a quantidade desejada.")
    }
  }

  colocarProdutoNoCarrinho()

  window.onload = function() {
    document.getElementById("comprarAlface").addEventListener("click", () => {

        clicarComprarProduto("precoAlface", "quantidadeAlface", "Alface")
    
      })
      document.getElementById("comprarUva").addEventListener("click", () => {
    
        let idDoCampoPreco = "precoUva"
        let idDoCampoQuantidade = "quantidadeUva"
        let nomeDoProduto = "Uva"
    
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
    
      })
      document.getElementById("comprarUvaSemCaroco").addEventListener("click", () => {
    
        let idDoCampoPreco = "precoUvaSemCaroco"
        let idDoCampoQuantidade = "quantidadeUvaSemCaroco"
        let nomeDoProduto = "Uva Sem Caroço"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
      })
      document.getElementById("comprarPera").addEventListener("click", () => {
    
        clicarComprarProduto("precoPera", "quantidadePera", "Pera")
        
      })
  }