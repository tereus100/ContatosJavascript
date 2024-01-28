// Função para adicionar contato
function adicionarContato() {
  // Obtém os valores dos campos de entrada
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  // Obtém os elementos onde os valores serão exibidos
  const pNome = document.getElementById("nomeTexto");
  const pTelefone = document.getElementById("telefoneTexto");
  const pEmail = document.getElementById("emailTexto");

  // Atualiza o texto dos elementos com os valores dos campos de entrada
  pNome.textContent = "Nome: " + nome;
  pTelefone.textContent = "Telefone: " + telefone;
  pEmail.textContent = "E-mail: " + email;
}

// Função para excluir contato
function excluirContato() {
  // Obtém os elementos onde os valores são exibidos
  const pNome = document.getElementById("nomeTexto");
  const pTelefone = document.getElementById("telefoneTexto");
  const pEmail = document.getElementById("emailTexto");

  // Restaura o texto original dos elementos
  pNome.textContent = "Nome";
  pTelefone.textContent = "Telefone";
  pEmail.textContent = "E-mail";
}