document.getElementById('boton').addEventListener('click', function() {

const nombre = document.getElementById("nombre").value;
const correo = document.getElementById("correo").value;
const contraseña = document.getElementById("contraseña").value;

clearMessages();

let valid = true;

if (nombre.trim() === '') {
    showError('nombre', 'El nombre no puede estar vacio');
    valid = false;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailRegex.test(correo)) {
    showError('correo', 'El correo electronico no es valido');
    valid = false;
}

if (contraseña.length < 6) {
    showError('contraseña', 'La contraseña debe tener al menos 6 caracteres');
    valid = false;
}

if (valid) {
    console.log('Datos de registro:');
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Contraseña:', contraseña);
    alert('Registro exitoso');
    }

});

function showError(fieldId, message) {
const field = document.getElementById(fieldId);
const errorDiv = document.createElement('div');
errorDiv.classList.add('error-message');
errorDiv.textContent = message;
field.parentElement.appendChild(errorDiv);
}

function clearMessages() {
const errorMessages = document.querySelectorAll('.error-message');
errorMessages.forEach(msg => msg.remove());
}
