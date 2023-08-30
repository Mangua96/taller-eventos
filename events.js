function saludo(){
    alert("Hola! Soy el Div :)")
}

const btn = document.querySelector(".boton-saludo");
btn.addEventListener("click", saludo);