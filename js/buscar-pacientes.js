var botaoImportar = document.querySelector("#importar-pacientes");

botaoImportar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    // Pega o elemento que exibe uma mensagem de erro.
    var erroAjax = document.querySelector("#erro-ajax");
    // Verifica se retornou código de sucesso.
    if(xhr.status == 200){
      // Some com a mensagem de erro.
      erroAjax.classList.add("invisivel");
      // Pega o conteúdo do response.
      var resposta = xhr.responseText;
      // Converte o conteúdo do response para JSON.
      var pacientes = JSON.parse(resposta);
      // Adiciona cada um dos novos pacientes na tabela.
      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      });
    }else{
      // Exibe a mensagem de erro.
      erroAjax.classList.remove("invisivel");
      // Exibe no console o código de erro e a mensagem de erro.
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  });
  xhr.send();
});
