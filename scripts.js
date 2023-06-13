// const mainMenu = [
//   {
//     name: 'de pastas',
//     options: [
//       {
//         name: 'ravioles (con salsa a eleccion)',
//         price: 2500,
//       },
//       {
//         name: 'tartelette (con salsa a eleccion)',
//         price: 2300,
//       },
//       {
//         name: 'tallarines (con salsa a eleccion)',
//         price: 1900,
//       },
//     ],
//   },
//   {
//     name: 'de carnes rojas',
//     options: [
//       {
//         name: 'vacio (con acopañamiento)',
//         price: 2700,
//       },
//       {
//         name: 'estofado',
//         price: 2400,
//       },
//       {
//         name: 'parrillada (guarnicion incluida)',
//         price: 3200,
//       },
//     ],
//   },
//   {
//     name: 'de carnes blancas',
//     options: [
//       {
//         name: 'pollo al verdeo con papas noisette',
//         price: 2800,
//       },
//       {
//         name: 'chupin de pescado',
//         price: 2900,
//       },
//       {
//         name: 'pollo al espiedo con papas fritas',
//         price: 2300,
//       },
//     ],
//   },
//   {
//     name: 'vegetariano',
//     options: [
//       {
//         name: 'ratatouille',
//         price: 2600,
//       },
//       {
//         name: 'chou farci',
//         price: 2500,
//       },
//       {
//         name: 'hamburguesa de legumbres con papas fritas',
//         price: 2200,
//       },
//     ],
//   },
// ];

class Comida {
  constructor(tipo, nombre, precio) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const comida1 = new Comida("pastas", "ravioles (con salsa a eleccion)", 2500)
const comida2 = new Comida("pastas", "ñoquis (con salsa a eleccion)", 2300)
const comida3 = new Comida("pastas", "tallarines (con salsa a eleccion)", 1900)
const comida4 = new Comida("carnesRojas", "vacio (con acopañamiento)", 2700)
const comida5 = new Comida("carnesRojas", "estofado", 2400)
const comida6 = new Comida("carnesRojas", "parrillada (guarnicion incluida)", 3200)
const comida7 = new Comida("carnesBlancas", "pollo al verdeo con papas noisette", 2800)
const comida8 = new Comida("carnesBlancas", "chupin de pescado", 2900)
const comida9 = new Comida("carnesBlancas", "pollo al espiedo con papas fritas", 2300)
const comida10 = new Comida("vegetariano", "ratatouille", 2600)
const comida11 = new Comida("vegetariano", "chou farci", 2500)
const comida12 = new Comida("vegetariano", "hamburguesa de legumbres con papas fritas", 2200)



let total = 0;

// function cuenta(precio) {
//   total += precio;
// }

const inicio = document.getElementById("inicio");
const button = document.createElement("button");
button.innerHTML = "Menu";
button.id = "btnInicio";
inicio.appendChild(button)

const COMIDAS = [comida1, comida2, comida3, comida4, comida5, comida6, comida7, comida8, comida9, comida10, comida11, comida12]

for (let menu of COMIDAS) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `
    <h2>Tipo : ${menu.tipo}</h2>
    <h2>Nombre : ${menu.nombre}</h2>
    <h2>Precio : ${menu.precio}</h2>
  `
  document.body.append(contenedor)

  const agregar = document.createElement("button");
  agregar.innerHTML = "agregar";
  button.id = "sumar";
  contenedor.appendChild(agregar)
}



button.addEventListener('click', () => {
  const menu = document.getElementById("menu");

  inicio.style.display = 'none';

  menu.style.display = 'block';
})

agregar.addEventListener('click', function cuenta(precio) {
  total += precio;
})



// function displayOptions(options) {
//   return options.map(function (option, i) {
//     let display = `${i + 1}. ${option.name}`
//     if (option.price) display += ` $${option.price}`
//     return display;
//   }).join(' | ') + ' | 0. salir';
// }

// function choose() {
//   const menuDisplay = displayOptions(mainMenu);
//   const select = parseInt(prompt(`Seleccione entre las opciones de menu que desea/n comer: ${menuDisplay} `))
//   const menuSelected = mainMenu[select - 1];
//   if (!menuSelected) return true;

//   const optionsDisplay = displayOptions(menuSelected.options);
//   const option = parseInt(prompt(`Estas son las opciones a disposicion en el menu ${menuSelected.name}: ${optionsDisplay}`))
//   const selectedOption = menuSelected.options[option - 1];
//   if (selectedOption) {
//     alert(`Gracias, disfrute su porción de ${selectedOption.name}`);
//     cuenta(selectedOption.price);
//   } else {
//     alert("Gracias, hasta luego");
//   }
//   return false;
// }


// let finish = false
// while (!finish) {
//   finish = choose()
// }

// alert(`El valor de su cuenta total es de ${total}`);
