
;(function () {
    const cartoes = document.querySelectorAll(".cartao");

    for (let i = 0; i < cartoes.length; i++) {
        const cartao = cartoes[i];
        //Focus in
        cartao.addEventListener("focusin", function () {
            cartao.classList.add("cartao--focado");
        })
        //Focus out
        cartao.addEventListener("focusout", function () {
            cartao.classList.remove("cartao--focado");
        })

        //Mudando cor do cartão
        cartao.addEventListener("change", function (event) {
            //Reduz os eventos da Pagina//Delegação de Eventos (Delegate)
            const isRadio = event.target
                                .classList
                                .contains("opcoesDoCartao-radioTipo");
            //Se o evento é acionado ele muda a cor
            if (isRadio) {
                const cor = event.target.value;
                cartao.style.backgroundColor = cor;
            }            
        })

        //Atalho com btn "Enter" e "Espaço" do teclado
        cartao.addEventListener("keypress", function (event) {
            //Delegate
            const elemetoSelecionado = event.target;
            const isOpcoesDoCartao = elemetoSelecionado
                                            .classList
                                            .contains("opcoesDoCartao-tipo");
            //Valida se é a tecla "enter" ou "espaço"
            //verifica se aonde estamos pressionando essas teclas é o Elemento com a classe "OpcoesDoCartao"
            if (isOpcoesDoCartao && (event.key == " " || event.key == "Enter")) {
                elemetoSelecionado.click();
            }
        })

        //Removendo o cartão
        cartao.addEventListener("click", function(event) {
            //Pego o cartão e guardo na const cartao
            const elementoClicado = event.target;
            const isBtnRemove = elementoClicado
                                    .classList
                                    .contains("opcoesDoCartao-remove");
            
            if (isBtnRemove) {
                //Adiciono a classe para dar efeito a remoção do cartao
                cartao.classList.add("cartao--some"); 
                //Após finalização do transition, remove o cartão do HTML     
                cartao.addEventListener("transitionend", function() {
                    cartao.remove();
                })
            }
        })    
    }

}) ()