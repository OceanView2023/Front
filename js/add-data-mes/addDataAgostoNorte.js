import {
  agosto_norte_P_1_D_1,
  //   agosto_norte_P_1_D_2,
  agosto_norte_P_1_D_3,
  agosto_norte_P_2_D_1,
  agosto_norte_P_2_D_2,
  agosto_norte_P_2_D_3,
  agosto_norte_P_3_D_1,
  agosto_norte_P_3_D_2,
  agosto_norte_P_3_D_3,
  agosto_norte_P_4_D_1,
  agosto_norte_P_4_D_2,
  agosto_norte_P_4_D_3,
  agosto_norte_P_5_D_1,
  agosto_norte_P_5_D_2,
  agosto_norte_P_5_D_3,
  agosto_norte_P_6_D_1,
  agosto_norte_P_6_D_2,
  agosto_norte_P_6_D_3,
} from "../meses-estado/8-agosto-norte.js";

// primer piso
const agosto_norte_p_1_d_1 = document.querySelector(".agosto_norte_P_1_D_1");
agosto_norte_p_1_d_1.classList.add(agosto_norte_P_1_D_1.status);
const agosto_norte_p_1_d_1Div =
  agosto_norte_p_1_d_1.querySelector(".container-status");

if (agosto_norte_P_1_D_1.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_1_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_1_D_1.unidad;

  agosto_norte_p_1_d_1Div.appendChild(status_agosto);
  agosto_norte_p_1_d_1Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_1_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_1_D_1.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_1_D_1.precio;
  agosto_norte_p_1_d_1Div.appendChild(status_agosto);
  agosto_norte_p_1_d_1Div.appendChild(unidad_agosto);
  agosto_norte_p_1_d_1Div.appendChild(precio_agosto);
}

// const agosto_norte_p_1_d_2 = document.querySelector(".agosto_norte_P_1_D_2");
// agosto_norte_p_1_d_2.classList.add(agosto_norte_P_1_D_2);
// const agosto_norte_p_1_d_2Div = agosto_norte_p_1_d_2.querySelector("div");
// agosto_norte_p_1_d_2Div.querySelector("p").innerHTML = agosto_norte_P_1_D_2;

const agosto_norte_p_1_d_3 = document.querySelector(".agosto_norte_P_1_D_3");
agosto_norte_p_1_d_3.classList.add(agosto_norte_P_1_D_3.status);
const agosto_norte_p_1_d_3Div =
  agosto_norte_p_1_d_3.querySelector(".container-status");

if (agosto_norte_P_1_D_3.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_1_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_1_D_3.unidad;

  agosto_norte_p_1_d_3Div.appendChild(status_agosto);
  agosto_norte_p_1_d_3Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_1_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_1_D_3.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_1_D_3.precio;
  agosto_norte_p_1_d_3Div.appendChild(status_agosto);
  agosto_norte_p_1_d_3Div.appendChild(unidad_agosto);
  agosto_norte_p_1_d_3Div.appendChild(precio_agosto);
}

// segundo piso
const agosto_norte_p_2_d_1 = document.querySelector(".agosto_norte_P_2_D_1");
agosto_norte_p_2_d_1.classList.add(agosto_norte_P_2_D_1.status);
const agosto_norte_p_2_d_1Div =
  agosto_norte_p_2_d_1.querySelector(".container-status");

if (agosto_norte_P_2_D_1.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_2_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_2_D_1.unidad;

  agosto_norte_p_2_d_1Div.appendChild(status_agosto);
  agosto_norte_p_2_d_1Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_2_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_2_D_1.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_2_D_1.precio;
  agosto_norte_p_2_d_1Div.appendChild(status_agosto);
  agosto_norte_p_2_d_1Div.appendChild(unidad_agosto);
  agosto_norte_p_2_d_1Div.appendChild(precio_agosto);
}

const agosto_norte_p_2_d_2 = document.querySelector(".agosto_norte_P_2_D_2");
agosto_norte_p_2_d_2.classList.add(agosto_norte_P_2_D_2.status);
const agosto_norte_p_2_d_2Div =
  agosto_norte_p_2_d_2.querySelector(".container-status");

if (agosto_norte_P_2_D_2.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_2_D_2.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_2_D_2.unidad;

  agosto_norte_p_2_d_2Div.appendChild(status_agosto);
  agosto_norte_p_2_d_2Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_2_D_2.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_2_D_2.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_2_D_2.precio;
  agosto_norte_p_2_d_2Div.appendChild(status_agosto);
  agosto_norte_p_2_d_2Div.appendChild(unidad_agosto);
  agosto_norte_p_2_d_2Div.appendChild(precio_agosto);
}

const agosto_norte_p_2_d_3 = document.querySelector(".agosto_norte_P_2_D_3");
agosto_norte_p_2_d_3.classList.add(agosto_norte_P_2_D_3.status);
const agosto_norte_p_2_d_3Div =
  agosto_norte_p_2_d_3.querySelector(".container-status");

if (agosto_norte_P_2_D_3.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_2_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_2_D_3.unidad;

  agosto_norte_p_2_d_3Div.appendChild(status_agosto);
  agosto_norte_p_2_d_3Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_2_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_2_D_3.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_2_D_3.precio;
  agosto_norte_p_2_d_3Div.appendChild(status_agosto);
  agosto_norte_p_2_d_3Div.appendChild(unidad_agosto);
  agosto_norte_p_2_d_3Div.appendChild(precio_agosto);
}

// tercer piso
const agosto_norte_p_3_d_1 = document.querySelector(".agosto_norte_P_3_D_1");
agosto_norte_p_3_d_1.classList.add(agosto_norte_P_3_D_1.status);
const agosto_norte_p_3_d_1Div =
  agosto_norte_p_3_d_1.querySelector(".container-status");

if (agosto_norte_P_3_D_1.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_3_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_3_D_1.unidad;

  agosto_norte_p_3_d_1Div.appendChild(status_agosto);
  agosto_norte_p_3_d_1Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_3_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_3_D_1.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_3_D_1.precio;
  agosto_norte_p_3_d_1Div.appendChild(status_agosto);
  agosto_norte_p_3_d_1Div.appendChild(unidad_agosto);
  agosto_norte_p_3_d_1Div.appendChild(precio_agosto);
}

const agosto_norte_p_3_d_2 = document.querySelector(".agosto_norte_P_3_D_2");
agosto_norte_p_3_d_2.classList.add(agosto_norte_P_3_D_2.status);
const agosto_norte_p_3_d_2Div =
  agosto_norte_p_3_d_2.querySelector(".container-status");

if (agosto_norte_P_3_D_2.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_3_D_2.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_3_D_2.unidad;

  agosto_norte_p_3_d_2Div.appendChild(status_agosto);
  agosto_norte_p_3_d_2Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_3_D_2.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_3_D_2.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_3_D_2.precio;
  agosto_norte_p_3_d_2Div.appendChild(status_agosto);
  agosto_norte_p_3_d_2Div.appendChild(unidad_agosto);
  agosto_norte_p_3_d_2Div.appendChild(precio_agosto);
}

const agosto_norte_p_3_d_3 = document.querySelector(".agosto_norte_P_3_D_3");
agosto_norte_p_3_d_3.classList.add(agosto_norte_P_3_D_3.status);
const agosto_norte_p_3_d_3Div =
  agosto_norte_p_3_d_3.querySelector(".container-status");

if (agosto_norte_P_3_D_3.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_3_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_3_D_3.unidad;

  agosto_norte_p_3_d_3Div.appendChild(status_agosto);
  agosto_norte_p_3_d_3Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_3_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_3_D_3.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_3_D_3.precio;
  agosto_norte_p_3_d_3Div.appendChild(status_agosto);
  agosto_norte_p_3_d_3Div.appendChild(unidad_agosto);
  agosto_norte_p_3_d_3Div.appendChild(precio_agosto);
}

// cuarto piso
const agosto_norte_p_4_d_1 = document.querySelector(".agosto_norte_P_4_D_1");
agosto_norte_p_4_d_1.classList.add(agosto_norte_P_4_D_1.status);
const agosto_norte_p_4_d_1Div =
  agosto_norte_p_4_d_1.querySelector(".container-status");

if (agosto_norte_P_4_D_1.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_4_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_4_D_1.unidad;

  agosto_norte_p_4_d_1Div.appendChild(status_agosto);
  agosto_norte_p_4_d_1Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_4_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_4_D_1.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_4_D_1.precio;
  agosto_norte_p_4_d_1Div.appendChild(status_agosto);
  agosto_norte_p_4_d_1Div.appendChild(unidad_agosto);
  agosto_norte_p_4_d_1Div.appendChild(precio_agosto);
}

const agosto_norte_p_4_d_2 = document.querySelector(".agosto_norte_P_4_D_2");
agosto_norte_p_4_d_2.classList.add(agosto_norte_P_4_D_2.status);
const agosto_norte_p_4_d_2Div =
  agosto_norte_p_4_d_2.querySelector(".container-status");

if (agosto_norte_P_4_D_2.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_4_D_2.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_4_D_2.unidad;

  agosto_norte_p_4_d_2Div.appendChild(status_agosto);
  agosto_norte_p_4_d_2Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_4_D_2.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_4_D_2.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_4_D_2.precio;
  agosto_norte_p_4_d_2Div.appendChild(status_agosto);
  agosto_norte_p_4_d_2Div.appendChild(unidad_agosto);
  agosto_norte_p_4_d_2Div.appendChild(precio_agosto);
}

const agosto_norte_p_4_d_3 = document.querySelector(".agosto_norte_P_4_D_3");
agosto_norte_p_4_d_3.classList.add(agosto_norte_P_4_D_3.status);
const agosto_norte_p_4_d_3Div =
  agosto_norte_p_4_d_3.querySelector(".container-status");

if (agosto_norte_P_4_D_3.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_4_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_4_D_3.unidad;

  agosto_norte_p_4_d_3Div.appendChild(status_agosto);
  agosto_norte_p_4_d_3Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_4_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_4_D_3.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_4_D_3.precio;
  agosto_norte_p_4_d_3Div.appendChild(status_agosto);
  agosto_norte_p_4_d_3Div.appendChild(unidad_agosto);
  agosto_norte_p_4_d_3Div.appendChild(precio_agosto);
}

// quinto piso
const agosto_norte_p_5_d_1 = document.querySelector(".agosto_norte_P_5_D_1");
agosto_norte_p_5_d_1.classList.add(agosto_norte_P_5_D_1.status);
const agosto_norte_p_5_d_1Div =
  agosto_norte_p_5_d_1.querySelector(".container-status");

if (agosto_norte_P_5_D_1.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_5_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_5_D_1.unidad;

  agosto_norte_p_5_d_1Div.appendChild(status_agosto);
  agosto_norte_p_5_d_1Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_5_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_5_D_1.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_5_D_1.precio;
  agosto_norte_p_5_d_1Div.appendChild(status_agosto);
  agosto_norte_p_5_d_1Div.appendChild(unidad_agosto);
  agosto_norte_p_5_d_1Div.appendChild(precio_agosto);
}

const agosto_norte_p_5_d_2 = document.querySelector(".agosto_norte_P_5_D_2");
agosto_norte_p_5_d_2.classList.add(agosto_norte_P_5_D_2.status);
const agosto_norte_p_5_d_2Div =
  agosto_norte_p_5_d_2.querySelector(".container-status");

if (agosto_norte_P_5_D_2.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_5_D_2.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_5_D_2.unidad;

  agosto_norte_p_5_d_2Div.appendChild(status_agosto);
  agosto_norte_p_5_d_2Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_5_D_2.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_5_D_2.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_5_D_2.precio;
  agosto_norte_p_5_d_2Div.appendChild(status_agosto);
  agosto_norte_p_5_d_2Div.appendChild(unidad_agosto);
  agosto_norte_p_5_d_2Div.appendChild(precio_agosto);
}

const agosto_norte_p_5_d_3 = document.querySelector(".agosto_norte_P_5_D_3");
agosto_norte_p_5_d_3.classList.add(agosto_norte_P_5_D_3.status);
const agosto_norte_p_5_d_3Div =
  agosto_norte_p_5_d_3.querySelector(".container-status");

if (agosto_norte_P_5_D_3.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_5_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_5_D_3.unidad;

  agosto_norte_p_5_d_3Div.appendChild(status_agosto);
  agosto_norte_p_5_d_3Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_5_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_5_D_3.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_5_D_3.precio;
  agosto_norte_p_5_d_3Div.appendChild(status_agosto);
  agosto_norte_p_5_d_3Div.appendChild(unidad_agosto);
  agosto_norte_p_5_d_3Div.appendChild(precio_agosto);
}

// sexto piso
const agosto_norte_p_6_d_1 = document.querySelector(".agosto_norte_P_6_D_1");
agosto_norte_p_6_d_1.classList.add(agosto_norte_P_6_D_1.status);
const agosto_norte_p_6_d_1Div =
  agosto_norte_p_6_d_1.querySelector(".container-status");

if (agosto_norte_P_6_D_1.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_6_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_6_D_1.unidad;

  agosto_norte_p_6_d_1Div.appendChild(status_agosto);
  agosto_norte_p_6_d_1Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_6_D_1.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_6_D_1.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_6_D_1.precio;
  agosto_norte_p_6_d_1Div.appendChild(status_agosto);
  agosto_norte_p_6_d_1Div.appendChild(unidad_agosto);
  agosto_norte_p_6_d_1Div.appendChild(precio_agosto);
}

const agosto_norte_p_6_d_2 = document.querySelector(".agosto_norte_P_6_D_2");
agosto_norte_p_6_d_2.classList.add(agosto_norte_P_6_D_2.status);
const agosto_norte_p_6_d_2Div =
  agosto_norte_p_6_d_2.querySelector(".container-status");

if (agosto_norte_P_6_D_2.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_6_D_2.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_6_D_2.unidad;

  agosto_norte_p_6_d_2Div.appendChild(status_agosto);
  agosto_norte_p_6_d_2Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_6_D_2.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_6_D_2.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_6_D_2.precio;
  agosto_norte_p_6_d_2Div.appendChild(status_agosto);
  agosto_norte_p_6_d_2Div.appendChild(unidad_agosto);
  agosto_norte_p_6_d_2Div.appendChild(precio_agosto);
}

const agosto_norte_p_6_d_3 = document.querySelector(".agosto_norte_P_6_D_3");
agosto_norte_p_6_d_3.classList.add(agosto_norte_P_6_D_3.status);
const agosto_norte_p_6_d_3Div =
  agosto_norte_p_6_d_3.querySelector(".container-status");

if (agosto_norte_P_6_D_3.status !== "Disponible") {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_6_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_6_D_3.unidad;

  agosto_norte_p_6_d_3Div.appendChild(status_agosto);
  agosto_norte_p_6_d_3Div.appendChild(unidad_agosto);
} else {
  const status_agosto = document.createElement("p");
  status_agosto.classList.add("status_depart");
  status_agosto.innerHTML = agosto_norte_P_6_D_3.status;

  const unidad_agosto = document.createElement("p");
  unidad_agosto.classList.add("unidad_depart");
  unidad_agosto.innerHTML = "Unidad: " + agosto_norte_P_6_D_3.unidad;

  const precio_agosto = document.createElement("p");
  precio_agosto.classList.add("precio_depart");
  precio_agosto.innerHTML = "Precio lista: $" + agosto_norte_P_6_D_3.precio;
  agosto_norte_p_6_d_3Div.appendChild(status_agosto);
  agosto_norte_p_6_d_3Div.appendChild(unidad_agosto);
  agosto_norte_p_6_d_3Div.appendChild(precio_agosto);
}
