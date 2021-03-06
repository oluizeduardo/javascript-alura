// Seleciona o botão.
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Adiciona uma função de click no botão.
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  // Carrega os dados do novo paciente.
  var paciente = obtemDadosDoFormulario(form);
  // Valida se os campos estão preenchidos. Valida peso e altura.
  if(validaPaciente(paciente)){
    adicionaPacienteNaTabela(paciente);
    //Limpa os campos do formulário.
    form.reset();
  }else{
    alert("Alguns valores inseridos são inválidos!");
  }
});

// Carrega os dados do novo paciente.
function obtemDadosDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value)
  }
  return paciente;
}

function validaPaciente(paciente){
  if(!paciente.nome || !paciente.peso || !paciente.altura || !paciente.gordura){
    return false;
  }
  if(validaPeso(paciente.peso) && validaAltura(paciente.altura)){
    return true;
  }else{
    return false;
  }
}

function validaPeso(peso){
  if(peso < 0.0 || peso > 1000)
    return false
  return true;
}

function validaAltura(altura){
  if(altura < 0 || altura > 3)
    return false
  return true;
}

// Monta uma linha para ser adicionada na tabela.
function montaTR(paciente){
  var pacienteTR = document.createElement("tr");
  pacienteTR.classList.add("paciente");

  pacienteTR.appendChild(montaTD(paciente.nome,"info-nome"));
  pacienteTR.appendChild(montaTD(paciente.peso,"info-peso"));
  pacienteTR.appendChild(montaTD(paciente.altura,"info-altura"));
  pacienteTR.appendChild(montaTD(paciente.gordura,"info-gordura"));
  pacienteTR.appendChild(montaTD(paciente.imc,"info-imc"));

  return pacienteTR;
}

// Cria uma nova TD.
function montaTD(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function adicionaPacienteNaTabela(paciente){
  var tr = montaTR(paciente);
  var tabela = document.querySelector("#tabela-pacientes").appendChild(tr);
}
