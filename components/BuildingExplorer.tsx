'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { mergeBufferGeometries } from 'three-stdlib'
import styles from './BuildingExplorer.module.css'

const BuildingExplorer = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const orbitControlsRef = useRef<OrbitControls | null>(null)
  const buildingsRef = useRef<THREE.Object3D[]>([])
  const buildingScalesRef = useRef<number[]>([])
  const cloudMesh1Ref = useRef<THREE.Mesh | null>(null)
  const cloudMesh2Ref = useRef<THREE.Mesh | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster())
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2())
  const hoveredBuildingRef = useRef<THREE.Object3D | null>(null)
  const isTransitioningRef = useRef<boolean>(false)
  const orbitEnabledRef = useRef<boolean>(false)

  const [currentSection, setCurrentSection] = useState('intro')
  const [isLoading, setIsLoading] = useState(true)

  // Building configuration - using local resources from public folder
  const buildingModelUrls = [
    '/resources/burj_crown_emaar/scene.gltf',
    '/resources/Untitled.gltf',
    '/high_rise_building_gltf/scene.gltf',
    '/high_rise_building_gltf/scene.gltf',
    '/high_rise_building_gltf/scene.gltf',
    '/high_rise_building_gltf/scene.gltf',
    '/high_rise_building_gltf/scene.gltf',
    '/high_rise_building_gltf/scene.gltf',
    '/high_rise_building_gltf/scene.gltf',
    '/high_rise_building_gltf/scene.gltf',
    '/high_rise_building_gltf/scene.gltf'
  ]

  const buildingNames = [
    'The VISTA',
    'Golf Place',
    'Berkeley Square North',
    'Berkeley Square South',
    'The Hilton Residence',
    'The PLACE',
    'The ONE',
    'The Parkway',
    'The Palm Jumeirah',
    'The JVC',
    'The Seaside'
  ]

  const buildingPositions = [
    { x: -1500, y: -50, z: -900 },
    { x: -1200, y: -50, z: -900 },
    { x: -900, y: -50, z: -900 },
    { x: -600, y: -50, z: -900 },
    { x: -300, y: -50, z: -900 },
    { x: 0, y: -50, z: -900 },
    { x: 300, y: -50, z: -900 },
    { x: 600, y: -50, z: -900 },
    { x: 900, y: -50, z: -900 },
    { x: 1200, y: -50, z: -900 },
    { x: 1500, y: -50, z: -900 }
  ]

  const buildingScalesConfig = [
    [0.8, 0.9],
    [0.8, 0.9],
    [0.8, 0.8],
    [0.8, 0.8],
    [0.8, 0.8],
    [0.8, 0.8],
    [0.8, 0.8],
    [0.8, 0.8],
    [0.8, 0.8],
    [0.8, 0.8],
    [0.8, 0.8]
  ]

  const cameraPositions: { [key: string]: THREE.Vector3 } = {
    intro: new THREE.Vector3(0, 0, 4000),
    main: new THREE.Vector3(0, 100, 800),
    building1: new THREE.Vector3(-1500, 50, -600),
    building2: new THREE.Vector3(-1200, 50, -600),
    building3: new THREE.Vector3(-900, 50, -600),
    building4: new THREE.Vector3(-600, 50, -600),
    building5: new THREE.Vector3(-300, 50, -600),
    building6: new THREE.Vector3(0, 50, -600),
    building7: new THREE.Vector3(300, 50, -600),
    building8: new THREE.Vector3(600, 50, -600),
    building9: new THREE.Vector3(900, 50, -600),
    building10: new THREE.Vector3(1200, 50, -600),
    building11: new THREE.Vector3(1500, 50, -600)
  }

  const cameraTargets: { [key: string]: THREE.Vector3 } = {
    intro: new THREE.Vector3(0, 0, 0),
    main: new THREE.Vector3(0, 0, -900),
    building1: new THREE.Vector3(-1500, 0, -900),
    building2: new THREE.Vector3(-1200, 0, -900),
    building3: new THREE.Vector3(-900, 0, -900),
    building4: new THREE.Vector3(-600, 0, -900),
    building5: new THREE.Vector3(-300, 0, -900),
    building6: new THREE.Vector3(0, 0, -900),
    building7: new THREE.Vector3(300, 0, -900),
    building8: new THREE.Vector3(600, 0, -900),
    building9: new THREE.Vector3(900, 0, -900),
    building10: new THREE.Vector3(1200, 0, -900),
    building11: new THREE.Vector3(1500, 0, -900)
  }

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize THREE.js scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      10000
    )
    camera.position.copy(cameraPositions.intro)
    camera.lookAt(cameraTargets.intro)
    cameraRef.current = camera

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Setup lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2)
    scene.add(hemiLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5)
    dirLight.position.set(200, 200, 200)
    scene.add(dirLight)

    const ambientLight = new THREE.AmbientLight(0x404040, 0.8)
    scene.add(ambientLight)

    // Setup OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enabled = false
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 100
    controls.maxDistance = 800
    controls.maxPolarAngle = Math.PI / 2
    controls.screenSpacePanning = false
    orbitControlsRef.current = controls

    // Load cloud texture and create clouds
    const textureLoader = new THREE.TextureLoader()
    textureLoader.load(
      '/cloud10.png',
      (texture) => {
        createClouds(texture, scene)
      }
    )

    // Load buildings
    loadBuildings(scene)

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      // Animate clouds
      animateClouds()

      // Update building hover
      updateBuildingHover()

      // Update controls
      if (orbitEnabledRef.current && orbitControlsRef.current) {
        orbitControlsRef.current.update()
      }

      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      if (!rendererRef.current) return
      const rect = rendererRef.current.domElement.getBoundingClientRect()
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    setIsLoading(false)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
    }
  }, [])

  const createClouds = (texture: THREE.Texture, scene: THREE.Scene) => {
    texture.magFilter = THREE.LinearFilter
    texture.minFilter = THREE.LinearMipmapLinearFilter

    const fog = new THREE.Fog(0x87CEEB, 20, 3000)
    scene.fog = fog

    const material = new THREE.ShaderMaterial({
      uniforms: {
        map: { value: texture },
        fogColor: { value: fog.color },
        fogNear: { value: fog.near },
        fogFar: { value: fog.far }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        varying vec2 vUv;
        void main() {
          float depth = gl_FragCoord.z / gl_FragCoord.w;
          float fogFactor = smoothstep(fogNear, fogFar, depth);
          gl_FragColor = texture2D(map, vUv);
          gl_FragColor.w *= pow(gl_FragCoord.z, 20.0);
          gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);
        }
      `,
      depthWrite: false,
      depthTest: true,
      transparent: true
    })

    const plane = new THREE.PlaneGeometry(64, 64)
    const geometries: THREE.BufferGeometry[] = []
    const object = new THREE.Object3D()

    for (let i = 0; i < 8000; i++) {
      object.position.x = Math.random() * 1000 - 500
      object.position.y = -Math.random() * Math.random() * 200 + 50
      object.position.z = i
      object.rotation.z = Math.random() * Math.PI
      object.scale.x = object.scale.y = Math.random() * Math.random() * 1.5 + 0.5
      object.updateMatrix()

      const geo = plane.clone()
      geo.applyMatrix4(object.matrix)
      geometries.push(geo)
    }

    // Merge all cloud geometries into one
    const merged = mergeBufferGeometries(geometries)

    if (!merged) {
      console.error('Failed to merge cloud geometries')
      return
    }

    const cloudMesh1 = new THREE.Mesh(merged, material)
    const cloudMesh2 = cloudMesh1.clone()
    cloudMesh2.position.z = -8000

    scene.add(cloudMesh1)
    scene.add(cloudMesh2)

    cloudMesh1Ref.current = cloudMesh1
    cloudMesh2Ref.current = cloudMesh2
  }

  const loadBuildings = async (scene: THREE.Scene) => {
    const loader = new GLTFLoader()

    for (let i = 0; i < buildingModelUrls.length; i++) {
      try {
        const gltf = await loader.loadAsync(buildingModelUrls[i])
        const building = gltf.scene
        building.position.set(buildingPositions[i].x, buildingPositions[i].y, buildingPositions[i].z)

        const introScale = buildingScalesConfig[i][0]
        building.scale.set(introScale, introScale, introScale)
        building.userData = {
          buildingId: i + 1,
          buildingIndex: i,
          baseScale: introScale
        }

        // Initially hidden
        building.traverse((node) => {
          if ((node as THREE.Mesh).isMesh) {
            const mesh = node as THREE.Mesh
            if (mesh.material) {
              const material = mesh.material as THREE.MeshStandardMaterial
              material.transparent = true
              material.opacity = 0
            }
          }
        })

        scene.add(building)
        buildingsRef.current[i] = building
        buildingScalesRef.current[i] = introScale
        console.log(`✓ Building ${i + 1} (${buildingNames[i]}) loaded successfully`)
      } catch (error) {
        console.error(`✗ Failed to load building ${i + 1} (${buildingNames[i]}):`, error)
        console.error(`  URL: ${buildingModelUrls[i]}`)
        console.error(`  This may be due to CORS restrictions. Check server CORS headers.`)

        // Create a placeholder cube for failed buildings
        const geometry = new THREE.BoxGeometry(50, 100, 50)
        const material = new THREE.MeshStandardMaterial({
          color: 0x888888,
          transparent: true,
          opacity: 0
        })
        const placeholder = new THREE.Mesh(geometry, material)
        placeholder.position.set(buildingPositions[i].x, buildingPositions[i].y, buildingPositions[i].z)

        const introScale = buildingScalesConfig[i][0]
        placeholder.scale.set(introScale, introScale, introScale)
        placeholder.userData = {
          buildingId: i + 1,
          buildingIndex: i,
          baseScale: introScale
        }

        scene.add(placeholder)
        buildingsRef.current[i] = placeholder
        buildingScalesRef.current[i] = introScale
      }
    }
  }

  const animateClouds = () => {
    if (!cloudMesh1Ref.current || !cloudMesh2Ref.current) return

    // Only show clouds for Hilton project (building5)
    const showClouds = currentSection === 'building5'
    cloudMesh1Ref.current.visible = showClouds
    cloudMesh2Ref.current.visible = showClouds

    if (!showClouds) return

    // Building 5 skybox effect
    if (currentSection === 'building5' && orbitEnabledRef.current && cameraRef.current) {
      cloudMesh1Ref.current.rotation.copy(cameraRef.current.rotation)
      cloudMesh2Ref.current.rotation.copy(cameraRef.current.rotation)

      const cameraDirection = new THREE.Vector3()
      cameraRef.current.getWorldDirection(cameraDirection)
      cameraDirection.multiplyScalar(-2000)

      cloudMesh1Ref.current.position.set(
        cameraRef.current.position.x + cameraDirection.x,
        cameraRef.current.position.y + cameraDirection.y,
        cloudMesh1Ref.current.position.z
      )
      cloudMesh2Ref.current.position.set(
        cameraRef.current.position.x + cameraDirection.x,
        cameraRef.current.position.y + cameraDirection.y,
        cloudMesh2Ref.current.position.z
      )
    } else {
      cloudMesh1Ref.current.rotation.set(0, 0, 0)
      cloudMesh2Ref.current.rotation.set(0, 0, 0)
    }

    // Cloud movement - only for building5
    cloudMesh1Ref.current.position.z += 0.8
    cloudMesh2Ref.current.position.z += 0.8

    // Loop clouds
    if (cloudMesh1Ref.current.position.z > 8000) {
      cloudMesh1Ref.current.position.z = cloudMesh2Ref.current.position.z - 8000
    }
    if (cloudMesh2Ref.current.position.z > 8000) {
      cloudMesh2Ref.current.position.z = cloudMesh1Ref.current.position.z - 8000
    }
  }

  const updateBuildingHover = () => {
    if (currentSection !== 'main' || isTransitioningRef.current || !cameraRef.current) return

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current)
    const intersects = raycasterRef.current.intersectObjects(buildingsRef.current, true)

    const buildingLabel = document.getElementById('buildingLabel')
    if (!buildingLabel) return

    if (intersects.length > 0) {
      let hitObject: any = intersects[0].object
      while (hitObject.parent && !hitObject.userData.buildingId) {
        hitObject = hitObject.parent
      }

      if (hitObject.userData.buildingId) {
        const buildingId = hitObject.userData.buildingId
        const building = buildingsRef.current[buildingId - 1]

        if (hoveredBuildingRef.current !== building) {
          // Reset previous
          if (hoveredBuildingRef.current) {
            const prevId = hoveredBuildingRef.current.userData.buildingId - 1
            const baseScale = buildingScalesRef.current[prevId]
            hoveredBuildingRef.current.scale.set(baseScale, baseScale, baseScale)
          }

          // Set new
          hoveredBuildingRef.current = building
          const baseScale = buildingScalesRef.current[buildingId - 1]
          const hoverScale = baseScale * 1.2
          building.scale.set(hoverScale, hoverScale, hoverScale)

          buildingLabel.textContent = buildingNames[buildingId - 1]
          buildingLabel.classList.add(styles.visible)
        }

        // Update label position
        if (building && cameraRef.current) {
          const buildingPosition = building.position.clone()
          const screenPosition = buildingPosition.clone()
          screenPosition.project(cameraRef.current)

          const x = (screenPosition.x * 0.5 + 0.5) * window.innerWidth
          const y = (screenPosition.y * -0.5 + 0.5) * window.innerHeight

          buildingLabel.style.left = `${x}px`
          buildingLabel.style.top = `${y + 100}px`
        }
      }
    } else {
      // Reset hover
      if (hoveredBuildingRef.current) {
        const prevId = hoveredBuildingRef.current.userData.buildingId - 1
        const baseScale = buildingScalesRef.current[prevId]
        hoveredBuildingRef.current.scale.set(baseScale, baseScale, baseScale)
        hoveredBuildingRef.current = null
      }
      buildingLabel.classList.remove(styles.visible)
    }
  }

  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const animateCameraToPosition = (
    targetPosition: THREE.Vector3,
    lookAtTarget: THREE.Vector3,
    duration: number,
    onComplete?: () => void
  ) => {
    if (!cameraRef.current) return

    const startPosition = cameraRef.current.position.clone()
    const startTarget = new THREE.Vector3()
    cameraRef.current.getWorldDirection(startTarget)
    startTarget.multiplyScalar(100).add(cameraRef.current.position)

    const startTime = Date.now()

    const animate = () => {
      if (!cameraRef.current) return

      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)

      cameraRef.current.position.lerpVectors(startPosition, targetPosition, easedProgress)
      const currentTarget = new THREE.Vector3().lerpVectors(startTarget, lookAtTarget, easedProgress)
      cameraRef.current.lookAt(currentTarget)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        cameraRef.current.position.copy(targetPosition)
        cameraRef.current.lookAt(lookAtTarget)
        if (onComplete) onComplete()
      }
    }

    animate()
  }

  const updateBuildingVisibility = () => {
    buildingsRef.current.forEach((building, index) => {
      if (!building) return

      let targetOpacity = 0

      if (currentSection === 'main') {
        targetOpacity = 1
      } else if (currentSection === `building${index + 1}`) {
        targetOpacity = 1
      }

      building.traverse((node) => {
        if ((node as THREE.Mesh).isMesh) {
          const mesh = node as THREE.Mesh
          if (mesh.material) {
            const material = mesh.material as THREE.MeshStandardMaterial
            material.opacity = targetOpacity
          }
        }
      })
    })
  }

  const updateBuildingScales = () => {
    buildingsRef.current.forEach((building, index) => {
      if (!building) return

      let targetScale

      if (currentSection === 'intro' || currentSection === 'main') {
        targetScale = buildingScalesConfig[index][0]
      } else if (currentSection === `building${index + 1}`) {
        targetScale = buildingScalesConfig[index][1]
      } else {
        targetScale = buildingScalesConfig[index][0]
      }

      building.scale.set(targetScale, targetScale, targetScale)
      building.userData.baseScale = targetScale
      buildingScalesRef.current[index] = targetScale
    })
  }

  const hideAllBuildings = () => {
    buildingsRef.current.forEach((building) => {
      if (!building) return

      building.traverse((node) => {
        if ((node as THREE.Mesh).isMesh) {
          const mesh = node as THREE.Mesh
          if (mesh.material) {
            const material = mesh.material as THREE.MeshStandardMaterial
            material.opacity = 0
          }
        }
      })
    })
  }

  const enableOrbitControls = (targetPosition: THREE.Vector3, buildingIndex: number) => {
    if (!orbitControlsRef.current || !cameraRef.current) return

    const building = buildingsRef.current[buildingIndex]
    if (building) {
      const box = new THREE.Box3().setFromObject(building)
      const center = new THREE.Vector3()
      box.getCenter(center)
      orbitControlsRef.current.target.copy(center)
    } else {
      orbitControlsRef.current.target.copy(targetPosition)
    }

    cameraRef.current.lookAt(orbitControlsRef.current.target)
    cameraRef.current.updateMatrixWorld()

    orbitControlsRef.current.autoRotate = true
    orbitControlsRef.current.autoRotateSpeed = 0.5
    orbitControlsRef.current.enabled = true
    orbitControlsRef.current.update()
    orbitEnabledRef.current = true
  }

  const disableOrbitControls = () => {
    if (!orbitControlsRef.current) return
    orbitControlsRef.current.enabled = false
    orbitControlsRef.current.autoRotate = false
    orbitEnabledRef.current = false
  }

  const setupBuildingClickHandlers = () => {
    if (!rendererRef.current || !cameraRef.current) return

    const canvas = rendererRef.current.domElement

    const handleClick = (event: MouseEvent) => {
      if (currentSection !== 'main' || isTransitioningRef.current || !cameraRef.current) return

      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current)
      const intersects = raycasterRef.current.intersectObjects(buildingsRef.current, true)

      if (intersects.length > 0) {
        let hitObject: any = intersects[0].object
        while (hitObject.parent && !hitObject.userData.buildingId) {
          hitObject = hitObject.parent
        }

        if (hitObject.userData.buildingId) {
          const buildingId = hitObject.userData.buildingId
          transitionToSection(`building${buildingId}`)
        }
      }
    }

    canvas.addEventListener('click', handleClick)
  }

  const transitionToSection = (sectionName: string) => {
    if (isTransitioningRef.current) return

    isTransitioningRef.current = true
    setCurrentSection(sectionName)

    updateBuildingScales()

    if (sectionName === 'main') {
      disableOrbitControls()
      updateBuildingVisibility()

      animateCameraToPosition(
        cameraPositions.main,
        cameraTargets.main,
        1500,
        () => {
          isTransitioningRef.current = false
          setupBuildingClickHandlers()
        }
      )
    } else if (sectionName.startsWith('building')) {
      hideAllBuildings()
      const buildingIndex = parseInt(sectionName.replace('building', '')) - 1

      animateCameraToPosition(
        cameraPositions[sectionName],
        cameraTargets[sectionName],
        1500,
        () => {
          updateBuildingVisibility()
          enableOrbitControls(cameraTargets[sectionName], buildingIndex)
          isTransitioningRef.current = false
        }
      )
    }
  }

  const handleEnterClick = () => {
    setCurrentSection('main')
    isTransitioningRef.current = true

    updateBuildingScales()
    updateBuildingVisibility()

    animateCameraToPosition(
      cameraPositions.main,
      cameraTargets.main,
      2000,
      () => {
        isTransitioningRef.current = false
        setupBuildingClickHandlers()
      }
    )
  }

  const handleNavClick = (section: string) => {
    if (!isTransitioningRef.current) {
      transitionToSection(section)
    }
  }

  const handleCloseInstructions = (buildingNum: number) => {
    const detailUI = document.getElementById(`detailUI${buildingNum}`)
    if (detailUI) {
      detailUI.classList.add(styles.hidden)
      detailUI.classList.remove(styles.visible)
    }
  }

  return (
    <>
      <div ref={containerRef} className={styles.container} />

      {/* Navigation */}
      {currentSection !== 'intro' && (
        <nav className={styles.navigation}>
          <div className={styles.navLogo}>BUILDINGS</div>
          <ul className={styles.navMenu}>
            <li>
              <a onClick={() => handleNavClick('main')}>Home</a>
            </li>
            {buildingNames.map((name, index) => (
              <li key={index}>
                <a onClick={() => handleNavClick(`building${index + 1}`)}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Intro UI */}
      {currentSection === 'intro' && (
        <div className={styles.introUI}>
          <button className={styles.enterButton} onClick={handleEnterClick}>
            Enter Experience
          </button>
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className={styles.loading}>Loading experience...</div>
      )}

      {/* Detail UIs for each building */}
      {buildingNames.map((name, index) => (
        <div
          key={index}
          className={`${styles.detailUI} ${currentSection === `building${index + 1}` ? styles.visible : ''}`}
          id={`detailUI${index + 1}`}
        >
          <div className={styles.detailUIContent}>
            <div className={styles.detailUIText}>
              <h3 className={styles.detailBuildingName}>{name}</h3>
              <p className={styles.detailInstructions}>Drag to rotate • Scroll to zoom</p>
            </div>
            <button
              className={styles.closeInstructions}
              onClick={() => handleCloseInstructions(index + 1)}
            >
              x
            </button>
          </div>
        </div>
      ))}

      {/* Building Hover Label */}
      <div className={styles.buildingLabel} id="buildingLabel"></div>

      {/* Section Backgrounds */}
      <div className={`${styles.sectionBackground} ${currentSection === 'intro' ? styles.active : ''}`} id="bg_intro" />
      <div className={`${styles.sectionBackground} ${currentSection === 'main' ? styles.active : ''}`} id="bg_main" />
      {[...Array(11)].map((_, i) => (
        <div
          key={i}
          className={`${styles.sectionBackground} ${currentSection === `building${i + 1}` ? styles.active : ''}`}
          id={`bg_building${i + 1}`}
        />
      ))}
    </>
  )
}

export default BuildingExplorer
