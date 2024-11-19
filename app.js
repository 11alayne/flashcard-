@@ -14,6 +14,16 @@ function criaCartao(categoria, pergunta, resposta) {
    </div>
    </div>
    `
    let respostaEstaVisivel = false
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)
    container.appendChild(cartao)

}
