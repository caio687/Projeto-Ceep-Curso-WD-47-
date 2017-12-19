
;(function () {
    const form = document.querySelector(".formNovoCartao");
    const mural = document.querySelector(".mural");    

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
          criaCartao({conteudo: conteudo});
          textArea.value = "";
        }
    })        

    //Removendo a classe "no-js"
    form.classList.remove("no-js");

}) ()