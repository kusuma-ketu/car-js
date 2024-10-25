let scene, camera, renderer, car;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspetiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();
    loader.load('', (gltf) => {
        car = gltf.scene;
        scene.add(car);
        animate();
    });
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function animate() {
    requestAnimationFrame(animate);
    if (car) {
        car.rotation.y += 0.01;
        car.pisition.x += 0.01;
        if (car.position.x > 5) car.position.x = -5;
    }
    renderer.render(scene, camera);
}

init();