//CAMERA
function cameraBabylon() {
  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    0,
    0,
    0,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);
  camera.setPosition(new BABYLON.Vector3(0, 1.5, -4));
  camera.setTarget(new BABYLON.Vector3(0, 1, 0));
  camera.wheelPrecision = 300;
}
