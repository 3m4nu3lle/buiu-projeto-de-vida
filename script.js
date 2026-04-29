// Definição das datas dos objetivos
const tempoObjetivo1 = new Date("2026-12-31T23:59:00"); // Passar no ENEM
const tempoObjetivo2 = new Date("2030-12-31T23:59:00"); // Comprar um carro
const tempoObjetivo3 = new Date("2026-08-01T23:59:00"); // Conseguir um emprego
const tempoObjetivo4 = new Date("2027-05-31T23:59:00"); // Reformar meu quarto

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
