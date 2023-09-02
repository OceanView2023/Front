document.getElementById("generar-pdf").addEventListener("click", function () {
  // Crear un objeto jsPDF
  var doc = new jsPDF();

  // Agregar contenido al PDF
  doc.text(20, 20, "¡Hola, este es un PDF generado desde JavaScript!");

  // Guardar el PDF en el disco o abrirlo en una nueva ventana/tabla
  doc.save("Ocean_view_cotizacion.pdf");
});
