// Seleciona o botão.
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Adiciona uma função de click no botão.
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemDadosDoFormulario(form);
  var pacienteTR = montaTR(paciente);
  adicionaNaTabela(pacienteTR);

  form.reset();
});

function obtemDadosDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(peso, altura)
  }
  return paciente;
}

// Monta uma linha para ser adicionada na tabela.
function montaTR(paciente){
  var pacienteTR = document.createElement("tr");
  pacienteTR.classList.add("paciente");

  var nomeTD = document.createElement("td");
  var pesoTD = document.createElement("td");
  var alturaTD = document.createElement("td");
  var gorduraTD = document.createElement("td");
  var icmTD = document.createElement("td");

  nomeTD.textContent = paciente.nome;
  pesoTD.textContent = paciente.peso;
  alturaTD.textContent = paciente.altura;
  gorduraTD.textContent = paciente.gordura;
  icmTD.textContent = calculaIMC(paciente.peso, paciente.altura);

  pacienteTR.appendChild(nomeTD);
  pacienteTR.appendChild(pesoTD);
  pacienteTR.appendChild(alturaTD);
  pacienteTR.appendChild(gorduraTD);
  pacienteTR.appendChild(icmTD);

  return pacienteTR;
}

// Adiciona uma linha (tr) na tabela.
function adicionaNaTabela(tr){
  var tabela = document.querySelector("#tabela-pacientes").appendChild(tr);
}
