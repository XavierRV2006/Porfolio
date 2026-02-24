import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Crear escena, cámara y renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cargar modelo 3D
const loader = new GLTFLoader();
loader.load('/Portfolio3D/Escenario.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
});

// Configurar OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

// Animar
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

