// Define una función para abrir el PDF
function abrirPDF() {
  // Ruta al archivo PDF que deseas abrir
  const pdfUrl = "ruta/al/archivo.pdf";

  // Abre el PDF en una nueva ventana o pestaña
  window.open(pdfUrl, "_blank");
}

// Asocia la función al botón en el archivo HTML (debe existir en el DOM)
const abrirPdfButton = document.getElementById("abrirPdfButton");
abrirPdfButton.addEventListener("click", abrirPDF);
