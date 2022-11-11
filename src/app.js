const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const tipos = ["♥", "♦", "♠ ", "♠"];
let i = "";
let arrCartas = [];

let newObject = {};

const inputUsuario = () => {
  let input = document.getElementById("inputUsuario");
  return parseInt(input.value);
};

let input = document.getElementById("inputUsuario");
input.addEventListener("change", inputUsuario);

let seccionCarta = document.getElementById("sec-generar");
let botonGenerar = document.getElementById("btnGenCarta");

botonGenerar.addEventListener("click", () => {
  let resultado0 = dibujarCarta(arrCartas);
});

function dibujarCarta() {
  arrCartas = [];
  seccionCarta.innerHTML = "";
  let contenedorCarta = document.createElement("div");

  for (i = 0; i < inputUsuario(); i++) {
    let sortNumbers = valores[Math.floor(Math.random() * 13)];
    let sortTipos = tipos[Math.floor(Math.random() * 4)];

    let color = sortTipos === "♥" || sortTipos === "♦" ? "red" : "black";

    let objCarta = {};

    objCarta.numero = sortNumbers;
    objCarta.tipo = sortTipos;
    arrCartas.push(objCarta);

    let nuevaCarta = document.createElement("div");
    let divNumero = document.createElement("div");
    let divTipo = document.createElement("div");
    let divTipo2 = document.createElement("div");

    divTipo.style.color = color;
    divTipo2.style.color = color;

    divNumero.innerHTML = cambiarValor(objCarta.numero);

    divTipo.innerHTML = objCarta.tipo;
    divTipo2.innerHTML = objCarta.tipo;

    contenedorCarta.classList.add("section-cartas");
    nuevaCarta.classList.add("carta");
    divNumero.classList.add("carta-numeros");
    divTipo.classList.add("tipo-arriba");
    divTipo2.classList.add("tipo-abajo");

    nuevaCarta.append(divNumero, divTipo, divTipo2);
    contenedorCarta.appendChild(nuevaCarta);
  }
  seccionCarta.append(contenedorCarta);
}

function cambiarValor(valor) {
  switch (valor) {
    case 1:
      return "A";
    case 10:
      return "10";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return valor;
  }
}

let secAlgoritmo = document.getElementById("sec-algoritmo");

let botonOrdenar = document.getElementById("btnClasCarta");
botonOrdenar.addEventListener("click", () => {
  secAlgoritmo.innerHTML = "";
  bubbleSort(arrCartas);
});

const bubbleSort = arr => {
  let wall = arr.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (arr[index].numero > arr[index + 1].numero) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--;
    dibujarCartaOrdenadas(arr);
  }
  return arr;
};

function dibujarCartaOrdenadas(arr) {
  let contenedorCarta = document.createElement("div");

  for (i = 0; i < arr.length; i++) {
    contenedorCarta.classList.add("section-cartas2");

    let nuevaCarta = document.createElement("div");
    let divNumero = document.createElement("div");
    let divTipo = document.createElement("div");
    let divTipo2 = document.createElement("div");

    nuevaCarta.classList.add("carta");
    divNumero.classList.add("carta-numeros");
    divTipo.classList.add("tipo-arriba");
    divTipo2.classList.add("tipo-abajo");

    let color = arr[i].tipo === "♥" || arr[i].tipo === "♦" ? "red" : "black";
    divTipo.style.color = color;
    divTipo2.style.color = color;

    divNumero.innerHTML = cambiarValor(arr[i].numero);

    divTipo.innerHTML = arr[i].tipo;
    divTipo2.innerHTML = arr[i].tipo;

    nuevaCarta.append(divNumero, divTipo, divTipo2);
    contenedorCarta.appendChild(nuevaCarta);
  }

  secAlgoritmo.append(contenedorCarta);

  return arr;
}
