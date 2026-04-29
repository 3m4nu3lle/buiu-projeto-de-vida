// Função para criar contador até uma data específica
function criarContador(dataAlvo, elementoId) {
  function atualizar() {
    const alvo = new Date(dataAlvo).getTime();
    const agora = new Date().getTime();
    const distancia = alvo - agora;

    if (distancia < 0) {
      document.getElementById(elementoId).innerText = "Objetivo alcançado!";
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById(elementoId).innerText =
      `Faltam ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
  }
  setInterval(atualizar, 1000);
  atualizar();
}

// Alternar objetivos
const botoes = document.querySelectorAll(".botao");
const detalhes = document.getElementById("detalhes");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    document.querySelector(".botao.ativo").classList.remove("ativo");
    botao.classList.add("ativo");

    switch(botao.dataset.objetivo) {
      case "enem":
        detalhes.innerHTML = "<h2>Passar no ENEM 2026</h2><p>Data: 31 de dezembro de 2026 às 23:59.</p><p><span id='contador'></span></p>";
        criarContador("December 31, 2026 23:59:00", "contador");
        break;
      case "carro":
        detalhes.innerHTML = "<h2>Comprar um carro</h2><p>Prazo: 31 de dezembro de 2030 às 23:59.</p><p><span id='contador'></span></p>";
        criarContador("December 31, 2030 23:59:00", "contador");
        break;
      case "emprego":
        detalhes.innerHTML = "<h2>Conseguir emprego</h2><p>Prazo: 1º de agosto de 2026 às 23:59.</p><p><span id='contador'></span></p>";
        criarContador("August 1, 2026 23:59:00", "contador");
        break;
      case "quarto":
        detalhes.innerHTML = "<h2>Reformar meu quarto</h2><p>Prazo: maio de 2027 às 23:59.</p><p><span id='contador'></span></p>";
        criarContador("May 31, 2027 23:59:00", "contador");
        break;
    }
  });
});

// Inicializa contador do primeiro objetivo
criarContador("December 31, 2026 23:59:00", "contador");
