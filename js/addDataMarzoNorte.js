import {
  marzo_norte_P_1_D_1,
  //   marzo_norte_P_1_D_2,
  marzo_norte_P_1_D_3,
  marzo_norte_P_2_D_1,
  marzo_norte_P_2_D_2,
  marzo_norte_P_2_D_3,
  marzo_norte_P_3_D_1,
  marzo_norte_P_3_D_2,
  marzo_norte_P_3_D_3,
  marzo_norte_P_4_D_1,
  marzo_norte_P_4_D_2,
  marzo_norte_P_4_D_3,
  marzo_norte_P_5_D_1,
  marzo_norte_P_5_D_2,
  marzo_norte_P_5_D_3,
  marzo_norte_P_6_D_1,
  marzo_norte_P_6_D_2,
  marzo_norte_P_6_D_3,
} from "./meses-estado/3-marzo-norte.js";

// primer piso
const marzo_norte_p_1_d_1 = document.querySelector(".marzo_norte_P_1_D_1");
marzo_norte_p_1_d_1.classList.add(marzo_norte_P_1_D_1.status);
const marzo_norte_p_1_d_1Div =
  marzo_norte_p_1_d_1.querySelector(".container-status");

if (marzo_norte_P_1_D_1.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_1_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_1_D_1.unidad;

  marzo_norte_p_1_d_1Div.appendChild(status_marzo);
  marzo_norte_p_1_d_1Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_1_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_1_D_1.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_1_D_1.precio;
  marzo_norte_p_1_d_1Div.appendChild(status_marzo);
  marzo_norte_p_1_d_1Div.appendChild(unidad_marzo);
  marzo_norte_p_1_d_1Div.appendChild(precio_marzo);
}

// const marzo_norte_p_1_d_2 = document.querySelector(".marzo_norte_P_1_D_2");
// marzo_norte_p_1_d_2.classList.add(marzo_norte_P_1_D_2);
// const marzo_norte_p_1_d_2Div = marzo_norte_p_1_d_2.querySelector("div");
// marzo_norte_p_1_d_2Div.querySelector("p").innerHTML = marzo_norte_P_1_D_2;

const marzo_norte_p_1_d_3 = document.querySelector(".marzo_norte_P_1_D_3");
marzo_norte_p_1_d_3.classList.add(marzo_norte_P_1_D_3.status);
const marzo_norte_p_1_d_3Div =
  marzo_norte_p_1_d_3.querySelector(".container-status");

if (marzo_norte_P_1_D_3.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_1_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_1_D_3.unidad;

  marzo_norte_p_1_d_3Div.appendChild(status_marzo);
  marzo_norte_p_1_d_3Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_1_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_1_D_3.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_1_D_3.precio;
  marzo_norte_p_1_d_3Div.appendChild(status_marzo);
  marzo_norte_p_1_d_3Div.appendChild(unidad_marzo);
  marzo_norte_p_1_d_3Div.appendChild(precio_marzo);
}

// segundo piso
const marzo_norte_p_2_d_1 = document.querySelector(".marzo_norte_P_2_D_1");
marzo_norte_p_2_d_1.classList.add(marzo_norte_P_2_D_1.status);
const marzo_norte_p_2_d_1Div =
  marzo_norte_p_2_d_1.querySelector(".container-status");

if (marzo_norte_P_2_D_1.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_2_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_2_D_1.unidad;

  marzo_norte_p_2_d_1Div.appendChild(status_marzo);
  marzo_norte_p_2_d_1Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_2_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_2_D_1.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_2_D_1.precio;
  marzo_norte_p_2_d_1Div.appendChild(status_marzo);
  marzo_norte_p_2_d_1Div.appendChild(unidad_marzo);
  marzo_norte_p_2_d_1Div.appendChild(precio_marzo);
}

const marzo_norte_p_2_d_2 = document.querySelector(".marzo_norte_P_2_D_2");
marzo_norte_p_2_d_2.classList.add(marzo_norte_P_2_D_2.status);
const marzo_norte_p_2_d_2Div =
  marzo_norte_p_2_d_2.querySelector(".container-status");

if (marzo_norte_P_2_D_2.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_2_D_2.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_2_D_2.unidad;

  marzo_norte_p_2_d_2Div.appendChild(status_marzo);
  marzo_norte_p_2_d_2Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_2_D_2.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_2_D_2.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_2_D_2.precio;
  marzo_norte_p_2_d_2Div.appendChild(status_marzo);
  marzo_norte_p_2_d_2Div.appendChild(unidad_marzo);
  marzo_norte_p_2_d_2Div.appendChild(precio_marzo);
}

const marzo_norte_p_2_d_3 = document.querySelector(".marzo_norte_P_2_D_3");
marzo_norte_p_2_d_3.classList.add(marzo_norte_P_2_D_3.status);
const marzo_norte_p_2_d_3Div =
  marzo_norte_p_2_d_3.querySelector(".container-status");

if (marzo_norte_P_2_D_3.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_2_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_2_D_3.unidad;

  marzo_norte_p_2_d_3Div.appendChild(status_marzo);
  marzo_norte_p_2_d_3Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_2_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_2_D_3.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_2_D_3.precio;
  marzo_norte_p_2_d_3Div.appendChild(status_marzo);
  marzo_norte_p_2_d_3Div.appendChild(unidad_marzo);
  marzo_norte_p_2_d_3Div.appendChild(precio_marzo);
}

// tercer piso
const marzo_norte_p_3_d_1 = document.querySelector(".marzo_norte_P_3_D_1");
marzo_norte_p_3_d_1.classList.add(marzo_norte_P_3_D_1.status);
const marzo_norte_p_3_d_1Div =
  marzo_norte_p_3_d_1.querySelector(".container-status");

if (marzo_norte_P_3_D_1.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_3_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_3_D_1.unidad;

  marzo_norte_p_3_d_1Div.appendChild(status_marzo);
  marzo_norte_p_3_d_1Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_3_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_3_D_1.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_3_D_1.precio;
  marzo_norte_p_3_d_1Div.appendChild(status_marzo);
  marzo_norte_p_3_d_1Div.appendChild(unidad_marzo);
  marzo_norte_p_3_d_1Div.appendChild(precio_marzo);
}

const marzo_norte_p_3_d_2 = document.querySelector(".marzo_norte_P_3_D_2");
marzo_norte_p_3_d_2.classList.add(marzo_norte_P_3_D_2.status);
const marzo_norte_p_3_d_2Div =
  marzo_norte_p_3_d_2.querySelector(".container-status");

if (marzo_norte_P_3_D_2.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_3_D_2.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_3_D_2.unidad;

  marzo_norte_p_3_d_2Div.appendChild(status_marzo);
  marzo_norte_p_3_d_2Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_3_D_2.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_3_D_2.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_3_D_2.precio;
  marzo_norte_p_3_d_2Div.appendChild(status_marzo);
  marzo_norte_p_3_d_2Div.appendChild(unidad_marzo);
  marzo_norte_p_3_d_2Div.appendChild(precio_marzo);
}

const marzo_norte_p_3_d_3 = document.querySelector(".marzo_norte_P_3_D_3");
marzo_norte_p_3_d_3.classList.add(marzo_norte_P_3_D_3.status);
const marzo_norte_p_3_d_3Div =
  marzo_norte_p_3_d_3.querySelector(".container-status");

if (marzo_norte_P_3_D_3.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_3_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_3_D_3.unidad;

  marzo_norte_p_3_d_3Div.appendChild(status_marzo);
  marzo_norte_p_3_d_3Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_3_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_3_D_3.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_3_D_3.precio;
  marzo_norte_p_3_d_3Div.appendChild(status_marzo);
  marzo_norte_p_3_d_3Div.appendChild(unidad_marzo);
  marzo_norte_p_3_d_3Div.appendChild(precio_marzo);
}

// cuarto piso
const marzo_norte_p_4_d_1 = document.querySelector(".marzo_norte_P_4_D_1");
marzo_norte_p_4_d_1.classList.add(marzo_norte_P_4_D_1.status);
const marzo_norte_p_4_d_1Div =
  marzo_norte_p_4_d_1.querySelector(".container-status");

if (marzo_norte_P_4_D_1.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_4_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_4_D_1.unidad;

  marzo_norte_p_4_d_1Div.appendChild(status_marzo);
  marzo_norte_p_4_d_1Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_4_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_4_D_1.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_4_D_1.precio;
  marzo_norte_p_4_d_1Div.appendChild(status_marzo);
  marzo_norte_p_4_d_1Div.appendChild(unidad_marzo);
  marzo_norte_p_4_d_1Div.appendChild(precio_marzo);
}

const marzo_norte_p_4_d_2 = document.querySelector(".marzo_norte_P_4_D_2");
marzo_norte_p_4_d_2.classList.add(marzo_norte_P_4_D_2.status);
const marzo_norte_p_4_d_2Div =
  marzo_norte_p_4_d_2.querySelector(".container-status");

if (marzo_norte_P_4_D_2.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_4_D_2.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_4_D_2.unidad;

  marzo_norte_p_4_d_2Div.appendChild(status_marzo);
  marzo_norte_p_4_d_2Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_4_D_2.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_4_D_2.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_4_D_2.precio;
  marzo_norte_p_4_d_2Div.appendChild(status_marzo);
  marzo_norte_p_4_d_2Div.appendChild(unidad_marzo);
  marzo_norte_p_4_d_2Div.appendChild(precio_marzo);
}

const marzo_norte_p_4_d_3 = document.querySelector(".marzo_norte_P_4_D_3");
marzo_norte_p_4_d_3.classList.add(marzo_norte_P_4_D_3.status);
const marzo_norte_p_4_d_3Div =
  marzo_norte_p_4_d_3.querySelector(".container-status");

if (marzo_norte_P_4_D_3.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_4_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_4_D_3.unidad;

  marzo_norte_p_4_d_3Div.appendChild(status_marzo);
  marzo_norte_p_4_d_3Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_4_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_4_D_3.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_4_D_3.precio;
  marzo_norte_p_4_d_3Div.appendChild(status_marzo);
  marzo_norte_p_4_d_3Div.appendChild(unidad_marzo);
  marzo_norte_p_4_d_3Div.appendChild(precio_marzo);
}

// quinto piso
const marzo_norte_p_5_d_1 = document.querySelector(".marzo_norte_P_5_D_1");
marzo_norte_p_5_d_1.classList.add(marzo_norte_P_5_D_1.status);
const marzo_norte_p_5_d_1Div =
  marzo_norte_p_5_d_1.querySelector(".container-status");

if (marzo_norte_P_5_D_1.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_5_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_5_D_1.unidad;

  marzo_norte_p_5_d_1Div.appendChild(status_marzo);
  marzo_norte_p_5_d_1Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_5_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_5_D_1.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_5_D_1.precio;
  marzo_norte_p_5_d_1Div.appendChild(status_marzo);
  marzo_norte_p_5_d_1Div.appendChild(unidad_marzo);
  marzo_norte_p_5_d_1Div.appendChild(precio_marzo);
}

const marzo_norte_p_5_d_2 = document.querySelector(".marzo_norte_P_5_D_2");
marzo_norte_p_5_d_2.classList.add(marzo_norte_P_5_D_2.status);
const marzo_norte_p_5_d_2Div =
  marzo_norte_p_5_d_2.querySelector(".container-status");

if (marzo_norte_P_5_D_2.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_5_D_2.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_5_D_2.unidad;

  marzo_norte_p_5_d_2Div.appendChild(status_marzo);
  marzo_norte_p_5_d_2Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_5_D_2.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_5_D_2.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_5_D_2.precio;
  marzo_norte_p_5_d_2Div.appendChild(status_marzo);
  marzo_norte_p_5_d_2Div.appendChild(unidad_marzo);
  marzo_norte_p_5_d_2Div.appendChild(precio_marzo);
}

const marzo_norte_p_5_d_3 = document.querySelector(".marzo_norte_P_5_D_3");
marzo_norte_p_5_d_3.classList.add(marzo_norte_P_5_D_3.status);
const marzo_norte_p_5_d_3Div =
  marzo_norte_p_5_d_3.querySelector(".container-status");

if (marzo_norte_P_5_D_3.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_5_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_5_D_3.unidad;

  marzo_norte_p_5_d_3Div.appendChild(status_marzo);
  marzo_norte_p_5_d_3Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_5_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_5_D_3.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_5_D_3.precio;
  marzo_norte_p_5_d_3Div.appendChild(status_marzo);
  marzo_norte_p_5_d_3Div.appendChild(unidad_marzo);
  marzo_norte_p_5_d_3Div.appendChild(precio_marzo);
}

// sexto piso
const marzo_norte_p_6_d_1 = document.querySelector(".marzo_norte_P_6_D_1");
marzo_norte_p_6_d_1.classList.add(marzo_norte_P_6_D_1.status);
const marzo_norte_p_6_d_1Div =
  marzo_norte_p_6_d_1.querySelector(".container-status");

if (marzo_norte_P_6_D_1.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_6_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_6_D_1.unidad;

  marzo_norte_p_6_d_1Div.appendChild(status_marzo);
  marzo_norte_p_6_d_1Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_6_D_1.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_6_D_1.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_6_D_1.precio;
  marzo_norte_p_6_d_1Div.appendChild(status_marzo);
  marzo_norte_p_6_d_1Div.appendChild(unidad_marzo);
  marzo_norte_p_6_d_1Div.appendChild(precio_marzo);
}

const marzo_norte_p_6_d_2 = document.querySelector(".marzo_norte_P_6_D_2");
marzo_norte_p_6_d_2.classList.add(marzo_norte_P_6_D_2.status);
const marzo_norte_p_6_d_2Div =
  marzo_norte_p_6_d_2.querySelector(".container-status");

if (marzo_norte_P_6_D_2.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_6_D_2.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_6_D_2.unidad;

  marzo_norte_p_6_d_2Div.appendChild(status_marzo);
  marzo_norte_p_6_d_2Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_6_D_2.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_6_D_2.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_6_D_2.precio;
  marzo_norte_p_6_d_2Div.appendChild(status_marzo);
  marzo_norte_p_6_d_2Div.appendChild(unidad_marzo);
  marzo_norte_p_6_d_2Div.appendChild(precio_marzo);
}

const marzo_norte_p_6_d_3 = document.querySelector(".marzo_norte_P_6_D_3");
marzo_norte_p_6_d_3.classList.add(marzo_norte_P_6_D_3.status);
const marzo_norte_p_6_d_3Div =
  marzo_norte_p_6_d_3.querySelector(".container-status");

if (marzo_norte_P_6_D_3.status !== "Disponible") {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_6_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_6_D_3.unidad;

  marzo_norte_p_6_d_3Div.appendChild(status_marzo);
  marzo_norte_p_6_d_3Div.appendChild(unidad_marzo);
} else {
  const status_marzo = document.createElement("p");
  status_marzo.classList.add("status_depart");
  status_marzo.innerHTML = marzo_norte_P_6_D_3.status;

  const unidad_marzo = document.createElement("p");
  unidad_marzo.classList.add("unidad_depart");
  unidad_marzo.innerHTML = "Unidad: " + marzo_norte_P_6_D_3.unidad;

  const precio_marzo = document.createElement("p");
  precio_marzo.classList.add("precio_depart");
  precio_marzo.innerHTML = "Precio lista: $" + marzo_norte_P_6_D_3.precio;
  marzo_norte_p_6_d_3Div.appendChild(status_marzo);
  marzo_norte_p_6_d_3Div.appendChild(unidad_marzo);
  marzo_norte_p_6_d_3Div.appendChild(precio_marzo);
}
