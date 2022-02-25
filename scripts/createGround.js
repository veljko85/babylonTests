// GROUND
function createGround() {
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { width: 6, height: 6 },
    scene
  );
  var grassMaterial = new BABYLON.StandardMaterial(name, scene);
  var grassTexture = new BABYLON.GrassProceduralTexture(
    name + "text",
    512,
    scene
  );
  grassTexture.grassColor = new BABYLON.Color3(224 / 255, 197 / 255, 127 / 255);
  grassMaterial.diffuseTexture = grassTexture;
  grassMaterial.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);
  ground.material = grassMaterial;
}
