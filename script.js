function escuro(a){

    document.body.classList.toggle("escuro")

    a.style.transform = "scale(0)"

    setTimeout(() => {
        
        a.style.transform = "scale(100%)"
        a.classList.toggle("fundoEscuro")
    },400)

}

const estaEscuro = document.body.classList.contains("escuro");
localStorage.setItem("modo-escuro", estaEscuro);