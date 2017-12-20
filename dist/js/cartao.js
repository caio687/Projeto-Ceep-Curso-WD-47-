"use strict";

//Module Pattern

;(function () {
    "use strict";

    var numeroDoCartao = 0;

    //Adicionando cartão
    //Explodindo parametro
    //Exportando a função
    window.criaCartao = function (_ref) {
        var conteudo = _ref.conteudo,
            cor = _ref.cor;

        numeroDoCartao++;
        var cartao = $("\n            <article id=\"cartao_" + numeroDoCartao + "\" class=\"cartao\" tabindex=\"0\" style=\"background-color:" + cor + "\">\n            <div class=\"opcoesDoCartao\">\n            <button class=\"opcoesDoCartao-remove opcoesDoCartao-opcao\">\n            <svg><use xlink:href=\"#iconeRemover\"></use></svg>\n            </button>\n            \n            <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#EBEF40\" id=\"corPadr\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\" checked>\n            <label for=\"corPadr\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #EBEF40;\" tabindex=\"0\">\n            Padr\xE3o\n            </label>\n            \n            <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#F05450\" id=\"corImportante-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n            <label for=\"corImportante-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #F05450;\" tabindex=\"0\">\n            Importante\n            </label>\n            \n            <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#92C4EC\" id=\"corTarefa-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n            <label for=\"corTarefa-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #92C4EC;\" tabindex=\"0\">\n            Tarefa\n            </label>\n            \n            <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#76EF40\" id=\"corInspira\xE7\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n            <label for=\"corInspira\xE7\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #76EF40;\" tabindex=\"0\">\n            Inspira\xE7\xE3o\n            </label>\n            </div>\n            <p class=\"cartao-conteudo\" contenteditable tabindex=\"0\">" + conteudo + "</p>\n            </article>");

        //Focus in
        cartao.on("focusin", function () {
            cartao.addClass("cartao--focado");
        });
        //Focus out
        cartao.on("focusout", function () {
            cartao.removeClass("cartao--focado");
        });

        //Mudando cor do cartão
        cartao.on("change", function (event) {
            //Reduz os eventos da Pagina//Delegação de Eventos (Delegate)
            var isRadio = event.target.classList.contains("opcoesDoCartao-radioTipo");
            //Se o evento é acionado ele muda a cor
            if (isRadio) {
                var _cor = event.target.value;
                cartao.css("background-color", _cor);
            }
        });

        //Atalho com btn "Enter" e "Espaço" do teclado
        cartao.on("keypress", function (event) {
            //Delegate
            var elemetoSelecionado = event.target;
            var isOpcoesDoCartao = elemetoSelecionado.classList.contains("opcoesDoCartao-tipo");
            //Valida se é a tecla "enter" ou "espaço"
            //verifica se aonde estamos pressionando essas teclas é o Elemento com a classe "OpcoesDoCartao"
            if (isOpcoesDoCartao && (event.keyCode == 13 || event.keyCode == 32)) {
                elemetoSelecionado.click();
            }
        });

        //Removendo o cartão - Usando Jquery
        cartao.on("click", ".opcoesDoCartao-remove", function (event) {
            //Adiciono a classe para dar efeito a remoção do cartao
            cartao.addClass("cartao--some");
            //Após finalização do transition, remove o cartão do HTML     
            cartao.on("transitionend", function () {
                cartao.remove();
            });
        });

        $(".mural").append(cartao);
    };
})();