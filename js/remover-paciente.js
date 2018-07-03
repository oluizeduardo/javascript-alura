var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-paciente");

tabela.addEventListener("dblclick", function(event){
    // Captura o alvo que foi clicado. (TD)
    var alvoEvento = event.target;
    // Traz o pai do alvo clicad. (TR)
    var paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.classList.add("fade-out");

    setTimeout(function(){
      // Remove o pai do alvo clicado.
      paiDoAlvo.remove();
    }, 200);
});
