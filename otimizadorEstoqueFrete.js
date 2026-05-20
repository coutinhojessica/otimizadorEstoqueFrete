const estoqueDaLoja = {
  "Camiseta": 10,
  "Calça Jeans": 2,
  "Tênis": 5,
  "Meias": 0,
};

const carrinhoDoCliente = {
  "Camiseta": 2,
  "Calça Jeans": 3,
  "Tênis": 1,
  "Meias": 1,
};

function processarCarrinho(carrinho, estoque) {
  let itensValidados = 0;

  for (const chave in carrinho) {
    if (carrinho[chave] <= estoque[chave]) {
      itensValidados++;
      console.log(`Item ${chave} verificado com sucesso`);
    } else {
      console.log(`Alerta: Estoque insuficiente para o item ${chave}.”`);
    }
  }
  if (itensValidados > 5) {
    console.log(`Como sua compra excedeu 5 itens, seu frete é grátis.`);
  } else if (itensValidados > 0 || itensValidados < 6) {
    console.log(
      `Como sua compra não atingiu o limite de 5 itens, seu frete será de R$ 15,00.`,
    );
  } else {
    console.log(`A compra não pode ser processada!`);
  }
}

processarCarrinho(carrinhoDoCliente, estoqueDaLoja);
