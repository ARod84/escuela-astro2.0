/************************************
*-----------------------------------*
*---@game: Escuela de Astronautas---*
*---@level: ----Intro --------------*
*-----------------------------------*
*************************************/

import '../css/style.css'

import * as THREE from 'three';
import { TextureLoader } from 'three';

//Variables jugador 

//datos jugador
let puntaje = 0;
let nivel = 0;
let trofeos = 0;

// variables jugador interfaz
let inputForm = document.getElementById("jugador");
let inputNombre = document.getElementById("name");

//variables interfaz
let bienvenida = document.getElementById("bienvenida");
let start = document.getElementById("start");
let form = document.getElementById("jugador");
let introMoon = document.getElementById("introMoon");


//Guarda nombre y puntaje en session storage
// Imprime el nombre en pantalla 
inputForm.addEventListener("submit", (e) => {
    // Objeto con los datos del jugador y estado del juego
    const datosJugador = { nombre: inputNombre.value, puntaje: puntaje, nivel: nivel, trofeos: trofeos };
    const jugador = JSON.stringify(datosJugador);

    sessionStorage.setItem("Jugador", jugador);
    bienvenida.innerHTML = "<p>Te damos la bienvenida a las Escuela de Astronautas, " + inputNombre.value + "</p>";
    start.style.display = "block";
    form.style.display = "none";
    introMoon.style.display = "block";
    e.preventDefault();
});

// Gráfico portada
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#introMoon'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);

const light1 = new THREE.AmbientLight( 0xf0f0f0, 0.75 ); // soft white light
scene.add( light1 );

const light2 = new THREE.PointLight( 0xffffff, 0.5);
light2.position.set(75,15,75);
scene.add( light2 );

camera.position.z = 30;
camera.position.x = 0;

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera);
};

animate();
