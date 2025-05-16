
// Agregar una tarea a la lista
document.getElementById("agregar").addEventListener("click", function () {
    const tarea = document.getElementById("tarea").value.trim();

    if (tarea === "") {
        alert("Por favor ingresa una tarea válida.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = tarea;
    document.getElementById("lista").appendChild(li);
    document.getElementById("tarea").value = "";
});


// Limpiar la lista de tareas 
document.getElementById("limpiar").addEventListener("click", function () {
    document.getElementById("lista").innerHTML = "";
});

