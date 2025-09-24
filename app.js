// 1. Declarar el array para almacenar los amigos
let amigos = [];

// 2. Función para agregar amigos
function adicionarAmigo() {
    // Capturar valor del input
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista en pantalla
    mostrarLista();
}

// 3. Función para mostrar la lista de amigos
function mostrarLista() {
    // Obtener la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar lista previa
    lista.innerHTML = "";

    // Recorrer el array y crear elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 4. Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }

    // Generar índice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let elegido = amigos[indice];

    // Mostrar resultado
    document.getElementById("resultado").innerHTML =
        "🎉 El amigo secreto es: <b>" + elegido + "</b>";
}