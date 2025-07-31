const botaoSortear = document.getElementById("botao-sortear");

const amigos = []; // Cria um array vazio para armazenar os nomes dos amigos

function adicionarAmigo() {
  const adicionar = document.querySelector("input").value; // Pega o valor digitado no campo de input

  if (adicionar === "") {
    // Verifica se o campo está vazio
    alert("Nome inválido, por favor, digite um nome!"); // Alerta o usuário se não for digitado nenhum nome
  } else {
    amigos.push(adicionar); // Adiciona o nome no array 'amigos'
    atualizarLista(); // Atualiza a lista exibida na tela
    document.querySelector("input").value = ""; // Limpa o campo de input após adicionar o nome
  }
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos"); // Seleciona o elemento <ul> que exibirá os nomes
  lista.innerText = ""; // Limpa o conteúdo anterior da lista
  for (let index = 0; index < amigos.length; index++) {
    const amigo = document.createElement("li");
    amigo.innerText = amigos[index];
    lista.appendChild(amigo);
  }
}

function getRandomInt(maxArray) {
  return Math.floor(Math.random() * maxArray); // Gera número aleatório entre 0 e maxArray - 1
}

botaoSortear.addEventListener("click", function () {
  const indiceSorteado = getRandomInt(amigos.length); // Sorteia um índice baseado no tamanho do array
  const amigoSorteado = amigos[indiceSorteado]; // Pega o nome correspondente ao índice
  if (amigoSorteado === undefined) {
    alert("Não é possível fazer um sorteio sem nomes!");
  } else {
    const resultadoSortear = document.getElementById("Resultado");
    resultadoSortear.innerText = `O amigo sorteado foi: ${amigoSorteado}`;
    const lista = document.getElementById("listaAmigos");
    lista.innerText = "";
  }
});
