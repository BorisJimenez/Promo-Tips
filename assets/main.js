const hamburguesaBtn = document.querySelector('.header-button');
const menu = document.querySelector('.menu');

hamburguesaBtn.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
});

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
        console.log("Por favor, completa todos los campos.");
        return false; // Evita que el formulario se envíe
    }

    console.log("Mensaje enviado");
    return true; // El formulario se enviará si todo está bien

}