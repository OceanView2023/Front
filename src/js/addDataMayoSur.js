import {
  mayo_sur_P_1_D_1,
  //   mayo_sur_P_1_D_2,
  mayo_sur_P_1_D_3,
  mayo_sur_P_2_D_1,
  mayo_sur_P_2_D_2,
  mayo_sur_P_2_D_3,
  mayo_sur_P_3_D_1,
  mayo_sur_P_3_D_2,
  mayo_sur_P_3_D_3,
  mayo_sur_P_4_D_1,
  mayo_sur_P_4_D_2,
  mayo_sur_P_4_D_3,
  mayo_sur_P_5_D_1,
  mayo_sur_P_5_D_2,
  mayo_sur_P_5_D_3,
  mayo_sur_P_6_D_1,
  mayo_sur_P_6_D_2,
  mayo_sur_P_6_D_3,
} from "./meses-estado/5-mayo-sur.js";

// primer piso
const mayo_sur_p_1_d_1 = document.querySelector(".mayo_sur_P_1_D_1");
mayo_sur_p_1_d_1.classList.add(mayo_sur_P_1_D_1.status);
const mayo_sur_p_1_d_1Div = mayo_sur_p_1_d_1.querySelector(".container-status");

if (mayo_sur_P_1_D_1.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_1_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_1_D_1.unidad;

  mayo_sur_p_1_d_1Div.appendChild(status_mayo);
  mayo_sur_p_1_d_1Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_1_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_1_D_1.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_1_D_1.precio;
  mayo_sur_p_1_d_1Div.appendChild(status_mayo);
  mayo_sur_p_1_d_1Div.appendChild(unidad_mayo);
  mayo_sur_p_1_d_1Div.appendChild(precio_mayo);
}

// const mayo_sur_p_1_d_2 = document.querySelector(".mayo_sur_P_1_D_2");
// mayo_sur_p_1_d_2.classList.add(mayo_sur_P_1_D_2);
// const mayo_sur_p_1_d_2Div = mayo_sur_p_1_d_2.querySelector("div");
// mayo_sur_p_1_d_2Div.querySelector("p").innerHTML = mayo_sur_P_1_D_2;

const mayo_sur_p_1_d_3 = document.querySelector(".mayo_sur_P_1_D_3");
mayo_sur_p_1_d_3.classList.add(mayo_sur_P_1_D_3.status);
const mayo_sur_p_1_d_3Div = mayo_sur_p_1_d_3.querySelector(".container-status");

if (mayo_sur_P_1_D_3.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_1_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_1_D_3.unidad;

  mayo_sur_p_1_d_3Div.appendChild(status_mayo);
  mayo_sur_p_1_d_3Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_1_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_1_D_3.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_1_D_3.precio;
  mayo_sur_p_1_d_3Div.appendChild(status_mayo);
  mayo_sur_p_1_d_3Div.appendChild(unidad_mayo);
  mayo_sur_p_1_d_3Div.appendChild(precio_mayo);
}

// segundo piso
const mayo_sur_p_2_d_1 = document.querySelector(".mayo_sur_P_2_D_1");
mayo_sur_p_2_d_1.classList.add(mayo_sur_P_2_D_1.status);
const mayo_sur_p_2_d_1Div = mayo_sur_p_2_d_1.querySelector(".container-status");

if (mayo_sur_P_2_D_1.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_2_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_2_D_1.unidad;

  mayo_sur_p_2_d_1Div.appendChild(status_mayo);
  mayo_sur_p_2_d_1Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_2_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_2_D_1.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_2_D_1.precio;
  mayo_sur_p_2_d_1Div.appendChild(status_mayo);
  mayo_sur_p_2_d_1Div.appendChild(unidad_mayo);
  mayo_sur_p_2_d_1Div.appendChild(precio_mayo);
}

const mayo_sur_p_2_d_2 = document.querySelector(".mayo_sur_P_2_D_2");
mayo_sur_p_2_d_2.classList.add(mayo_sur_P_2_D_2.status);
const mayo_sur_p_2_d_2Div = mayo_sur_p_2_d_2.querySelector(".container-status");

if (mayo_sur_P_2_D_2.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_2_D_2.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_2_D_2.unidad;

  mayo_sur_p_2_d_2Div.appendChild(status_mayo);
  mayo_sur_p_2_d_2Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_2_D_2.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_2_D_2.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_2_D_2.precio;
  mayo_sur_p_2_d_2Div.appendChild(status_mayo);
  mayo_sur_p_2_d_2Div.appendChild(unidad_mayo);
  mayo_sur_p_2_d_2Div.appendChild(precio_mayo);
}

const mayo_sur_p_2_d_3 = document.querySelector(".mayo_sur_P_2_D_3");
mayo_sur_p_2_d_3.classList.add(mayo_sur_P_2_D_3.status);
const mayo_sur_p_2_d_3Div = mayo_sur_p_2_d_3.querySelector(".container-status");

if (mayo_sur_P_2_D_3.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_2_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_2_D_3.unidad;

  mayo_sur_p_2_d_3Div.appendChild(status_mayo);
  mayo_sur_p_2_d_3Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_2_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_2_D_3.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_2_D_3.precio;
  mayo_sur_p_2_d_3Div.appendChild(status_mayo);
  mayo_sur_p_2_d_3Div.appendChild(unidad_mayo);
  mayo_sur_p_2_d_3Div.appendChild(precio_mayo);
}

// tercer piso
const mayo_sur_p_3_d_1 = document.querySelector(".mayo_sur_P_3_D_1");
mayo_sur_p_3_d_1.classList.add(mayo_sur_P_3_D_1.status);
const mayo_sur_p_3_d_1Div = mayo_sur_p_3_d_1.querySelector(".container-status");

if (mayo_sur_P_3_D_1.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_3_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_3_D_1.unidad;

  mayo_sur_p_3_d_1Div.appendChild(status_mayo);
  mayo_sur_p_3_d_1Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_3_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_3_D_1.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_3_D_1.precio;
  mayo_sur_p_3_d_1Div.appendChild(status_mayo);
  mayo_sur_p_3_d_1Div.appendChild(unidad_mayo);
  mayo_sur_p_3_d_1Div.appendChild(precio_mayo);
}

const mayo_sur_p_3_d_2 = document.querySelector(".mayo_sur_P_3_D_2");
mayo_sur_p_3_d_2.classList.add(mayo_sur_P_3_D_2.status);
const mayo_sur_p_3_d_2Div = mayo_sur_p_3_d_2.querySelector(".container-status");

if (mayo_sur_P_3_D_2.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_3_D_2.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_3_D_2.unidad;

  mayo_sur_p_3_d_2Div.appendChild(status_mayo);
  mayo_sur_p_3_d_2Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_3_D_2.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_3_D_2.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_3_D_2.precio;
  mayo_sur_p_3_d_2Div.appendChild(status_mayo);
  mayo_sur_p_3_d_2Div.appendChild(unidad_mayo);
  mayo_sur_p_3_d_2Div.appendChild(precio_mayo);
}

const mayo_sur_p_3_d_3 = document.querySelector(".mayo_sur_P_3_D_3");
mayo_sur_p_3_d_3.classList.add(mayo_sur_P_3_D_3.status);
const mayo_sur_p_3_d_3Div = mayo_sur_p_3_d_3.querySelector(".container-status");

if (mayo_sur_P_3_D_3.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_3_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_3_D_3.unidad;

  mayo_sur_p_3_d_3Div.appendChild(status_mayo);
  mayo_sur_p_3_d_3Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_3_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_3_D_3.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_3_D_3.precio;
  mayo_sur_p_3_d_3Div.appendChild(status_mayo);
  mayo_sur_p_3_d_3Div.appendChild(unidad_mayo);
  mayo_sur_p_3_d_3Div.appendChild(precio_mayo);
}

// cuarto piso
const mayo_sur_p_4_d_1 = document.querySelector(".mayo_sur_P_4_D_1");
mayo_sur_p_4_d_1.classList.add(mayo_sur_P_4_D_1.status);
const mayo_sur_p_4_d_1Div = mayo_sur_p_4_d_1.querySelector(".container-status");

if (mayo_sur_P_4_D_1.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_4_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_4_D_1.unidad;

  mayo_sur_p_4_d_1Div.appendChild(status_mayo);
  mayo_sur_p_4_d_1Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_4_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_4_D_1.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_4_D_1.precio;
  mayo_sur_p_4_d_1Div.appendChild(status_mayo);
  mayo_sur_p_4_d_1Div.appendChild(unidad_mayo);
  mayo_sur_p_4_d_1Div.appendChild(precio_mayo);
}

const mayo_sur_p_4_d_2 = document.querySelector(".mayo_sur_P_4_D_2");
mayo_sur_p_4_d_2.classList.add(mayo_sur_P_4_D_2.status);
const mayo_sur_p_4_d_2Div = mayo_sur_p_4_d_2.querySelector(".container-status");

if (mayo_sur_P_4_D_2.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_4_D_2.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_4_D_2.unidad;

  mayo_sur_p_4_d_2Div.appendChild(status_mayo);
  mayo_sur_p_4_d_2Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_4_D_2.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_4_D_2.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_4_D_2.precio;
  mayo_sur_p_4_d_2Div.appendChild(status_mayo);
  mayo_sur_p_4_d_2Div.appendChild(unidad_mayo);
  mayo_sur_p_4_d_2Div.appendChild(precio_mayo);
}

const mayo_sur_p_4_d_3 = document.querySelector(".mayo_sur_P_4_D_3");
mayo_sur_p_4_d_3.classList.add(mayo_sur_P_4_D_3.status);
const mayo_sur_p_4_d_3Div = mayo_sur_p_4_d_3.querySelector(".container-status");

if (mayo_sur_P_4_D_3.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_4_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_4_D_3.unidad;

  mayo_sur_p_4_d_3Div.appendChild(status_mayo);
  mayo_sur_p_4_d_3Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_4_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_4_D_3.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_4_D_3.precio;
  mayo_sur_p_4_d_3Div.appendChild(status_mayo);
  mayo_sur_p_4_d_3Div.appendChild(unidad_mayo);
  mayo_sur_p_4_d_3Div.appendChild(precio_mayo);
}

// quinto piso
const mayo_sur_p_5_d_1 = document.querySelector(".mayo_sur_P_5_D_1");
mayo_sur_p_5_d_1.classList.add(mayo_sur_P_5_D_1.status);
const mayo_sur_p_5_d_1Div = mayo_sur_p_5_d_1.querySelector(".container-status");

if (mayo_sur_P_5_D_1.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_5_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_5_D_1.unidad;

  mayo_sur_p_5_d_1Div.appendChild(status_mayo);
  mayo_sur_p_5_d_1Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_5_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_5_D_1.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_5_D_1.precio;
  mayo_sur_p_5_d_1Div.appendChild(status_mayo);
  mayo_sur_p_5_d_1Div.appendChild(unidad_mayo);
  mayo_sur_p_5_d_1Div.appendChild(precio_mayo);
}

const mayo_sur_p_5_d_2 = document.querySelector(".mayo_sur_P_5_D_2");
mayo_sur_p_5_d_2.classList.add(mayo_sur_P_5_D_2.status);
const mayo_sur_p_5_d_2Div = mayo_sur_p_5_d_2.querySelector(".container-status");

if (mayo_sur_P_5_D_2.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_5_D_2.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_5_D_2.unidad;

  mayo_sur_p_5_d_2Div.appendChild(status_mayo);
  mayo_sur_p_5_d_2Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_5_D_2.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_5_D_2.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_5_D_2.precio;
  mayo_sur_p_5_d_2Div.appendChild(status_mayo);
  mayo_sur_p_5_d_2Div.appendChild(unidad_mayo);
  mayo_sur_p_5_d_2Div.appendChild(precio_mayo);
}

const mayo_sur_p_5_d_3 = document.querySelector(".mayo_sur_P_5_D_3");
mayo_sur_p_5_d_3.classList.add(mayo_sur_P_5_D_3.status);
const mayo_sur_p_5_d_3Div = mayo_sur_p_5_d_3.querySelector(".container-status");

if (mayo_sur_P_5_D_3.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_5_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_5_D_3.unidad;

  mayo_sur_p_5_d_3Div.appendChild(status_mayo);
  mayo_sur_p_5_d_3Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_5_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_5_D_3.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_5_D_3.precio;
  mayo_sur_p_5_d_3Div.appendChild(status_mayo);
  mayo_sur_p_5_d_3Div.appendChild(unidad_mayo);
  mayo_sur_p_5_d_3Div.appendChild(precio_mayo);
}

// sexto piso
const mayo_sur_p_6_d_1 = document.querySelector(".mayo_sur_P_6_D_1");
mayo_sur_p_6_d_1.classList.add(mayo_sur_P_6_D_1.status);
const mayo_sur_p_6_d_1Div = mayo_sur_p_6_d_1.querySelector(".container-status");

if (mayo_sur_P_6_D_1.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_6_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_6_D_1.unidad;

  mayo_sur_p_6_d_1Div.appendChild(status_mayo);
  mayo_sur_p_6_d_1Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_6_D_1.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_6_D_1.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_6_D_1.precio;
  mayo_sur_p_6_d_1Div.appendChild(status_mayo);
  mayo_sur_p_6_d_1Div.appendChild(unidad_mayo);
  mayo_sur_p_6_d_1Div.appendChild(precio_mayo);
}

const mayo_sur_p_6_d_2 = document.querySelector(".mayo_sur_P_6_D_2");
mayo_sur_p_6_d_2.classList.add(mayo_sur_P_6_D_2.status);
const mayo_sur_p_6_d_2Div = mayo_sur_p_6_d_2.querySelector(".container-status");

if (mayo_sur_P_6_D_2.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_6_D_2.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_6_D_2.unidad;

  mayo_sur_p_6_d_2Div.appendChild(status_mayo);
  mayo_sur_p_6_d_2Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_6_D_2.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_6_D_2.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_6_D_2.precio;
  mayo_sur_p_6_d_2Div.appendChild(status_mayo);
  mayo_sur_p_6_d_2Div.appendChild(unidad_mayo);
  mayo_sur_p_6_d_2Div.appendChild(precio_mayo);
}

const mayo_sur_p_6_d_3 = document.querySelector(".mayo_sur_P_6_D_3");
mayo_sur_p_6_d_3.classList.add(mayo_sur_P_6_D_3.status);
const mayo_sur_p_6_d_3Div = mayo_sur_p_6_d_3.querySelector(".container-status");

if (mayo_sur_P_6_D_3.status !== "Disponible") {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_6_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_6_D_3.unidad;

  mayo_sur_p_6_d_3Div.appendChild(status_mayo);
  mayo_sur_p_6_d_3Div.appendChild(unidad_mayo);
} else {
  const status_mayo = document.createElement("p");
  status_mayo.classList.add("status_depart");
  status_mayo.innerHTML = mayo_sur_P_6_D_3.status;

  const unidad_mayo = document.createElement("p");
  unidad_mayo.classList.add("unidad_depart");
  unidad_mayo.innerHTML = "Unidad: " + mayo_sur_P_6_D_3.unidad;

  const precio_mayo = document.createElement("p");
  precio_mayo.classList.add("precio_depart");
  precio_mayo.innerHTML = "Precio lista: $" + mayo_sur_P_6_D_3.precio;
  mayo_sur_p_6_d_3Div.appendChild(status_mayo);
  mayo_sur_p_6_d_3Div.appendChild(unidad_mayo);
  mayo_sur_p_6_d_3Div.appendChild(precio_mayo);
}
