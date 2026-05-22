const estoqueDaLoja = {
  "Camisa Polo": 15,
  "Calça Jeans Slim": 8,
  "Vestido Floral": 5,
  "Jaqueta de Couro": 3,
  "Bermuda Sarja": 12,
  "Saia Mid": 7,
  "Moletom Canguru": 10,
  "Blusa de Seda": 6,
  "Regata Básica": 20,
  "Cardigã Tricô": 4,
};

const precosProdutos = {
  "Camisa Polo": 89.9,
  "Calça Jeans Slim": 159.0,
  "Vestido Floral": 120.0,
  "Jaqueta de Couro": 350.0,
  "Bermuda Sarja": 75.5,
  "Saia Mid": 95.0,
  "Moletom Canguru": 180.0,
  "Blusa de Seda": 210.0,
  "Regata Básica": 39.9,
  "Cardigã Tricô": 130.0,
};

const carrinhoDoCliente = {
  "Camisa Polo": 2,
  "Calça Jeans Slim": 3,
  "Saia Mid": 8,
  "Cardigã Tricô": 1,
  Meias: 1,
};

function processarCarrinho(carrinho, estoque) {
  let valorTotalProduto = 0;
  let itensAprovados = 0;

  for (const chave in carrinho) {
    if (carrinho[chave] <= estoque[chave]) {
      itensAprovados++;
      const precoUnitario = precosProdutos[chave];
      const subTotal = precoUnitario * carrinho[chave];
      valorTotalProduto += subTotal;
    }
  }

  if (valorTotalProduto >= 500) {
    console.log(`Itens comprados: ${itensAprovados}`);
    console.log(`Frete: Grátis`);
    console.log(`Total final: ${valorTotalProduto.toFixed(2)}`);
  } else {
    const valorTotalFrete = valorTotalProduto + 15;
    console.log(`Itens comprados: ${itensAprovados}`);
    console.log(`Subtotal: R$ ${valorTotalProduto}`);
    console.log(`Frete: R$ 15,00.`);
    console.log(`Total final: ${valorTotalFrete.toFixed(2)}`);
  }
}

processarCarrinho(carrinhoDoCliente, estoqueDaLoja);
