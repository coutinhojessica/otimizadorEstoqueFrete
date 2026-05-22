# 🛒 **Otimizador de Estoque e Frete**

Este é um script em JavaScript desenvolvido para simular o backend de um sistema de e-commerce. O objetivo principal é validar a disponibilidade de produtos em estoque e calcular o valor final do frete com base na quantidade de itens válidos no carrinho.

---

# 📝 **Sobre o Projeto**

O script processa um objeto de carrinho de compras comparando-o com um objeto de estoque real. Ele realiza verificações item por item e, ao final, decide a categoria de frete aplicável ao cliente.

## Este projeto foi criado para exercitar conceitos fundamentais de lógica de programação, como:

_Iteração de Objetos:_ Uso do laço for...in.

_Acesso Dinâmico:_ Manipulação de propriedades de objetos usando colchetes [].

_Estruturas Condicionais:_ Lógica complexa com if, else if e else.

_Escopo e Funções:_ Organização de código dentro de funções reutilizáveis.

## 🚀 **Como Funciona a Lógica**

_Validação de Itens:_ O sistema percorre o carrinho do cliente. Para cada item, verifica se a quantidade solicitada existe no estoque da loja.

_Contagem:_ Apenas os itens com estoque suficiente são contabilizados como "itens válidos".

### **Cálculo de Frete:**

_Frete Grátis:_ Aplicado para compras com mais de 5 itens válidos.

_Frete Fixo (R$ 15,00):_ Aplicado para compras que contenham entre 1 e 5 itens válidos.

_Compra Recusada:_ Caso nenhum item solicitado tenha estoque disponível.

# 💻 **Exemplo de Saída no Console**

Ao executar o código com os dados de teste fornecidos, o resultado esperado é:

## **Plaintext**

> Item Camiseta verificado com sucesso.  
> Alerta: Estoque insuficiente para o item Calça Jeans.  
> Item Tênis verificado com sucesso.  
> Alerta: Estoque insuficiente para o item Meias.  
> Como sua compra não atingiu o limite de 5 itens, seu frete será de R$ 15,00.

# 🛠️ **Tecnologias Utilizadas**

- JavaScript (ES6+)
- Node.js (Para execução via terminal)

---

_Projeto desenvolvido para fins de estudo de lógica de programação._
