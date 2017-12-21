"use strict";

;(function () {
    "user strict";

    var btnSync = document.querySelector("#btnSync");

    btnSync.addEventListener("click", function () {

        btnSync.classList.add("botaoSync--esperando");
        btnSync.classList.remove("botaoSync--sincronizado");

        var xhrSync = new XMLHttpRequest();
        xhrSync.open("POST", "https://ceep.herokuapp.com/cartoes/salvar");
        xhrSync.setRequestHeader("Content-Type", "application/json");

        var cartoes = document.querySelectorAll(".cartao");
        var mural = {
            usuario: prompt("Digite o seu usuário:"),
            cartoes: Array.from(document.querySelectorAll(".cartao")).map(function (cartaoDOM) {
                return {
                    conteudo: cartaoDOM.querySelector(".cartao-conteudo").textContent,
                    cor: cartaoDOM.style.background
                };
            })
        };

        xhrSync.send(JSON.stringify(mural));

        xhrSync.addEventListener("load", function () {
            var response = JSON.parse(xhrSync.response);
            console.log(response.quantidade + " cartoes salvos em " + response.usuario);

            btnSync.classList.remove("botaoSync--esperando");
            btnSync.classList.add("botaoSync--sincronizado");
        });

        xhrSync.addEventListener("eror", function () {
            btnSync.classList.remove("botaoSync--esperando");
            btnSync.classList.add("botaoSync--deuRuim");
        });
    });

    btnSync.classList.remove("no-js");
})();