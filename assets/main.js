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

function crearProyecto() {
    const nombrePromocion = document.getElementById('nombre-promocion').value.trim();
    const fechaInicio = document.getElementById('fecha-inicio').value.trim();
    const fechaFin = document.getElementById('fecha-fin').value.trim();
    const modalidad = document.getElementById('modalidad').value.trim();
    const participantes = document.getElementById('participantes').value.trim();
    const condiciones = document.getElementById('condiciones').value.trim();
    const definicion = document.getElementById('definicion').value.trim();
    const sorteo = document.getElementById('sorteo').value.trim();
    const sorteoFecha = document.getElementById('sorteo-fecha').value.trim();
    const entrega = document.getElementById('entrega').value.trim();
    const entregaFecha = document.getElementById('entrega-fecha').value.trim();
    const premioCantidad = document.getElementById('premio-cantidad').value.trim();
    const premioDescripcion = document.getElementById('premio-descripcion').value.trim();
    const premioPrecio = document.getElementById('premio-precio').value.trim();
    const premioValor = document.getElementById('premio-valor').value.trim();

    if (nombrePromocion === '' || fechaInicio === '' || fechaFin === '' || modalidad === '' || participantes === '' || condiciones === '' || definicion === '' || sorteo === '' || sorteoFecha === '' || entrega === '' || entregaFecha === '' || premioCantidad === '' || premioDescripcion === '' || premioPrecio === '' || premioValor === ''){
        console.log("Por favor, completa todos los campos.");
        return false;
    }

    console.log(`a) Nombre de la Promoción Empresarial: ${nombrePromocion}`);
    console.log(`b) Periodo de Duración: La presente promoción empresarial tiene como fecha de inicio el ${fechaInicio} y como fecha de finalizacion el ${fechaFin}`)
    console.log(`c) Modalidad de Premiación: 
    La presente promoción empresarial se encuentra bajo la modalidad ${modalidad}.
    Las personas que podran participar de la promocion empresarial son ${participantes}, quienes deben cumplir con las siguientes condiciones para poder participar:
    ${condiciones}.
    Los participantes que resulten ganadores seran seleccionados de la siguiente manera:
    ${definicion}.`)
    console.log(`d) Lugar y Fecha de Sorteo: El sorteo se llevará a cabo en ${sorteo} en fecha ${sorteoFecha}.`)
    console.log(`e) Lugar y Fecha de Entrega de Premios: La Entrega de Premios se llevará a cabo en ${entrega} en fecha ${entregaFecha}.`)
    console.log(`f) Premios Ofertados: Para la presente promocion empresarial se ofertan ${premioCantidad} premios, consistentes en ${premioDescripcion}, cada uno con un precio de Bs${premioPrecio}, haciendo un total de Bs${premioValor}`)
    return true; // El formulario se enviará si todo está bien


    


}