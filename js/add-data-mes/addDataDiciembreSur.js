import {
  diciembre_sur_P_1_D_1,
  //   diciembre_sur_P_1_D_2,
  diciembre_sur_P_1_D_3,
  diciembre_sur_P_2_D_1,
  diciembre_sur_P_2_D_2,
  diciembre_sur_P_2_D_3,
  diciembre_sur_P_3_D_1,
  diciembre_sur_P_3_D_2,
  diciembre_sur_P_3_D_3,
  diciembre_sur_P_4_D_1,
  diciembre_sur_P_4_D_2,
  diciembre_sur_P_4_D_3,
  diciembre_sur_P_5_D_1,
  diciembre_sur_P_5_D_2,
  diciembre_sur_P_5_D_3,
  diciembre_sur_P_6_D_1,
  diciembre_sur_P_6_D_2,
  diciembre_sur_P_6_D_3,
} from "../meses-estado/12-diciembre-sur.js";

// primer piso
const diciembre_sur_p_1_d_1 = document.querySelector(".diciembre_sur_P_1_D_1");
diciembre_sur_p_1_d_1.classList.add(diciembre_sur_P_1_D_1.status);
const diciembre_sur_p_1_d_1Div =
  diciembre_sur_p_1_d_1.querySelector(".container-status");

if (diciembre_sur_P_1_D_1.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_1_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_1_D_1.unidad;

  diciembre_sur_p_1_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_1_d_1Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_1_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_1_D_1.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_1_D_1.precio;
  diciembre_sur_p_1_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_1_d_1Div.appendChild(unidad_diciembre);
  diciembre_sur_p_1_d_1Div.appendChild(precio_diciembre);
}

// const diciembre_sur_p_1_d_2 = document.querySelector(".diciembre_sur_P_1_D_2");
// diciembre_sur_p_1_d_2.classList.add(diciembre_sur_P_1_D_2);
// const diciembre_sur_p_1_d_2Div = diciembre_sur_p_1_d_2.querySelector("div");
// diciembre_sur_p_1_d_2Div.querySelector("p").innerHTML = diciembre_sur_P_1_D_2;

const diciembre_sur_p_1_d_3 = document.querySelector(".diciembre_sur_P_1_D_3");
diciembre_sur_p_1_d_3.classList.add(diciembre_sur_P_1_D_3.status);
const diciembre_sur_p_1_d_3Div =
  diciembre_sur_p_1_d_3.querySelector(".container-status");

if (diciembre_sur_P_1_D_3.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_1_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_1_D_3.unidad;

  diciembre_sur_p_1_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_1_d_3Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_1_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_1_D_3.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_1_D_3.precio;
  diciembre_sur_p_1_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_1_d_3Div.appendChild(unidad_diciembre);
  diciembre_sur_p_1_d_3Div.appendChild(precio_diciembre);
}

// segundo piso
const diciembre_sur_p_2_d_1 = document.querySelector(".diciembre_sur_P_2_D_1");
diciembre_sur_p_2_d_1.classList.add(diciembre_sur_P_2_D_1.status);
const diciembre_sur_p_2_d_1Div =
  diciembre_sur_p_2_d_1.querySelector(".container-status");

if (diciembre_sur_P_2_D_1.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_2_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_2_D_1.unidad;

  diciembre_sur_p_2_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_2_d_1Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_2_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_2_D_1.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_2_D_1.precio;
  diciembre_sur_p_2_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_2_d_1Div.appendChild(unidad_diciembre);
  diciembre_sur_p_2_d_1Div.appendChild(precio_diciembre);
}

const diciembre_sur_p_2_d_2 = document.querySelector(".diciembre_sur_P_2_D_2");
diciembre_sur_p_2_d_2.classList.add(diciembre_sur_P_2_D_2.status);
const diciembre_sur_p_2_d_2Div =
  diciembre_sur_p_2_d_2.querySelector(".container-status");

if (diciembre_sur_P_2_D_2.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_2_D_2.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_2_D_2.unidad;

  diciembre_sur_p_2_d_2Div.appendChild(status_diciembre);
  diciembre_sur_p_2_d_2Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_2_D_2.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_2_D_2.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_2_D_2.precio;
  diciembre_sur_p_2_d_2Div.appendChild(status_diciembre);
  diciembre_sur_p_2_d_2Div.appendChild(unidad_diciembre);
  diciembre_sur_p_2_d_2Div.appendChild(precio_diciembre);
}

const diciembre_sur_p_2_d_3 = document.querySelector(".diciembre_sur_P_2_D_3");
diciembre_sur_p_2_d_3.classList.add(diciembre_sur_P_2_D_3.status);
const diciembre_sur_p_2_d_3Div =
  diciembre_sur_p_2_d_3.querySelector(".container-status");

if (diciembre_sur_P_2_D_3.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_2_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_2_D_3.unidad;

  diciembre_sur_p_2_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_2_d_3Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_2_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_2_D_3.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_2_D_3.precio;
  diciembre_sur_p_2_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_2_d_3Div.appendChild(unidad_diciembre);
  diciembre_sur_p_2_d_3Div.appendChild(precio_diciembre);
}

// tercer piso
const diciembre_sur_p_3_d_1 = document.querySelector(".diciembre_sur_P_3_D_1");
diciembre_sur_p_3_d_1.classList.add(diciembre_sur_P_3_D_1.status);
const diciembre_sur_p_3_d_1Div =
  diciembre_sur_p_3_d_1.querySelector(".container-status");

if (diciembre_sur_P_3_D_1.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_3_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_3_D_1.unidad;

  diciembre_sur_p_3_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_3_d_1Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_3_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_3_D_1.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_3_D_1.precio;
  diciembre_sur_p_3_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_3_d_1Div.appendChild(unidad_diciembre);
  diciembre_sur_p_3_d_1Div.appendChild(precio_diciembre);
}

const diciembre_sur_p_3_d_2 = document.querySelector(".diciembre_sur_P_3_D_2");
diciembre_sur_p_3_d_2.classList.add(diciembre_sur_P_3_D_2.status);
const diciembre_sur_p_3_d_2Div =
  diciembre_sur_p_3_d_2.querySelector(".container-status");

if (diciembre_sur_P_3_D_2.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_3_D_2.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_3_D_2.unidad;

  diciembre_sur_p_3_d_2Div.appendChild(status_diciembre);
  diciembre_sur_p_3_d_2Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_3_D_2.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_3_D_2.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_3_D_2.precio;
  diciembre_sur_p_3_d_2Div.appendChild(status_diciembre);
  diciembre_sur_p_3_d_2Div.appendChild(unidad_diciembre);
  diciembre_sur_p_3_d_2Div.appendChild(precio_diciembre);
}

const diciembre_sur_p_3_d_3 = document.querySelector(".diciembre_sur_P_3_D_3");
diciembre_sur_p_3_d_3.classList.add(diciembre_sur_P_3_D_3.status);
const diciembre_sur_p_3_d_3Div =
  diciembre_sur_p_3_d_3.querySelector(".container-status");

if (diciembre_sur_P_3_D_3.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_3_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_3_D_3.unidad;

  diciembre_sur_p_3_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_3_d_3Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_3_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_3_D_3.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_3_D_3.precio;
  diciembre_sur_p_3_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_3_d_3Div.appendChild(unidad_diciembre);
  diciembre_sur_p_3_d_3Div.appendChild(precio_diciembre);
}

// cuarto piso
const diciembre_sur_p_4_d_1 = document.querySelector(".diciembre_sur_P_4_D_1");
diciembre_sur_p_4_d_1.classList.add(diciembre_sur_P_4_D_1.status);
const diciembre_sur_p_4_d_1Div =
  diciembre_sur_p_4_d_1.querySelector(".container-status");

if (diciembre_sur_P_4_D_1.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_4_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_4_D_1.unidad;

  diciembre_sur_p_4_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_4_d_1Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_4_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_4_D_1.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_4_D_1.precio;
  diciembre_sur_p_4_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_4_d_1Div.appendChild(unidad_diciembre);
  diciembre_sur_p_4_d_1Div.appendChild(precio_diciembre);
}

const diciembre_sur_p_4_d_2 = document.querySelector(".diciembre_sur_P_4_D_2");
diciembre_sur_p_4_d_2.classList.add(diciembre_sur_P_4_D_2.status);
const diciembre_sur_p_4_d_2Div =
  diciembre_sur_p_4_d_2.querySelector(".container-status");

if (diciembre_sur_P_4_D_2.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_4_D_2.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_4_D_2.unidad;

  diciembre_sur_p_4_d_2Div.appendChild(status_diciembre);
  diciembre_sur_p_4_d_2Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_4_D_2.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_4_D_2.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_4_D_2.precio;
  diciembre_sur_p_4_d_2Div.appendChild(status_diciembre);
  diciembre_sur_p_4_d_2Div.appendChild(unidad_diciembre);
  diciembre_sur_p_4_d_2Div.appendChild(precio_diciembre);
}

const diciembre_sur_p_4_d_3 = document.querySelector(".diciembre_sur_P_4_D_3");
diciembre_sur_p_4_d_3.classList.add(diciembre_sur_P_4_D_3.status);
const diciembre_sur_p_4_d_3Div =
  diciembre_sur_p_4_d_3.querySelector(".container-status");

if (diciembre_sur_P_4_D_3.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_4_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_4_D_3.unidad;

  diciembre_sur_p_4_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_4_d_3Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_4_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_4_D_3.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_4_D_3.precio;
  diciembre_sur_p_4_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_4_d_3Div.appendChild(unidad_diciembre);
  diciembre_sur_p_4_d_3Div.appendChild(precio_diciembre);
}

// quinto piso
const diciembre_sur_p_5_d_1 = document.querySelector(".diciembre_sur_P_5_D_1");
diciembre_sur_p_5_d_1.classList.add(diciembre_sur_P_5_D_1.status);
const diciembre_sur_p_5_d_1Div =
  diciembre_sur_p_5_d_1.querySelector(".container-status");

if (diciembre_sur_P_5_D_1.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_5_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_5_D_1.unidad;

  diciembre_sur_p_5_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_5_d_1Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_5_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_5_D_1.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_5_D_1.precio;
  diciembre_sur_p_5_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_5_d_1Div.appendChild(unidad_diciembre);
  diciembre_sur_p_5_d_1Div.appendChild(precio_diciembre);
}

const diciembre_sur_p_5_d_2 = document.querySelector(".diciembre_sur_P_5_D_2");
diciembre_sur_p_5_d_2.classList.add(diciembre_sur_P_5_D_2.status);
const diciembre_sur_p_5_d_2Div =
  diciembre_sur_p_5_d_2.querySelector(".container-status");

if (diciembre_sur_P_5_D_2.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_5_D_2.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_5_D_2.unidad;

  diciembre_sur_p_5_d_2Div.appendChild(status_diciembre);
  diciembre_sur_p_5_d_2Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_5_D_2.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_5_D_2.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_5_D_2.precio;
  diciembre_sur_p_5_d_2Div.appendChild(status_diciembre);
  diciembre_sur_p_5_d_2Div.appendChild(unidad_diciembre);
  diciembre_sur_p_5_d_2Div.appendChild(precio_diciembre);
}

const diciembre_sur_p_5_d_3 = document.querySelector(".diciembre_sur_P_5_D_3");
diciembre_sur_p_5_d_3.classList.add(diciembre_sur_P_5_D_3.status);
const diciembre_sur_p_5_d_3Div =
  diciembre_sur_p_5_d_3.querySelector(".container-status");

if (diciembre_sur_P_5_D_3.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_5_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_5_D_3.unidad;

  diciembre_sur_p_5_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_5_d_3Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_5_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_5_D_3.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_5_D_3.precio;
  diciembre_sur_p_5_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_5_d_3Div.appendChild(unidad_diciembre);
  diciembre_sur_p_5_d_3Div.appendChild(precio_diciembre);
}

// sexto piso
const diciembre_sur_p_6_d_1 = document.querySelector(".diciembre_sur_P_6_D_1");
diciembre_sur_p_6_d_1.classList.add(diciembre_sur_P_6_D_1.status);
const diciembre_sur_p_6_d_1Div =
  diciembre_sur_p_6_d_1.querySelector(".container-status");

if (diciembre_sur_P_6_D_1.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_6_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_6_D_1.unidad;

  diciembre_sur_p_6_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_6_d_1Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_6_D_1.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_6_D_1.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_6_D_1.precio;
  diciembre_sur_p_6_d_1Div.appendChild(status_diciembre);
  diciembre_sur_p_6_d_1Div.appendChild(unidad_diciembre);
  diciembre_sur_p_6_d_1Div.appendChild(precio_diciembre);
}

const diciembre_sur_p_6_d_2 = document.querySelector(".diciembre_sur_P_6_D_2");
diciembre_sur_p_6_d_2.classList.add(diciembre_sur_P_6_D_2.status);
const diciembre_sur_p_6_d_2Div =
  diciembre_sur_p_6_d_2.querySelector(".container-status");

if (diciembre_sur_P_6_D_2.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_6_D_2.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_6_D_2.unidad;

  diciembre_sur_p_6_d_2Div.appendChild(status_diciembre);
  diciembre_sur_p_6_d_2Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_6_D_2.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_6_D_2.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_6_D_2.precio;
  diciembre_sur_p_6_d_2Div.appendChild(status_diciembre);
  diciembre_sur_p_6_d_2Div.appendChild(unidad_diciembre);
  diciembre_sur_p_6_d_2Div.appendChild(precio_diciembre);
}

const diciembre_sur_p_6_d_3 = document.querySelector(".diciembre_sur_P_6_D_3");
diciembre_sur_p_6_d_3.classList.add(diciembre_sur_P_6_D_3.status);
const diciembre_sur_p_6_d_3Div =
  diciembre_sur_p_6_d_3.querySelector(".container-status");

if (diciembre_sur_P_6_D_3.status !== "Disponible") {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_6_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_6_D_3.unidad;

  diciembre_sur_p_6_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_6_d_3Div.appendChild(unidad_diciembre);
} else {
  const status_diciembre = document.createElement("p");
  status_diciembre.classList.add("status_depart");
  status_diciembre.innerHTML = diciembre_sur_P_6_D_3.status;

  const unidad_diciembre = document.createElement("p");
  unidad_diciembre.classList.add("unidad_depart");
  unidad_diciembre.innerHTML = "Unidad: " + diciembre_sur_P_6_D_3.unidad;

  const precio_diciembre = document.createElement("p");
  precio_diciembre.classList.add("precio_depart");
  precio_diciembre.innerHTML = "Precio lista: $" + diciembre_sur_P_6_D_3.precio;
  diciembre_sur_p_6_d_3Div.appendChild(status_diciembre);
  diciembre_sur_p_6_d_3Div.appendChild(unidad_diciembre);
  diciembre_sur_p_6_d_3Div.appendChild(precio_diciembre);
}
