// Seleciona o botão.
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Adiciona uma função de click no botão.
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemDadosDoFormulario(form);
  var pacienteTR = montaTR(paciente);
  adicionaNaTabela(pacienteTR);

  //Limpa os campos do formulário.
  form.reset();
});

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

// Adiciona uma linha (tr) na tabela.
function adicionaNaTabela(tr){
  var tabela = document.querySelector("#tabela-pacientes").appendChild(tr);
}
