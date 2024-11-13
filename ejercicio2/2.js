const inputTarea = document.getElementById('nueva-tarea');
const botonAgregar = document.getElementById('agregar-tarea');
const listaTareas = document.getElementById('lista-tareas');

function agregarTarea() {
    const tareaTexto = inputTarea.value.trim(); 

    if (tareaTexto !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = tareaTexto;

        const botonEliminar = document.createElement('span');
        botonEliminar.textContent = ' Eliminar';
        botonEliminar.classList.add('boton-eliminar');
        
        botonEliminar.addEventListener('click', () => {
            listaTareas.removeChild(nuevaTarea);
        });

        nuevaTarea.addEventListener('click', () => {
            nuevaTarea.classList.toggle('completada');
        });

        nuevaTarea.appendChild(botonEliminar);

        listaTareas.appendChild(nuevaTarea);

        inputTarea.value = '';
    } else {
        alert('Por favor, ingresa una tarea');
    }
}

botonAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});
