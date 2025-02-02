// Crear arreglo de nombres 
let amigos = [];

//funcion para agregar amigos
function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
//validar si se agrego o no el nombre
    if (nombres) {
        amigos.push(nombres);
        console.log(nombres);
        console.log(nombres.length);
        alert('Se agregó el nombre de manera correcta');

        // Añadir el nombre a la lista ul
        let listaAmigos = document.getElementById('listaAmigos');
        let li = document.createElement('li');
        li.textContent = nombres;
        listaAmigos.appendChild(li);

        // Vaciar el campo de entrada
        document.getElementById('amigo').value = '';
    } else {
        alert('no se ingreso ningun nombre');
    }
}

// Función para mostrar nombres y limpiar campo del input
function mostrarNombres() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

// Crear una lista de nombres y agregarla al elemento HTML
    amigos.forEach(function(nombre) {
        resultado.innerHTML += `<li>${nombre}</li>`;
    });
}

// Función con el botón sortear amigo para hacer el calculo del sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreGanador = amigos[indiceAleatorio];
    console.log("El nombre ganador es: " + nombreGanador);
    document.getElementById('resultado').innerHTML = "El nombre ganador es: " + nombreGanador;
}

// Hacer que las funciones estén disponibles globalmente
window.agregarAmigo = agregarAmigo;
window.mostrarNombres = mostrarNombres;
window.sortearAmigo = sortearAmigo;






