"use strict";

;(function () {
    var btnAjuda = document.querySelector("#btnAjuda");

    btnAjuda.addEventListener("click", function () {
        var lista = [{
            conteudo: "Bem vindo!",
            cor: "#F00"
        }, {
            conteudo: "Clique em 'Linhas' para alterar o layout dos cartões",
            cor: "#0F0"
        }];

        lista.forEach(function (instrucao) {
            criaCartao(instrucao);
        });
    });

    btnAjuda.classList.remove("no-js");
})();