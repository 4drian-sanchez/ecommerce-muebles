const modal = document.querySelector("#modal-imagen");

if (modal) {
  modal.addEventListener("show.bs.modal", (e) => {
    const imagenId = e.relatedTarget.dataset.bsImagen;
    const imagen = document.createElement("IMG");
    imagen.src = `../img/${imagenId}.jpg`;
    imagen.alt = "Imagen de la galeria";
    imagen.classList.add("img-fluid");

    const modalBody = document.querySelector(".modal-body");

    while (modalBody.firstChild) {
      modalBody.removeChild(modalBody.firstChild);
    }
    modalBody.appendChild(imagen);
  });
}

/* Validacion del fomulario */
const forms = document.querySelectorAll(".needs-validation");
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});
