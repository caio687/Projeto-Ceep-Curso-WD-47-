;(function () {
    
    //btn do html
    const btn = document.querySelector("#btnMudaLayout");

    //Função para alterar texto do btn
    function mudaTexto() {
        if(btn.textContent == "Linhas") {
            btn.textContent = "Blocos";
     } else {
        btn.textContent = "Linhas";       
        }
    }

    //Mudando alinhamento dos cartões
    const mural = document.querySelector(".mural");

    function mudaLayout() {
        if (!mural.classList.contains("mural--linha")) {
             mural.classList.add("mural--linha");
        }   else {
              mural.classList.remove("mural--linha");
        }
    }

    //Chamada da função quando clicar o Botão
    btn.addEventListener("click", mudaTexto);
    btn.addEventListener("click", mudaLayout);

    //mural.classList.toggle("mural--linha"); <== Ele já verifica se tem ou não a classe, se já tiver a classe ele não adiciona, e se não tiver ele adiciona

    //Tira o no-js liberando a funcionalidade
    btn.classList.remove("no-js");

}) ()