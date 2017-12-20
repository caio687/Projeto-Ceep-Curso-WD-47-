//Module Pattern

;(function(){
    "use strict";
    let numeroDoCartao = 0;
    
    //Adicionando cartão
    //Explodindo parametro
    //Exportando a função
    window.criaCartao = function({conteudo, cor}) {
        numeroDoCartao++;    
        const cartao = $(`
            <article id="cartao_${numeroDoCartao}" class="cartao" tabindex="0" style="background-color:${cor}">
            <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao">
            <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
            
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
            <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
            </label>
            
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
            </label>
            
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
            </label>
            
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
            </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
            </article>`
        )
    
        //Focus in
        cartao.on("focusin", function () {
            cartao.addClass("cartao--focado");
        })
        //Focus out
        cartao.on("focusout", function () {
            cartao.removeClass("cartao--focado");
        })

        //Mudando cor do cartão
        cartao.on("change", function (event) {
            //Reduz os eventos da Pagina//Delegação de Eventos (Delegate)
            const isRadio = event.target
            .classList
            .contains("opcoesDoCartao-radioTipo");
            //Se o evento é acionado ele muda a cor
            if (isRadio) {
                const cor = event.target.value;
                cartao.css("background-color", cor);
            }            
        })

        //Atalho com btn "Enter" e "Espaço" do teclado
        cartao.on("keypress", function (event) {
            //Delegate
            const elemetoSelecionado = event.target;
            const isOpcoesDoCartao = elemetoSelecionado
            .classList
            .contains("opcoesDoCartao-tipo");
            //Valida se é a tecla "enter" ou "espaço"
            //verifica se aonde estamos pressionando essas teclas é o Elemento com a classe "OpcoesDoCartao"
            if (isOpcoesDoCartao && (event.keyCode == 13 || event.keyCode == 32)) {
                elemetoSelecionado.click();
            }
        })
    
        //Removendo o cartão - Usando Jquery
        cartao.on("click", ".opcoesDoCartao-remove", function(event) {           
            //Adiciono a classe para dar efeito a remoção do cartao
            cartao.addClass("cartao--some"); 
            //Após finalização do transition, remove o cartão do HTML     
            cartao.on("transitionend", function() {
                cartao.remove();
            })            
        })
    
        $(".mural").append(cartao);
    
    }

})()