// const robotron = document.querySelector("#robotron")
// robotron.addEventListener("click", dizOi)

// function dizOi() {
//     console.log("Oi")
// }

// const robotron = document.querySelector("#robotron")
// const dizOi = () => {
//     console.log("Oi")
// }

// robotron.addEventListener("click", dizOi)

const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", () => {
    robotron.src = "img/Robotron 2000 - Amarelo.png"
})

// const subtrair = document.querySelector("#subtrair-braco")
// const somar = document.querySelector("#somar-braco")
// const braco = document.querySelector("#braco")

// somar.addEventListener("click", (evento) => {
//     braco.value = parseInt(braco.value) + 1
// })

// subtrair.addEventListener("click", (evento) => {
//     braco.value = parseInt(braco.value) - 1
// })

// somar.addEventListener("click", () => {manipulaDados("somar")})
// subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const manipulaDados = (operacao, controle) => {
    const peca = controle.querySelector("[data-contador]")
    operacao == "+" ? peca.value = parseInt(peca.value) + 1 : peca.value = parseInt(peca.value) - 1
}

const atualizaEstatisticas = (peca, operacao) => {
    estatisticas.forEach((elemento) =>{
        operacao == "+" ? elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] : elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
    })
}

const mudaCor = (imagem) => {
    robotron.src = imagem
}

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const cores = document.querySelectorAll(".mini-robo")
controle.forEach((elemento, indice) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    })
})

cores.forEach((elemento, indice) => {
    elemento.addEventListener("click", (evento) => {
        mudaCor(evento.target.dataset.imagem)
    })
})
