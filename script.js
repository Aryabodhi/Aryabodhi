// 🎨 Create Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#bg") });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(5);

// 🌀 3D Object (Torus)
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// 💡 Lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// 🔄 Animation
function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

// ⏳ Countdown Timer
const targetDate = new Date("July 1, 2025 00:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) return;  // Stop countdown after reaching zero

    document.getElementById("days").innerText = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((difference % (1000 * 60)) / 1000);
}
setInterval(updateCountdown, 1000);
