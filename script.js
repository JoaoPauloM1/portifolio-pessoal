document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formContato");

    formulario.addEventListener("submit", function (evento) {
        
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("⚠️ Atenção: Todos os campos devem ser preenchidos para continuar.");
            return;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert("⚠️ Formato de e-mail inválido. Por favor, verifique.");
            return;
        }

        alert(`✅ Sucesso! Mensagem enviada.\nObrigado, ${nome}. Retornaremos no e-mail ${email} em breve!`);

        formulario.reset();
    });
});