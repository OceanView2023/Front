import {
  enero_norte_P_1_D_1,
  //   enero_norte_P_1_D_2,
  enero_norte_P_1_D_3,
  enero_norte_P_2_D_1,
  enero_norte_P_2_D_2,
  enero_norte_P_2_D_3,
  enero_norte_P_3_D_1,
  enero_norte_P_3_D_2,
  enero_norte_P_3_D_3,
  enero_norte_P_4_D_1,
  enero_norte_P_4_D_2,
  enero_norte_P_4_D_3,
  enero_norte_P_5_D_1,
  enero_norte_P_5_D_2,
  enero_norte_P_5_D_3,
  enero_norte_P_6_D_1,
  enero_norte_P_6_D_2,
  enero_norte_P_6_D_3,
} from "./meses-estado/1-enero-norte.js";

// primer piso
const enero_norte_p_1_d_1 = document.querySelector(".enero_norte_P_1_D_1");
enero_norte_p_1_d_1.classList.add(enero_norte_P_1_D_1.status);
const enero_norte_p_1_d_1Div =
  enero_norte_p_1_d_1.querySelector(".container-status");

if (enero_norte_P_1_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_1_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_1_D_1.unidad;

  enero_norte_p_1_d_1Div.appendChild(status_enero);
  enero_norte_p_1_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_1_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_1_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_1_D_1.precio;
  enero_norte_p_1_d_1Div.appendChild(status_enero);
  enero_norte_p_1_d_1Div.appendChild(unidad_enero);
  enero_norte_p_1_d_1Div.appendChild(precio_enero);
}

// const enero_norte_p_1_d_2 = document.querySelector(".enero_norte_P_1_D_2");
// enero_norte_p_1_d_2.classList.add(enero_norte_P_1_D_2);
// const enero_norte_p_1_d_2Div = enero_norte_p_1_d_2.querySelector("div");
// enero_norte_p_1_d_2Div.querySelector("p").innerHTML = enero_norte_P_1_D_2;

const enero_norte_p_1_d_3 = document.querySelector(".enero_norte_P_1_D_3");
enero_norte_p_1_d_3.classList.add(enero_norte_P_1_D_3.status);
const enero_norte_p_1_d_3Div =
  enero_norte_p_1_d_3.querySelector(".container-status");

if (enero_norte_P_1_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_1_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_1_D_3.unidad;

  enero_norte_p_1_d_3Div.appendChild(status_enero);
  enero_norte_p_1_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_1_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_1_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_1_D_3.precio;
  enero_norte_p_1_d_3Div.appendChild(status_enero);
  enero_norte_p_1_d_3Div.appendChild(unidad_enero);
  enero_norte_p_1_d_3Div.appendChild(precio_enero);
}
// document.addEventListener("DOMContentLoaded", function () {
//   const modal = document.getElementById("modal");
//   const closeModalButton = document.getElementById("closeModalButton");

//   // Abrir el modal al hacer clic en el botón
//   enero_norte_p_1_d_3.addEventListener("click", function () {
//     modal.style.display = "block";
//   });

//   // Cerrar el modal al hacer clic en el botón de cierre
//   closeModalButton.addEventListener("click", function () {
//     modal.style.display = "none";
//   });

//   // Cerrar el modal si se hace clic fuera del contenido del modal
//   window.addEventListener("click", function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   });
// });

// segundo piso
const enero_norte_p_2_d_1 = document.querySelector(".enero_norte_P_2_D_1");
enero_norte_p_2_d_1.classList.add(enero_norte_P_2_D_1.status);
const enero_norte_p_2_d_1Div =
  enero_norte_p_2_d_1.querySelector(".container-status");

if (enero_norte_P_2_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_2_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_2_D_1.unidad;

  enero_norte_p_2_d_1Div.appendChild(status_enero);
  enero_norte_p_2_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_2_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_2_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_2_D_1.precio;
  enero_norte_p_2_d_1Div.appendChild(status_enero);
  enero_norte_p_2_d_1Div.appendChild(unidad_enero);
  enero_norte_p_2_d_1Div.appendChild(precio_enero);
}

const enero_norte_p_2_d_2 = document.querySelector(".enero_norte_P_2_D_2");
enero_norte_p_2_d_2.classList.add(enero_norte_P_2_D_2.status);
const enero_norte_p_2_d_2Div =
  enero_norte_p_2_d_2.querySelector(".container-status");

if (enero_norte_P_2_D_2.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_2_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_2_D_2.unidad;

  enero_norte_p_2_d_2Div.appendChild(status_enero);
  enero_norte_p_2_d_2Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_2_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_2_D_2.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_2_D_2.precio;
  enero_norte_p_2_d_2Div.appendChild(status_enero);
  enero_norte_p_2_d_2Div.appendChild(unidad_enero);
  enero_norte_p_2_d_2Div.appendChild(precio_enero);
}

const enero_norte_p_2_d_3 = document.querySelector(".enero_norte_P_2_D_3");
enero_norte_p_2_d_3.classList.add(enero_norte_P_2_D_3.status);
const enero_norte_p_2_d_3Div =
  enero_norte_p_2_d_3.querySelector(".container-status");

if (enero_norte_P_2_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_2_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_2_D_3.unidad;

  enero_norte_p_2_d_3Div.appendChild(status_enero);
  enero_norte_p_2_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_2_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_2_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_2_D_3.precio;
  enero_norte_p_2_d_3Div.appendChild(status_enero);
  enero_norte_p_2_d_3Div.appendChild(unidad_enero);
  enero_norte_p_2_d_3Div.appendChild(precio_enero);
}

// tercer piso
const enero_norte_p_3_d_1 = document.querySelector(".enero_norte_P_3_D_1");
enero_norte_p_3_d_1.classList.add(enero_norte_P_3_D_1.status);
const enero_norte_p_3_d_1Div =
  enero_norte_p_3_d_1.querySelector(".container-status");

if (enero_norte_P_3_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_3_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_3_D_1.unidad;

  enero_norte_p_3_d_1Div.appendChild(status_enero);
  enero_norte_p_3_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_3_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_3_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_3_D_1.precio;
  enero_norte_p_3_d_1Div.appendChild(status_enero);
  enero_norte_p_3_d_1Div.appendChild(unidad_enero);
  enero_norte_p_3_d_1Div.appendChild(precio_enero);
}

const enero_norte_p_3_d_2 = document.querySelector(".enero_norte_P_3_D_2");
enero_norte_p_3_d_2.classList.add(enero_norte_P_3_D_2.status);
const enero_norte_p_3_d_2Div =
  enero_norte_p_3_d_2.querySelector(".container-status");

if (enero_norte_P_3_D_2.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_3_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_3_D_2.unidad;

  enero_norte_p_3_d_2Div.appendChild(status_enero);
  enero_norte_p_3_d_2Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_3_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_3_D_2.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_3_D_2.precio;
  enero_norte_p_3_d_2Div.appendChild(status_enero);
  enero_norte_p_3_d_2Div.appendChild(unidad_enero);
  enero_norte_p_3_d_2Div.appendChild(precio_enero);
}

const enero_norte_p_3_d_3 = document.querySelector(".enero_norte_P_3_D_3");
enero_norte_p_3_d_3.classList.add(enero_norte_P_3_D_3.status);
const enero_norte_p_3_d_3Div =
  enero_norte_p_3_d_3.querySelector(".container-status");

if (enero_norte_P_3_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_3_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_3_D_3.unidad;

  enero_norte_p_3_d_3Div.appendChild(status_enero);
  enero_norte_p_3_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_3_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_3_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_3_D_3.precio;
  enero_norte_p_3_d_3Div.appendChild(status_enero);
  enero_norte_p_3_d_3Div.appendChild(unidad_enero);
  enero_norte_p_3_d_3Div.appendChild(precio_enero);
}

// cuarto piso
const enero_norte_p_4_d_1 = document.querySelector(".enero_norte_P_4_D_1");
enero_norte_p_4_d_1.classList.add(enero_norte_P_4_D_1.status);
const enero_norte_p_4_d_1Div =
  enero_norte_p_4_d_1.querySelector(".container-status");

if (enero_norte_P_4_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_4_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_4_D_1.unidad;

  enero_norte_p_4_d_1Div.appendChild(status_enero);
  enero_norte_p_4_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_4_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_4_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_4_D_1.precio;
  enero_norte_p_4_d_1Div.appendChild(status_enero);
  enero_norte_p_4_d_1Div.appendChild(unidad_enero);
  enero_norte_p_4_d_1Div.appendChild(precio_enero);
}

const enero_norte_p_4_d_2 = document.querySelector(".enero_norte_P_4_D_2");
enero_norte_p_4_d_2.classList.add(enero_norte_P_4_D_2.status);
const enero_norte_p_4_d_2Div =
  enero_norte_p_4_d_2.querySelector(".container-status");

if (enero_norte_P_4_D_2.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_4_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_4_D_2.unidad;

  enero_norte_p_4_d_2Div.appendChild(status_enero);
  enero_norte_p_4_d_2Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_4_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_4_D_2.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_4_D_2.precio;
  enero_norte_p_4_d_2Div.appendChild(status_enero);
  enero_norte_p_4_d_2Div.appendChild(unidad_enero);
  enero_norte_p_4_d_2Div.appendChild(precio_enero);
}

const enero_norte_p_4_d_3 = document.querySelector(".enero_norte_P_4_D_3");
enero_norte_p_4_d_3.classList.add(enero_norte_P_4_D_3.status);
const enero_norte_p_4_d_3Div =
  enero_norte_p_4_d_3.querySelector(".container-status");

if (enero_norte_P_4_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_4_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_4_D_3.unidad;

  enero_norte_p_4_d_3Div.appendChild(status_enero);
  enero_norte_p_4_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_4_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_4_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_4_D_3.precio;
  enero_norte_p_4_d_3Div.appendChild(status_enero);
  enero_norte_p_4_d_3Div.appendChild(unidad_enero);
  enero_norte_p_4_d_3Div.appendChild(precio_enero);
}

// quinto piso
const enero_norte_p_5_d_1 = document.querySelector(".enero_norte_P_5_D_1");
enero_norte_p_5_d_1.classList.add(enero_norte_P_5_D_1.status);
const enero_norte_p_5_d_1Div =
  enero_norte_p_5_d_1.querySelector(".container-status");

if (enero_norte_P_5_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_5_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_5_D_1.unidad;

  enero_norte_p_5_d_1Div.appendChild(status_enero);
  enero_norte_p_5_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_5_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_5_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_5_D_1.precio;
  enero_norte_p_5_d_1Div.appendChild(status_enero);
  enero_norte_p_5_d_1Div.appendChild(unidad_enero);
  enero_norte_p_5_d_1Div.appendChild(precio_enero);
}

const enero_norte_p_5_d_2 = document.querySelector(".enero_norte_P_5_D_2");
enero_norte_p_5_d_2.classList.add(enero_norte_P_5_D_2.status);
const enero_norte_p_5_d_2Div =
  enero_norte_p_5_d_2.querySelector(".container-status");

if (enero_norte_P_5_D_2.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_5_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_5_D_2.unidad;

  enero_norte_p_5_d_2Div.appendChild(status_enero);
  enero_norte_p_5_d_2Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_5_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_5_D_2.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_5_D_2.precio;
  enero_norte_p_5_d_2Div.appendChild(status_enero);
  enero_norte_p_5_d_2Div.appendChild(unidad_enero);
  enero_norte_p_5_d_2Div.appendChild(precio_enero);
}

const enero_norte_p_5_d_3 = document.querySelector(".enero_norte_P_5_D_3");
enero_norte_p_5_d_3.classList.add(enero_norte_P_5_D_3.status);
const enero_norte_p_5_d_3Div =
  enero_norte_p_5_d_3.querySelector(".container-status");

if (enero_norte_P_5_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_5_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_5_D_3.unidad;

  enero_norte_p_5_d_3Div.appendChild(status_enero);
  enero_norte_p_5_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_5_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_5_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_5_D_3.precio;
  enero_norte_p_5_d_3Div.appendChild(status_enero);
  enero_norte_p_5_d_3Div.appendChild(unidad_enero);
  enero_norte_p_5_d_3Div.appendChild(precio_enero);
}

// sexto piso
const enero_norte_p_6_d_1 = document.querySelector(".enero_norte_P_6_D_1");
enero_norte_p_6_d_1.classList.add(enero_norte_P_6_D_1.status);
const enero_norte_p_6_d_1Div =
  enero_norte_p_6_d_1.querySelector(".container-status");

if (enero_norte_P_6_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_6_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_6_D_1.unidad;

  enero_norte_p_6_d_1Div.appendChild(status_enero);
  enero_norte_p_6_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_6_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_6_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_6_D_1.precio;
  enero_norte_p_6_d_1Div.appendChild(status_enero);
  enero_norte_p_6_d_1Div.appendChild(unidad_enero);
  enero_norte_p_6_d_1Div.appendChild(precio_enero);
}

const enero_norte_p_6_d_2 = document.querySelector(".enero_norte_P_6_D_2");
enero_norte_p_6_d_2.classList.add(enero_norte_P_6_D_2.status);
const enero_norte_p_6_d_2Div =
  enero_norte_p_6_d_2.querySelector(".container-status");

if (enero_norte_P_6_D_2.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_6_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_6_D_2.unidad;

  enero_norte_p_6_d_2Div.appendChild(status_enero);
  enero_norte_p_6_d_2Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_6_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_6_D_2.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_6_D_2.precio;
  enero_norte_p_6_d_2Div.appendChild(status_enero);
  enero_norte_p_6_d_2Div.appendChild(unidad_enero);
  enero_norte_p_6_d_2Div.appendChild(precio_enero);
}

const enero_norte_p_6_d_3 = document.querySelector(".enero_norte_P_6_D_3");
enero_norte_p_6_d_3.classList.add(enero_norte_P_6_D_3.status);
const enero_norte_p_6_d_3Div =
  enero_norte_p_6_d_3.querySelector(".container-status");

if (enero_norte_P_6_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_6_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_6_D_3.unidad;

  enero_norte_p_6_d_3Div.appendChild(status_enero);
  enero_norte_p_6_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_norte_P_6_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = enero_norte_P_6_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = enero_norte_P_6_D_3.precio;
  enero_norte_p_6_d_3Div.appendChild(status_enero);
  enero_norte_p_6_d_3Div.appendChild(unidad_enero);
  enero_norte_p_6_d_3Div.appendChild(precio_enero);
}
