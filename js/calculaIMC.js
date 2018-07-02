var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = calculaIMC(peso, altura);

  var tdIMC = paciente.querySelector(".info-imc");
  // Sets the result of IMC.
  tdIMC.textContent = imc;

  // Adiciona um novo estilo CSS.
  if(imc < 20 || imc > 28){
    paciente.classList.add("paciente-invalido");
  }
}

function calculaIMC(peso, altura){
  return imc = (peso / (altura * altura)).toFixed(2);
}

// // Função anônima.
// titulo.addEventListener("click", function(){
//   alert("Click captado!!");
// });

// Chamada de função por parâmetro.
// titulo.addEventListener("click", mostrarMensagem);
//
// function mostrarMensagem(){
//   alert("Click captado!!");
// }
