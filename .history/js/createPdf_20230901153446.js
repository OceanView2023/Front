<script>
document.getElementById("generarPDF").addEventListener("click", function () {
  // Crear un objeto jsPDF
  var doc = new jsPDF();

  // Agregar contenido al PDF
  doc.text("¡Hola, este es un PDF generado desde JavaScript!", 10, 10);

  // Guardar el PDF en el disco o abrirlo en una nueva ventana/tabla
  doc.save("mi_documento.pdf");
});
</script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>