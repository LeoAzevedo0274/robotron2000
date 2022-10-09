// function mudaCores(elementos){
//     let cores = elementos.getAttribute("data-cor");
//     let tipoElemento = elementos.getAttribute("data-tipo");
//     elementos.innerHTML = (tipoElemento + " - " + cores)
//   }

//   function mudaCores1(elementos){
//     var cores = elementos.getAttribute("cor");
//     var tipoElemento = elementos.getAttribute("tipo");
//     elementos.innerHTML = (tipoElemento + " - " + cores)
//   }  

const mostrarTintas = (acao) => {
    lista = document.querySelector(".lista")
    acao == "mostrar" ? lista.setAttribute("style", "display:block") : lista.setAttribute("style", "display:none")
}

const botoes = document.querySelectorAll("[data-acao]")
    botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", (evento) =>{
        mostrarTintas(evento.target.dataset.acao)
    })
})