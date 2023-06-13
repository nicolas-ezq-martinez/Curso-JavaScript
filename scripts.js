class Comida {
  constructor(tipo, nombre, precio) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const TIPOS = [
  {
    nombre: 'Pastas', opciones: [
      new Comida("pastas", "ravioles (con salsa a eleccion)", 2500),
      new Comida("pastas", "ñoquis (con salsa a eleccion)", 2300),
      new Comida("pastas", "tallarines (con salsa a eleccion)", 1900),
    ],
  },
  {
    nombre: 'Carnes Rojas', opciones: [
      new Comida("carnesRojas", "vacio (con acopañamiento)", 2700),
      new Comida("carnesRojas", "estofado", 2400),
      new Comida("carnesRojas", "parrillada (guarnicion incluida)", 3200),
    ]
  },
  {
    nombre: 'Carnes Blancas', opciones: [
      new Comida("carnesBlancas", "pollo al verdeo con papas noisette", 2800),
      new Comida("carnesBlancas", "chupin de pescado", 2900),
      new Comida("carnesBlancas", "pollo al espiedo con papas fritas", 2300),
    ]
  },
  {
    nombre: 'Vegetariano', opciones: [
      new Comida("vegetariano", "ratatouille", 2600),
      new Comida("vegetariano", "chou farci", 2500),
      new Comida("vegetariano", "hamburguesa de legumbres con papas fritas", 2200),
    ]
  },
];



let total = 0;
const guardarTotal = () => localStorage.setItem('total', JSON.stringify(total));

const storageTotal = localStorage.getItem('total');
if (!storageTotal) {
  guardarTotal();
} else {
  total = JSON.parse(storageTotal);
}

const menuElem = document.getElementById("menu");
const inicioElem = document.getElementById("inicio");
const totalElem = document.getElementById("total");
totalElem.innerHTML = total;

const reiniciarTotal = document.getElementById("reiniciar-total");
reiniciarTotal.addEventListener('click', () => {
  total = 0;
  guardarTotal();
  totalElem.innerHTML = total;
});

const buttonElem = document.createElement("button");
buttonElem.innerHTML = "Menu";
buttonElem.id = "btnInicio";
buttonElem.addEventListener('click', () => {
  inicioElem.style.display = 'none';

  menuElem.style.display = 'flex';
})

inicioElem.appendChild(buttonElem)

const obtenerButton = (precio) => {
  const agregarElem = document.createElement("button");
  agregarElem.innerHTML = "Agregar";
  agregarElem.addEventListener('click', () => {
    total += precio;
    guardarTotal();
    totalElem.innerHTML = total;
  })
  return agregarElem;
};



const agregarOpcion = (filaElem) => ({ nombre, precio }) => {
  const opcionElem = document.createElement("div");
  opcionElem.className = "opcion";
  opcionElem.innerHTML = `
    <h3>Nombre: ${nombre}</h3>
    <h3>Precio: ${precio}</h3>
  `
  opcionElem.appendChild(obtenerButton(precio))
  filaElem.appendChild(opcionElem)
};

TIPOS.forEach(({ nombre, opciones }) => {
  const categoriaElem = document.createElement("div");
  categoriaElem.className = 'categoria';
  categoriaElem.innerHTML = `
    <h3>Tipo: ${nombre}</h3>
  `;

  const filaElem = document.createElement("div");
  filaElem.className = 'fila';
  opciones.forEach(agregarOpcion(filaElem));

  categoriaElem.appendChild(filaElem);
  menuElem.appendChild(categoriaElem);
});



