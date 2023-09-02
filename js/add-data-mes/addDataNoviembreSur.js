import {
  noviembre_sur_P_1_D_1,
  //   noviembre_sur_P_1_D_2,
  noviembre_sur_P_1_D_3,
  noviembre_sur_P_2_D_1,
  noviembre_sur_P_2_D_2,
  noviembre_sur_P_2_D_3,
  noviembre_sur_P_3_D_1,
  noviembre_sur_P_3_D_2,
  noviembre_sur_P_3_D_3,
  noviembre_sur_P_4_D_1,
  noviembre_sur_P_4_D_2,
  noviembre_sur_P_4_D_3,
  noviembre_sur_P_5_D_1,
  noviembre_sur_P_5_D_2,
  noviembre_sur_P_5_D_3,
  noviembre_sur_P_6_D_1,
  noviembre_sur_P_6_D_2,
  noviembre_sur_P_6_D_3,
} from "../meses-estado/11-noviembre-sur.js";

// primer piso
const noviembre_sur_p_1_d_1 = document.querySelector(".noviembre_sur_P_1_D_1");
noviembre_sur_p_1_d_1.classList.add(noviembre_sur_P_1_D_1.status);
const noviembre_sur_p_1_d_1Div =
  noviembre_sur_p_1_d_1.querySelector(".container-status");

if (noviembre_sur_P_1_D_1.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_1_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_1_D_1.unidad;

  noviembre_sur_p_1_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_1_d_1Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_1_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_1_D_1.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_1_D_1.precio;
  noviembre_sur_p_1_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_1_d_1Div.appendChild(unidad_noviembre);
  noviembre_sur_p_1_d_1Div.appendChild(precio_noviembre);
}

// const noviembre_sur_p_1_d_2 = document.querySelector(".noviembre_sur_P_1_D_2");
// noviembre_sur_p_1_d_2.classList.add(noviembre_sur_P_1_D_2);
// const noviembre_sur_p_1_d_2Div = noviembre_sur_p_1_d_2.querySelector("div");
// noviembre_sur_p_1_d_2Div.querySelector("p").innerHTML = noviembre_sur_P_1_D_2;

const noviembre_sur_p_1_d_3 = document.querySelector(".noviembre_sur_P_1_D_3");
noviembre_sur_p_1_d_3.classList.add(noviembre_sur_P_1_D_3.status);
const noviembre_sur_p_1_d_3Div =
  noviembre_sur_p_1_d_3.querySelector(".container-status");

if (noviembre_sur_P_1_D_3.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_1_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_1_D_3.unidad;

  noviembre_sur_p_1_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_1_d_3Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_1_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_1_D_3.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_1_D_3.precio;
  noviembre_sur_p_1_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_1_d_3Div.appendChild(unidad_noviembre);
  noviembre_sur_p_1_d_3Div.appendChild(precio_noviembre);
}

// segundo piso
const noviembre_sur_p_2_d_1 = document.querySelector(".noviembre_sur_P_2_D_1");
noviembre_sur_p_2_d_1.classList.add(noviembre_sur_P_2_D_1.status);
const noviembre_sur_p_2_d_1Div =
  noviembre_sur_p_2_d_1.querySelector(".container-status");

if (noviembre_sur_P_2_D_1.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_2_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_2_D_1.unidad;

  noviembre_sur_p_2_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_2_d_1Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_2_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_2_D_1.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_2_D_1.precio;
  noviembre_sur_p_2_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_2_d_1Div.appendChild(unidad_noviembre);
  noviembre_sur_p_2_d_1Div.appendChild(precio_noviembre);
}

const noviembre_sur_p_2_d_2 = document.querySelector(".noviembre_sur_P_2_D_2");
noviembre_sur_p_2_d_2.classList.add(noviembre_sur_P_2_D_2.status);
const noviembre_sur_p_2_d_2Div =
  noviembre_sur_p_2_d_2.querySelector(".container-status");

if (noviembre_sur_P_2_D_2.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_2_D_2.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_2_D_2.unidad;

  noviembre_sur_p_2_d_2Div.appendChild(status_noviembre);
  noviembre_sur_p_2_d_2Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_2_D_2.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_2_D_2.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_2_D_2.precio;
  noviembre_sur_p_2_d_2Div.appendChild(status_noviembre);
  noviembre_sur_p_2_d_2Div.appendChild(unidad_noviembre);
  noviembre_sur_p_2_d_2Div.appendChild(precio_noviembre);
}

const noviembre_sur_p_2_d_3 = document.querySelector(".noviembre_sur_P_2_D_3");
noviembre_sur_p_2_d_3.classList.add(noviembre_sur_P_2_D_3.status);
const noviembre_sur_p_2_d_3Div =
  noviembre_sur_p_2_d_3.querySelector(".container-status");

if (noviembre_sur_P_2_D_3.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_2_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_2_D_3.unidad;

  noviembre_sur_p_2_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_2_d_3Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_2_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_2_D_3.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_2_D_3.precio;
  noviembre_sur_p_2_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_2_d_3Div.appendChild(unidad_noviembre);
  noviembre_sur_p_2_d_3Div.appendChild(precio_noviembre);
}

// tercer piso
const noviembre_sur_p_3_d_1 = document.querySelector(".noviembre_sur_P_3_D_1");
noviembre_sur_p_3_d_1.classList.add(noviembre_sur_P_3_D_1.status);
const noviembre_sur_p_3_d_1Div =
  noviembre_sur_p_3_d_1.querySelector(".container-status");

if (noviembre_sur_P_3_D_1.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_3_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_3_D_1.unidad;

  noviembre_sur_p_3_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_3_d_1Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_3_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_3_D_1.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_3_D_1.precio;
  noviembre_sur_p_3_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_3_d_1Div.appendChild(unidad_noviembre);
  noviembre_sur_p_3_d_1Div.appendChild(precio_noviembre);
}

const noviembre_sur_p_3_d_2 = document.querySelector(".noviembre_sur_P_3_D_2");
noviembre_sur_p_3_d_2.classList.add(noviembre_sur_P_3_D_2.status);
const noviembre_sur_p_3_d_2Div =
  noviembre_sur_p_3_d_2.querySelector(".container-status");

if (noviembre_sur_P_3_D_2.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_3_D_2.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_3_D_2.unidad;

  noviembre_sur_p_3_d_2Div.appendChild(status_noviembre);
  noviembre_sur_p_3_d_2Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_3_D_2.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_3_D_2.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_3_D_2.precio;
  noviembre_sur_p_3_d_2Div.appendChild(status_noviembre);
  noviembre_sur_p_3_d_2Div.appendChild(unidad_noviembre);
  noviembre_sur_p_3_d_2Div.appendChild(precio_noviembre);
}

const noviembre_sur_p_3_d_3 = document.querySelector(".noviembre_sur_P_3_D_3");
noviembre_sur_p_3_d_3.classList.add(noviembre_sur_P_3_D_3.status);
const noviembre_sur_p_3_d_3Div =
  noviembre_sur_p_3_d_3.querySelector(".container-status");

if (noviembre_sur_P_3_D_3.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_3_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_3_D_3.unidad;

  noviembre_sur_p_3_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_3_d_3Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_3_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_3_D_3.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_3_D_3.precio;
  noviembre_sur_p_3_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_3_d_3Div.appendChild(unidad_noviembre);
  noviembre_sur_p_3_d_3Div.appendChild(precio_noviembre);
}

// cuarto piso
const noviembre_sur_p_4_d_1 = document.querySelector(".noviembre_sur_P_4_D_1");
noviembre_sur_p_4_d_1.classList.add(noviembre_sur_P_4_D_1.status);
const noviembre_sur_p_4_d_1Div =
  noviembre_sur_p_4_d_1.querySelector(".container-status");

if (noviembre_sur_P_4_D_1.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_4_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_4_D_1.unidad;

  noviembre_sur_p_4_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_4_d_1Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_4_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_4_D_1.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_4_D_1.precio;
  noviembre_sur_p_4_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_4_d_1Div.appendChild(unidad_noviembre);
  noviembre_sur_p_4_d_1Div.appendChild(precio_noviembre);
}

const noviembre_sur_p_4_d_2 = document.querySelector(".noviembre_sur_P_4_D_2");
noviembre_sur_p_4_d_2.classList.add(noviembre_sur_P_4_D_2.status);
const noviembre_sur_p_4_d_2Div =
  noviembre_sur_p_4_d_2.querySelector(".container-status");

if (noviembre_sur_P_4_D_2.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_4_D_2.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_4_D_2.unidad;

  noviembre_sur_p_4_d_2Div.appendChild(status_noviembre);
  noviembre_sur_p_4_d_2Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_4_D_2.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_4_D_2.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_4_D_2.precio;
  noviembre_sur_p_4_d_2Div.appendChild(status_noviembre);
  noviembre_sur_p_4_d_2Div.appendChild(unidad_noviembre);
  noviembre_sur_p_4_d_2Div.appendChild(precio_noviembre);
}

const noviembre_sur_p_4_d_3 = document.querySelector(".noviembre_sur_P_4_D_3");
noviembre_sur_p_4_d_3.classList.add(noviembre_sur_P_4_D_3.status);
const noviembre_sur_p_4_d_3Div =
  noviembre_sur_p_4_d_3.querySelector(".container-status");

if (noviembre_sur_P_4_D_3.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_4_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_4_D_3.unidad;

  noviembre_sur_p_4_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_4_d_3Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_4_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_4_D_3.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_4_D_3.precio;
  noviembre_sur_p_4_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_4_d_3Div.appendChild(unidad_noviembre);
  noviembre_sur_p_4_d_3Div.appendChild(precio_noviembre);
}

// quinto piso
const noviembre_sur_p_5_d_1 = document.querySelector(".noviembre_sur_P_5_D_1");
noviembre_sur_p_5_d_1.classList.add(noviembre_sur_P_5_D_1.status);
const noviembre_sur_p_5_d_1Div =
  noviembre_sur_p_5_d_1.querySelector(".container-status");

if (noviembre_sur_P_5_D_1.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_5_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_5_D_1.unidad;

  noviembre_sur_p_5_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_5_d_1Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_5_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_5_D_1.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_5_D_1.precio;
  noviembre_sur_p_5_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_5_d_1Div.appendChild(unidad_noviembre);
  noviembre_sur_p_5_d_1Div.appendChild(precio_noviembre);
}

const noviembre_sur_p_5_d_2 = document.querySelector(".noviembre_sur_P_5_D_2");
noviembre_sur_p_5_d_2.classList.add(noviembre_sur_P_5_D_2.status);
const noviembre_sur_p_5_d_2Div =
  noviembre_sur_p_5_d_2.querySelector(".container-status");

if (noviembre_sur_P_5_D_2.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_5_D_2.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_5_D_2.unidad;

  noviembre_sur_p_5_d_2Div.appendChild(status_noviembre);
  noviembre_sur_p_5_d_2Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_5_D_2.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_5_D_2.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_5_D_2.precio;
  noviembre_sur_p_5_d_2Div.appendChild(status_noviembre);
  noviembre_sur_p_5_d_2Div.appendChild(unidad_noviembre);
  noviembre_sur_p_5_d_2Div.appendChild(precio_noviembre);
}

const noviembre_sur_p_5_d_3 = document.querySelector(".noviembre_sur_P_5_D_3");
noviembre_sur_p_5_d_3.classList.add(noviembre_sur_P_5_D_3.status);
const noviembre_sur_p_5_d_3Div =
  noviembre_sur_p_5_d_3.querySelector(".container-status");

if (noviembre_sur_P_5_D_3.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_5_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_5_D_3.unidad;

  noviembre_sur_p_5_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_5_d_3Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_5_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_5_D_3.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_5_D_3.precio;
  noviembre_sur_p_5_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_5_d_3Div.appendChild(unidad_noviembre);
  noviembre_sur_p_5_d_3Div.appendChild(precio_noviembre);
}

// sexto piso
const noviembre_sur_p_6_d_1 = document.querySelector(".noviembre_sur_P_6_D_1");
noviembre_sur_p_6_d_1.classList.add(noviembre_sur_P_6_D_1.status);
const noviembre_sur_p_6_d_1Div =
  noviembre_sur_p_6_d_1.querySelector(".container-status");

if (noviembre_sur_P_6_D_1.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_6_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_6_D_1.unidad;

  noviembre_sur_p_6_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_6_d_1Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_6_D_1.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_6_D_1.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_6_D_1.precio;
  noviembre_sur_p_6_d_1Div.appendChild(status_noviembre);
  noviembre_sur_p_6_d_1Div.appendChild(unidad_noviembre);
  noviembre_sur_p_6_d_1Div.appendChild(precio_noviembre);
}

const noviembre_sur_p_6_d_2 = document.querySelector(".noviembre_sur_P_6_D_2");
noviembre_sur_p_6_d_2.classList.add(noviembre_sur_P_6_D_2.status);
const noviembre_sur_p_6_d_2Div =
  noviembre_sur_p_6_d_2.querySelector(".container-status");

if (noviembre_sur_P_6_D_2.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_6_D_2.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_6_D_2.unidad;

  noviembre_sur_p_6_d_2Div.appendChild(status_noviembre);
  noviembre_sur_p_6_d_2Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_6_D_2.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_6_D_2.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_6_D_2.precio;
  noviembre_sur_p_6_d_2Div.appendChild(status_noviembre);
  noviembre_sur_p_6_d_2Div.appendChild(unidad_noviembre);
  noviembre_sur_p_6_d_2Div.appendChild(precio_noviembre);
}

const noviembre_sur_p_6_d_3 = document.querySelector(".noviembre_sur_P_6_D_3");
noviembre_sur_p_6_d_3.classList.add(noviembre_sur_P_6_D_3.status);
const noviembre_sur_p_6_d_3Div =
  noviembre_sur_p_6_d_3.querySelector(".container-status");

if (noviembre_sur_P_6_D_3.status !== "Disponible") {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_6_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_6_D_3.unidad;

  noviembre_sur_p_6_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_6_d_3Div.appendChild(unidad_noviembre);
} else {
  const status_noviembre = document.createElement("p");
  status_noviembre.classList.add("status_depart");
  status_noviembre.innerHTML = noviembre_sur_P_6_D_3.status;

  const unidad_noviembre = document.createElement("p");
  unidad_noviembre.classList.add("unidad_depart");
  unidad_noviembre.innerHTML = "Unidad: " + noviembre_sur_P_6_D_3.unidad;

  const precio_noviembre = document.createElement("p");
  precio_noviembre.classList.add("precio_depart");
  precio_noviembre.innerHTML = "Precio lista: $" + noviembre_sur_P_6_D_3.precio;
  noviembre_sur_p_6_d_3Div.appendChild(status_noviembre);
  noviembre_sur_p_6_d_3Div.appendChild(unidad_noviembre);
  noviembre_sur_p_6_d_3Div.appendChild(precio_noviembre);
}
