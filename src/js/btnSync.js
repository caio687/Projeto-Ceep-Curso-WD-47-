;(function() {
    "user strict"

    const btnSync = document.querySelector("#btnSync")

    btnSync.addEventListener("click", function() {

        btnSync.classList.add("botaoSync--esperando")
        btnSync.classList.remove("botaoSync--sincronizado")

        const xhrSync = new XMLHttpRequest()
        xhrSync.open("POST", "https://ceep.herokuapp.com/cartoes/salvar")
        xhrSync.setRequestHeader("Content-Type", "application/json")
        
        const cartoes = document.querySelectorAll(".cartao")
        const mural = {
            usuario: prompt("Digite o seu usuário:")
            ,cartoes: Array
            .from(document.querySelectorAll(".cartao"))
            .map(function(cartaoDOM) {
                return {
                    conteudo: cartaoDOM.querySelector(".cartao-conteudo").textContent
                    ,cor: getComputedStyle(cartaoDOM).getPropertyValue("background-color")
                }
            })
        }

        xhrSync.send(JSON.stringify(mural))



        xhrSync.addEventListener("load", function() {
            const response = JSON.parse(xhrSync.response) //Poderia usar xhrSync.response
            console.log(`${response.quantidade} cartoes salvos em ${response.usuario}`)

            btnSync.classList.remove("botaoSync--esperando")
            btnSync.classList.add("botaoSync--sincronizado")
        })

        xhrSync.addEventListener("error", function() {
            btnSync.classList.remove("botaoSync--esperando")
            btnSync.classList.add("botaoSync--deuRuim")
        })

        xhrSync.addEventListener("timeout", function() {
            btnSync.classList.remove("botaoSync--esperando")
            btnSync.classList.add("botaoSync--deuRuim")
        })

    })

    btnSync.classList.remove("no-js")

})()