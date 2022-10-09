const botaoCalcular = document.querySelector("#calcular") 
botaoCalcular.addEventListener("click", () => {
    const resultado = document.querySelectorAll(".resultado")
    const resultado1 = document.querySelector(".resultado")
    resultado.forEach(element => {
        element.innerHTML = "aaa"
        
    });
    resultado.forEach(element => {
        element.textContent = "bbb"
    });
    resultado1.innerHTML = "DDD"
    console.log("Fui clicado")
})