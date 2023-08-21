import {
  septiembre_sur_P_1_D_1,
  //   septiembre_sur_P_1_D_2,
  septiembre_sur_P_1_D_3,
  septiembre_sur_P_2_D_1,
  septiembre_sur_P_2_D_2,
  septiembre_sur_P_2_D_3,
  septiembre_sur_P_3_D_1,
  septiembre_sur_P_3_D_2,
  septiembre_sur_P_3_D_3,
  septiembre_sur_P_4_D_1,
  septiembre_sur_P_4_D_2,
  septiembre_sur_P_4_D_3,
  septiembre_sur_P_5_D_1,
  septiembre_sur_P_5_D_2,
  septiembre_sur_P_5_D_3,
  septiembre_sur_P_6_D_1,
  septiembre_sur_P_6_D_2,
  septiembre_sur_P_6_D_3,
} from "./meses-estado/9-septiembre-sur.js";

// primer piso
const septiembre_sur_p_1_d_1 = document.querySelector(
  ".septiembre_sur_P_1_D_1"
);
septiembre_sur_p_1_d_1.classList.add(septiembre_sur_P_1_D_1.status);
const septiembre_sur_p_1_d_1Div =
  septiembre_sur_p_1_d_1.querySelector(".container-status");

if (septiembre_sur_P_1_D_1.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_1_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_1_D_1.unidad;

  septiembre_sur_p_1_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_1_d_1Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_1_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_1_D_1.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_1_D_1.precio;
  septiembre_sur_p_1_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_1_d_1Div.appendChild(unidad_septiembre);
  septiembre_sur_p_1_d_1Div.appendChild(precio_septiembre);
}

// const septiembre_sur_p_1_d_2 = document.querySelector(".septiembre_sur_P_1_D_2");
// septiembre_sur_p_1_d_2.classList.add(septiembre_sur_P_1_D_2);
// const septiembre_sur_p_1_d_2Div = septiembre_sur_p_1_d_2.querySelector("div");
// septiembre_sur_p_1_d_2Div.querySelector("p").innerHTML = septiembre_sur_P_1_D_2;

const septiembre_sur_p_1_d_3 = document.querySelector(
  ".septiembre_sur_P_1_D_3"
);
septiembre_sur_p_1_d_3.classList.add(septiembre_sur_P_1_D_3.status);
const septiembre_sur_p_1_d_3Div =
  septiembre_sur_p_1_d_3.querySelector(".container-status");

if (septiembre_sur_P_1_D_3.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_1_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_1_D_3.unidad;

  septiembre_sur_p_1_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_1_d_3Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_1_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_1_D_3.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_1_D_3.precio;
  septiembre_sur_p_1_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_1_d_3Div.appendChild(unidad_septiembre);
  septiembre_sur_p_1_d_3Div.appendChild(precio_septiembre);
}

// segundo piso
const septiembre_sur_p_2_d_1 = document.querySelector(
  ".septiembre_sur_P_2_D_1"
);
septiembre_sur_p_2_d_1.classList.add(septiembre_sur_P_2_D_1.status);
const septiembre_sur_p_2_d_1Div =
  septiembre_sur_p_2_d_1.querySelector(".container-status");

if (septiembre_sur_P_2_D_1.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_2_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_2_D_1.unidad;

  septiembre_sur_p_2_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_2_d_1Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_2_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_2_D_1.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_2_D_1.precio;
  septiembre_sur_p_2_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_2_d_1Div.appendChild(unidad_septiembre);
  septiembre_sur_p_2_d_1Div.appendChild(precio_septiembre);
}

const septiembre_sur_p_2_d_2 = document.querySelector(
  ".septiembre_sur_P_2_D_2"
);
septiembre_sur_p_2_d_2.classList.add(septiembre_sur_P_2_D_2.status);
const septiembre_sur_p_2_d_2Div =
  septiembre_sur_p_2_d_2.querySelector(".container-status");

if (septiembre_sur_P_2_D_2.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_2_D_2.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_2_D_2.unidad;

  septiembre_sur_p_2_d_2Div.appendChild(status_septiembre);
  septiembre_sur_p_2_d_2Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_2_D_2.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_2_D_2.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_2_D_2.precio;
  septiembre_sur_p_2_d_2Div.appendChild(status_septiembre);
  septiembre_sur_p_2_d_2Div.appendChild(unidad_septiembre);
  septiembre_sur_p_2_d_2Div.appendChild(precio_septiembre);
}

const septiembre_sur_p_2_d_3 = document.querySelector(
  ".septiembre_sur_P_2_D_3"
);
septiembre_sur_p_2_d_3.classList.add(septiembre_sur_P_2_D_3.status);
const septiembre_sur_p_2_d_3Div =
  septiembre_sur_p_2_d_3.querySelector(".container-status");

if (septiembre_sur_P_2_D_3.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_2_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_2_D_3.unidad;

  septiembre_sur_p_2_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_2_d_3Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_2_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_2_D_3.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_2_D_3.precio;
  septiembre_sur_p_2_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_2_d_3Div.appendChild(unidad_septiembre);
  septiembre_sur_p_2_d_3Div.appendChild(precio_septiembre);
}

// tercer piso
const septiembre_sur_p_3_d_1 = document.querySelector(
  ".septiembre_sur_P_3_D_1"
);
septiembre_sur_p_3_d_1.classList.add(septiembre_sur_P_3_D_1.status);
const septiembre_sur_p_3_d_1Div =
  septiembre_sur_p_3_d_1.querySelector(".container-status");

if (septiembre_sur_P_3_D_1.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_3_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_3_D_1.unidad;

  septiembre_sur_p_3_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_3_d_1Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_3_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_3_D_1.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_3_D_1.precio;
  septiembre_sur_p_3_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_3_d_1Div.appendChild(unidad_septiembre);
  septiembre_sur_p_3_d_1Div.appendChild(precio_septiembre);
}

const septiembre_sur_p_3_d_2 = document.querySelector(
  ".septiembre_sur_P_3_D_2"
);
septiembre_sur_p_3_d_2.classList.add(septiembre_sur_P_3_D_2.status);
const septiembre_sur_p_3_d_2Div =
  septiembre_sur_p_3_d_2.querySelector(".container-status");

if (septiembre_sur_P_3_D_2.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_3_D_2.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_3_D_2.unidad;

  septiembre_sur_p_3_d_2Div.appendChild(status_septiembre);
  septiembre_sur_p_3_d_2Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_3_D_2.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_3_D_2.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_3_D_2.precio;
  septiembre_sur_p_3_d_2Div.appendChild(status_septiembre);
  septiembre_sur_p_3_d_2Div.appendChild(unidad_septiembre);
  septiembre_sur_p_3_d_2Div.appendChild(precio_septiembre);
}

const septiembre_sur_p_3_d_3 = document.querySelector(
  ".septiembre_sur_P_3_D_3"
);
septiembre_sur_p_3_d_3.classList.add(septiembre_sur_P_3_D_3.status);
const septiembre_sur_p_3_d_3Div =
  septiembre_sur_p_3_d_3.querySelector(".container-status");

if (septiembre_sur_P_3_D_3.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_3_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_3_D_3.unidad;

  septiembre_sur_p_3_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_3_d_3Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_3_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_3_D_3.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_3_D_3.precio;
  septiembre_sur_p_3_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_3_d_3Div.appendChild(unidad_septiembre);
  septiembre_sur_p_3_d_3Div.appendChild(precio_septiembre);
}

// cuarto piso
const septiembre_sur_p_4_d_1 = document.querySelector(
  ".septiembre_sur_P_4_D_1"
);
septiembre_sur_p_4_d_1.classList.add(septiembre_sur_P_4_D_1.status);
const septiembre_sur_p_4_d_1Div =
  septiembre_sur_p_4_d_1.querySelector(".container-status");

if (septiembre_sur_P_4_D_1.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_4_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_4_D_1.unidad;

  septiembre_sur_p_4_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_4_d_1Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_4_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_4_D_1.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_4_D_1.precio;
  septiembre_sur_p_4_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_4_d_1Div.appendChild(unidad_septiembre);
  septiembre_sur_p_4_d_1Div.appendChild(precio_septiembre);
}

const septiembre_sur_p_4_d_2 = document.querySelector(
  ".septiembre_sur_P_4_D_2"
);
septiembre_sur_p_4_d_2.classList.add(septiembre_sur_P_4_D_2.status);
const septiembre_sur_p_4_d_2Div =
  septiembre_sur_p_4_d_2.querySelector(".container-status");

if (septiembre_sur_P_4_D_2.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_4_D_2.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_4_D_2.unidad;

  septiembre_sur_p_4_d_2Div.appendChild(status_septiembre);
  septiembre_sur_p_4_d_2Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_4_D_2.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_4_D_2.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_4_D_2.precio;
  septiembre_sur_p_4_d_2Div.appendChild(status_septiembre);
  septiembre_sur_p_4_d_2Div.appendChild(unidad_septiembre);
  septiembre_sur_p_4_d_2Div.appendChild(precio_septiembre);
}

const septiembre_sur_p_4_d_3 = document.querySelector(
  ".septiembre_sur_P_4_D_3"
);
septiembre_sur_p_4_d_3.classList.add(septiembre_sur_P_4_D_3.status);
const septiembre_sur_p_4_d_3Div =
  septiembre_sur_p_4_d_3.querySelector(".container-status");

if (septiembre_sur_P_4_D_3.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_4_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_4_D_3.unidad;

  septiembre_sur_p_4_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_4_d_3Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_4_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_4_D_3.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_4_D_3.precio;
  septiembre_sur_p_4_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_4_d_3Div.appendChild(unidad_septiembre);
  septiembre_sur_p_4_d_3Div.appendChild(precio_septiembre);
}

// quinto piso
const septiembre_sur_p_5_d_1 = document.querySelector(
  ".septiembre_sur_P_5_D_1"
);
septiembre_sur_p_5_d_1.classList.add(septiembre_sur_P_5_D_1.status);
const septiembre_sur_p_5_d_1Div =
  septiembre_sur_p_5_d_1.querySelector(".container-status");

if (septiembre_sur_P_5_D_1.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_5_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_5_D_1.unidad;

  septiembre_sur_p_5_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_5_d_1Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_5_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_5_D_1.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_5_D_1.precio;
  septiembre_sur_p_5_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_5_d_1Div.appendChild(unidad_septiembre);
  septiembre_sur_p_5_d_1Div.appendChild(precio_septiembre);
}

const septiembre_sur_p_5_d_2 = document.querySelector(
  ".septiembre_sur_P_5_D_2"
);
septiembre_sur_p_5_d_2.classList.add(septiembre_sur_P_5_D_2.status);
const septiembre_sur_p_5_d_2Div =
  septiembre_sur_p_5_d_2.querySelector(".container-status");

if (septiembre_sur_P_5_D_2.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_5_D_2.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_5_D_2.unidad;

  septiembre_sur_p_5_d_2Div.appendChild(status_septiembre);
  septiembre_sur_p_5_d_2Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_5_D_2.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_5_D_2.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_5_D_2.precio;
  septiembre_sur_p_5_d_2Div.appendChild(status_septiembre);
  septiembre_sur_p_5_d_2Div.appendChild(unidad_septiembre);
  septiembre_sur_p_5_d_2Div.appendChild(precio_septiembre);
}

const septiembre_sur_p_5_d_3 = document.querySelector(
  ".septiembre_sur_P_5_D_3"
);
septiembre_sur_p_5_d_3.classList.add(septiembre_sur_P_5_D_3.status);
const septiembre_sur_p_5_d_3Div =
  septiembre_sur_p_5_d_3.querySelector(".container-status");

if (septiembre_sur_P_5_D_3.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_5_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_5_D_3.unidad;

  septiembre_sur_p_5_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_5_d_3Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_5_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_5_D_3.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_5_D_3.precio;
  septiembre_sur_p_5_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_5_d_3Div.appendChild(unidad_septiembre);
  septiembre_sur_p_5_d_3Div.appendChild(precio_septiembre);
}

// sexto piso
const septiembre_sur_p_6_d_1 = document.querySelector(
  ".septiembre_sur_P_6_D_1"
);
septiembre_sur_p_6_d_1.classList.add(septiembre_sur_P_6_D_1.status);
const septiembre_sur_p_6_d_1Div =
  septiembre_sur_p_6_d_1.querySelector(".container-status");

if (septiembre_sur_P_6_D_1.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_6_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_6_D_1.unidad;

  septiembre_sur_p_6_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_6_d_1Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_6_D_1.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_6_D_1.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_6_D_1.precio;
  septiembre_sur_p_6_d_1Div.appendChild(status_septiembre);
  septiembre_sur_p_6_d_1Div.appendChild(unidad_septiembre);
  septiembre_sur_p_6_d_1Div.appendChild(precio_septiembre);
}

const septiembre_sur_p_6_d_2 = document.querySelector(
  ".septiembre_sur_P_6_D_2"
);
septiembre_sur_p_6_d_2.classList.add(septiembre_sur_P_6_D_2.status);
const septiembre_sur_p_6_d_2Div =
  septiembre_sur_p_6_d_2.querySelector(".container-status");

if (septiembre_sur_P_6_D_2.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_6_D_2.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_6_D_2.unidad;

  septiembre_sur_p_6_d_2Div.appendChild(status_septiembre);
  septiembre_sur_p_6_d_2Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_6_D_2.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_6_D_2.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_6_D_2.precio;
  septiembre_sur_p_6_d_2Div.appendChild(status_septiembre);
  septiembre_sur_p_6_d_2Div.appendChild(unidad_septiembre);
  septiembre_sur_p_6_d_2Div.appendChild(precio_septiembre);
}

const septiembre_sur_p_6_d_3 = document.querySelector(
  ".septiembre_sur_P_6_D_3"
);
septiembre_sur_p_6_d_3.classList.add(septiembre_sur_P_6_D_3.status);
const septiembre_sur_p_6_d_3Div =
  septiembre_sur_p_6_d_3.querySelector(".container-status");

if (septiembre_sur_P_6_D_3.status !== "Disponible") {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_6_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_6_D_3.unidad;

  septiembre_sur_p_6_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_6_d_3Div.appendChild(unidad_septiembre);
} else {
  const status_septiembre = document.createElement("p");
  status_septiembre.classList.add("status_depart");
  status_septiembre.innerHTML = septiembre_sur_P_6_D_3.status;

  const unidad_septiembre = document.createElement("p");
  unidad_septiembre.classList.add("unidad_depart");
  unidad_septiembre.innerHTML = "Unidad: " + septiembre_sur_P_6_D_3.unidad;

  const precio_septiembre = document.createElement("p");
  precio_septiembre.classList.add("precio_depart");
  precio_septiembre.innerHTML =
    "Precio lista: $" + septiembre_sur_P_6_D_3.precio;
  septiembre_sur_p_6_d_3Div.appendChild(status_septiembre);
  septiembre_sur_p_6_d_3Div.appendChild(unidad_septiembre);
  septiembre_sur_p_6_d_3Div.appendChild(precio_septiembre);
}
