import * as THREE from "https://cdn.skypack.dev/three"

import * as dat from "https://cdn.skypack.dev/dat.gui"

// Texture Loader
const loader = new THREE.TextureLoader()


// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 2000;

const posArray = new Float32Array(particlesCnt * 3)


for(let i=0; i<particlesCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5)*(Math.random() * 5)
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
// Materials

const material = new THREE.PointsMaterial({
size: 0.005
})

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    })


// Mesh
const sphere = new THREE.Points(geometry,material)
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(sphere, particlesMesh)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth,
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
   
})


// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(new THREE.Color('#21282a'), 1)


// mouse
document.addEventListener('mousemove', animateParticles)
let mouseX = 0
let mouseY = 0

function animateParticles(event){
    mouseY = event.clientY
    mouseX = event.clientX
}
/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime
    particlesMesh.rotation.y = -.1 * elapsedTime
    if (mouseX > 0){
    particlesMesh.rotation.x = -mouseY * (elapsedTime*0.00008)
    particlesMesh.rotation.y = -mouseX * (elapsedTime*0.00008)
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

////////js Profil

//////// DOM MANIPULATION DOM EVENT
//memanggil=================================
const idNavbar = document.getElementById("navbar");
const jumbotron = document.getElementById("jumbotron");
const wavesAbout = document.getElementById("wavesAbout");
const hobi = document.getElementById("hobi");
const portofolio = document.getElementById("portofolio");
const wavesPortofolio = document.getElementById("wavesPortofolio");
const contact = document.getElementById("contact");
const foter = document.getElementById("foter");
const judul = document.getElementById("judul");
const hardware = document.getElementById("hardware");
const network = document.getElementById("network");
const webDev = document.getElementById("webDev");

// Membuat dan menyisipkan Kalimat pada section about ============================
const pAboutBr = document.createElement("p");
const ktAboutBr = document.createTextNode("Saat ini saya sedang belajar memanipulasi HTML dengan DOM. Kalimat ini dibuat dengan Java Script!!!!");
pAboutBr.appendChild(ktAboutBr);
const idkonten = document.getElementById("kontent");
const aelemen = idkonten.getElementsByTagName("a")[0];
idkonten.insertBefore(pAboutBr, aelemen);
//dom event tulisan
pAboutBr.addEventListener("mouseenter", function () {
  pAboutBr.style.color = "gray";
});
pAboutBr.addEventListener("mouseleave", function () {
  pAboutBr.style.color = "black";
});

///DOM button theme=====================
const buttonTema = document.createElement("button");
const textButton = document.createTextNode("Tema");
buttonTema.appendChild(textButton);
buttonTema.setAttribute("type", "button");
buttonTema.style.backgroundColor = "orange";
const lokasiTema = jumbotron.getElementsByTagName("p")[0];
lokasiTema.after(buttonTema);
//Dom button theme even===================================
buttonTema.onclick = function () {
  buttonTema.classList.toggle("themeBlue");
  judul.classList.toggle("judulColor");
  idNavbar.classList.toggle("themeBlue");
  jumbotron.classList.toggle("themeLightBlue");
  wavesAbout.classList.toggle("wavesLightBlue");
  hobi.classList.toggle("themeLightBlue");
  wavesPortofolio.classList.toggle("wavesLightBlue");
  contact.classList.toggle("themeLightBlue");
  portofolio.classList.toggle("themeLightBlue");
  foter.classList.toggle("themeLightBlue");
  hardware.classList.toggle("gambarHrdBiru");
  network.classList.toggle("gambarNetBiru");
  webDev.classList.toggle("gambarProgBiru");
};

