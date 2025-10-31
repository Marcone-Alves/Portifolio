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

//

const form = document.getElementById('container-ctt');

  if (!form) return;

  // quando clicar no botão enviar
  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    const nome = document.getElementById("txt-nome").value.trim();
    const email = document.getElementById("txt-email").value.trim();
    const mensagem = document.getElementById("txt-msg").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const mascaraEmail = /^[a-zA-Z0-9._%+-]+@(gmail|outlook|yahoo|hotmail|icloud)\.com$/;
    if (!mascaraEmail.test(email)) {
      alert("Por favor, insira um e-mail válido (ex: exemplo@gmail.com).");
      return;
    }

    // Monta os dados para envio
    const formData = new FormData();
    formData.append("Nome", nome);
    formData.append("Email", email);
    formData.append("Mensagem", mensagem);
    formData.append("_subject", "Nova mensagem do site");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch("https://formsubmit.co/ajax/filhomarconealves@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        form.reset();
        abrirModal(modal); // mostra o modal após envio
      } else {
        alert("Erro ao enviar sua mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    }
  });