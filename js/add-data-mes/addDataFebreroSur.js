import {
  febrero_sur_P_1_D_1,
  //   febrero_sur_P_1_D_2,
  febrero_sur_P_1_D_3,
  febrero_sur_P_2_D_1,
  febrero_sur_P_2_D_2,
  febrero_sur_P_2_D_3,
  febrero_sur_P_3_D_1,
  febrero_sur_P_3_D_2,
  febrero_sur_P_3_D_3,
  febrero_sur_P_4_D_1,
  febrero_sur_P_4_D_2,
  febrero_sur_P_4_D_3,
  febrero_sur_P_5_D_1,
  febrero_sur_P_5_D_2,
  febrero_sur_P_5_D_3,
  febrero_sur_P_6_D_1,
  febrero_sur_P_6_D_2,
  febrero_sur_P_6_D_3,
} from "../meses-estado/2-febrero-sur.js";

// primer piso
const febrero_sur_p_1_d_1 = document.querySelector(".febrero_sur_P_1_D_1");
febrero_sur_p_1_d_1.classList.add(febrero_sur_P_1_D_1.status);
const febrero_sur_p_1_d_1Div =
  febrero_sur_p_1_d_1.querySelector(".container-status");

if (febrero_sur_P_1_D_1.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_1_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_1_D_1.unidad;

  febrero_sur_p_1_d_1Div.appendChild(status_febrero);
  febrero_sur_p_1_d_1Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_1_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_1_D_1.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_1_D_1.precio;
  febrero_sur_p_1_d_1Div.appendChild(status_febrero);
  febrero_sur_p_1_d_1Div.appendChild(unidad_febrero);
  febrero_sur_p_1_d_1Div.appendChild(precio_febrero);
}

// const febrero_sur_p_1_d_2 = document.querySelector(".febrero_sur_P_1_D_2");
// febrero_sur_p_1_d_2.classList.add(febrero_sur_P_1_D_2);
// const febrero_sur_p_1_d_2Div = febrero_sur_p_1_d_2.querySelector("div");
// febrero_sur_p_1_d_2Div.querySelector("p").innerHTML = febrero_sur_P_1_D_2;

const febrero_sur_p_1_d_3 = document.querySelector(".febrero_sur_P_1_D_3");
febrero_sur_p_1_d_3.classList.add(febrero_sur_P_1_D_3.status);
const febrero_sur_p_1_d_3Div =
  febrero_sur_p_1_d_3.querySelector(".container-status");

if (febrero_sur_P_1_D_3.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_1_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_1_D_3.unidad;

  febrero_sur_p_1_d_3Div.appendChild(status_febrero);
  febrero_sur_p_1_d_3Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_1_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_1_D_3.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_1_D_3.precio;
  febrero_sur_p_1_d_3Div.appendChild(status_febrero);
  febrero_sur_p_1_d_3Div.appendChild(unidad_febrero);
  febrero_sur_p_1_d_3Div.appendChild(precio_febrero);
}

// segundo piso
const febrero_sur_p_2_d_1 = document.querySelector(".febrero_sur_P_2_D_1");
febrero_sur_p_2_d_1.classList.add(febrero_sur_P_2_D_1.status);
const febrero_sur_p_2_d_1Div =
  febrero_sur_p_2_d_1.querySelector(".container-status");

if (febrero_sur_P_2_D_1.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_2_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_2_D_1.unidad;

  febrero_sur_p_2_d_1Div.appendChild(status_febrero);
  febrero_sur_p_2_d_1Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_2_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_2_D_1.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_2_D_1.precio;
  febrero_sur_p_2_d_1Div.appendChild(status_febrero);
  febrero_sur_p_2_d_1Div.appendChild(unidad_febrero);
  febrero_sur_p_2_d_1Div.appendChild(precio_febrero);
}

const febrero_sur_p_2_d_2 = document.querySelector(".febrero_sur_P_2_D_2");
febrero_sur_p_2_d_2.classList.add(febrero_sur_P_2_D_2.status);
const febrero_sur_p_2_d_2Div =
  febrero_sur_p_2_d_2.querySelector(".container-status");

if (febrero_sur_P_2_D_2.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_2_D_2.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_2_D_2.unidad;

  febrero_sur_p_2_d_2Div.appendChild(status_febrero);
  febrero_sur_p_2_d_2Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_2_D_2.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_2_D_2.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_2_D_2.precio;
  febrero_sur_p_2_d_2Div.appendChild(status_febrero);
  febrero_sur_p_2_d_2Div.appendChild(unidad_febrero);
  febrero_sur_p_2_d_2Div.appendChild(precio_febrero);
}

const febrero_sur_p_2_d_3 = document.querySelector(".febrero_sur_P_2_D_3");
febrero_sur_p_2_d_3.classList.add(febrero_sur_P_2_D_3.status);
const febrero_sur_p_2_d_3Div =
  febrero_sur_p_2_d_3.querySelector(".container-status");

if (febrero_sur_P_2_D_3.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_2_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_2_D_3.unidad;

  febrero_sur_p_2_d_3Div.appendChild(status_febrero);
  febrero_sur_p_2_d_3Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_2_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_2_D_3.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_2_D_3.precio;
  febrero_sur_p_2_d_3Div.appendChild(status_febrero);
  febrero_sur_p_2_d_3Div.appendChild(unidad_febrero);
  febrero_sur_p_2_d_3Div.appendChild(precio_febrero);
}

// tercer piso
const febrero_sur_p_3_d_1 = document.querySelector(".febrero_sur_P_3_D_1");
febrero_sur_p_3_d_1.classList.add(febrero_sur_P_3_D_1.status);
const febrero_sur_p_3_d_1Div =
  febrero_sur_p_3_d_1.querySelector(".container-status");

if (febrero_sur_P_3_D_1.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_3_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_3_D_1.unidad;

  febrero_sur_p_3_d_1Div.appendChild(status_febrero);
  febrero_sur_p_3_d_1Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_3_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_3_D_1.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_3_D_1.precio;
  febrero_sur_p_3_d_1Div.appendChild(status_febrero);
  febrero_sur_p_3_d_1Div.appendChild(unidad_febrero);
  febrero_sur_p_3_d_1Div.appendChild(precio_febrero);
}

const febrero_sur_p_3_d_2 = document.querySelector(".febrero_sur_P_3_D_2");
febrero_sur_p_3_d_2.classList.add(febrero_sur_P_3_D_2.status);
const febrero_sur_p_3_d_2Div =
  febrero_sur_p_3_d_2.querySelector(".container-status");

if (febrero_sur_P_3_D_2.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_3_D_2.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_3_D_2.unidad;

  febrero_sur_p_3_d_2Div.appendChild(status_febrero);
  febrero_sur_p_3_d_2Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_3_D_2.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_3_D_2.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_3_D_2.precio;
  febrero_sur_p_3_d_2Div.appendChild(status_febrero);
  febrero_sur_p_3_d_2Div.appendChild(unidad_febrero);
  febrero_sur_p_3_d_2Div.appendChild(precio_febrero);
}

const febrero_sur_p_3_d_3 = document.querySelector(".febrero_sur_P_3_D_3");
febrero_sur_p_3_d_3.classList.add(febrero_sur_P_3_D_3.status);
const febrero_sur_p_3_d_3Div =
  febrero_sur_p_3_d_3.querySelector(".container-status");

if (febrero_sur_P_3_D_3.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_3_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_3_D_3.unidad;

  febrero_sur_p_3_d_3Div.appendChild(status_febrero);
  febrero_sur_p_3_d_3Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_3_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_3_D_3.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_3_D_3.precio;
  febrero_sur_p_3_d_3Div.appendChild(status_febrero);
  febrero_sur_p_3_d_3Div.appendChild(unidad_febrero);
  febrero_sur_p_3_d_3Div.appendChild(precio_febrero);
}

// cuarto piso
const febrero_sur_p_4_d_1 = document.querySelector(".febrero_sur_P_4_D_1");
febrero_sur_p_4_d_1.classList.add(febrero_sur_P_4_D_1.status);
const febrero_sur_p_4_d_1Div =
  febrero_sur_p_4_d_1.querySelector(".container-status");

if (febrero_sur_P_4_D_1.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_4_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_4_D_1.unidad;

  febrero_sur_p_4_d_1Div.appendChild(status_febrero);
  febrero_sur_p_4_d_1Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_4_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_4_D_1.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_4_D_1.precio;
  febrero_sur_p_4_d_1Div.appendChild(status_febrero);
  febrero_sur_p_4_d_1Div.appendChild(unidad_febrero);
  febrero_sur_p_4_d_1Div.appendChild(precio_febrero);
}

const febrero_sur_p_4_d_2 = document.querySelector(".febrero_sur_P_4_D_2");
febrero_sur_p_4_d_2.classList.add(febrero_sur_P_4_D_2.status);
const febrero_sur_p_4_d_2Div =
  febrero_sur_p_4_d_2.querySelector(".container-status");

if (febrero_sur_P_4_D_2.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_4_D_2.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_4_D_2.unidad;

  febrero_sur_p_4_d_2Div.appendChild(status_febrero);
  febrero_sur_p_4_d_2Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_4_D_2.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_4_D_2.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_4_D_2.precio;
  febrero_sur_p_4_d_2Div.appendChild(status_febrero);
  febrero_sur_p_4_d_2Div.appendChild(unidad_febrero);
  febrero_sur_p_4_d_2Div.appendChild(precio_febrero);
}

const febrero_sur_p_4_d_3 = document.querySelector(".febrero_sur_P_4_D_3");
febrero_sur_p_4_d_3.classList.add(febrero_sur_P_4_D_3.status);
const febrero_sur_p_4_d_3Div =
  febrero_sur_p_4_d_3.querySelector(".container-status");

if (febrero_sur_P_4_D_3.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_4_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_4_D_3.unidad;

  febrero_sur_p_4_d_3Div.appendChild(status_febrero);
  febrero_sur_p_4_d_3Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_4_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_4_D_3.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_4_D_3.precio;
  febrero_sur_p_4_d_3Div.appendChild(status_febrero);
  febrero_sur_p_4_d_3Div.appendChild(unidad_febrero);
  febrero_sur_p_4_d_3Div.appendChild(precio_febrero);
}

// quinto piso
const febrero_sur_p_5_d_1 = document.querySelector(".febrero_sur_P_5_D_1");
febrero_sur_p_5_d_1.classList.add(febrero_sur_P_5_D_1.status);
const febrero_sur_p_5_d_1Div =
  febrero_sur_p_5_d_1.querySelector(".container-status");

if (febrero_sur_P_5_D_1.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_5_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_5_D_1.unidad;

  febrero_sur_p_5_d_1Div.appendChild(status_febrero);
  febrero_sur_p_5_d_1Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_5_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_5_D_1.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_5_D_1.precio;
  febrero_sur_p_5_d_1Div.appendChild(status_febrero);
  febrero_sur_p_5_d_1Div.appendChild(unidad_febrero);
  febrero_sur_p_5_d_1Div.appendChild(precio_febrero);
}

const febrero_sur_p_5_d_2 = document.querySelector(".febrero_sur_P_5_D_2");
febrero_sur_p_5_d_2.classList.add(febrero_sur_P_5_D_2.status);
const febrero_sur_p_5_d_2Div =
  febrero_sur_p_5_d_2.querySelector(".container-status");

if (febrero_sur_P_5_D_2.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_5_D_2.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_5_D_2.unidad;

  febrero_sur_p_5_d_2Div.appendChild(status_febrero);
  febrero_sur_p_5_d_2Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_5_D_2.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_5_D_2.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_5_D_2.precio;
  febrero_sur_p_5_d_2Div.appendChild(status_febrero);
  febrero_sur_p_5_d_2Div.appendChild(unidad_febrero);
  febrero_sur_p_5_d_2Div.appendChild(precio_febrero);
}

const febrero_sur_p_5_d_3 = document.querySelector(".febrero_sur_P_5_D_3");
febrero_sur_p_5_d_3.classList.add(febrero_sur_P_5_D_3.status);
const febrero_sur_p_5_d_3Div =
  febrero_sur_p_5_d_3.querySelector(".container-status");

if (febrero_sur_P_5_D_3.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_5_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_5_D_3.unidad;

  febrero_sur_p_5_d_3Div.appendChild(status_febrero);
  febrero_sur_p_5_d_3Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_5_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_5_D_3.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_5_D_3.precio;
  febrero_sur_p_5_d_3Div.appendChild(status_febrero);
  febrero_sur_p_5_d_3Div.appendChild(unidad_febrero);
  febrero_sur_p_5_d_3Div.appendChild(precio_febrero);
}

// sexto piso
const febrero_sur_p_6_d_1 = document.querySelector(".febrero_sur_P_6_D_1");
febrero_sur_p_6_d_1.classList.add(febrero_sur_P_6_D_1.status);
const febrero_sur_p_6_d_1Div =
  febrero_sur_p_6_d_1.querySelector(".container-status");

if (febrero_sur_P_6_D_1.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_6_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_6_D_1.unidad;

  febrero_sur_p_6_d_1Div.appendChild(status_febrero);
  febrero_sur_p_6_d_1Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_6_D_1.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_6_D_1.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_6_D_1.precio;
  febrero_sur_p_6_d_1Div.appendChild(status_febrero);
  febrero_sur_p_6_d_1Div.appendChild(unidad_febrero);
  febrero_sur_p_6_d_1Div.appendChild(precio_febrero);
}

const febrero_sur_p_6_d_2 = document.querySelector(".febrero_sur_P_6_D_2");
febrero_sur_p_6_d_2.classList.add(febrero_sur_P_6_D_2.status);
const febrero_sur_p_6_d_2Div =
  febrero_sur_p_6_d_2.querySelector(".container-status");

if (febrero_sur_P_6_D_2.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_6_D_2.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_6_D_2.unidad;

  febrero_sur_p_6_d_2Div.appendChild(status_febrero);
  febrero_sur_p_6_d_2Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_6_D_2.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_6_D_2.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_6_D_2.precio;
  febrero_sur_p_6_d_2Div.appendChild(status_febrero);
  febrero_sur_p_6_d_2Div.appendChild(unidad_febrero);
  febrero_sur_p_6_d_2Div.appendChild(precio_febrero);
}

const febrero_sur_p_6_d_3 = document.querySelector(".febrero_sur_P_6_D_3");
febrero_sur_p_6_d_3.classList.add(febrero_sur_P_6_D_3.status);
const febrero_sur_p_6_d_3Div =
  febrero_sur_p_6_d_3.querySelector(".container-status");

if (febrero_sur_P_6_D_3.status !== "Disponible") {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_6_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_6_D_3.unidad;

  febrero_sur_p_6_d_3Div.appendChild(status_febrero);
  febrero_sur_p_6_d_3Div.appendChild(unidad_febrero);
} else {
  const status_febrero = document.createElement("p");
  status_febrero.classList.add("status_depart");
  status_febrero.innerHTML = febrero_sur_P_6_D_3.status;

  const unidad_febrero = document.createElement("p");
  unidad_febrero.classList.add("unidad_depart");
  unidad_febrero.innerHTML = "Unidad: " + febrero_sur_P_6_D_3.unidad;

  const precio_febrero = document.createElement("p");
  precio_febrero.classList.add("precio_depart");
  precio_febrero.innerHTML = "Precio lista: $" + febrero_sur_P_6_D_3.precio;
  febrero_sur_p_6_d_3Div.appendChild(status_febrero);
  febrero_sur_p_6_d_3Div.appendChild(unidad_febrero);
  febrero_sur_p_6_d_3Div.appendChild(precio_febrero);
}
