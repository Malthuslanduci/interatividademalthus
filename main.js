// Seleciona os elementos necessários
const botao = document.getElementById("botao");
const lamapada = document.getElementById("lampada");
const statusTexto = document.getElementById("status");

//Função para alternar o estado da lampada
function alternarLampada() {
  if (botao.textContent == "ligar") {
    //MUda para o estado "aceso"
    lampada.src = "ligado-removebg-preview.png"; //Caminho da imagem acesa
    botao.textContent = "desligar"; //Muda o texto do botão para "Apagar"
    statusTexto.textContent = "aceso"; //Muda o status para "Aceso"
    statusTexto.style.color = "orange"; //Muda o cor do texto para "laranja"
    statusTexto.style.fontsize = "30px";
  } else {
    //Muda para o estado "apagado"
    lampada.src = "apagado-removebg-preview.png"; //Caminho da imagem apagada
    botao.textContent = "ligar"; //Muda o texto do botão para "Ligar"
    statusTexto.textContent = "apagado"; //Muda o status para "Apagado"
    statusTexto.style.color = "rgb(126, 125, 125)"; //Muda a cor do texto para "vermelho"
    statusTexto.style.fontsize = "30px";
  }
}
//Adiciona um evento de clique ao botão
botao.addEventListener("click", alternarLampada);
