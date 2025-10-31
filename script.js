function escuro(a){
    
    document.body.classList.toggle("escuro")
    
    a.style.transform = "scale(0)"
    
    setTimeout(() => {
        a.style.transform = "scale(100%)"
    },400)
    
    //salvar no local storage se esta true o modo escuro
    let estaEscuro = document.body.classList.contains("escuro");
    localStorage.setItem("modo-escuro", estaEscuro);
    console.log(localStorage.getItem("modo-escuro"))
    //fim de salvar no local storage
}



document.addEventListener("DOMContentLoaded", () => { //fazer ação quando reiniciar o site

    console.log(localStorage.getItem("modo-escuro")) //pegar se a classe dark mode estao true ou false

    if(localStorage.getItem("modo-escuro") == "true"){ //condição se o modo escuro estiver true
        
        document.body.classList.add("escuro") //adiciona a classe "escuro" ao body

    }
    //o console.log serve para aparecer no f12 o que esta acontecendo
})
