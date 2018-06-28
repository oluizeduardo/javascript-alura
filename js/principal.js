// Chnges the title.
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = (peso/(altura * altura)).toFixed(2);

  var tdIMC = paciente.querySelector(".info-imc");
  // Sets the result of IMC.
  tdIMC.textContent = imc;

  if(imc < 20 || imc > 28){
    paciente.classList.add("paciente-invalido");
    console.log(paciente);
  }
}
