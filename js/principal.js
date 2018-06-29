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
  }
}

// Seleciona o botão.
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Adiciona uma função de click no botão.
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTR = document.createElement("tr");

  var nomeTD = document.createElement("td");
  var pesoTD = document.createElement("td");
  var alturaTD = document.createElement("td");
  var gorduraTD = document.createElement("td");
  var icmTD = document.createElement("td");

  nomeTD.textContent = nome;
  pesoTD.textContent = peso;
  alturaTD.textContent = altura;
  gorduraTD.textContent = gordura;
  icmTD.textContent = 0;

  pacienteTR.appendChild(nomeTD);
  pacienteTR.appendChild(pesoTD);
  pacienteTR.appendChild(alturaTD);
  pacienteTR.appendChild(gorduraTD);
  pacienteTR.appendChild(icmTD);

  var tabela = document.querySelector("#tabela-paciente");
  tabela.appendChild(pacienteTR);

});


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
