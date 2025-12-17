// Ej.js
// Ejecutar al cargar el DOM y garantizar elementos necesarios,
// luego aplicar los cambios pedidos en los 3 ejercicios.

document.addEventListener('DOMContentLoaded', () => {
    // Helper: crear contenedor si no existe
    const ensureContainer = (id) => {
        let c = document.getElementById(id);
        if (!c) {
            c = document.createElement('section');
            c.id = id;
            document.body.appendChild(c);
        }
        return c;
    };

    // Ejercicio 1: Cambiar el Contenido
    const ex1 = ensureContainer('ex1');
    let h1Ex1 = ex1.querySelector('h1');
    if (!h1Ex1) {
        h1Ex1 = document.createElement('h1');
        h1Ex1.textContent = 'Título original';
        ex1.appendChild(h1Ex1);
    }
    let pEx1 = ex1.querySelector('p');
    if (!pEx1) {
        pEx1 = document.createElement('p');
        pEx1.textContent = 'Texto original';
        ex1.appendChild(pEx1);
    }
    // Aplicar cambios solicitados
    h1Ex1.textContent = 'Título actualizado';
    pEx1.textContent = 'Texto actualizado';

    // Ejercicio 2: Modificar Atributos
    const ex2 = ensureContainer('ex2');
    let imgEx2 = ex2.querySelector('img');
    if (!imgEx2) {
        imgEx2 = document.createElement('img');
        // src inicial (puede ser cualquier URL válida)
        imgEx2.src = 'https://via.placeholder.com/200?text=Foto+Original';
        imgEx2.alt = 'Foto original';
        ex2.appendChild(imgEx2);
    }
    let desc = ex2.querySelector('#descripcion');
    if (!desc) {
        desc = document.createElement('p');
        desc.id = 'descripcion';
        desc.textContent = 'Descripción original';
        ex2.appendChild(desc);
    }
    // Cambiar atributo src y contenido del párrafo
    imgEx2.src = 'https://via.placeholder.com/200?text=Foto+Actualizada';
    desc.textContent = 'Imagen actualizada';

    // Ejercicio 3: Modificar Estilos
    const ex3 = ensureContainer('ex3');
    let titulo = ex3.querySelector('#titulo');
    if (!titulo) {
        titulo = document.createElement('h1');
        titulo.id = 'titulo';
        titulo.textContent = 'Hola, mundo';
        ex3.appendChild(titulo);
    }
    // Aplicar estilos solicitados
    titulo.style.color = 'red';
    titulo.style.fontSize = '32px';
});