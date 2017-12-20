; (function () {
    const btnAjuda = document.querySelector("#btnAjuda");

    btnAjuda.addEventListener("click", function() {
        const lista = [
            {
                conteudo: "Bem vindo!"
                ,cor: "#F00"
            }
            ,{
                conteudo: "Clique em 'Linhas' para alterar o layout dos cartões"
                ,cor: "#0F0"
            }
        ]        
                
       lista.forEach(function(instrucao) {
            criaCartao(instrucao);       
       });

    })

    btnAjuda.classList.remove("no-js");

}) ()