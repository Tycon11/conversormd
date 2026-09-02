const select = document.getElementById("selec");
const status = document.getElementById("status");

function falar(texto) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "en-US";
  fala.rate = 1;
  fala.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(fala);
}

function anunciarOpcaoSelecionada() {
  if (!select || !status) return;

  const opcion = select.options[select.selectedIndex];

  if (!opcion || !opcion.value) {
    status.textContent = "Nenhuma moeda selecionada";
    return;
  }

  const texto = opcion.textContent.trim();
  status.textContent = `Moeda selecionada: ${texto}`;
  falar(texto);
}

select.addEventListener("change", anunciarOpcaoSelecionada);
select.addEventListener("focus", () => {
  falar("Conversor de Moedas.");
});
select.addEventListener("keydown", (event) => {
  if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
    setTimeout(anunciarOpcaoSelecionada, 100);
  }
});
document.getElementById("txtvalor").addEventListener("input", function () {
  const valor = this.value;

  if (valor !== "") {
    falar(` ${valor}`);
  }
});
function calculo() {
   txtvalor = parseFloat(document.getElementById("txtvalor").value);
  switch (document.getElementById("selec").value) {
    case "1":
      txtvalor = txtvalor/5.10;
      resultado.innerHTML ="<strong>Resultado:</strong> 💵 Dólar US$" + txtvalor.toFixed(2);
       const reais = Math.floor(txtvalor);
  const centavos = Math.round((txtvalor - reais) * 100);
      falar(` ${reais} Dólares e ${centavos} centavos`);
      break;
    case "2":
    txtvalor = txtvalor/5.91;
     const reais1 = Math.floor(txtvalor);
  const centavos1 = Math.round((txtvalor - reais1) * 100);
    resultado.innerHTML ="<strong>Resultado:</strong> 💶 Euro €" + txtvalor.toFixed(2);
      falar(`${reais1} Euros e ${centavos1} centavos`);
      break;
  }
}
