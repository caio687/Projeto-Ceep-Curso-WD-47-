"use strict";

;(function () {
    var cartoes = document.querySelectorAll(".cartao");

    var _loop = function _loop(i) {
        var cartao = cartoes[i];
        //Focus in
        cartao.addEventListener("focusin", function () {
            cartao.classList.add("cartao--focado");
        });
        //Focus out
        cartao.addEventListener("focusout", function () {
            cartao.classList.remove("cartao--focado");
        });

        //Mudando cor do cartão
        cartao.addEventListener("change", function (event) {
            //Reduz os eventos da Pagina//Delegação de Eventos (Delegate)
            var isRadio = event.target.classList.contains("opcoesDoCartao-radioTipo");
            //Se o evento é acionado ele muda a cor
            if (isRadio) {
                var cor = event.target.value;
                cartao.style.backgroundColor = cor;
            }
        });

        //Atalho com btn "Enter" e "Espaço" do teclado
        cartao.addEventListener("keypress", function (event) {
            //Delegate
            var elemetoSelecionado = event.target;
            var isOpcoesDoCartao = elemetoSelecionado.classList.contains("opcoesDoCartao-tipo");
            //Valida se é a tecla "enter" ou "espaço"
            //verifica se aonde estamos pressionando essas teclas é o Elemento com a classe "OpcoesDoCartao"
            if (isOpcoesDoCartao && (event.key == " " || event.key == "Enter")) {
                elemetoSelecionado.click();
            }
        });

        //Removendo o cartão
        cartao.addEventListener("click", function (event) {
            //Pego o cartão e guardo na const cartao
            var elementoClicado = event.target;
            var isBtnRemove = elementoClicado.classList.contains("opcoesDoCartao-remove");

            if (isBtnRemove) {
                //Adiciono a classe para dar efeito a remoção do cartao
                cartao.classList.add("cartao--some");
                //Após finalização do transition, remove o cartão do HTML     
                cartao.addEventListener("transitionend", function () {
                    cartao.remove();
                });
            }
        });
    };

    for (var i = 0; i < cartoes.length; i++) {
        _loop(i);
    }
})();