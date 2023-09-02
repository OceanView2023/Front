document.getElementById("generar-pdf").addEventListener("click", function () {
  // Crear un objeto jsPDF
  var doc = new jsPDF();

  // Agregar contenido al PDF
  doc.text("¡Hola, este es un PDF generado desde JavaScript!", 10, 10);

  // Guardar el PDF en el disco o abrirlo en una nueva ventana/tabla
  doc.save("mi_documento.pdf");
});
