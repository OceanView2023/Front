import {
  abril_norte_P_1_D_1,
  //   abril_norte_P_1_D_2,
  abril_norte_P_1_D_3,
  abril_norte_P_2_D_1,
  abril_norte_P_2_D_2,
  abril_norte_P_2_D_3,
  abril_norte_P_3_D_1,
  abril_norte_P_3_D_2,
  abril_norte_P_3_D_3,
  abril_norte_P_4_D_1,
  abril_norte_P_4_D_2,
  abril_norte_P_4_D_3,
  abril_norte_P_5_D_1,
  abril_norte_P_5_D_2,
  abril_norte_P_5_D_3,
  abril_norte_P_6_D_1,
  abril_norte_P_6_D_2,
  abril_norte_P_6_D_3,
} from "./meses-estado/4-abril-norte.js";

// primer piso
const abril_norte_p_1_d_1 = document.querySelector(".abril_norte_P_1_D_1");
abril_norte_p_1_d_1.classList.add(abril_norte_P_1_D_1.status);
const abril_norte_p_1_d_1Div =
  abril_norte_p_1_d_1.querySelector(".container-status");

if (abril_norte_P_1_D_1.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_1_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_1_D_1.unidad;

  abril_norte_p_1_d_1Div.appendChild(status_abril);
  abril_norte_p_1_d_1Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_1_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_1_D_1.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_1_D_1.precio;
  abril_norte_p_1_d_1Div.appendChild(status_abril);
  abril_norte_p_1_d_1Div.appendChild(unidad_abril);
  abril_norte_p_1_d_1Div.appendChild(precio_abril);
}

// const abril_norte_p_1_d_2 = document.querySelector(".abril_norte_P_1_D_2");
// abril_norte_p_1_d_2.classList.add(abril_norte_P_1_D_2);
// const abril_norte_p_1_d_2Div = abril_norte_p_1_d_2.querySelector("div");
// abril_norte_p_1_d_2Div.querySelector("p").innerHTML = abril_norte_P_1_D_2;

const abril_norte_p_1_d_3 = document.querySelector(".abril_norte_P_1_D_3");
abril_norte_p_1_d_3.classList.add(abril_norte_P_1_D_3.status);
const abril_norte_p_1_d_3Div =
  abril_norte_p_1_d_3.querySelector(".container-status");

if (abril_norte_P_1_D_3.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_1_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_1_D_3.unidad;

  abril_norte_p_1_d_3Div.appendChild(status_abril);
  abril_norte_p_1_d_3Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_1_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_1_D_3.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_1_D_3.precio;
  abril_norte_p_1_d_3Div.appendChild(status_abril);
  abril_norte_p_1_d_3Div.appendChild(unidad_abril);
  abril_norte_p_1_d_3Div.appendChild(precio_abril);
}

// segundo piso
const abril_norte_p_2_d_1 = document.querySelector(".abril_norte_P_2_D_1");
abril_norte_p_2_d_1.classList.add(abril_norte_P_2_D_1.status);
const abril_norte_p_2_d_1Div =
  abril_norte_p_2_d_1.querySelector(".container-status");

if (abril_norte_P_2_D_1.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_2_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_2_D_1.unidad;

  abril_norte_p_2_d_1Div.appendChild(status_abril);
  abril_norte_p_2_d_1Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_2_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_2_D_1.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_2_D_1.precio;
  abril_norte_p_2_d_1Div.appendChild(status_abril);
  abril_norte_p_2_d_1Div.appendChild(unidad_abril);
  abril_norte_p_2_d_1Div.appendChild(precio_abril);
}

const abril_norte_p_2_d_2 = document.querySelector(".abril_norte_P_2_D_2");
abril_norte_p_2_d_2.classList.add(abril_norte_P_2_D_2.status);
const abril_norte_p_2_d_2Div =
  abril_norte_p_2_d_2.querySelector(".container-status");

if (abril_norte_P_2_D_2.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_2_D_2.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_2_D_2.unidad;

  abril_norte_p_2_d_2Div.appendChild(status_abril);
  abril_norte_p_2_d_2Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_2_D_2.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_2_D_2.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_2_D_2.precio;
  abril_norte_p_2_d_2Div.appendChild(status_abril);
  abril_norte_p_2_d_2Div.appendChild(unidad_abril);
  abril_norte_p_2_d_2Div.appendChild(precio_abril);
}

const abril_norte_p_2_d_3 = document.querySelector(".abril_norte_P_2_D_3");
abril_norte_p_2_d_3.classList.add(abril_norte_P_2_D_3.status);
const abril_norte_p_2_d_3Div =
  abril_norte_p_2_d_3.querySelector(".container-status");

if (abril_norte_P_2_D_3.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_2_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_2_D_3.unidad;

  abril_norte_p_2_d_3Div.appendChild(status_abril);
  abril_norte_p_2_d_3Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_2_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_2_D_3.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_2_D_3.precio;
  abril_norte_p_2_d_3Div.appendChild(status_abril);
  abril_norte_p_2_d_3Div.appendChild(unidad_abril);
  abril_norte_p_2_d_3Div.appendChild(precio_abril);
}

// tercer piso
const abril_norte_p_3_d_1 = document.querySelector(".abril_norte_P_3_D_1");
abril_norte_p_3_d_1.classList.add(abril_norte_P_3_D_1.status);
const abril_norte_p_3_d_1Div =
  abril_norte_p_3_d_1.querySelector(".container-status");

if (abril_norte_P_3_D_1.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_3_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_3_D_1.unidad;

  abril_norte_p_3_d_1Div.appendChild(status_abril);
  abril_norte_p_3_d_1Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_3_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_3_D_1.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_3_D_1.precio;
  abril_norte_p_3_d_1Div.appendChild(status_abril);
  abril_norte_p_3_d_1Div.appendChild(unidad_abril);
  abril_norte_p_3_d_1Div.appendChild(precio_abril);
}

const abril_norte_p_3_d_2 = document.querySelector(".abril_norte_P_3_D_2");
abril_norte_p_3_d_2.classList.add(abril_norte_P_3_D_2.status);
const abril_norte_p_3_d_2Div =
  abril_norte_p_3_d_2.querySelector(".container-status");

if (abril_norte_P_3_D_2.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_3_D_2.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_3_D_2.unidad;

  abril_norte_p_3_d_2Div.appendChild(status_abril);
  abril_norte_p_3_d_2Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_3_D_2.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_3_D_2.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_3_D_2.precio;
  abril_norte_p_3_d_2Div.appendChild(status_abril);
  abril_norte_p_3_d_2Div.appendChild(unidad_abril);
  abril_norte_p_3_d_2Div.appendChild(precio_abril);
}

const abril_norte_p_3_d_3 = document.querySelector(".abril_norte_P_3_D_3");
abril_norte_p_3_d_3.classList.add(abril_norte_P_3_D_3.status);
const abril_norte_p_3_d_3Div =
  abril_norte_p_3_d_3.querySelector(".container-status");

if (abril_norte_P_3_D_3.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_3_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_3_D_3.unidad;

  abril_norte_p_3_d_3Div.appendChild(status_abril);
  abril_norte_p_3_d_3Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_3_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_3_D_3.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_3_D_3.precio;
  abril_norte_p_3_d_3Div.appendChild(status_abril);
  abril_norte_p_3_d_3Div.appendChild(unidad_abril);
  abril_norte_p_3_d_3Div.appendChild(precio_abril);
}

// cuarto piso
const abril_norte_p_4_d_1 = document.querySelector(".abril_norte_P_4_D_1");
abril_norte_p_4_d_1.classList.add(abril_norte_P_4_D_1.status);
const abril_norte_p_4_d_1Div =
  abril_norte_p_4_d_1.querySelector(".container-status");

if (abril_norte_P_4_D_1.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_4_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_4_D_1.unidad;

  abril_norte_p_4_d_1Div.appendChild(status_abril);
  abril_norte_p_4_d_1Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_4_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_4_D_1.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_4_D_1.precio;
  abril_norte_p_4_d_1Div.appendChild(status_abril);
  abril_norte_p_4_d_1Div.appendChild(unidad_abril);
  abril_norte_p_4_d_1Div.appendChild(precio_abril);
}

const abril_norte_p_4_d_2 = document.querySelector(".abril_norte_P_4_D_2");
abril_norte_p_4_d_2.classList.add(abril_norte_P_4_D_2.status);
const abril_norte_p_4_d_2Div =
  abril_norte_p_4_d_2.querySelector(".container-status");

if (abril_norte_P_4_D_2.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_4_D_2.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_4_D_2.unidad;

  abril_norte_p_4_d_2Div.appendChild(status_abril);
  abril_norte_p_4_d_2Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_4_D_2.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_4_D_2.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_4_D_2.precio;
  abril_norte_p_4_d_2Div.appendChild(status_abril);
  abril_norte_p_4_d_2Div.appendChild(unidad_abril);
  abril_norte_p_4_d_2Div.appendChild(precio_abril);
}

const abril_norte_p_4_d_3 = document.querySelector(".abril_norte_P_4_D_3");
abril_norte_p_4_d_3.classList.add(abril_norte_P_4_D_3.status);
const abril_norte_p_4_d_3Div =
  abril_norte_p_4_d_3.querySelector(".container-status");

if (abril_norte_P_4_D_3.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_4_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_4_D_3.unidad;

  abril_norte_p_4_d_3Div.appendChild(status_abril);
  abril_norte_p_4_d_3Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_4_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_4_D_3.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_4_D_3.precio;
  abril_norte_p_4_d_3Div.appendChild(status_abril);
  abril_norte_p_4_d_3Div.appendChild(unidad_abril);
  abril_norte_p_4_d_3Div.appendChild(precio_abril);
}

// quinto piso
const abril_norte_p_5_d_1 = document.querySelector(".abril_norte_P_5_D_1");
abril_norte_p_5_d_1.classList.add(abril_norte_P_5_D_1.status);
const abril_norte_p_5_d_1Div =
  abril_norte_p_5_d_1.querySelector(".container-status");

if (abril_norte_P_5_D_1.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_5_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_5_D_1.unidad;

  abril_norte_p_5_d_1Div.appendChild(status_abril);
  abril_norte_p_5_d_1Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_5_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_5_D_1.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_5_D_1.precio;
  abril_norte_p_5_d_1Div.appendChild(status_abril);
  abril_norte_p_5_d_1Div.appendChild(unidad_abril);
  abril_norte_p_5_d_1Div.appendChild(precio_abril);
}

const abril_norte_p_5_d_2 = document.querySelector(".abril_norte_P_5_D_2");
abril_norte_p_5_d_2.classList.add(abril_norte_P_5_D_2.status);
const abril_norte_p_5_d_2Div =
  abril_norte_p_5_d_2.querySelector(".container-status");

if (abril_norte_P_5_D_2.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_5_D_2.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_5_D_2.unidad;

  abril_norte_p_5_d_2Div.appendChild(status_abril);
  abril_norte_p_5_d_2Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_5_D_2.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_5_D_2.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_5_D_2.precio;
  abril_norte_p_5_d_2Div.appendChild(status_abril);
  abril_norte_p_5_d_2Div.appendChild(unidad_abril);
  abril_norte_p_5_d_2Div.appendChild(precio_abril);
}

const abril_norte_p_5_d_3 = document.querySelector(".abril_norte_P_5_D_3");
abril_norte_p_5_d_3.classList.add(abril_norte_P_5_D_3.status);
const abril_norte_p_5_d_3Div =
  abril_norte_p_5_d_3.querySelector(".container-status");

if (abril_norte_P_5_D_3.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_5_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_5_D_3.unidad;

  abril_norte_p_5_d_3Div.appendChild(status_abril);
  abril_norte_p_5_d_3Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_5_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_5_D_3.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_5_D_3.precio;
  abril_norte_p_5_d_3Div.appendChild(status_abril);
  abril_norte_p_5_d_3Div.appendChild(unidad_abril);
  abril_norte_p_5_d_3Div.appendChild(precio_abril);
}

// sexto piso
const abril_norte_p_6_d_1 = document.querySelector(".abril_norte_P_6_D_1");
abril_norte_p_6_d_1.classList.add(abril_norte_P_6_D_1.status);
const abril_norte_p_6_d_1Div =
  abril_norte_p_6_d_1.querySelector(".container-status");

if (abril_norte_P_6_D_1.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_6_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_6_D_1.unidad;

  abril_norte_p_6_d_1Div.appendChild(status_abril);
  abril_norte_p_6_d_1Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_6_D_1.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_6_D_1.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_6_D_1.precio;
  abril_norte_p_6_d_1Div.appendChild(status_abril);
  abril_norte_p_6_d_1Div.appendChild(unidad_abril);
  abril_norte_p_6_d_1Div.appendChild(precio_abril);
}

const abril_norte_p_6_d_2 = document.querySelector(".abril_norte_P_6_D_2");
abril_norte_p_6_d_2.classList.add(abril_norte_P_6_D_2.status);
const abril_norte_p_6_d_2Div =
  abril_norte_p_6_d_2.querySelector(".container-status");

if (abril_norte_P_6_D_2.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_6_D_2.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_6_D_2.unidad;

  abril_norte_p_6_d_2Div.appendChild(status_abril);
  abril_norte_p_6_d_2Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_6_D_2.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_6_D_2.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_6_D_2.precio;
  abril_norte_p_6_d_2Div.appendChild(status_abril);
  abril_norte_p_6_d_2Div.appendChild(unidad_abril);
  abril_norte_p_6_d_2Div.appendChild(precio_abril);
}

const abril_norte_p_6_d_3 = document.querySelector(".abril_norte_P_6_D_3");
abril_norte_p_6_d_3.classList.add(abril_norte_P_6_D_3.status);
const abril_norte_p_6_d_3Div =
  abril_norte_p_6_d_3.querySelector(".container-status");

if (abril_norte_P_6_D_3.status !== "Disponible") {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_6_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_6_D_3.unidad;

  abril_norte_p_6_d_3Div.appendChild(status_abril);
  abril_norte_p_6_d_3Div.appendChild(unidad_abril);
} else {
  const status_abril = document.createElement("p");
  status_abril.classList.add("status_depart");
  status_abril.innerHTML = abril_norte_P_6_D_3.status;

  const unidad_abril = document.createElement("p");
  unidad_abril.classList.add("unidad_depart");
  unidad_abril.innerHTML = "Unidad: " + abril_norte_P_6_D_3.unidad;

  const precio_abril = document.createElement("p");
  precio_abril.classList.add("precio_depart");
  precio_abril.innerHTML = "Precio lista: $" + abril_norte_P_6_D_3.precio;
  abril_norte_p_6_d_3Div.appendChild(status_abril);
  abril_norte_p_6_d_3Div.appendChild(unidad_abril);
  abril_norte_p_6_d_3Div.appendChild(precio_abril);
}
