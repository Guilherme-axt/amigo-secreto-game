// Seleciona o botão de sortear pelo ID
const botaoSortear = document.getElementById("botao-sortear");

// Cria um array vazio que armazenará os nomes dos amigos
const amigos = [];

// Função que adiciona um nome ao array de amigos e atualiza a lista na tela
function adicionarAmigo() {
  const adicionar = document.querySelector("input").value; // Pega o valor digitado no input

  // Verifica se o campo está vazio
  if (adicionar === "") {
    alert("Nome inválido, por favor, digite um nome!"); // Alerta caso o campo esteja vazio
  } else {
    amigos.push(adicionar); // Adiciona o nome ao array 'amigos'
    atualizarLista(); // Atualiza a lista visual com o novo nome
    document.querySelector("input").value = ""; // Limpa o campo de input após adicionar
  }
}

// Adiciona funcionalidade de pressionar "Enter" para adicionar um nome
const clicarEnter = document.querySelector("input");
clicarEnter.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo(); // Chama a função ao pressionar Enter
  }
});

// Função que atualiza a lista de nomes exibida na tela
function atualizarLista() {
  const lista = document.getElementById("listaAmigos"); // Seleciona o <ul> onde os nomes serão exibidos
  lista.innerText = ""; // Limpa a lista visual antes de reexibir

  // Percorre todos os nomes no array 'amigos'
  for (let index = 0; index < amigos.length; index++) {
    const amigo = amigos[index]; // Pega o nome atual

    const li = document.createElement("li"); // Cria um item da lista
    li.innerText = amigo; // Define o texto como o nome do amigo

    // Cria o botão de exclusão ao lado do nome
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "X"; // Texto do botão
    botaoExcluir.classList.add("botao-excluir"); // Adiciona classe para estilização via CSS

    // Adiciona evento ao botão de excluir para remover o nome da lista
    botaoExcluir.addEventListener("click", function () {
      amigos.splice(index, 1); // Remove o nome do array
      atualizarLista(); // Atualiza a lista na tela
    });

    // Adiciona o botão ao lado do nome e coloca tudo na lista
    li.appendChild(botaoExcluir);
    lista.appendChild(li);
  }
}

// Função auxiliar que retorna um número inteiro aleatório de 0 até maxArray - 1
function getRandomInt(maxArray) {
  return Math.floor(Math.random() * maxArray);
}

// Evento que ocorre ao clicar no botão "Sortear amigo"
botaoSortear.addEventListener("click", function () {
  const indiceSorteado = getRandomInt(amigos.length); // Sorteia um índice aleatório baseado no tamanho da lista
  const amigoSorteado = amigos[indiceSorteado]; // Pega o nome correspondente ao índice sorteado

  // Se o array estiver vazio, exibe um alerta
  if (amigoSorteado === undefined) {
    alert("Não é possível fazer um sorteio sem nomes!");
  } else {
    // Exibe o nome sorteado na área de resultado
    const resultadoSortear = document.getElementById("Resultado");
    resultadoSortear.innerText = `O amigo sorteado foi: ${amigoSorteado}`;

    // Limpa a lista visualmente (mas o array continua com os dados)
    const lista = document.getElementById("listaAmigos");
    lista.innerText = "";
  }
});
