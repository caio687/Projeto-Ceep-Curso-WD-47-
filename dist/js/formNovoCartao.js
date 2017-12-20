"use strict";

;(function () {
    var form = document.querySelector(".formNovoCartao");
    var mural = document.querySelector(".mural");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        //Captura o textArea do HTML
        var textArea = form.querySelector(".formNovoCartao-conteudo");
        var conteudo = textArea.value.trim();

        //Verifica se o campo não esta vazio
        var isTextAreaVazio = textArea.value.trim().length === 0;
        if (isTextAreaVazio) {
            var msgErro = document.createElement("div"); //Cria o elemento HTML
            msgErro.classList.add("formNovoCartao-msg"); //Adiciona classe no elemento HTML
            msgErro.textContent = "Errrrouuuuu"; //Adiciona conteudo no elemento         

            var btnSalvar = document.querySelector(".formNovoCartao-salvar");
            form.insertBefore(msgErro, btnSalvar); //Adiciona o elemento criado no documento HTML dentro do Form


            //Mata a "div" criada
            form.addEventListener("animationend", function (event) {
                event.target.remove();
            });
        } else {
            criaCartao({ conteudo: conteudo });
            textArea.value = "";
        }
    });

    //Removendo a classe "no-js"
    form.classList.remove("no-js");
})();