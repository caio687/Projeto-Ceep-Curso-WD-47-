
;(function () {
    const form = document.querySelector(".formNovoCartao");
    const mural = document.querySelector(".mural");
    let numeroDoCartao = 0

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        //Captura o textArea do HTML
        const textArea = form.querySelector(".formNovoCartao-conteudo");
        const conteudo = textArea.value.trim();        
        
        //Verifica se o campo não esta vazio
        const isTextAreaVazio = textArea.value.trim().length === 0;
        if (isTextAreaVazio) {
            const msgErro = document.createElement("div"); //Cria o elemento HTML
            msgErro.classList.add("formNovoCartao-msg"); //Adiciona classe no elemento HTML
            msgErro.textContent = "Errrrouuuuu"; //Adiciona conteudo no elemento         
            
            const btnSalvar = document.querySelector(".formNovoCartao-salvar");
            form.insertBefore(msgErro, btnSalvar); //Adiciona o elemento criado no documento HTML dentro do Form

            
            //Mata a "div" criada
            form.addEventListener("animationend", function(event) {
                event.target.remove();
            })

        } else {
            //Adicionando cartão
            numeroDoCartao++;            
            const cartao = $(`
            <article id="cartao_${numeroDoCartao}" class="cartao" tabindex="0">
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

            $(".mural").append(cartao);
        }
      })

    //Removendo a classe "no-js"
    form.classList.remove("no-js");

}) ()