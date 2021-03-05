const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

let arcRotCamera;

// Add your code here matching the playground format
const scene = createScene(); //Call the createScene function
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scene.render();
}); 
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});

function createScene () {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(1, 0.8, 0.8);
    //arcRotCamera = new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
    var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 2, -20), scene);
    var light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, -10), scene);
    var origin = BABYLON.Mesh.CreateSphere("origin", 16, 1.0, scene);

    var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene, false);
    var box = BABYLON.Mesh.CreateBox("box", 3.0, scene);
    box.position = new BABYLON.Vector3(-5, 0, 0);

    var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene, false);
    cylinder.position = new BABYLON.Vector3(5, 0, 0);
    cylinder.rotation = new BABYLON.Vector3 (0, 0.2 , Math.PI / 2);

    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("images/refcube", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;


    /*
    var lines = BABYLON.Mesh.CreateLines("lines", [
        new BABYLON.Vector3(-10, 0, 0),
        new BABYLON.Vector3(10, 0, 0),
        new BABYLON.Vector3(0, 0, -10),
        new BABYLON.Vector3(0, 0, 10)
     ], scene);
     */
    scene.activeCamera.attachControl(canvas);
    
    return scene;
}

