function agregarTarea() {
    const texto = document.getElementById('tarea').value;
    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        document.getElementById("lista").appendChild(li);
        document.getElementById("tarea").value = "";
    }
}

document.getElementById("limpiar").addEventListener("click", function () {
    document.getElementById("lista").innerHTML = "";
});

