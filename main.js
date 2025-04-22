const botoes = document.querySelectorAll('.botao');
const abasConteudo = document.querySelectorAll(".aba-conteudo");
// Mostrar a primeira aba por padrão
abasConteudo[0].classList.add("ativo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    // Remove a classe ativo de todos os botões
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }
    // Adiciona a classe ativo ao botão clicado
    botoes[i].classList.add("ativo");
    
    // Remove a classe ativo de todas as abas
    for (let j = 0; j < abasConteudo.length; j++) {
      abasConteudo[j].classList.remove("ativo");
    }
    // Adiciona a classe ativo à aba correspondente
    abasConteudo[i].classList.add("ativo");
  };
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-01-01T00:00:00Z");
const TempoAtual = new Date();
contadores[0].textContent = calcularTempo(tempoObjetivo1);

function calcularTempo (tempoObjetivo1) {
 let TempoAtual = new Date ();
 let TempoFinal = tempoObjetivo1 - TempoAtual;
 let segundos = Math.floor(TempoFinal / 1000);
 let minutos = Math.floor (segundos / 60);
 let horas = Math.floor (minutos / 60);
 let dias = Math.floor(horas / 24);

 segundos %= 60;
 minutos %= 60;
 horas %= 24;

 return `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos restantes até o objetivo.`;

};

