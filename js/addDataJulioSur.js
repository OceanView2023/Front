import {
  julio_sur_P_1_D_1,
  //   julio_sur_P_1_D_2,
  julio_sur_P_1_D_3,
  julio_sur_P_2_D_1,
  julio_sur_P_2_D_2,
  julio_sur_P_2_D_3,
  julio_sur_P_3_D_1,
  julio_sur_P_3_D_2,
  julio_sur_P_3_D_3,
  julio_sur_P_4_D_1,
  julio_sur_P_4_D_2,
  julio_sur_P_4_D_3,
  julio_sur_P_5_D_1,
  julio_sur_P_5_D_2,
  julio_sur_P_5_D_3,
  julio_sur_P_6_D_1,
  julio_sur_P_6_D_2,
  julio_sur_P_6_D_3,
} from "./meses-estado/7-julio-sur.js";

// primer piso
const julio_sur_p_1_d_1 = document.querySelector(".julio_sur_P_1_D_1");
julio_sur_p_1_d_1.classList.add(julio_sur_P_1_D_1.status);
const julio_sur_p_1_d_1Div =
  julio_sur_p_1_d_1.querySelector(".container-status");

if (julio_sur_P_1_D_1.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_1_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_1_D_1.unidad;

  julio_sur_p_1_d_1Div.appendChild(status_julio);
  julio_sur_p_1_d_1Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_1_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_1_D_1.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_1_D_1.precio;
  julio_sur_p_1_d_1Div.appendChild(status_julio);
  julio_sur_p_1_d_1Div.appendChild(unidad_julio);
  julio_sur_p_1_d_1Div.appendChild(precio_julio);
}

// const julio_sur_p_1_d_2 = document.querySelector(".julio_sur_P_1_D_2");
// julio_sur_p_1_d_2.classList.add(julio_sur_P_1_D_2);
// const julio_sur_p_1_d_2Div = julio_sur_p_1_d_2.querySelector("div");
// julio_sur_p_1_d_2Div.querySelector("p").innerHTML = julio_sur_P_1_D_2;

const julio_sur_p_1_d_3 = document.querySelector(".julio_sur_P_1_D_3");
julio_sur_p_1_d_3.classList.add(julio_sur_P_1_D_3.status);
const julio_sur_p_1_d_3Div =
  julio_sur_p_1_d_3.querySelector(".container-status");

if (julio_sur_P_1_D_3.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_1_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_1_D_3.unidad;

  julio_sur_p_1_d_3Div.appendChild(status_julio);
  julio_sur_p_1_d_3Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_1_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_1_D_3.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_1_D_3.precio;
  julio_sur_p_1_d_3Div.appendChild(status_julio);
  julio_sur_p_1_d_3Div.appendChild(unidad_julio);
  julio_sur_p_1_d_3Div.appendChild(precio_julio);
}

// segundo piso
const julio_sur_p_2_d_1 = document.querySelector(".julio_sur_P_2_D_1");
julio_sur_p_2_d_1.classList.add(julio_sur_P_2_D_1.status);
const julio_sur_p_2_d_1Div =
  julio_sur_p_2_d_1.querySelector(".container-status");

if (julio_sur_P_2_D_1.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_2_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_2_D_1.unidad;

  julio_sur_p_2_d_1Div.appendChild(status_julio);
  julio_sur_p_2_d_1Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_2_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_2_D_1.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_2_D_1.precio;
  julio_sur_p_2_d_1Div.appendChild(status_julio);
  julio_sur_p_2_d_1Div.appendChild(unidad_julio);
  julio_sur_p_2_d_1Div.appendChild(precio_julio);
}

const julio_sur_p_2_d_2 = document.querySelector(".julio_sur_P_2_D_2");
julio_sur_p_2_d_2.classList.add(julio_sur_P_2_D_2.status);
const julio_sur_p_2_d_2Div =
  julio_sur_p_2_d_2.querySelector(".container-status");

if (julio_sur_P_2_D_2.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_2_D_2.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_2_D_2.unidad;

  julio_sur_p_2_d_2Div.appendChild(status_julio);
  julio_sur_p_2_d_2Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_2_D_2.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_2_D_2.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_2_D_2.precio;
  julio_sur_p_2_d_2Div.appendChild(status_julio);
  julio_sur_p_2_d_2Div.appendChild(unidad_julio);
  julio_sur_p_2_d_2Div.appendChild(precio_julio);
}

const julio_sur_p_2_d_3 = document.querySelector(".julio_sur_P_2_D_3");
julio_sur_p_2_d_3.classList.add(julio_sur_P_2_D_3.status);
const julio_sur_p_2_d_3Div =
  julio_sur_p_2_d_3.querySelector(".container-status");

if (julio_sur_P_2_D_3.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_2_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_2_D_3.unidad;

  julio_sur_p_2_d_3Div.appendChild(status_julio);
  julio_sur_p_2_d_3Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_2_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_2_D_3.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_2_D_3.precio;
  julio_sur_p_2_d_3Div.appendChild(status_julio);
  julio_sur_p_2_d_3Div.appendChild(unidad_julio);
  julio_sur_p_2_d_3Div.appendChild(precio_julio);
}

// tercer piso
const julio_sur_p_3_d_1 = document.querySelector(".julio_sur_P_3_D_1");
julio_sur_p_3_d_1.classList.add(julio_sur_P_3_D_1.status);
const julio_sur_p_3_d_1Div =
  julio_sur_p_3_d_1.querySelector(".container-status");

if (julio_sur_P_3_D_1.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_3_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_3_D_1.unidad;

  julio_sur_p_3_d_1Div.appendChild(status_julio);
  julio_sur_p_3_d_1Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_3_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_3_D_1.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_3_D_1.precio;
  julio_sur_p_3_d_1Div.appendChild(status_julio);
  julio_sur_p_3_d_1Div.appendChild(unidad_julio);
  julio_sur_p_3_d_1Div.appendChild(precio_julio);
}

const julio_sur_p_3_d_2 = document.querySelector(".julio_sur_P_3_D_2");
julio_sur_p_3_d_2.classList.add(julio_sur_P_3_D_2.status);
const julio_sur_p_3_d_2Div =
  julio_sur_p_3_d_2.querySelector(".container-status");

if (julio_sur_P_3_D_2.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_3_D_2.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_3_D_2.unidad;

  julio_sur_p_3_d_2Div.appendChild(status_julio);
  julio_sur_p_3_d_2Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_3_D_2.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_3_D_2.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_3_D_2.precio;
  julio_sur_p_3_d_2Div.appendChild(status_julio);
  julio_sur_p_3_d_2Div.appendChild(unidad_julio);
  julio_sur_p_3_d_2Div.appendChild(precio_julio);
}

const julio_sur_p_3_d_3 = document.querySelector(".julio_sur_P_3_D_3");
julio_sur_p_3_d_3.classList.add(julio_sur_P_3_D_3.status);
const julio_sur_p_3_d_3Div =
  julio_sur_p_3_d_3.querySelector(".container-status");

if (julio_sur_P_3_D_3.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_3_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_3_D_3.unidad;

  julio_sur_p_3_d_3Div.appendChild(status_julio);
  julio_sur_p_3_d_3Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_3_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_3_D_3.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_3_D_3.precio;
  julio_sur_p_3_d_3Div.appendChild(status_julio);
  julio_sur_p_3_d_3Div.appendChild(unidad_julio);
  julio_sur_p_3_d_3Div.appendChild(precio_julio);
}

// cuarto piso
const julio_sur_p_4_d_1 = document.querySelector(".julio_sur_P_4_D_1");
julio_sur_p_4_d_1.classList.add(julio_sur_P_4_D_1.status);
const julio_sur_p_4_d_1Div =
  julio_sur_p_4_d_1.querySelector(".container-status");

if (julio_sur_P_4_D_1.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_4_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_4_D_1.unidad;

  julio_sur_p_4_d_1Div.appendChild(status_julio);
  julio_sur_p_4_d_1Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_4_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_4_D_1.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_4_D_1.precio;
  julio_sur_p_4_d_1Div.appendChild(status_julio);
  julio_sur_p_4_d_1Div.appendChild(unidad_julio);
  julio_sur_p_4_d_1Div.appendChild(precio_julio);
}

const julio_sur_p_4_d_2 = document.querySelector(".julio_sur_P_4_D_2");
julio_sur_p_4_d_2.classList.add(julio_sur_P_4_D_2.status);
const julio_sur_p_4_d_2Div =
  julio_sur_p_4_d_2.querySelector(".container-status");

if (julio_sur_P_4_D_2.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_4_D_2.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_4_D_2.unidad;

  julio_sur_p_4_d_2Div.appendChild(status_julio);
  julio_sur_p_4_d_2Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_4_D_2.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_4_D_2.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_4_D_2.precio;
  julio_sur_p_4_d_2Div.appendChild(status_julio);
  julio_sur_p_4_d_2Div.appendChild(unidad_julio);
  julio_sur_p_4_d_2Div.appendChild(precio_julio);
}

const julio_sur_p_4_d_3 = document.querySelector(".julio_sur_P_4_D_3");
julio_sur_p_4_d_3.classList.add(julio_sur_P_4_D_3.status);
const julio_sur_p_4_d_3Div =
  julio_sur_p_4_d_3.querySelector(".container-status");

if (julio_sur_P_4_D_3.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_4_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_4_D_3.unidad;

  julio_sur_p_4_d_3Div.appendChild(status_julio);
  julio_sur_p_4_d_3Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_4_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_4_D_3.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_4_D_3.precio;
  julio_sur_p_4_d_3Div.appendChild(status_julio);
  julio_sur_p_4_d_3Div.appendChild(unidad_julio);
  julio_sur_p_4_d_3Div.appendChild(precio_julio);
}

// quinto piso
const julio_sur_p_5_d_1 = document.querySelector(".julio_sur_P_5_D_1");
julio_sur_p_5_d_1.classList.add(julio_sur_P_5_D_1.status);
const julio_sur_p_5_d_1Div =
  julio_sur_p_5_d_1.querySelector(".container-status");

if (julio_sur_P_5_D_1.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_5_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_5_D_1.unidad;

  julio_sur_p_5_d_1Div.appendChild(status_julio);
  julio_sur_p_5_d_1Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_5_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_5_D_1.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_5_D_1.precio;
  julio_sur_p_5_d_1Div.appendChild(status_julio);
  julio_sur_p_5_d_1Div.appendChild(unidad_julio);
  julio_sur_p_5_d_1Div.appendChild(precio_julio);
}

const julio_sur_p_5_d_2 = document.querySelector(".julio_sur_P_5_D_2");
julio_sur_p_5_d_2.classList.add(julio_sur_P_5_D_2.status);
const julio_sur_p_5_d_2Div =
  julio_sur_p_5_d_2.querySelector(".container-status");

if (julio_sur_P_5_D_2.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_5_D_2.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_5_D_2.unidad;

  julio_sur_p_5_d_2Div.appendChild(status_julio);
  julio_sur_p_5_d_2Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_5_D_2.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_5_D_2.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_5_D_2.precio;
  julio_sur_p_5_d_2Div.appendChild(status_julio);
  julio_sur_p_5_d_2Div.appendChild(unidad_julio);
  julio_sur_p_5_d_2Div.appendChild(precio_julio);
}

const julio_sur_p_5_d_3 = document.querySelector(".julio_sur_P_5_D_3");
julio_sur_p_5_d_3.classList.add(julio_sur_P_5_D_3.status);
const julio_sur_p_5_d_3Div =
  julio_sur_p_5_d_3.querySelector(".container-status");

if (julio_sur_P_5_D_3.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_5_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_5_D_3.unidad;

  julio_sur_p_5_d_3Div.appendChild(status_julio);
  julio_sur_p_5_d_3Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_5_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_5_D_3.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_5_D_3.precio;
  julio_sur_p_5_d_3Div.appendChild(status_julio);
  julio_sur_p_5_d_3Div.appendChild(unidad_julio);
  julio_sur_p_5_d_3Div.appendChild(precio_julio);
}

// sexto piso
const julio_sur_p_6_d_1 = document.querySelector(".julio_sur_P_6_D_1");
julio_sur_p_6_d_1.classList.add(julio_sur_P_6_D_1.status);
const julio_sur_p_6_d_1Div =
  julio_sur_p_6_d_1.querySelector(".container-status");

if (julio_sur_P_6_D_1.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_6_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_6_D_1.unidad;

  julio_sur_p_6_d_1Div.appendChild(status_julio);
  julio_sur_p_6_d_1Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_6_D_1.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_6_D_1.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_6_D_1.precio;
  julio_sur_p_6_d_1Div.appendChild(status_julio);
  julio_sur_p_6_d_1Div.appendChild(unidad_julio);
  julio_sur_p_6_d_1Div.appendChild(precio_julio);
}

const julio_sur_p_6_d_2 = document.querySelector(".julio_sur_P_6_D_2");
julio_sur_p_6_d_2.classList.add(julio_sur_P_6_D_2.status);
const julio_sur_p_6_d_2Div =
  julio_sur_p_6_d_2.querySelector(".container-status");

if (julio_sur_P_6_D_2.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_6_D_2.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_6_D_2.unidad;

  julio_sur_p_6_d_2Div.appendChild(status_julio);
  julio_sur_p_6_d_2Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_6_D_2.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_6_D_2.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_6_D_2.precio;
  julio_sur_p_6_d_2Div.appendChild(status_julio);
  julio_sur_p_6_d_2Div.appendChild(unidad_julio);
  julio_sur_p_6_d_2Div.appendChild(precio_julio);
}

const julio_sur_p_6_d_3 = document.querySelector(".julio_sur_P_6_D_3");
julio_sur_p_6_d_3.classList.add(julio_sur_P_6_D_3.status);
const julio_sur_p_6_d_3Div =
  julio_sur_p_6_d_3.querySelector(".container-status");

if (julio_sur_P_6_D_3.status !== "Disponible") {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_6_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_6_D_3.unidad;

  julio_sur_p_6_d_3Div.appendChild(status_julio);
  julio_sur_p_6_d_3Div.appendChild(unidad_julio);
} else {
  const status_julio = document.createElement("p");
  status_julio.classList.add("status_depart");
  status_julio.innerHTML = julio_sur_P_6_D_3.status;

  const unidad_julio = document.createElement("p");
  unidad_julio.classList.add("unidad_depart");
  unidad_julio.innerHTML = "Unidad: " + julio_sur_P_6_D_3.unidad;

  const precio_julio = document.createElement("p");
  precio_julio.classList.add("precio_depart");
  precio_julio.innerHTML = "Precio lista: $" + julio_sur_P_6_D_3.precio;
  julio_sur_p_6_d_3Div.appendChild(status_julio);
  julio_sur_p_6_d_3Div.appendChild(unidad_julio);
  julio_sur_p_6_d_3Div.appendChild(precio_julio);
}
