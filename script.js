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
// Definição das datas dos objetivos
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

// Lista com todos os tempos
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// Função que calcula o tempo restante
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;

  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  if (tempoFinal > 0) {
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0];
  }
}

// Função que atualiza todos os cronômetros
function atualizaCronometro() {
  for (let i = 0; i < tempos.length; i++) {
    let valores = calculaTempo(tempos[i]);
    document.getElementById("dias" + i).textContent = valores[0];
    document.getElementById("horas" + i).textContent = valores[1];
    document.getElementById("min" + i).textContent = valores[2];
    document.getElementById("seg" + i).textContent = valores[3];
  }
}

// Função que inicia o cronômetro
function comecaCronometro() {
  atualizaCronometro(); // inicia imediatamente
  setInterval(atualizaCronometro, 1000); // atualiza a cada segundo
}

comecaCronometro();

