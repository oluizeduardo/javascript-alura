// Captura o campo com o nome a ser buscado.
var campoFiltro = document.querySelector("#filtrar-tabela");

// Adiciona um evento no campo de filtro.
campoFiltro.addEventListener("input", function() {
    // Gera uma lista com as informações da tabela.
    var pacientes = document.querySelectorAll(".paciente");
    // Verifica se a string do campo de filtro não é vazia.
    if (this.value.length > 0) {
        // Percorre a lista de pacientes gerada a partir das infos da tabela.
        for (var i = 0; i < pacientes.length; i++) {
            // Pega um item da lista.
            var paciente = pacientes[i];
            // Pega a instância de uma linha da tabela.
            var tdNome = paciente.querySelector(".info-nome");
            // Pega o conteúdo de texto de um registro da tabela.
            var nome = tdNome.textContent;
            // Cria uma expressão regular.
            var expressao = new RegExp(this.value, "i");
            // Verifica se existe alguma aparição de 'nome' em expressão.
            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
      // Se o campo de filtro estiver vazio, todas as linhas da tabela têm que aparecer.
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
