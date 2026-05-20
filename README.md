# 🛒 **Otimizador de Estoque e Frete**
Este é um script em JavaScript desenvolvido para simular o backend de um sistema de e-commerce. O objetivo principal é validar a disponibilidade de produtos em estoque e calcular o valor final do frete com base na quantidade de itens válidos no carrinho.

----

# 📝 **Sobre o Projeto**
O script processa um objeto de carrinho de compras comparando-o com um objeto de estoque real. Ele realiza verificações item por item e, ao final, decide a categoria de frete aplicável ao cliente.

## Este projeto foi criado para exercitar conceitos fundamentais de lógica de programação, como:

*Iteração de Objetos:* Uso do laço for...in.

*Acesso Dinâmico:* Manipulação de propriedades de objetos usando colchetes [].

*Estruturas Condicionais:* Lógica complexa com if, else if e else.

*Escopo e Funções:* Organização de código dentro de funções reutilizáveis.

## 🚀 **Como Funciona a Lógica**
*Validação de Itens:* O sistema percorre o carrinho do cliente. Para cada item, verifica se a quantidade solicitada existe no estoque da loja.

*Contagem:* Apenas os itens com estoque suficiente são contabilizados como "itens válidos".

### **Cálculo de Frete:**

*Frete Grátis:* Aplicado para compras com mais de 5 itens válidos.

*Frete Fixo (R$ 15,00):* Aplicado para compras que contenham entre 1 e 5 itens válidos.

*Compra Recusada:* Caso nenhum item solicitado tenha estoque disponível.

# 💻 **Exemplo de Saída no Console**
Ao executar o código com os dados de teste fornecidos, o resultado esperado é:

## **Plaintext**
>Item Camiseta verificado com sucesso.  
>Alerta: Estoque insuficiente para o item Calça Jeans.  
>Item Tênis verificado com sucesso.  
>Alerta: Estoque insuficiente para o item Meias.  
>Como sua compra não atingiu o limite de 5 itens, seu frete será de R$ 15,00.

# 🛠️ **Tecnologias Utilizadas**
- JavaScript (ES6+)  
- Node.js (Para execução via terminal)

---

*Projeto desenvolvido para fins de estudo de lógica de programação.*