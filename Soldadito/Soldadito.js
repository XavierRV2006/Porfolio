import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// --- A. CONFIGURACIÓN BÁSICA ---
//Escene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x109090); // Color de fondo gris oscuro


//1. Camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 9); // Movemos la cámara un poco atrás y arriba


//2. Rende
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Antialias para que se vea suave
renderer.setSize(window.innerWidth, window.innerHeight);
//añadimos este nuevo elemento al DOM
document.body.appendChild(renderer.domElement);


// --- B. LUCES  ---
// Luz ambiental (ilumina todo suavemente)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);


// Luz direccional (como el sol)
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 5, 5);
scene.add(dirLight); 


// --- C. OBJETOS ---
// Vamos a crear un cubo pero con material que reaccione a la luz


// PLANO
const planeGeometry = new THREE.PlaneGeometry();
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0x209920,
    roughness: 0.5, // Qué tan áspero es
    metalness: 0.1  // Qué tan metálico es
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.scale.set(7, 7, 7); // Lo hacemos más grande
plane.position.x = 0; // Lo movemos a la izquierda
plane.position.y = -1; // Lo bajamos un poco
plane.rotation.x = - Math.PI / 2; // Lo rotamos para que esté horizontal
scene.add(plane);


// CUBO 1 (Pierna)
const geometry = new THREE.BoxGeometry();
geometry.translate(0, -0.95, 0); // Trasladar el cilindro hacia arriba
const material = new THREE.MeshStandardMaterial({
    color: 0x6a6e73,
    roughness: 0.1, // Qué tan áspero es
    metalness: 0.7  // Qué tan metálico es
});
const cube = new THREE.Mesh(geometry, material);
cube.scale.set(0.5, 2, 0.5); // Tamaño normal
cube.position.y = 1.7; // Lo subimos un poco
scene.add(cube);


// CUBO 2 (Pierna)
const geometry2 = new THREE.BoxGeometry();
geometry2.translate(0, -0.95, 0); // Trasladar el cilindro hacia arriba
const material2 = new THREE.MeshStandardMaterial({
    color: 0x6a6e73,
    roughness: 0.1, // Qué tan áspero es
    metalness: 0.7  // Qué tan metálico es
});
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.scale.set(0.5, 2, 0.5); // Tamaño normal
cube2.position.x = 0.6; // Lo movemos a la derecha
cube2.position.y = 1.7; // Lo subimos un poco
scene.add(cube2);

// CILINDRO (Cuerpo)
const geometry3 = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const material3 = new THREE.MeshStandardMaterial({
    color: 0x00ff5050,
    roughness: 0.5, // Qué tan áspero es
    metalness: 0.9  // Qué tan metálico es
});
const cube3 = new THREE.Mesh(geometry3, material3);
cube3.scale.set(1.5, 1.3, 1.4); // Tamaño normal
cube3.position.x = 0.3; // Lo movemos al centro
cube3.position.y = 2; // Lo subimos un poco
scene.add(cube3);


// CILINDRO 1 (Brazo)
const geometry4 = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
geometry4.translate(0, -1, 0); // Trasladar el cilindro hacia arriba
const material4 = new THREE.MeshStandardMaterial({
    color: 0x6a6e73,
    roughness: 0.1, // Qué tan áspero es
    metalness: 0.9  // Qué tan metálico es
});
const cube4 = new THREE.Mesh(geometry4, material4);
cube4.scale.set(0.5, 1, 0.5); // Tamaño normal
cube4.position.x = -0.7; // Lo movemos al centro
cube4.position.y = 3.2; // Lo subimos un poco
scene.add(cube4);


// CILINDRO 2 (Brazo)
const geometry5 = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
geometry5.translate(0, -1, 0); // Trasladar el cilindro hacia arriba
const material5 = new THREE.MeshStandardMaterial({
    color: 0x6a6e73,
    roughness: 0.1, // Qué tan áspero es
    metalness: 0.9  // Qué tan metálico es
});
const cube5 = new THREE.Mesh(geometry5, material5);
cube5.scale.set(0.5, 1, 0.5); // Tamaño normal
cube5.position.x = 1.2; // Lo movemos al centro
cube5.position.y = 3.2; // Lo subimos un poco
scene.add(cube5);


// Esfera (Cabeza)
const geometry6 = new THREE.SphereGeometry(0.5, 32, 32);
const material6 = new THREE.MeshStandardMaterial({
    color: 0xe3bc9a,
    roughness: 1, // Qué tan áspero es
    metalness: 0  // Qué tan metálico es
});
const cube6 = new THREE.Mesh(geometry6, material6);
cube6.scale.set(1.3, 1.3, 1.3); // Tamaño normal
cube6.position.x = 0.3; // Lo movemos al centro
cube6.position.y = 3.75; // Lo subimos un poco
scene.add(cube6);


// CILINDRO 3 (Sombrero)
const geometry7 = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const material7 = new THREE.MeshStandardMaterial({
    color: 0x6a6e73,
    roughness: 0.1, // Qué tan áspero es
    metalness: 0.9  // Qué tan metálico es
});
const cube7 = new THREE.Mesh(geometry7, material7);
cube7.scale.set(1.2, 0.9, 1.0); // Tamaño normal
cube7.position.x = 0.3; // Lo movemos al centro
cube7.position.y = 4.5; // Lo subimos un poco
scene.add(cube7);


// CILINDRO 4 (Sombrero)
const geometry8 = new THREE.CylinderGeometry(0.8, 0.8, 2, 32);
const material8 = new THREE.MeshStandardMaterial({
    color: 0x6a6e73,
    roughness: 0.1, // Qué tan áspero es
    metalness: 0.9  // Qué tan metálico es
});
const cube8 = new THREE.Mesh(geometry8, material8);
cube8.scale.set(1.2, 0.1, 1.2); // Tamaño normal
cube8.position.x = 0.3; // Lo movemos al centro
cube8.position.y = 4.07; // Lo subimos un poco
cube8.position.z = 0; // Lo subimos un poco
scene.add(cube8);

// --- D. CONTROLES (La navegación) ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Añade inercia al movimiento (más suave)




// --- E. ANIMACIÓN (Game Loop) ---

let tiempo = 0;

function animate() {
    requestAnimationFrame(animate);

    tiempo += 0.05;

    // Animacion Pierna
    cube.rotation.x += Math.sin(tiempo) * 0.03;
    cube2.rotation.x -= Math.sin(tiempo) * 0.03;
   

    // Animacion Brazo
    cube4.rotation.x += Math.sin(tiempo) * 0.03;
    cube5.rotation.x -= Math.sin(tiempo) * 0.03;

    controls.update(); // Necesario por el damping
    renderer.render(scene, camera);
}

animate();


// Ajustar si cambian el tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


// --- FIN ---