import '../css/style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth*0.75, window.innerHeight*0.75);
camera.position.setZ(20);
camera.position.setX(-10);

// Texturas 
const textureLoader = new THREE.TextureLoader();
const moonTexture = textureLoader.load('../img/moontex.jpg');

// Luna

const geometry = new THREE.SphereGeometry( 8, 64, 64 );
const material = new THREE.MeshStandardMaterial( { color: 0xE1DFF0 } );
material.roughness = 1.1;
material.map = moonTexture;

const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// Lights

const light1 = new THREE.AmbientLight( 0xf0f0f0, 0.75 ); // soft white light
scene.add( light1 );

const light2 = new THREE.PointLight( 0xffffff, 0.5);
light2.position.set(75,15,75);
scene.add( light2 );

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.005;

  controls.update();

  renderer.render(scene, camera);
}

animate();