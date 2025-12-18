// ===== Global Variables =====
let scene, camera, renderer, controls;
let cloudParticles = [];
let building;
let isExperienceStarted = false;
let loadingManager;

// ===== Initialization =====
function init() {
    // Setup loading manager
    loadingManager = new THREE.LoadingManager();

    loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
        const progress = (itemsLoaded / itemsTotal) * 100;
        updateLoadingProgress(progress);
    };

    loadingManager.onLoad = function () {
        setTimeout(() => {
            hideLoadingScreen();
        }, 500);
    };

    // Scene setup
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x4584b4, 0.0008);

    // Camera setup
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 0, 50);

    // Renderer setup
    const canvas = document.getElementById('webgl-canvas');
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x4584b4, 1);

    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 50, 50);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 1.2, 150);
    pointLight1.position.set(30, 40, 40);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4f46e5, 1, 120);
    pointLight2.position.set(-30, 30, 30);
    scene.add(pointLight2);

    // Create enhanced cloud system
    createEnhancedClouds();

    // Event listeners
    window.addEventListener('resize', onWindowResize);
    document.getElementById('enter-btn').addEventListener('click', startExperience);

    // Scroll observer for content sections
    setupScrollObserver();

    // Start animation loop
    animate();

    // Simulate loading completion
    setTimeout(() => {
        loadingManager.onLoad();
    }, 2000);
}

// ===== Enhanced Cloud Creation =====
function createEnhancedClouds() {
    // Layer 1: Large distant clouds
    createCloudLayer(2000, 250, 3.5, 0xffffff, 0.5, 0);
    
    // Layer 2: Medium clouds
    createCloudLayer(2500, 180, 2.5, 0xe4e4e7, 0.4, -30);
    
    // Layer 3: Close small clouds
    createCloudLayer(1500, 120, 1.8, 0xa1a1aa, 0.35, -60);
}

function createCloudLayer(count, spread, sizeMultiplier, color, opacity, zOffset) {
    const cloudGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        // Create volumetric cloud distribution
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * spread;
        
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = (Math.random() - 0.5) * 80;
        positions[i3 + 2] = Math.sin(angle) * radius + zOffset;

        scales[i] = Math.random() * sizeMultiplier + 0.5;
    }

    cloudGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    cloudGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const cloudMaterial = new THREE.PointsMaterial({
        size: 3,
        color: color,
        transparent: true,
        opacity: opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
    });

    const clouds = new THREE.Points(cloudGeometry, cloudMaterial);
    scene.add(clouds);
    cloudParticles.push({
        mesh: clouds,
        baseOpacity: opacity,
        rotationSpeed: Math.random() * 0.0002 + 0.0001
    });
}

// ===== Enhanced 3D Building Creation =====
function createBuilding() {
    const buildingGroup = new THREE.Group();

    // Main tower - Taller and more detailed
    const towerGeometry = new THREE.BoxGeometry(18, 100, 18);
    const towerMaterial = new THREE.MeshPhongMaterial({
        color: 0x1a1a2e,
        shininess: 40,
        flatShading: false,
        specular: 0x444444
    });
    const tower = new THREE.Mesh(towerGeometry, towerMaterial);
    tower.position.y = 0;
    buildingGroup.add(tower);

    // Create detailed window grid
    const windowGeometry = new THREE.PlaneGeometry(1.4, 1.8);
    const windowMaterial = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        emissive: 0x06b6d4,
        emissiveIntensity: 0.6
    });

    const floors = 50;
    const windowsPerFloor = 5;

    for (let floor = 0; floor < floors; floor++) {
        for (let side = 0; side < 4; side++) {
            for (let w = 0; w < windowsPerFloor; w++) {
                const window = new THREE.Mesh(windowGeometry, windowMaterial);

                const yPos = -45 + (floor * 1.9);
                const offset = (w - windowsPerFloor / 2 + 0.5) * 3.2;

                // Random window brightness variation
                const brightness = 0.4 + Math.random() * 0.6;
                const windowMat = windowMaterial.clone();
                windowMat.emissiveIntensity = brightness;
                window.material = windowMat;

                // Position windows on each side
                if (side === 0) { // Front
                    window.position.set(offset, yPos, 9.01);
                } else if (side === 1) { // Back
                    window.position.set(offset, yPos, -9.01);
                    window.rotation.y = Math.PI;
                } else if (side === 2) { // Left
                    window.position.set(-9.01, yPos, offset);
                    window.rotation.y = Math.PI / 2;
                } else { // Right
                    window.position.set(9.01, yPos, offset);
                    window.rotation.y = -Math.PI / 2;
                }

                buildingGroup.add(window);
            }
        }
    }

    // Penthouse section - Premium top floors
    const penthouseGeometry = new THREE.BoxGeometry(22, 10, 22);
    const penthouseMaterial = new THREE.MeshPhongMaterial({
        color: 0x4f46e5,
        shininess: 80,
        emissive: 0x4f46e5,
        emissiveIntensity: 0.3,
        specular: 0x666666
    });
    const penthouse = new THREE.Mesh(penthouseGeometry, penthouseMaterial);
    penthouse.position.y = 55;
    buildingGroup.add(penthouse);

    // Penthouse windows - larger, more luxurious
    const penthouseWindowGeometry = new THREE.PlaneGeometry(3, 4);
    const penthouseWindowMaterial = new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        emissive: 0x22d3ee,
        emissiveIntensity: 0.8
    });

    for (let side = 0; side < 4; side++) {
        const window = new THREE.Mesh(penthouseWindowGeometry, penthouseWindowMaterial);
        window.position.y = 55;

        if (side === 0) {
            window.position.set(0, 55, 11.01);
        } else if (side === 1) {
            window.position.set(0, 55, -11.01);
            window.rotation.y = Math.PI;
        } else if (side === 2) {
            window.position.set(-11.01, 55, 0);
            window.rotation.y = Math.PI / 2;
        } else {
            window.position.set(11.01, 55, 0);
            window.rotation.y = -Math.PI / 2;
        }

        buildingGroup.add(window);
    }

    // Crown/Spire
    const spireGeometry = new THREE.ConeGeometry(3, 15, 8);
    const spireMaterial = new THREE.MeshPhongMaterial({
        color: 0x06b6d4,
        emissive: 0x06b6d4,
        emissiveIntensity: 0.7,
        shininess: 120,
        specular: 0x888888
    });
    const spire = new THREE.Mesh(spireGeometry, spireMaterial);
    spire.position.y = 67.5;
    buildingGroup.add(spire);

    // Add antenna on top
    const antennaGeometry = new THREE.CylinderGeometry(0.2, 0.2, 8, 8);
    const antennaMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        emissive: 0x06b6d4,
        emissiveIntensity: 1
    });
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    antenna.position.y = 79;
    buildingGroup.add(antenna);

    // Position building off-screen initially
    buildingGroup.position.set(0, 0, -500);
    buildingGroup.scale.set(0.01, 0.01, 0.01);

    scene.add(buildingGroup);
    building = buildingGroup;
}

// ===== Start Experience (Enhanced Zoom Animation) =====
function startExperience() {
    if (isExperienceStarted) return;
    isExperienceStarted = true;

    // Hide the enter button
    const overlay = document.getElementById('enter-overlay');
    overlay.classList.remove('visible');
    overlay.classList.add('hidden');

    // Create building if not exists
    if (!building) {
        createBuilding();
    }

    // Enhanced camera zoom animation through clouds
    gsap.to(camera.position, {
        z: -150,
        duration: 3.5,
        ease: "power2.inOut",
        onUpdate: function () {
            // Fade out clouds as we zoom through them
            const progress = (camera.position.z - 50) / (-150 - 50);
            cloudParticles.forEach(cloudData => {
                cloudData.mesh.material.opacity = Math.max(0, cloudData.baseOpacity * (1 - progress));
            });
        },
        onComplete: function () {
            // Remove clouds from scene
            cloudParticles.forEach(cloudData => {
                scene.remove(cloudData.mesh);
            });
            cloudParticles = [];

            // Animate building appearance
            gsap.to(building.position, {
                z: 0,
                duration: 1.8,
                ease: "power2.out"
            });

            gsap.to(building.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 1.8,
                ease: "back.out(1.4)"
            });

            // Reset camera to viewing position
            gsap.to(camera.position, {
                x: 0,
                y: 15,
                z: 70,
                duration: 1.8,
                ease: "power2.out",
                onComplete: function () {
                    // Enable orbit controls (rotation only, no zoom)
                    enableOrbitControls();
                    // Allow scrolling
                    document.body.classList.remove('no-scroll');
                }
            });
        }
    });
}

// ===== Orbit Controls (Rotation Only - No Zoom) =====
function enableOrbitControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    
    // CRITICAL: Disable zoom as per requirements
    controls.enableZoom = false;
    
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 2 + 0.3;
}

// ===== Loading Screen =====
function updateLoadingProgress(progress) {
    const progressBar = document.getElementById('loading-progress');
    const loadingText = document.getElementById('loading-text');

    progressBar.style.width = progress + '%';
    loadingText.textContent = `Loading Experience... ${Math.round(progress)}%`;
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        showEnterButton();
    }, 800);
}

function showEnterButton() {
    const overlay = document.getElementById('enter-overlay');
    overlay.classList.remove('hidden');
    overlay.classList.add('visible');
    document.body.classList.add('no-scroll');
}

// ===== Scroll Observer =====
function setupScrollObserver() {
    const sections = document.querySelectorAll('.section-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===== Animation Loop =====
function animate() {
    requestAnimationFrame(animate);

    // Animate clouds with drift effect
    cloudParticles.forEach((cloudData, index) => {
        cloudData.mesh.rotation.y += cloudData.rotationSpeed;
        cloudData.mesh.rotation.x += cloudData.rotationSpeed * 0.5;
        
        // Subtle drift movement
        cloudData.mesh.position.x += Math.sin(Date.now() * 0.0001 + index) * 0.01;
    });

    // Subtle building animation when controls not active
    if (building && !controls) {
        building.rotation.y += 0.002;
    }

    // Update controls
    if (controls) {
        controls.update();
    }

    renderer.render(scene, camera);
}

// ===== Window Resize =====
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// ===== Start Application =====
window.addEventListener('DOMContentLoaded', init);
