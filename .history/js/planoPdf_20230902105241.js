// Define una función para abrir el PDF
function abrirPDF() {
  // Ruta al archivo PDF que deseas abrir
  const pdfUrl = "http://127.0.0.1:8080/aa.pdf";

  // Abre el PDF en una nueva ventana o pestaña
  window.open(pdfUrl, "_blank");
}

// Asocia la función al botón en el archivo HTML (debe existir en el DOM)
const abrirPdfButton = document.getElementById("abrirPdfButton");
abrirPdfButton.addEventListener("click", abrirPDF);
