import * as THREE from 'three';
import { gsap } from 'gsap';

// THREE.JS
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const light = new THREE.DirectionalLight(0xffffff);
light.lookAt(scene.position);
light.position.set(0, 0, 40).normalize();

var canvas = document.querySelector("canvas");
var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
canvas.className = "tjs";

const sphereGeometry = new THREE.SphereGeometry(20, 20, 20);

const matLine = new THREE.LineBasicMaterial({
  color: 0xffffff,
  opacity: 0.5,
  transparent: true
});

const cube = new THREE.Mesh(new THREE.BoxGeometry( 5, 5, 5), new THREE.MeshStandardMaterial({ color: 0x000000}));
cube.position.set(4, 3, -50);
cube.material.transparent = true;
cube.material.opacity = 0;

const wireSphere = new THREE.Line(new THREE.WireframeGeometry(sphereGeometry), matLine);
wireSphere.computeLineDistances();
wireSphere.scale.set(1, 1, 1);
wireSphere.material.opacity = 0.3;
wireSphere.material.transparent = true;

const cubes = (function () {
  const thetas = [50, 160, 230, 340];
  const colors = [0xffffff, 0x61dafb, 0x8ac640, 0xdc3912];
  const radius = 27.5;
  var cubes = {};

  for (let i = 0; i < 4; i++) {
    const cube = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshStandardMaterial({ color: colors[i] }));
    cube.position.x = radius * Math.cos(THREE.MathUtils.degToRad(thetas[i]));
    cube.position.y = radius * Math.sin(THREE.MathUtils.degToRad(thetas[i]));
    cubes[i] = cube;
  }
  return cubes;
})();

const stars = (function () {
  var stars = {};

  for (var i = 0; i < 1000; i++) {
    var alpha = Math.acos(THREE.MathUtils.randFloatSpread(2));
    var phi = THREE.MathUtils.randFloatSpread(360);
    var particle = new THREE.Points(new THREE.SphereGeometry(0.1), new THREE.PointsMaterial({ color: Math.random() * 0xaaaaaa, size: 1 }));

    particle.position.x = 100 * Math.sin(alpha) * Math.cos(phi);
    particle.position.y = 100 * Math.sin(alpha) * Math.sin(phi);
    particle.position.z = 100 * Math.cos(alpha);
    stars[i] = particle;
  }
  return stars;
})();

scene.add(cube, wireSphere, light);

function sceneModify(mode, objects) {
  switch (mode) {
    case "add":
      for (const i in objects) {
        scene.add(objects[i]);
      }
      break;
    case "remove":
      for (const i in objects) {
        scene.remove(objects[i]);
      }
      break;
    default:
  }
}

export function interact() {
  var interact = new gsap.timeline();
  interact.to(cube.material.color, { duration: 0.125, r: 1, g: 1, b: 1});
  interact.to(cube.material.color, { duration: 0.125, r: 0, g: 0, b: 0});
}

export function clearInteract() {
  var interact = new gsap.timeline();
  interact.to(cube.material.color, { duration: 0.125, r: 1, g: 0, b: 0});
  interact.to(cube.material.color, { duration: 0.125, r: 0, g: 0, b: 0});
}

export function submit() {
  const c = new THREE.Color(0xffffff)
  var submit = new gsap.timeline();
  submit.to(cube.material.color, { duration: 0.125, r: c.r, g: 0, b: 0});
  submit.to(cube.material.color, { duration: 0.125, r: 0, g: c.g, b: 0});
  submit.to(cube.material.color, { duration: 0.125, r: 0, g: 0, b: c.b});
  submit.to(cube.material.color, { duration: 0.125, r: 0, g: 0, b: 0});
}

export function pageMain(state) {
  if (state) {
    gsap.to(cube.material, { duration: 1, opacity: 1});
    gsap.to(wireSphere.material, { duration: 1, opacity: 0});
    gsap.to(camera.position, { duration: 1, z: -25 });
    gsap.to(canvas, { duration: 1, backgroundColor: '#000000' });
  } else {
    gsap.to(wireSphere.material, { duration: 1, opacity: 0.3});
    gsap.to(camera.position, { duration: 1, z: 10 });
    gsap.to(cube.material, { duration: 1, opacity: 0});
    gsap.to(canvas, { duration: 1, backgroundColor: '#1b1b1b' });
  }
}

export function pageAbout(state) {
  if (state) {
    sceneModify("add", cubes);
    sceneModify("add", stars);
    gsap.to(wireSphere.material, { duration: 1, opacity: 1});
    gsap.to(camera.position, { duration: 1, z: 50 });
    gsap.to(document.getElementById('aboutlayout'), { duration: 3, opacity: 1 });
    gsap.to(canvas, { duration: 1, backgroundColor: '#000000' });
  } else {
    sceneModify("remove", cubes);
    sceneModify("remove", stars);
    gsap.to(camera.position, { duration: 1, z: 10 });
    gsap.to(wireSphere.material, { duration: 1, opacity: 0.3});
    gsap.to(canvas, { duration: 1, backgroundColor: '#1b1b1b' });
  }
}

let theta = 0;

function animate() {
  requestAnimationFrame(animate);
  theta += 1;
  cube.rotation.x += 0.0025;
  cube.rotation.y += 0.0075;
  wireSphere.rotation.y = theta * 0.002;
  for (const cube in cubes) {
    cubes[cube].rotation.x += 0.0025;
    cubes[cube].rotation.y += 0.0075;
  }
  renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();