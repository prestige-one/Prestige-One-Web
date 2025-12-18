(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/BuildingExplorer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "BuildingExplorer-module__I23t2G__active",
  "bg_building1": "BuildingExplorer-module__I23t2G__bg_building1",
  "bg_building10": "BuildingExplorer-module__I23t2G__bg_building10",
  "bg_building11": "BuildingExplorer-module__I23t2G__bg_building11",
  "bg_building2": "BuildingExplorer-module__I23t2G__bg_building2",
  "bg_building3": "BuildingExplorer-module__I23t2G__bg_building3",
  "bg_building4": "BuildingExplorer-module__I23t2G__bg_building4",
  "bg_building5": "BuildingExplorer-module__I23t2G__bg_building5",
  "bg_building6": "BuildingExplorer-module__I23t2G__bg_building6",
  "bg_building7": "BuildingExplorer-module__I23t2G__bg_building7",
  "bg_building8": "BuildingExplorer-module__I23t2G__bg_building8",
  "bg_building9": "BuildingExplorer-module__I23t2G__bg_building9",
  "bg_intro": "BuildingExplorer-module__I23t2G__bg_intro",
  "bg_main": "BuildingExplorer-module__I23t2G__bg_main",
  "buildingLabel": "BuildingExplorer-module__I23t2G__buildingLabel",
  "closeInstructions": "BuildingExplorer-module__I23t2G__closeInstructions",
  "container": "BuildingExplorer-module__I23t2G__container",
  "detailBuildingName": "BuildingExplorer-module__I23t2G__detailBuildingName",
  "detailInstructions": "BuildingExplorer-module__I23t2G__detailInstructions",
  "detailUI": "BuildingExplorer-module__I23t2G__detailUI",
  "detailUIContent": "BuildingExplorer-module__I23t2G__detailUIContent",
  "detailUIText": "BuildingExplorer-module__I23t2G__detailUIText",
  "enterButton": "BuildingExplorer-module__I23t2G__enterButton",
  "hidden": "BuildingExplorer-module__I23t2G__hidden",
  "introUI": "BuildingExplorer-module__I23t2G__introUI",
  "loading": "BuildingExplorer-module__I23t2G__loading",
  "navLogo": "BuildingExplorer-module__I23t2G__navLogo",
  "navMenu": "BuildingExplorer-module__I23t2G__navMenu",
  "navigation": "BuildingExplorer-module__I23t2G__navigation",
  "sectionBackground": "BuildingExplorer-module__I23t2G__sectionBackground",
  "visible": "BuildingExplorer-module__I23t2G__visible",
});
}),
"[project]/components/BuildingExplorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/controls/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$utils$2f$BufferGeometryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/utils/BufferGeometryUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/BuildingExplorer.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const BuildingExplorer = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orbitControlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buildingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const buildingScalesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const cloudMesh1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cloudMesh2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const raycasterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raycaster"]());
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]());
    const hoveredBuildingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTransitioningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const orbitEnabledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [currentSection, setCurrentSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('intro');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
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
    ];
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
    ];
    const buildingPositions = [
        {
            x: -1500,
            y: -50,
            z: -900
        },
        {
            x: -1200,
            y: -50,
            z: -900
        },
        {
            x: -900,
            y: -50,
            z: -900
        },
        {
            x: -600,
            y: -50,
            z: -900
        },
        {
            x: -300,
            y: -50,
            z: -900
        },
        {
            x: 0,
            y: -50,
            z: -900
        },
        {
            x: 300,
            y: -50,
            z: -900
        },
        {
            x: 600,
            y: -50,
            z: -900
        },
        {
            x: 900,
            y: -50,
            z: -900
        },
        {
            x: 1200,
            y: -50,
            z: -900
        },
        {
            x: 1500,
            y: -50,
            z: -900
        }
    ];
    const buildingScalesConfig = [
        [
            0.8,
            0.9
        ],
        [
            0.8,
            0.9
        ],
        [
            0.8,
            0.8
        ],
        [
            0.8,
            0.8
        ],
        [
            0.8,
            0.8
        ],
        [
            0.8,
            0.8
        ],
        [
            0.8,
            0.8
        ],
        [
            0.8,
            0.8
        ],
        [
            0.8,
            0.8
        ],
        [
            0.8,
            0.8
        ],
        [
            0.8,
            0.8
        ]
    ];
    const cameraPositions = {
        intro: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 4000),
        main: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 100, 800),
        building1: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1500, 50, -600),
        building2: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1200, 50, -600),
        building3: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-900, 50, -600),
        building4: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-600, 50, -600),
        building5: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-300, 50, -600),
        building6: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 50, -600),
        building7: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](300, 50, -600),
        building8: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](600, 50, -600),
        building9: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](900, 50, -600),
        building10: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1200, 50, -600),
        building11: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1500, 50, -600)
    };
    const cameraTargets = {
        intro: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0),
        main: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -900),
        building1: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1500, 0, -900),
        building2: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1200, 0, -900),
        building3: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-900, 0, -900),
        building4: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-600, 0, -900),
        building5: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-300, 0, -900),
        building6: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -900),
        building7: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](300, 0, -900),
        building8: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](600, 0, -900),
        building9: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](900, 0, -900),
        building10: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1200, 0, -900),
        building11: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1500, 0, -900)
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingExplorer.useEffect": ()=>{
            if (!containerRef.current) return;
            // Initialize THREE.js scene
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            sceneRef.current = scene;
            // Setup camera
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.copy(cameraPositions.intro);
            camera.lookAt(cameraTargets.intro);
            cameraRef.current = camera;
            // Setup renderer
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            containerRef.current.appendChild(renderer.domElement);
            rendererRef.current = renderer;
            // Setup lighting
            const hemiLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HemisphereLight"](0xffffff, 0x444444, 1.2);
            scene.add(hemiLight);
            const dirLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1.5);
            dirLight.position.set(200, 200, 200);
            scene.add(dirLight);
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0x404040, 0.8);
            scene.add(ambientLight);
            // Setup OrbitControls
            const controls = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"](camera, renderer.domElement);
            controls.enabled = false;
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.minDistance = 100;
            controls.maxDistance = 800;
            controls.maxPolarAngle = Math.PI / 2;
            controls.screenSpacePanning = false;
            orbitControlsRef.current = controls;
            // Load cloud texture and create clouds
            const textureLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            textureLoader.load('https://mrdoob.com/lab/javascript/webgl/clouds/cloud10.png', {
                "BuildingExplorer.useEffect": (texture)=>{
                    createClouds(texture, scene);
                }
            }["BuildingExplorer.useEffect"]);
            // Load buildings
            loadBuildings(scene);
            // Animation loop
            const animate = {
                "BuildingExplorer.useEffect.animate": ()=>{
                    animationFrameRef.current = requestAnimationFrame(animate);
                    // Animate clouds
                    animateClouds();
                    // Update building hover
                    updateBuildingHover();
                    // Update controls
                    if (orbitEnabledRef.current && orbitControlsRef.current) {
                        orbitControlsRef.current.update();
                    }
                    renderer.render(scene, camera);
                }
            }["BuildingExplorer.useEffect.animate"];
            animate();
            // Handle window resize
            const handleResize = {
                "BuildingExplorer.useEffect.handleResize": ()=>{
                    if (!cameraRef.current || !rendererRef.current) return;
                    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                    cameraRef.current.updateProjectionMatrix();
                    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
                }
            }["BuildingExplorer.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            // Mouse move handler
            const handleMouseMove = {
                "BuildingExplorer.useEffect.handleMouseMove": (event)=>{
                    if (!rendererRef.current) return;
                    const rect = rendererRef.current.domElement.getBoundingClientRect();
                    mouseRef.current.x = (event.clientX - rect.left) / rect.width * 2 - 1;
                    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
                }
            }["BuildingExplorer.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            setIsLoading(false);
            // Cleanup
            return ({
                "BuildingExplorer.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    window.removeEventListener('mousemove', handleMouseMove);
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                    if (rendererRef.current && containerRef.current) {
                        containerRef.current.removeChild(rendererRef.current.domElement);
                        rendererRef.current.dispose();
                    }
                }
            })["BuildingExplorer.useEffect"];
        }
    }["BuildingExplorer.useEffect"], []);
    const createClouds = (texture, scene)=>{
        texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
        texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"];
        const fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fog"](0x87CEEB, 20, 3000);
        scene.fog = fog;
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
            uniforms: {
                map: {
                    value: texture
                },
                fogColor: {
                    value: fog.color
                },
                fogNear: {
                    value: fog.near
                },
                fogFar: {
                    value: fog.far
                }
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
        });
        const plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](64, 64);
        const geometries = [];
        const object = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
        for(let i = 0; i < 8000; i++){
            object.position.x = Math.random() * 1000 - 500;
            object.position.y = -Math.random() * Math.random() * 200 + 50;
            object.position.z = i;
            object.rotation.z = Math.random() * Math.PI;
            object.scale.x = object.scale.y = Math.random() * Math.random() * 1.5 + 0.5;
            object.updateMatrix();
            const geo = plane.clone();
            geo.applyMatrix4(object.matrix);
            geometries.push(geo);
        }
        // Merge all cloud geometries into one
        const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$utils$2f$BufferGeometryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeBufferGeometries"])(geometries);
        if (!merged) {
            console.error('Failed to merge cloud geometries');
            return;
        }
        const cloudMesh1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](merged, material);
        const cloudMesh2 = cloudMesh1.clone();
        cloudMesh2.position.z = -8000;
        scene.add(cloudMesh1);
        scene.add(cloudMesh2);
        cloudMesh1Ref.current = cloudMesh1;
        cloudMesh2Ref.current = cloudMesh2;
    };
    const loadBuildings = async (scene)=>{
        const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
        for(let i = 0; i < buildingModelUrls.length; i++){
            try {
                const gltf = await loader.loadAsync(buildingModelUrls[i]);
                const building = gltf.scene;
                building.position.set(buildingPositions[i].x, buildingPositions[i].y, buildingPositions[i].z);
                const introScale = buildingScalesConfig[i][0];
                building.scale.set(introScale, introScale, introScale);
                building.userData = {
                    buildingId: i + 1,
                    buildingIndex: i,
                    baseScale: introScale
                };
                // Initially hidden
                building.traverse((node)=>{
                    if (node.isMesh) {
                        const mesh = node;
                        if (mesh.material) {
                            const material = mesh.material;
                            material.transparent = true;
                            material.opacity = 0;
                        }
                    }
                });
                scene.add(building);
                buildingsRef.current[i] = building;
                buildingScalesRef.current[i] = introScale;
                console.log(`✓ Building ${i + 1} (${buildingNames[i]}) loaded successfully`);
            } catch (error) {
                console.error(`✗ Failed to load building ${i + 1} (${buildingNames[i]}):`, error);
                console.error(`  URL: ${buildingModelUrls[i]}`);
                console.error(`  This may be due to CORS restrictions. Check server CORS headers.`);
                // Create a placeholder cube for failed buildings
                const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](50, 100, 50);
                const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                    color: 0x888888,
                    transparent: true,
                    opacity: 0
                });
                const placeholder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
                placeholder.position.set(buildingPositions[i].x, buildingPositions[i].y, buildingPositions[i].z);
                const introScale = buildingScalesConfig[i][0];
                placeholder.scale.set(introScale, introScale, introScale);
                placeholder.userData = {
                    buildingId: i + 1,
                    buildingIndex: i,
                    baseScale: introScale
                };
                scene.add(placeholder);
                buildingsRef.current[i] = placeholder;
                buildingScalesRef.current[i] = introScale;
            }
        }
    };
    const animateClouds = ()=>{
        if (!cloudMesh1Ref.current || !cloudMesh2Ref.current) return;
        // Only show clouds for Hilton project (building5)
        const showClouds = currentSection === 'building5';
        cloudMesh1Ref.current.visible = showClouds;
        cloudMesh2Ref.current.visible = showClouds;
        if (!showClouds) return;
        // Building 5 skybox effect
        if (currentSection === 'building5' && orbitEnabledRef.current && cameraRef.current) {
            cloudMesh1Ref.current.rotation.copy(cameraRef.current.rotation);
            cloudMesh2Ref.current.rotation.copy(cameraRef.current.rotation);
            const cameraDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            cameraRef.current.getWorldDirection(cameraDirection);
            cameraDirection.multiplyScalar(-2000);
            cloudMesh1Ref.current.position.set(cameraRef.current.position.x + cameraDirection.x, cameraRef.current.position.y + cameraDirection.y, cloudMesh1Ref.current.position.z);
            cloudMesh2Ref.current.position.set(cameraRef.current.position.x + cameraDirection.x, cameraRef.current.position.y + cameraDirection.y, cloudMesh2Ref.current.position.z);
        } else {
            cloudMesh1Ref.current.rotation.set(0, 0, 0);
            cloudMesh2Ref.current.rotation.set(0, 0, 0);
        }
        // Cloud movement - only for building5
        cloudMesh1Ref.current.position.z += 0.8;
        cloudMesh2Ref.current.position.z += 0.8;
        // Loop clouds
        if (cloudMesh1Ref.current.position.z > 8000) {
            cloudMesh1Ref.current.position.z = cloudMesh2Ref.current.position.z - 8000;
        }
        if (cloudMesh2Ref.current.position.z > 8000) {
            cloudMesh2Ref.current.position.z = cloudMesh1Ref.current.position.z - 8000;
        }
    };
    const updateBuildingHover = ()=>{
        if (currentSection !== 'main' || isTransitioningRef.current || !cameraRef.current) return;
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(buildingsRef.current, true);
        const buildingLabel = document.getElementById('buildingLabel');
        if (!buildingLabel) return;
        if (intersects.length > 0) {
            let hitObject = intersects[0].object;
            while(hitObject.parent && !hitObject.userData.buildingId){
                hitObject = hitObject.parent;
            }
            if (hitObject.userData.buildingId) {
                const buildingId = hitObject.userData.buildingId;
                const building = buildingsRef.current[buildingId - 1];
                if (hoveredBuildingRef.current !== building) {
                    // Reset previous
                    if (hoveredBuildingRef.current) {
                        const prevId = hoveredBuildingRef.current.userData.buildingId - 1;
                        const baseScale = buildingScalesRef.current[prevId];
                        hoveredBuildingRef.current.scale.set(baseScale, baseScale, baseScale);
                    }
                    // Set new
                    hoveredBuildingRef.current = building;
                    const baseScale = buildingScalesRef.current[buildingId - 1];
                    const hoverScale = baseScale * 1.2;
                    building.scale.set(hoverScale, hoverScale, hoverScale);
                    buildingLabel.textContent = buildingNames[buildingId - 1];
                    buildingLabel.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible);
                }
                // Update label position
                if (building && cameraRef.current) {
                    const buildingPosition = building.position.clone();
                    const screenPosition = buildingPosition.clone();
                    screenPosition.project(cameraRef.current);
                    const x = (screenPosition.x * 0.5 + 0.5) * window.innerWidth;
                    const y = (screenPosition.y * -0.5 + 0.5) * window.innerHeight;
                    buildingLabel.style.left = `${x}px`;
                    buildingLabel.style.top = `${y + 100}px`;
                }
            }
        } else {
            // Reset hover
            if (hoveredBuildingRef.current) {
                const prevId = hoveredBuildingRef.current.userData.buildingId - 1;
                const baseScale = buildingScalesRef.current[prevId];
                hoveredBuildingRef.current.scale.set(baseScale, baseScale, baseScale);
                hoveredBuildingRef.current = null;
            }
            buildingLabel.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible);
        }
    };
    const easeInOutCubic = (t)=>{
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    const animateCameraToPosition = (targetPosition, lookAtTarget, duration, onComplete)=>{
        if (!cameraRef.current) return;
        const startPosition = cameraRef.current.position.clone();
        const startTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        cameraRef.current.getWorldDirection(startTarget);
        startTarget.multiplyScalar(100).add(cameraRef.current.position);
        const startTime = Date.now();
        const animate = ()=>{
            if (!cameraRef.current) return;
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);
            cameraRef.current.position.lerpVectors(startPosition, targetPosition, easedProgress);
            const currentTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().lerpVectors(startTarget, lookAtTarget, easedProgress);
            cameraRef.current.lookAt(currentTarget);
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                cameraRef.current.position.copy(targetPosition);
                cameraRef.current.lookAt(lookAtTarget);
                if (onComplete) onComplete();
            }
        };
        animate();
    };
    const updateBuildingVisibility = ()=>{
        buildingsRef.current.forEach((building, index)=>{
            if (!building) return;
            let targetOpacity = 0;
            if (currentSection === 'main') {
                targetOpacity = 1;
            } else if (currentSection === `building${index + 1}`) {
                targetOpacity = 1;
            }
            building.traverse((node)=>{
                if (node.isMesh) {
                    const mesh = node;
                    if (mesh.material) {
                        const material = mesh.material;
                        material.opacity = targetOpacity;
                    }
                }
            });
        });
    };
    const updateBuildingScales = ()=>{
        buildingsRef.current.forEach((building, index)=>{
            if (!building) return;
            let targetScale;
            if (currentSection === 'intro' || currentSection === 'main') {
                targetScale = buildingScalesConfig[index][0];
            } else if (currentSection === `building${index + 1}`) {
                targetScale = buildingScalesConfig[index][1];
            } else {
                targetScale = buildingScalesConfig[index][0];
            }
            building.scale.set(targetScale, targetScale, targetScale);
            building.userData.baseScale = targetScale;
            buildingScalesRef.current[index] = targetScale;
        });
    };
    const hideAllBuildings = ()=>{
        buildingsRef.current.forEach((building)=>{
            if (!building) return;
            building.traverse((node)=>{
                if (node.isMesh) {
                    const mesh = node;
                    if (mesh.material) {
                        const material = mesh.material;
                        material.opacity = 0;
                    }
                }
            });
        });
    };
    const enableOrbitControls = (targetPosition, buildingIndex)=>{
        if (!orbitControlsRef.current || !cameraRef.current) return;
        const building = buildingsRef.current[buildingIndex];
        if (building) {
            const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(building);
            const center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            box.getCenter(center);
            orbitControlsRef.current.target.copy(center);
        } else {
            orbitControlsRef.current.target.copy(targetPosition);
        }
        cameraRef.current.lookAt(orbitControlsRef.current.target);
        cameraRef.current.updateMatrixWorld();
        orbitControlsRef.current.autoRotate = true;
        orbitControlsRef.current.autoRotateSpeed = 0.5;
        orbitControlsRef.current.enabled = true;
        orbitControlsRef.current.update();
        orbitEnabledRef.current = true;
    };
    const disableOrbitControls = ()=>{
        if (!orbitControlsRef.current) return;
        orbitControlsRef.current.enabled = false;
        orbitControlsRef.current.autoRotate = false;
        orbitEnabledRef.current = false;
    };
    const setupBuildingClickHandlers = ()=>{
        if (!rendererRef.current || !cameraRef.current) return;
        const canvas = rendererRef.current.domElement;
        const handleClick = (event)=>{
            if (currentSection !== 'main' || isTransitioningRef.current || !cameraRef.current) return;
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = (event.clientX - rect.left) / rect.width * 2 - 1;
            mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
            const intersects = raycasterRef.current.intersectObjects(buildingsRef.current, true);
            if (intersects.length > 0) {
                let hitObject = intersects[0].object;
                while(hitObject.parent && !hitObject.userData.buildingId){
                    hitObject = hitObject.parent;
                }
                if (hitObject.userData.buildingId) {
                    const buildingId = hitObject.userData.buildingId;
                    transitionToSection(`building${buildingId}`);
                }
            }
        };
        canvas.addEventListener('click', handleClick);
    };
    const transitionToSection = (sectionName)=>{
        if (isTransitioningRef.current) return;
        isTransitioningRef.current = true;
        setCurrentSection(sectionName);
        updateBuildingScales();
        if (sectionName === 'main') {
            disableOrbitControls();
            updateBuildingVisibility();
            animateCameraToPosition(cameraPositions.main, cameraTargets.main, 1500, ()=>{
                isTransitioningRef.current = false;
                setupBuildingClickHandlers();
            });
        } else if (sectionName.startsWith('building')) {
            hideAllBuildings();
            const buildingIndex = parseInt(sectionName.replace('building', '')) - 1;
            animateCameraToPosition(cameraPositions[sectionName], cameraTargets[sectionName], 1500, ()=>{
                updateBuildingVisibility();
                enableOrbitControls(cameraTargets[sectionName], buildingIndex);
                isTransitioningRef.current = false;
            });
        }
    };
    const handleEnterClick = ()=>{
        setCurrentSection('main');
        isTransitioningRef.current = true;
        updateBuildingScales();
        updateBuildingVisibility();
        animateCameraToPosition(cameraPositions.main, cameraTargets.main, 2000, ()=>{
            isTransitioningRef.current = false;
            setupBuildingClickHandlers();
        });
    };
    const handleNavClick = (section)=>{
        if (!isTransitioningRef.current) {
            transitionToSection(section);
        }
    };
    const handleCloseInstructions = (buildingNum)=>{
        const detailUI = document.getElementById(`detailUI${buildingNum}`);
        if (detailUI) {
            detailUI.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden);
            detailUI.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container
            }, void 0, false, {
                fileName: "[project]/components/BuildingExplorer.tsx",
                lineNumber: 717,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            currentSection !== 'intro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigation,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLogo,
                        children: "BUILDINGS"
                    }, void 0, false, {
                        fileName: "[project]/components/BuildingExplorer.tsx",
                        lineNumber: 722,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navMenu,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    onClick: ()=>handleNavClick('main'),
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/components/BuildingExplorer.tsx",
                                    lineNumber: 725,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/BuildingExplorer.tsx",
                                lineNumber: 724,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            buildingNames.map((name, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        onClick: ()=>handleNavClick(`building${index + 1}`),
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/components/BuildingExplorer.tsx",
                                        lineNumber: 729,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, index, false, {
                                    fileName: "[project]/components/BuildingExplorer.tsx",
                                    lineNumber: 728,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BuildingExplorer.tsx",
                        lineNumber: 723,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/BuildingExplorer.tsx",
                lineNumber: 721,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            currentSection === 'intro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introUI,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].enterButton,
                    onClick: handleEnterClick,
                    children: "Enter Experience"
                }, void 0, false, {
                    fileName: "[project]/components/BuildingExplorer.tsx",
                    lineNumber: 741,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/BuildingExplorer.tsx",
                lineNumber: 740,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading experience..."
            }, void 0, false, {
                fileName: "[project]/components/BuildingExplorer.tsx",
                lineNumber: 749,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            buildingNames.map((name, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailUI} ${currentSection === `building${index + 1}` ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible : ''}`,
                    id: `detailUI${index + 1}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailUIContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailUIText,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailBuildingName,
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/components/BuildingExplorer.tsx",
                                        lineNumber: 761,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailInstructions,
                                        children: "Drag to rotate • Scroll to zoom"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BuildingExplorer.tsx",
                                        lineNumber: 762,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BuildingExplorer.tsx",
                                lineNumber: 760,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeInstructions,
                                onClick: ()=>handleCloseInstructions(index + 1),
                                children: "x"
                            }, void 0, false, {
                                fileName: "[project]/components/BuildingExplorer.tsx",
                                lineNumber: 764,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BuildingExplorer.tsx",
                        lineNumber: 759,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/components/BuildingExplorer.tsx",
                    lineNumber: 754,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buildingLabel,
                id: "buildingLabel"
            }, void 0, false, {
                fileName: "[project]/components/BuildingExplorer.tsx",
                lineNumber: 775,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionBackground} ${currentSection === 'intro' ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                id: "bg_intro"
            }, void 0, false, {
                fileName: "[project]/components/BuildingExplorer.tsx",
                lineNumber: 778,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionBackground} ${currentSection === 'main' ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                id: "bg_main"
            }, void 0, false, {
                fileName: "[project]/components/BuildingExplorer.tsx",
                lineNumber: 779,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            [
                ...Array(11)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionBackground} ${currentSection === `building${i + 1}` ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                    id: `bg_building${i + 1}`
                }, i, false, {
                    fileName: "[project]/components/BuildingExplorer.tsx",
                    lineNumber: 781,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true);
};
_s(BuildingExplorer, "YE8yA273Xcj9nXVRAjLILODYa94=");
_c = BuildingExplorer;
const __TURBOPACK__default__export__ = BuildingExplorer;
var _c;
__turbopack_context__.k.register(_c, "BuildingExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BuildingExplorer.tsx [app-client] (ecmascript)");
'use client';
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BuildingExplorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_96b20dec._.js.map