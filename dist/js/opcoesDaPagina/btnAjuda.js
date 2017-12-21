"use strict";

;(function () {
    var btnAjuda = document.querySelector("#btnAjuda");

    btnAjuda.addEventListener("click", function () {
        var xhr = new XMLHttpRequest(); //Fazedor de request/Pede instruções/XHR
        xhr.open("GET", "https://ceep.herokuapp.com/cartoes/instrucoes");
        xhr.responseType = "json";
        xhr.send();
        xhr.addEventListener("load", function () {
            var objeto = xhr.response;
            var ajudas = objeto.instrucoes;

            ajudas.forEach(function (ajuda) {
                criaCartao(ajuda);
            });
        });

        xhr.addEventListener("error", function () {
            alert("Deu ruim!");
        });
    });

    btnAjuda.classList.remove("no-js");
})();