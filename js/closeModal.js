const buttonCloseModal = document.getElementById("close-modal");
const modalCotizador = document.getElementById("modal-cotizador");
buttonCloseModal.addEventListener("click", closeModal);

function closeModal() {
  document.getElementById("modal-cotizador").style = "display: none";
  //   modalCotizador.style.display = "none";
}
