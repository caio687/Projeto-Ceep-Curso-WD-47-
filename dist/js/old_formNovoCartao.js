"use strict";

;(function () {
  var form = document.querySelector(".formNovoCartao");
  var mural = document.querySelector(".mural");
  var contador = document.querySelectorAll(".cartao").length; //Contador da classe do cartão

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
      //Adicionando cartão
      contador++;
      var wrapperCartao = document.createElement("tpl");
      wrapperCartao.innerHTML = "\n            <article id=\"cartao_" + contador + "\" class=\"cartao\" tabindex=\"0\">\n            <div class=\"opcoesDoCartao\">\n              <button class=\"opcoesDoCartao-remove opcoesDoCartao-opcao\">\n                <svg><use xlink:href=\"#iconeRemover\"></use></svg>\n              </button>\n    \n              <input type=\"radio\" name=\"corDoCartao" + contador + "\" value=\"#EBEF40\" id=\"corPadr\xE3o-cartao" + contador + "\" class=\"opcoesDoCartao-radioTipo\" checked>\n              <label for=\"corPadr\xE3o-cartao" + contador + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #EBEF40;\" tabindex=\"0\">\n                Padr\xE3o\n              </label>\n    \n              <input type=\"radio\" name=\"corDoCartao" + contador + "\" value=\"#F05450\" id=\"corImportante-cartao" + contador + "\" class=\"opcoesDoCartao-radioTipo\">\n              <label for=\"corImportante-cartao" + contador + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #F05450;\" tabindex=\"0\">\n                Importante\n              </label>\n    \n              <input type=\"radio\" name=\"corDoCartao" + contador + "\" value=\"#92C4EC\" id=\"corTarefa-cartao" + contador + "\" class=\"opcoesDoCartao-radioTipo\">\n              <label for=\"corTarefa-cartao" + contador + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #92C4EC;\" tabindex=\"0\">\n                Tarefa\n              </label>\n    \n              <input type=\"radio\" name=\"corDoCartao" + contador + "\" value=\"#76EF40\" id=\"corInspira\xE7\xE3o-cartao" + contador + "\" class=\"opcoesDoCartao-radioTipo\">\n              <label for=\"corInspira\xE7\xE3o-cartao" + contador + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #76EF40;\" tabindex=\"0\">\n                Inspira\xE7\xE3o\n              </label>\n            </div>\n            <p class=\"cartao-conteudo\" contenteditable tabindex=\"0\">" + conteudo + "</p>\n          </article>";

      var cartao = wrapperCartao.querySelector(".cartao");

      mural.appendChild(cartao);
    }
  });

  //Removendo a classe "no-js"
  form.classList.remove("no-js");
})();