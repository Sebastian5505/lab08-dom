// Definición de la clase propia con constructor, 2 atributos y 2 métodos
class Estudiante {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = parseFloat(nota);
    }

    obtenerDetalle() {
        return `${this.nombre} - Nota: ${this.nota.toFixed(1)}`;
    }

    aprobo() {
        return this.nota >= 10.5;
    }
}

// Arreglo global para almacenar los objetos
let listaEstudiantes = [];

// Selección de elementos del DOM
const studentForm = document.getElementById('studentForm');
const studentNameInput = document.getElementById('studentName');
const studentScoreInput = document.getElementById('studentScore');
const studentList = document.getElementById('studentList');
const averageScoreSpan = document.getElementById('averageScore');
const errorMsg = document.getElementById('errorMsg');
const clearAllBtn = document.getElementById('clearAllBtn');

// Función para actualizar la interfaz y calcular el promedio
function actualizarVista() {
    studentList.innerHTML = '';
    
    if (listaEstudiantes.length === 0) {
        averageScoreSpan.textContent = '0.0';
        return;
    }

    let sumaNotas = 0;

    listaEstudiantes.forEach((est, index) => {
        sumaNotas += est.nota;

        // Crear elementos con createElement
        const li = document.createElement('li');
        li.textContent = est.obtenerDetalle();
        
        if (est.aprobo()) {
            li.classList.add('aprobado');
        } else {
            li.classList.add('desaprobado');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('delete-btn');
        
        // Evento click individual para eliminar un elemento de la lista
        deleteBtn.addEventListener('click', () => {
            listaEstudiantes.splice(index, 1);
            actualizarVista();
        });

        li.appendChild(deleteBtn);
        studentList.appendChild(li);
    });

    const promedio = sumaNotas / listaEstudiantes.length;
    averageScoreSpan.textContent = promedio.toFixed(2);
}

// Evento 1: submit en el formulario
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = studentNameInput.value.trim();
    const nota = parseFloat(studentScoreInput.value);

    // Validación de datos con mensaje visible en la página (sin alert)
    if (nombre === '' || isNaN(nota) || nota < 0 || nota > 20) {
        errorMsg.classList.remove('error-hidden');
        return;
    }

    errorMsg.classList.add('error-hidden');

    // Creación de objeto usando la clase Estudiante
    const nuevoEstudiante = new Estudiante(nombre, nota);
    listaEstudiantes.push(nuevoEstudiante);

    actualizarVista();
    studentForm.reset();
    studentNameInput.focus();
});

// Evento 2: input para ocultar el mensaje de error cuando el usuario escribe
studentScoreInput.addEventListener('input', () => {
    if (!errorMsg.classList.contains('error-hidden')) {
        errorMsg.classList.add('error-hidden');
    }
});

// Evento 3: click para vaciar todo el registro de golpe
clearAllBtn.addEventListener('click', () => {
    listaEstudiantes = [];
    actualizarVista();
});
