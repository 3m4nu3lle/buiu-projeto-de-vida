// Definição das datas dos objetivos
const tempoObjetivo1 = new Date("2026-12-31T23:59:00"); // Passar no ENEM
const tempoObjetivo2 = new Date("2030-12-31T23:59:00"); // Comprar um carro
const tempoObjetivo3 = new Date("2026-08-01T23:59:00"); // Conseguir um emprego
const tempoObjetivo4 = new Date("2027-05-31T23:59:00"); // Reformar meu quarto

// Lista com todos os tempos
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// Função para calcular tempo restante
function calculaTempo(tempoObjetivo) {
  let agora = new Date();
  let diff = tempoObjetivo - agora;

  let segundos = Math.floor(diff / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  return diff > 0 ? [dias, horas, minutos, segundos] : [0, 0, 0, 0];
}

// Atualiza cronômetro
function atualizaCronometro() {
  for (let i = 0; i < tempos.length; i++) {
    let valores = calculaTempo(tempos[i]);
    document.getElementById("dias" + i).textContent = valores[0];
    document.getElementById("horas" + i).textContent = valores[1];
    document.getElementById("min" + i).textContent = valores[2];
    document.getElementById("seg" + i).textContent = valores[3];
  }
}

// Mostrar cronômetro ao clicar
function mostrarCronometro(indice) {
  let cronometro = document.getElementById("cronometro" + indice);
  cronometro.style.display = cronometro.style.display === "block" ? "none" : "block";
}

// Inicia atualização
setInterval(atualizaCronometro, 1000);