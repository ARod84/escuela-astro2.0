import '../css/style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const btn = document.getElementById("malu");
const wth = btn.offsetWidth;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth * 0.75, window.innerHeight * 0.75);
camera.position.setZ(30);
camera.position.setX(-3);

// Texturas 
const textureLoader = new THREE.TextureLoader();
const moonTexture = textureLoader.load('../img/SpecularMap.png');

// Luna

const geometry = new THREE.SphereGeometry( 15, 64, 32 );
const material = new THREE.MeshStandardMaterial( { color: 0xE1DFF0 } );
material.metalness = 0.25;
material.roughness = 0.1;
material.normalMap = moonTexture;

const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.set(5, 5, 1);
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xffffff, 2);
pointLight2.position.x = 2
pointLight2.position.y = 3
pointLight2.position.z = 4
pointLight2.intensity = 1;
scene.add(pointLight2);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.005;
  sphere.rotation.z += 0.01;


  // controls.update();

  renderer.render(scene, camera);
}

animate();