// Three.js Basic Setup for 3D Interactive Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);

camera.position.z = 5;

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Bright white light
pointLight.position.set(10, 10, 10);

scene.add(ambientLight);
scene.add(pointLight);

// Geometries
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff, emissive: 0x0033ff, roughness: 0.5, metalness: 0.8 });
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

// Additional Geometries
const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xff5722, emissive: 0x771d0c });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);

torus.position.set(-2, 0, 0);
scene.add(torus);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate Geometries
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    torus.rotation.x -= 0.01;
    torus.rotation.y += 0.01;

    // Render Scene
    renderer.render(scene, camera);
}

animate();

// Responsive Handling
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Interactive Intro Text and Image on Hover
const introText = document.querySelector('.intro-text');
const introImage = document.querySelector('.intro-image img');

introText.addEventListener('mouseover', () => {
    introText.style.transform = 'scale(1.05)';
});

introText.addEventListener('mouseout', () => {
    introText.style.transform = 'scale(1)';
});

introImage.addEventListener('mouseover', () => {
    introImage.style.filter = 'brightness(1)';
    introImage.style.transform = 'scale(1.05)';
});

introImage.addEventListener('mouseout', () => {
    introImage.style.filter = 'brightness(0.85)';
    introImage.style.transform = 'scale(1)';
});
