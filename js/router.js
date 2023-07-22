// const mes1 = document.getElementById("mes1");
// const mes2 = document.getElementById("mes2");
// const mes3 = document.getElementById("mes3");
// const mes4 = document.getElementById("mes4");
// const mes5 = document.getElementById("mes5");
// const mes6 = document.getElementById("mes6");
// const mes7 = document.getElementById("mes7");
// const mes8 = document.getElementById("mes8");
// const mes9 = document.getElementById("mes9");
// const mes10 = document.getElementById("mes10");
// const mes11 = document.getElementById("mes11");
// const mes12 = document.getElementById("mes12");

// mes1.addEventListener("click", nextPregunta);
// mes2.addEventListener("click", nextPregunta);
// mes3.addEventListener("click", nextPregunta);
// mes4.addEventListener("click", nextPregunta);
// mes5.addEventListener("click", nextPregunta);
// mes6.addEventListener("click", nextPregunta);
// mes7.addEventListener("click", nextPregunta);
// mes8.addEventListener("click", nextPregunta);
// mes9.addEventListener("click", nextPregunta);
// mes10.addEventListener("click", nextPregunta);
// mes11.addEventListener("click", nextPregunta);
// mes12.addEventListener("click", nextPregunta);

const mes1 = document.getElementById("mes1");
const mes2 = document.getElementById("mes2");
const mes3 = document.getElementById("mes3");

mes1.addEventListener("click", nextMes);
mes2.addEventListener("click", nextMes);
mes3.addEventListener("click", nextMes);

function nextMes(event) {
  console.log("click");
  const $tabPreguntaSelected = event.currentTarget;
  const $id = event.currentTarget.id;
  const $tabPreguntaActive = document.querySelector(
    ".tab[aria-selected='true']"
  );

  const $tabContent = document.querySelector(`[aria-labelledby=${$id}]`);
  const $tabPreguntaPanelSelected = document.querySelector(
    `.tab-content:not([style*="opacity: 0"])`
  );
  if ($tabContent.hidden === true) {
    $tabPreguntaActive.removeAttribute("aria-selected");
    $tabPreguntaSelected.setAttribute("aria-selected", true);
    $tabContent.hidden = false;
    $tabContent.style.opacity = 1;
    $tabContent.style.height = "auto";
    $tabPreguntaPanelSelected.hidden = true;
    $tabPreguntaPanelSelected.style.opacity = 0;
    $tabPreguntaPanelSelected.style.height = 0;
  }
}

nextMes({
  currentTarget: document.getElementById("mes1"),
});
