import {
  junio_norte_P_1_D_1,
  //   junio_norte_P_1_D_2,
  junio_norte_P_1_D_3,
  junio_norte_P_2_D_1,
  junio_norte_P_2_D_2,
  junio_norte_P_2_D_3,
  junio_norte_P_3_D_1,
  junio_norte_P_3_D_2,
  junio_norte_P_3_D_3,
  junio_norte_P_4_D_1,
  junio_norte_P_4_D_2,
  junio_norte_P_4_D_3,
  junio_norte_P_5_D_1,
  junio_norte_P_5_D_2,
  junio_norte_P_5_D_3,
  junio_norte_P_6_D_1,
  junio_norte_P_6_D_2,
  junio_norte_P_6_D_3,
} from "./meses-estado/6-junio-norte.js";

// primer piso
const junio_norte_p_1_d_1 = document.querySelector(".junio_norte_P_1_D_1");
junio_norte_p_1_d_1.classList.add(junio_norte_P_1_D_1.status);
const junio_norte_p_1_d_1Div =
  junio_norte_p_1_d_1.querySelector(".container-status");

if (junio_norte_P_1_D_1.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_1_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_1_D_1.unidad;

  junio_norte_p_1_d_1Div.appendChild(status_junio);
  junio_norte_p_1_d_1Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_1_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_1_D_1.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_1_D_1.precio;
  junio_norte_p_1_d_1Div.appendChild(status_junio);
  junio_norte_p_1_d_1Div.appendChild(unidad_junio);
  junio_norte_p_1_d_1Div.appendChild(precio_junio);
}

// const junio_norte_p_1_d_2 = document.querySelector(".junio_norte_P_1_D_2");
// junio_norte_p_1_d_2.classList.add(junio_norte_P_1_D_2);
// const junio_norte_p_1_d_2Div = junio_norte_p_1_d_2.querySelector("div");
// junio_norte_p_1_d_2Div.querySelector("p").innerHTML = junio_norte_P_1_D_2;

const junio_norte_p_1_d_3 = document.querySelector(".junio_norte_P_1_D_3");
junio_norte_p_1_d_3.classList.add(junio_norte_P_1_D_3.status);
const junio_norte_p_1_d_3Div =
  junio_norte_p_1_d_3.querySelector(".container-status");

if (junio_norte_P_1_D_3.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_1_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_1_D_3.unidad;

  junio_norte_p_1_d_3Div.appendChild(status_junio);
  junio_norte_p_1_d_3Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_1_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_1_D_3.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_1_D_3.precio;
  junio_norte_p_1_d_3Div.appendChild(status_junio);
  junio_norte_p_1_d_3Div.appendChild(unidad_junio);
  junio_norte_p_1_d_3Div.appendChild(precio_junio);
}

// segundo piso
const junio_norte_p_2_d_1 = document.querySelector(".junio_norte_P_2_D_1");
junio_norte_p_2_d_1.classList.add(junio_norte_P_2_D_1.status);
const junio_norte_p_2_d_1Div =
  junio_norte_p_2_d_1.querySelector(".container-status");

if (junio_norte_P_2_D_1.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_2_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_2_D_1.unidad;

  junio_norte_p_2_d_1Div.appendChild(status_junio);
  junio_norte_p_2_d_1Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_2_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_2_D_1.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_2_D_1.precio;
  junio_norte_p_2_d_1Div.appendChild(status_junio);
  junio_norte_p_2_d_1Div.appendChild(unidad_junio);
  junio_norte_p_2_d_1Div.appendChild(precio_junio);
}

const junio_norte_p_2_d_2 = document.querySelector(".junio_norte_P_2_D_2");
junio_norte_p_2_d_2.classList.add(junio_norte_P_2_D_2.status);
const junio_norte_p_2_d_2Div =
  junio_norte_p_2_d_2.querySelector(".container-status");

if (junio_norte_P_2_D_2.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_2_D_2.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_2_D_2.unidad;

  junio_norte_p_2_d_2Div.appendChild(status_junio);
  junio_norte_p_2_d_2Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_2_D_2.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_2_D_2.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_2_D_2.precio;
  junio_norte_p_2_d_2Div.appendChild(status_junio);
  junio_norte_p_2_d_2Div.appendChild(unidad_junio);
  junio_norte_p_2_d_2Div.appendChild(precio_junio);
}

const junio_norte_p_2_d_3 = document.querySelector(".junio_norte_P_2_D_3");
junio_norte_p_2_d_3.classList.add(junio_norte_P_2_D_3.status);
const junio_norte_p_2_d_3Div =
  junio_norte_p_2_d_3.querySelector(".container-status");

if (junio_norte_P_2_D_3.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_2_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_2_D_3.unidad;

  junio_norte_p_2_d_3Div.appendChild(status_junio);
  junio_norte_p_2_d_3Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_2_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_2_D_3.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_2_D_3.precio;
  junio_norte_p_2_d_3Div.appendChild(status_junio);
  junio_norte_p_2_d_3Div.appendChild(unidad_junio);
  junio_norte_p_2_d_3Div.appendChild(precio_junio);
}

// tercer piso
const junio_norte_p_3_d_1 = document.querySelector(".junio_norte_P_3_D_1");
junio_norte_p_3_d_1.classList.add(junio_norte_P_3_D_1.status);
const junio_norte_p_3_d_1Div =
  junio_norte_p_3_d_1.querySelector(".container-status");

if (junio_norte_P_3_D_1.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_3_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_3_D_1.unidad;

  junio_norte_p_3_d_1Div.appendChild(status_junio);
  junio_norte_p_3_d_1Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_3_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_3_D_1.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_3_D_1.precio;
  junio_norte_p_3_d_1Div.appendChild(status_junio);
  junio_norte_p_3_d_1Div.appendChild(unidad_junio);
  junio_norte_p_3_d_1Div.appendChild(precio_junio);
}

const junio_norte_p_3_d_2 = document.querySelector(".junio_norte_P_3_D_2");
junio_norte_p_3_d_2.classList.add(junio_norte_P_3_D_2.status);
const junio_norte_p_3_d_2Div =
  junio_norte_p_3_d_2.querySelector(".container-status");

if (junio_norte_P_3_D_2.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_3_D_2.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_3_D_2.unidad;

  junio_norte_p_3_d_2Div.appendChild(status_junio);
  junio_norte_p_3_d_2Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_3_D_2.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_3_D_2.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_3_D_2.precio;
  junio_norte_p_3_d_2Div.appendChild(status_junio);
  junio_norte_p_3_d_2Div.appendChild(unidad_junio);
  junio_norte_p_3_d_2Div.appendChild(precio_junio);
}

const junio_norte_p_3_d_3 = document.querySelector(".junio_norte_P_3_D_3");
junio_norte_p_3_d_3.classList.add(junio_norte_P_3_D_3.status);
const junio_norte_p_3_d_3Div =
  junio_norte_p_3_d_3.querySelector(".container-status");

if (junio_norte_P_3_D_3.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_3_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_3_D_3.unidad;

  junio_norte_p_3_d_3Div.appendChild(status_junio);
  junio_norte_p_3_d_3Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_3_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_3_D_3.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_3_D_3.precio;
  junio_norte_p_3_d_3Div.appendChild(status_junio);
  junio_norte_p_3_d_3Div.appendChild(unidad_junio);
  junio_norte_p_3_d_3Div.appendChild(precio_junio);
}

// cuarto piso
const junio_norte_p_4_d_1 = document.querySelector(".junio_norte_P_4_D_1");
junio_norte_p_4_d_1.classList.add(junio_norte_P_4_D_1.status);
const junio_norte_p_4_d_1Div =
  junio_norte_p_4_d_1.querySelector(".container-status");

if (junio_norte_P_4_D_1.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_4_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_4_D_1.unidad;

  junio_norte_p_4_d_1Div.appendChild(status_junio);
  junio_norte_p_4_d_1Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_4_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_4_D_1.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_4_D_1.precio;
  junio_norte_p_4_d_1Div.appendChild(status_junio);
  junio_norte_p_4_d_1Div.appendChild(unidad_junio);
  junio_norte_p_4_d_1Div.appendChild(precio_junio);
}

const junio_norte_p_4_d_2 = document.querySelector(".junio_norte_P_4_D_2");
junio_norte_p_4_d_2.classList.add(junio_norte_P_4_D_2.status);
const junio_norte_p_4_d_2Div =
  junio_norte_p_4_d_2.querySelector(".container-status");

if (junio_norte_P_4_D_2.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_4_D_2.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_4_D_2.unidad;

  junio_norte_p_4_d_2Div.appendChild(status_junio);
  junio_norte_p_4_d_2Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_4_D_2.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_4_D_2.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_4_D_2.precio;
  junio_norte_p_4_d_2Div.appendChild(status_junio);
  junio_norte_p_4_d_2Div.appendChild(unidad_junio);
  junio_norte_p_4_d_2Div.appendChild(precio_junio);
}

const junio_norte_p_4_d_3 = document.querySelector(".junio_norte_P_4_D_3");
junio_norte_p_4_d_3.classList.add(junio_norte_P_4_D_3.status);
const junio_norte_p_4_d_3Div =
  junio_norte_p_4_d_3.querySelector(".container-status");

if (junio_norte_P_4_D_3.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_4_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_4_D_3.unidad;

  junio_norte_p_4_d_3Div.appendChild(status_junio);
  junio_norte_p_4_d_3Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_4_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_4_D_3.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_4_D_3.precio;
  junio_norte_p_4_d_3Div.appendChild(status_junio);
  junio_norte_p_4_d_3Div.appendChild(unidad_junio);
  junio_norte_p_4_d_3Div.appendChild(precio_junio);
}

// quinto piso
const junio_norte_p_5_d_1 = document.querySelector(".junio_norte_P_5_D_1");
junio_norte_p_5_d_1.classList.add(junio_norte_P_5_D_1.status);
const junio_norte_p_5_d_1Div =
  junio_norte_p_5_d_1.querySelector(".container-status");

if (junio_norte_P_5_D_1.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_5_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_5_D_1.unidad;

  junio_norte_p_5_d_1Div.appendChild(status_junio);
  junio_norte_p_5_d_1Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_5_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_5_D_1.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_5_D_1.precio;
  junio_norte_p_5_d_1Div.appendChild(status_junio);
  junio_norte_p_5_d_1Div.appendChild(unidad_junio);
  junio_norte_p_5_d_1Div.appendChild(precio_junio);
}

const junio_norte_p_5_d_2 = document.querySelector(".junio_norte_P_5_D_2");
junio_norte_p_5_d_2.classList.add(junio_norte_P_5_D_2.status);
const junio_norte_p_5_d_2Div =
  junio_norte_p_5_d_2.querySelector(".container-status");

if (junio_norte_P_5_D_2.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_5_D_2.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_5_D_2.unidad;

  junio_norte_p_5_d_2Div.appendChild(status_junio);
  junio_norte_p_5_d_2Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_5_D_2.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_5_D_2.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_5_D_2.precio;
  junio_norte_p_5_d_2Div.appendChild(status_junio);
  junio_norte_p_5_d_2Div.appendChild(unidad_junio);
  junio_norte_p_5_d_2Div.appendChild(precio_junio);
}

const junio_norte_p_5_d_3 = document.querySelector(".junio_norte_P_5_D_3");
junio_norte_p_5_d_3.classList.add(junio_norte_P_5_D_3.status);
const junio_norte_p_5_d_3Div =
  junio_norte_p_5_d_3.querySelector(".container-status");

if (junio_norte_P_5_D_3.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_5_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_5_D_3.unidad;

  junio_norte_p_5_d_3Div.appendChild(status_junio);
  junio_norte_p_5_d_3Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_5_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_5_D_3.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_5_D_3.precio;
  junio_norte_p_5_d_3Div.appendChild(status_junio);
  junio_norte_p_5_d_3Div.appendChild(unidad_junio);
  junio_norte_p_5_d_3Div.appendChild(precio_junio);
}

// sexto piso
const junio_norte_p_6_d_1 = document.querySelector(".junio_norte_P_6_D_1");
junio_norte_p_6_d_1.classList.add(junio_norte_P_6_D_1.status);
const junio_norte_p_6_d_1Div =
  junio_norte_p_6_d_1.querySelector(".container-status");

if (junio_norte_P_6_D_1.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_6_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_6_D_1.unidad;

  junio_norte_p_6_d_1Div.appendChild(status_junio);
  junio_norte_p_6_d_1Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_6_D_1.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_6_D_1.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_6_D_1.precio;
  junio_norte_p_6_d_1Div.appendChild(status_junio);
  junio_norte_p_6_d_1Div.appendChild(unidad_junio);
  junio_norte_p_6_d_1Div.appendChild(precio_junio);
}

const junio_norte_p_6_d_2 = document.querySelector(".junio_norte_P_6_D_2");
junio_norte_p_6_d_2.classList.add(junio_norte_P_6_D_2.status);
const junio_norte_p_6_d_2Div =
  junio_norte_p_6_d_2.querySelector(".container-status");

if (junio_norte_P_6_D_2.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_6_D_2.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_6_D_2.unidad;

  junio_norte_p_6_d_2Div.appendChild(status_junio);
  junio_norte_p_6_d_2Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_6_D_2.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_6_D_2.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_6_D_2.precio;
  junio_norte_p_6_d_2Div.appendChild(status_junio);
  junio_norte_p_6_d_2Div.appendChild(unidad_junio);
  junio_norte_p_6_d_2Div.appendChild(precio_junio);
}

const junio_norte_p_6_d_3 = document.querySelector(".junio_norte_P_6_D_3");
junio_norte_p_6_d_3.classList.add(junio_norte_P_6_D_3.status);
const junio_norte_p_6_d_3Div =
  junio_norte_p_6_d_3.querySelector(".container-status");

if (junio_norte_P_6_D_3.status !== "Disponible") {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_6_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_6_D_3.unidad;

  junio_norte_p_6_d_3Div.appendChild(status_junio);
  junio_norte_p_6_d_3Div.appendChild(unidad_junio);
} else {
  const status_junio = document.createElement("p");
  status_junio.classList.add("status_depart");
  status_junio.innerHTML = junio_norte_P_6_D_3.status;

  const unidad_junio = document.createElement("p");
  unidad_junio.classList.add("unidad_depart");
  unidad_junio.innerHTML = "Unidad: " + junio_norte_P_6_D_3.unidad;

  const precio_junio = document.createElement("p");
  precio_junio.classList.add("precio_depart");
  precio_junio.innerHTML = "Precio lista: $" + junio_norte_P_6_D_3.precio;
  junio_norte_p_6_d_3Div.appendChild(status_junio);
  junio_norte_p_6_d_3Div.appendChild(unidad_junio);
  junio_norte_p_6_d_3Div.appendChild(precio_junio);
}
