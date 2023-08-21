import {
  octubre_sur_P_1_D_1,
  //   octubre_sur_P_1_D_2,
  octubre_sur_P_1_D_3,
  octubre_sur_P_2_D_1,
  octubre_sur_P_2_D_2,
  octubre_sur_P_2_D_3,
  octubre_sur_P_3_D_1,
  octubre_sur_P_3_D_2,
  octubre_sur_P_3_D_3,
  octubre_sur_P_4_D_1,
  octubre_sur_P_4_D_2,
  octubre_sur_P_4_D_3,
  octubre_sur_P_5_D_1,
  octubre_sur_P_5_D_2,
  octubre_sur_P_5_D_3,
  octubre_sur_P_6_D_1,
  octubre_sur_P_6_D_2,
  octubre_sur_P_6_D_3,
} from "./meses-estado/10-octubre-sur.js";

// primer piso
const octubre_sur_p_1_d_1 = document.querySelector(".octubre_sur_P_1_D_1");
octubre_sur_p_1_d_1.classList.add(octubre_sur_P_1_D_1.status);
const octubre_sur_p_1_d_1Div =
  octubre_sur_p_1_d_1.querySelector(".container-status");

if (octubre_sur_P_1_D_1.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_1_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_1_D_1.unidad;

  octubre_sur_p_1_d_1Div.appendChild(status_octubre);
  octubre_sur_p_1_d_1Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_1_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_1_D_1.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_1_D_1.precio;
  octubre_sur_p_1_d_1Div.appendChild(status_octubre);
  octubre_sur_p_1_d_1Div.appendChild(unidad_octubre);
  octubre_sur_p_1_d_1Div.appendChild(precio_octubre);
}

// const octubre_sur_p_1_d_2 = document.querySelector(".octubre_sur_P_1_D_2");
// octubre_sur_p_1_d_2.classList.add(octubre_sur_P_1_D_2);
// const octubre_sur_p_1_d_2Div = octubre_sur_p_1_d_2.querySelector("div");
// octubre_sur_p_1_d_2Div.querySelector("p").innerHTML = octubre_sur_P_1_D_2;

const octubre_sur_p_1_d_3 = document.querySelector(".octubre_sur_P_1_D_3");
octubre_sur_p_1_d_3.classList.add(octubre_sur_P_1_D_3.status);
const octubre_sur_p_1_d_3Div =
  octubre_sur_p_1_d_3.querySelector(".container-status");

if (octubre_sur_P_1_D_3.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_1_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_1_D_3.unidad;

  octubre_sur_p_1_d_3Div.appendChild(status_octubre);
  octubre_sur_p_1_d_3Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_1_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_1_D_3.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_1_D_3.precio;
  octubre_sur_p_1_d_3Div.appendChild(status_octubre);
  octubre_sur_p_1_d_3Div.appendChild(unidad_octubre);
  octubre_sur_p_1_d_3Div.appendChild(precio_octubre);
}

// segundo piso
const octubre_sur_p_2_d_1 = document.querySelector(".octubre_sur_P_2_D_1");
octubre_sur_p_2_d_1.classList.add(octubre_sur_P_2_D_1.status);
const octubre_sur_p_2_d_1Div =
  octubre_sur_p_2_d_1.querySelector(".container-status");

if (octubre_sur_P_2_D_1.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_2_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_2_D_1.unidad;

  octubre_sur_p_2_d_1Div.appendChild(status_octubre);
  octubre_sur_p_2_d_1Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_2_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_2_D_1.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_2_D_1.precio;
  octubre_sur_p_2_d_1Div.appendChild(status_octubre);
  octubre_sur_p_2_d_1Div.appendChild(unidad_octubre);
  octubre_sur_p_2_d_1Div.appendChild(precio_octubre);
}

const octubre_sur_p_2_d_2 = document.querySelector(".octubre_sur_P_2_D_2");
octubre_sur_p_2_d_2.classList.add(octubre_sur_P_2_D_2.status);
const octubre_sur_p_2_d_2Div =
  octubre_sur_p_2_d_2.querySelector(".container-status");

if (octubre_sur_P_2_D_2.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_2_D_2.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_2_D_2.unidad;

  octubre_sur_p_2_d_2Div.appendChild(status_octubre);
  octubre_sur_p_2_d_2Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_2_D_2.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_2_D_2.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_2_D_2.precio;
  octubre_sur_p_2_d_2Div.appendChild(status_octubre);
  octubre_sur_p_2_d_2Div.appendChild(unidad_octubre);
  octubre_sur_p_2_d_2Div.appendChild(precio_octubre);
}

const octubre_sur_p_2_d_3 = document.querySelector(".octubre_sur_P_2_D_3");
octubre_sur_p_2_d_3.classList.add(octubre_sur_P_2_D_3.status);
const octubre_sur_p_2_d_3Div =
  octubre_sur_p_2_d_3.querySelector(".container-status");

if (octubre_sur_P_2_D_3.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_2_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_2_D_3.unidad;

  octubre_sur_p_2_d_3Div.appendChild(status_octubre);
  octubre_sur_p_2_d_3Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_2_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_2_D_3.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_2_D_3.precio;
  octubre_sur_p_2_d_3Div.appendChild(status_octubre);
  octubre_sur_p_2_d_3Div.appendChild(unidad_octubre);
  octubre_sur_p_2_d_3Div.appendChild(precio_octubre);
}

// tercer piso
const octubre_sur_p_3_d_1 = document.querySelector(".octubre_sur_P_3_D_1");
octubre_sur_p_3_d_1.classList.add(octubre_sur_P_3_D_1.status);
const octubre_sur_p_3_d_1Div =
  octubre_sur_p_3_d_1.querySelector(".container-status");

if (octubre_sur_P_3_D_1.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_3_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_3_D_1.unidad;

  octubre_sur_p_3_d_1Div.appendChild(status_octubre);
  octubre_sur_p_3_d_1Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_3_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_3_D_1.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_3_D_1.precio;
  octubre_sur_p_3_d_1Div.appendChild(status_octubre);
  octubre_sur_p_3_d_1Div.appendChild(unidad_octubre);
  octubre_sur_p_3_d_1Div.appendChild(precio_octubre);
}

const octubre_sur_p_3_d_2 = document.querySelector(".octubre_sur_P_3_D_2");
octubre_sur_p_3_d_2.classList.add(octubre_sur_P_3_D_2.status);
const octubre_sur_p_3_d_2Div =
  octubre_sur_p_3_d_2.querySelector(".container-status");

if (octubre_sur_P_3_D_2.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_3_D_2.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_3_D_2.unidad;

  octubre_sur_p_3_d_2Div.appendChild(status_octubre);
  octubre_sur_p_3_d_2Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_3_D_2.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_3_D_2.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_3_D_2.precio;
  octubre_sur_p_3_d_2Div.appendChild(status_octubre);
  octubre_sur_p_3_d_2Div.appendChild(unidad_octubre);
  octubre_sur_p_3_d_2Div.appendChild(precio_octubre);
}

const octubre_sur_p_3_d_3 = document.querySelector(".octubre_sur_P_3_D_3");
octubre_sur_p_3_d_3.classList.add(octubre_sur_P_3_D_3.status);
const octubre_sur_p_3_d_3Div =
  octubre_sur_p_3_d_3.querySelector(".container-status");

if (octubre_sur_P_3_D_3.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_3_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_3_D_3.unidad;

  octubre_sur_p_3_d_3Div.appendChild(status_octubre);
  octubre_sur_p_3_d_3Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_3_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_3_D_3.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_3_D_3.precio;
  octubre_sur_p_3_d_3Div.appendChild(status_octubre);
  octubre_sur_p_3_d_3Div.appendChild(unidad_octubre);
  octubre_sur_p_3_d_3Div.appendChild(precio_octubre);
}

// cuarto piso
const octubre_sur_p_4_d_1 = document.querySelector(".octubre_sur_P_4_D_1");
octubre_sur_p_4_d_1.classList.add(octubre_sur_P_4_D_1.status);
const octubre_sur_p_4_d_1Div =
  octubre_sur_p_4_d_1.querySelector(".container-status");

if (octubre_sur_P_4_D_1.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_4_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_4_D_1.unidad;

  octubre_sur_p_4_d_1Div.appendChild(status_octubre);
  octubre_sur_p_4_d_1Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_4_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_4_D_1.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_4_D_1.precio;
  octubre_sur_p_4_d_1Div.appendChild(status_octubre);
  octubre_sur_p_4_d_1Div.appendChild(unidad_octubre);
  octubre_sur_p_4_d_1Div.appendChild(precio_octubre);
}

const octubre_sur_p_4_d_2 = document.querySelector(".octubre_sur_P_4_D_2");
octubre_sur_p_4_d_2.classList.add(octubre_sur_P_4_D_2.status);
const octubre_sur_p_4_d_2Div =
  octubre_sur_p_4_d_2.querySelector(".container-status");

if (octubre_sur_P_4_D_2.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_4_D_2.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_4_D_2.unidad;

  octubre_sur_p_4_d_2Div.appendChild(status_octubre);
  octubre_sur_p_4_d_2Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_4_D_2.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_4_D_2.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_4_D_2.precio;
  octubre_sur_p_4_d_2Div.appendChild(status_octubre);
  octubre_sur_p_4_d_2Div.appendChild(unidad_octubre);
  octubre_sur_p_4_d_2Div.appendChild(precio_octubre);
}

const octubre_sur_p_4_d_3 = document.querySelector(".octubre_sur_P_4_D_3");
octubre_sur_p_4_d_3.classList.add(octubre_sur_P_4_D_3.status);
const octubre_sur_p_4_d_3Div =
  octubre_sur_p_4_d_3.querySelector(".container-status");

if (octubre_sur_P_4_D_3.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_4_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_4_D_3.unidad;

  octubre_sur_p_4_d_3Div.appendChild(status_octubre);
  octubre_sur_p_4_d_3Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_4_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_4_D_3.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_4_D_3.precio;
  octubre_sur_p_4_d_3Div.appendChild(status_octubre);
  octubre_sur_p_4_d_3Div.appendChild(unidad_octubre);
  octubre_sur_p_4_d_3Div.appendChild(precio_octubre);
}

// quinto piso
const octubre_sur_p_5_d_1 = document.querySelector(".octubre_sur_P_5_D_1");
octubre_sur_p_5_d_1.classList.add(octubre_sur_P_5_D_1.status);
const octubre_sur_p_5_d_1Div =
  octubre_sur_p_5_d_1.querySelector(".container-status");

if (octubre_sur_P_5_D_1.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_5_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_5_D_1.unidad;

  octubre_sur_p_5_d_1Div.appendChild(status_octubre);
  octubre_sur_p_5_d_1Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_5_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_5_D_1.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_5_D_1.precio;
  octubre_sur_p_5_d_1Div.appendChild(status_octubre);
  octubre_sur_p_5_d_1Div.appendChild(unidad_octubre);
  octubre_sur_p_5_d_1Div.appendChild(precio_octubre);
}

const octubre_sur_p_5_d_2 = document.querySelector(".octubre_sur_P_5_D_2");
octubre_sur_p_5_d_2.classList.add(octubre_sur_P_5_D_2.status);
const octubre_sur_p_5_d_2Div =
  octubre_sur_p_5_d_2.querySelector(".container-status");

if (octubre_sur_P_5_D_2.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_5_D_2.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_5_D_2.unidad;

  octubre_sur_p_5_d_2Div.appendChild(status_octubre);
  octubre_sur_p_5_d_2Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_5_D_2.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_5_D_2.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_5_D_2.precio;
  octubre_sur_p_5_d_2Div.appendChild(status_octubre);
  octubre_sur_p_5_d_2Div.appendChild(unidad_octubre);
  octubre_sur_p_5_d_2Div.appendChild(precio_octubre);
}

const octubre_sur_p_5_d_3 = document.querySelector(".octubre_sur_P_5_D_3");
octubre_sur_p_5_d_3.classList.add(octubre_sur_P_5_D_3.status);
const octubre_sur_p_5_d_3Div =
  octubre_sur_p_5_d_3.querySelector(".container-status");

if (octubre_sur_P_5_D_3.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_5_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_5_D_3.unidad;

  octubre_sur_p_5_d_3Div.appendChild(status_octubre);
  octubre_sur_p_5_d_3Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_5_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_5_D_3.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_5_D_3.precio;
  octubre_sur_p_5_d_3Div.appendChild(status_octubre);
  octubre_sur_p_5_d_3Div.appendChild(unidad_octubre);
  octubre_sur_p_5_d_3Div.appendChild(precio_octubre);
}

// sexto piso
const octubre_sur_p_6_d_1 = document.querySelector(".octubre_sur_P_6_D_1");
octubre_sur_p_6_d_1.classList.add(octubre_sur_P_6_D_1.status);
const octubre_sur_p_6_d_1Div =
  octubre_sur_p_6_d_1.querySelector(".container-status");

if (octubre_sur_P_6_D_1.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_6_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_6_D_1.unidad;

  octubre_sur_p_6_d_1Div.appendChild(status_octubre);
  octubre_sur_p_6_d_1Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_6_D_1.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_6_D_1.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_6_D_1.precio;
  octubre_sur_p_6_d_1Div.appendChild(status_octubre);
  octubre_sur_p_6_d_1Div.appendChild(unidad_octubre);
  octubre_sur_p_6_d_1Div.appendChild(precio_octubre);
}

const octubre_sur_p_6_d_2 = document.querySelector(".octubre_sur_P_6_D_2");
octubre_sur_p_6_d_2.classList.add(octubre_sur_P_6_D_2.status);
const octubre_sur_p_6_d_2Div =
  octubre_sur_p_6_d_2.querySelector(".container-status");

if (octubre_sur_P_6_D_2.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_6_D_2.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_6_D_2.unidad;

  octubre_sur_p_6_d_2Div.appendChild(status_octubre);
  octubre_sur_p_6_d_2Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_6_D_2.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_6_D_2.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_6_D_2.precio;
  octubre_sur_p_6_d_2Div.appendChild(status_octubre);
  octubre_sur_p_6_d_2Div.appendChild(unidad_octubre);
  octubre_sur_p_6_d_2Div.appendChild(precio_octubre);
}

const octubre_sur_p_6_d_3 = document.querySelector(".octubre_sur_P_6_D_3");
octubre_sur_p_6_d_3.classList.add(octubre_sur_P_6_D_3.status);
const octubre_sur_p_6_d_3Div =
  octubre_sur_p_6_d_3.querySelector(".container-status");

if (octubre_sur_P_6_D_3.status !== "Disponible") {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_6_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_6_D_3.unidad;

  octubre_sur_p_6_d_3Div.appendChild(status_octubre);
  octubre_sur_p_6_d_3Div.appendChild(unidad_octubre);
} else {
  const status_octubre = document.createElement("p");
  status_octubre.classList.add("status_depart");
  status_octubre.innerHTML = octubre_sur_P_6_D_3.status;

  const unidad_octubre = document.createElement("p");
  unidad_octubre.classList.add("unidad_depart");
  unidad_octubre.innerHTML = "Unidad: " + octubre_sur_P_6_D_3.unidad;

  const precio_octubre = document.createElement("p");
  precio_octubre.classList.add("precio_depart");
  precio_octubre.innerHTML = "Precio lista: $" + octubre_sur_P_6_D_3.precio;
  octubre_sur_p_6_d_3Div.appendChild(status_octubre);
  octubre_sur_p_6_d_3Div.appendChild(unidad_octubre);
  octubre_sur_p_6_d_3Div.appendChild(precio_octubre);
}
