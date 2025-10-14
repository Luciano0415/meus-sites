document.addEventListener("DOMContentLoaded", function () {
  const btnCalcular = document.getElementById("btnCalcular");
  const pecasInsp = document.getElementById("pecasInsp");
  const pecasPorHora = document.getElementById("pecasPorHora");
  const textoInfo = document.getElementById("textoInfo");

  btnCalcular.addEventListener("click", function () {
    const pecas = pecasInsp.value.trim();
    const meta = pecasPorHora.value.trim();

    if (!pecas || !meta) {
      textoInfo.textContent = "⚠️ Por favor, preencha os campos vazios.";
      textoInfo.style.color = "yellow";
      return;
    }

    const pecasNum = parseInt(pecas);
    const metaNum = parseInt(meta);

    if (isNaN(pecasNum) || isNaN(metaNum)) {
      textoInfo.textContent = "⚠️ Por favor, insira apenas números válidos.";
      textoInfo.style.color = "red";
      return;
    }

    if (metaNum === 0) {
      textoInfo.textContent = "⚠️ A quantidade por hora não pode ser zero.";
      textoInfo.style.color = "red";
      return;
    }

    // cálculo
    const horasDecimais = pecasNum / metaNum;
    const horas = Math.floor(horasDecimais);
    const minutos = Math.floor((horasDecimais - horas) * 60);

    if (minutos === 0) {
      textoInfo.textContent = `As ${pecasNum} peças equivalem a ${horas} hora(s) de trabalho.`;
    } else {
      textoInfo.textContent = `As ${pecasNum} peças equivalem a ${horas} hora(s) e ${minutos} minuto(s) de trabalho.`;
    }

    textoInfo.style.color = "lightgreen";
  });
});
