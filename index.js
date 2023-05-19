if (typeof(Storage) !== "undefined") {
const form = document.getElementById("form");

  // Ouvinte de evento para o envio do formulário
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let curso = document.getElementById("curso").value;
    

    

    // Verifica se os campos estão preenchidos
    if (nome && idade && curso) {
      // Cria um objeto com os dados
      let novosDados = {
        nome: nome,
        idade: idade,
        curso: curso
      };

      let dados = [];
      // Cria um array para armazenar dados
      let dadosSalvos = localStorage.getItem("dados");
      if (dadosSalvos) {
        // Se existirem dados salvos, converte-os para objeto
        dados = JSON.parse(dadosSalvos);
      }

      dados.push(novosDados);

      // Armazena os dados no armazenamento local
      localStorage.setItem("dados", JSON.stringify(dados));

      // Limpa os campos do formulário
      form.reset();

      alert("Dados salvos com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });
} else {
  alert("Desculpe, o seu navegador não suporta o armazenamento local!");
}
function exibirModal() {
    let modal = document.getElementById("modalDados");
    let dadosContainer = document.getElementById("dadosContainer");
    let form = document.querySelector(".container-form");
    form.style.display = "none";
  
    // Limpa o conteúdo anterior, se houver
    dadosContainer.innerHTML = "";
  
    // Obtém os dados do armazenamento local
    let dadosSalvos = localStorage.getItem("dados");
  
    if (dadosSalvos) {
      // Converte os dados para objeto
      let dados = JSON.parse(dadosSalvos);
  
      // Cria um elemento <ul> para listar os dados
      let lista = document.createElement("ul");
  
      // Itera sobre os dados e cria elementos <li> para cada um
      for (let i = 0; i < dados.length; i++) {
        let item = document.createElement("li");
        item.textContent = "Nome: " + dados[i].nome + ", Idade: " + dados[i].idade + ", Curso: "+ dados[i].curso;
        lista.appendChild(item);
      }
  
      // Adiciona a lista ao container de dados
      dadosContainer.appendChild(lista);
    } else {
      let mensagem = document.createElement("p");
      mensagem.textContent = "Nenhum dado salvo.";
      dadosContainer.appendChild(mensagem);
    }
  
    // Exibe a janela modal
    modal.style.display = "block";
  }
  
  // Função para fechar a janela modal
  function fecharModal() {
    let form = document.querySelector(".container-form");
    form.style.display = "block";
    let modal = document.getElementById("modalDados");
    modal.style.display = "none";
  }