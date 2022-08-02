//HEADING MENU
//videos
var videosBut = document.getElementById("videos-but");
var modalVideos = document.getElementById("modal-videos");
videosBut.onclick = () => {
  modalFade.style.display = "block";
  modalVideos.style.display = "block";
};
var modalVideosParts = document.getElementsByClassName("modal-videos-part");
var modalVideo = document.getElementById("modal-video");
var modalVideoVideo = document.getElementById("modal-video-video");
for (let i = 0; i < modalVideosParts.length; i++) {
  modalVideosParts[i].addEventListener("click", () => {
    modalVideos.style.display = "none";
    modalVideo.style.display = "block";
    modalVideoVideo.setAttribute("src", `videos/${i}.webm`);
  });
}

// Add active class to the current button (highlight it)
// var hedingBtns = document.getElementsByClassName("heading-menu-buttons");
// for (var i = 0; i < hedingBtns.length; i++) {
//   hedingBtns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active-menu-buttons");
//     current[0].className = current[0].className.replace(
//       " active-menu-buttons",
//       ""
//     );
//     this.className += " active-menu-buttons";
//   });
// }

//MODAL SECTION FADE
let modalFade = document.getElementById("modal-fade");
let modalContent = document.getElementsByClassName("modal-content");
let onSturmanker = document.getElementById("on-sturmanker");
let modalCloseBtn = document.getElementsByClassName("modal-close-btn");
let modalVerSchBtn = document.getElementsByClassName("modal-ver-sch-btn");
let onLedSturmanker = document.getElementById("on-led-sturmanker");
let ledSturBtn = document.getElementById("ledStur-btn");
let sturLedBtn = document.getElementById("sturLed-btn");

for (let i = 0; i < modalCloseBtn.length; i++) {
  modalCloseBtn[i].addEventListener("click", () => {
    modalFade.style.display = "none";
    for (let i = 0; i < modalContent.length; i++) {
      modalContent[i].style.display = "none";
    }
  });
}
for (let i = 0; i < modalVerSchBtn.length; i++) {
  modalVerSchBtn[i].addEventListener("click", () => {
    modalFade.style.display = "none";
    for (let i = 0; i < modalContent.length; i++) {
      modalContent[i].style.display = "none";
    }
  });
}

//viero img modal fade settings
let onInlayInfo = document.getElementById("on-inlay-info");
let vieroImg = document.getElementById("viero-img");
vieroImg.onclick = () => {
  modalFade.style.display = "block";
  onInlayInfo.style.display = "block";
};

// ACCESORIES SECTION*****************************************************************************************
let sideAccesories = document.getElementById("side-accesories");
let deleteImgAccesories = document.getElementsByClassName(
  "delete-img-accesories"
);
let deleteAccesorie = document.getElementsByClassName("del-acc");
let sideAccCloseBtn = document.getElementsByClassName(
  "side-accesories-close-btn"
);
let addFenceAcc = document.getElementById("add-fence-acc");
let addEasyFenceAcc = document.getElementById("easy-fence-acc");
let addGardoFenceAcc = document.getElementById("gardo-fence-acc");
let addNewFenceToSide = document.getElementById("addNewFenceToSide");
let openFenceSlider = document.getElementById("open-fence-slider");
let fenceSliderSection = document.getElementById("fence-slider");
let fenceSliderOpen = false;
function closeSliderContainer() {
  openFenceSlider.style.color = "#333333";
  openFenceSlider.children[2].innerHTML = "+";
  fenceSliderSection.style.display = "none";
  fenceSliderOpen = false;
}
openFenceSlider.onclick = () => {
  if (!fenceSliderOpen) {
    openFenceSlider.style.color = "#3967ff";
    openFenceSlider.children[2].innerHTML = "-";
    fenceSliderSection.style.display = "block";
    fenceSliderOpen = true;
  } else {
    closeSliderContainer();
  }
};
// fence size slider

var pipsSlider = document.getElementById("slider-pips");
var sliderMin = document.getElementById("slider-min");
var sliderPlus = document.getElementById("slider-plus");
var confirmSliderSize = document.getElementById("confirm-slider-size");

noUiSlider.create(pipsSlider, {
  connect: [true, false],
  tooltips: [wNumb({ decimals: 0, postfix: " cm" })],
  range: {
    min: 0,
    max: 180,
  },
  start: [180],

  pips: { mode: "values", values: [0, 90, 180], density: 100 },
});
var pips = pipsSlider.querySelectorAll(".noUi-value");
function clickOnPip() {
  let value = Number(pipsSlider.getAttribute("data-value"));

  pipsSlider.noUiSlider.set(value);
}

for (var i = 0; i < pips.length; i++) {
  pips[i].addEventListener("click", clickOnPip);
}
var valueOfSlider;
pipsSlider.noUiSlider.on("update", function () {
  valueOfSlider = Math.round(Number(pipsSlider.noUiSlider.get()));
  sliderMin.onclick = () => {
    pipsSlider.noUiSlider.set(valueOfSlider - 1);
  };
  sliderPlus.onclick = () => {
    pipsSlider.noUiSlider.set(valueOfSlider + 1);
  };
  if (valueOfSlider < 10) {
    pipsSlider.noUiSlider.set(10);
  }
});

let easyFenceSliderOpt = {
  range: {
    min: 0,
    max: 180,
  },

  pips: { mode: "values", values: [0, 90, 180], density: 100 },
};

let smallRomSliderOpt = {
  range: {
    min: 0,
    max: 60,
  },
  pips: { mode: "values", values: [0, 30, 60], density: 100 },
};

let bigRomSliderOpt = {
  range: {
    min: 61,
    max: 180,
  },
  pips: { mode: "values", values: [61, 120, 180], density: 100 },
};

//ADD FENCE
//add fence activnes

//CANVAS********************************************************************************************************************
var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
  engine.runRenderLoop(function () {
    if (sceneToRender && sceneToRender.activeCamera) {
      sceneToRender.render();
    }
  });
};

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function () {
  return new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false,
  });
};

//FOR LOADING
BABYLON.DefaultLoadingScreen.prototype.displayLoadingUI = function () {
  if (document.getElementById("customLoadingScreenDiv")) {
    // Do not add a loading screen if there is already one
    document.getElementById("customLoadingScreenDiv").style.display = "initial";
    return;
  }
};
//lottie
let animItem = bodymovin.loadAnimation({
  wrapper: document.getElementById("lottieWraper"),
  animType: "svg",
  loop: true,
  // rendererSettings: {
  //   progressiveLoad: false,
  //   preserveAspectRatio: "xMidYMid meet",
  //   viewBoxSize: "10 10 10 10",
  // },
  path: "https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/loading.json",
});
animItem.resize();
animItem.addEventListener("DOMLoaded", function () {
  animItem.playSegments(
    [
      [0, 100],
      [32, 100],
    ],
    true
  );
});

BABYLON.DefaultLoadingScreen.prototype.hideLoadingUI = function () {
  document.getElementById("customLoadingScreenDiv").style.display = "none";
  // console.log("scene is now loaded");
};
//end of loading

//CREATE SCENE ///////////////////////////////////////////////////
var createScene = function () {
  // for loading
  engine.displayLoadingUI();

  // SCENE
  var scene = new BABYLON.Scene(engine);

  //CAMERA
  var cameraTarget = new BABYLON.MeshBuilder.CreateBox(
    "cameraTarget",
    { width: 0.2, height: 0.2, depth: 0.2 },
    scene
  );
  cameraTarget.position = new BABYLON.Vector3(0.9, 1, 0);
  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    0,
    0,
    0,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  cameraTarget.isVisible = false;
  // var camera = new BABYLON.FreeCamera(
  //   "camera1",
  //   new BABYLON.Vector3(0, 5, -10),
  //   scene
  // );
  camera.attachControl(canvas, true);
  camera.setPosition(new BABYLON.Vector3(0.9, 1.5, -4.1));
  // camera.setTarget(new BABYLON.Vector3(0.9, 1, 0));
  camera.wheelPrecision = 300;
  camera.target = cameraTarget;

  camera.lowerRadiusLimit = 2;
  // camera.upperRadiusLimit = 50;

  // camera.lowerBetaLimit = 0;
  camera.upperBetaLimit = 1.9;
  //ENVIROMENT
  scene.environmentTexture = new BABYLON.CubeTexture(
    "enviorment/env.env",
    scene
  );
  scene.environmentIntensity = 0.8;

  //LIGHTS
  let lights = [];
  let lightsLite = [];
  let lightsHavy = [];
  // let lightsLed = [];
  let lightColors = [
    "#ff0000",
    "#198754",
    "#ffc107",
    "#0d6efd",
    "#ffffff",
    "#0dcaf0",
    "#f70767",
    "#ff7400",
    "#7B00F7",
    "#7C7C02",
  ];
  lightsBabylon(lightsLite, lightsHavy, lights);
  //set lights color
  lights.forEach((elm) => {
    elm.diffuse = elm.specular = BABYLON.Color3.FromHexString(lightColors[4]);
  });

  //SKY
  var skyBoxes = [];
  addSkyBox(skyBoxes);

  // GROUND
  // createGround();
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { width: 1, height: 1 },
    scene
  );
  ground.scaling.x = 2.3;
  ground.scaling.z = 0.5;
  ground.position = new BABYLON.Vector3(0.9, 0, 0);
  var grassMaterial = new BABYLON.StandardMaterial("grassMaterial", scene);
  grassMaterial.diffuseTexture = new BABYLON.Texture("img/grass.jpg", scene);
  grassMaterial.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);
  grassMaterial.diffuseTexture.uScale = 4.6; // width / height
  grassMaterial.diffuseTexture.vScale = 1;
  ground.material = grassMaterial;
  ////////////////////////////////////////////////
  function groundChange(x, z) {
    ground.scaling.x = x;
    ground.scaling.z = z;

    // ground.position = new BABYLON.Vector3(0.9, 0, -0.9);
  }

  //SET TEXTURE FOR SHOWING SIZE
  //gound text X
  var groundTextX = BABYLON.MeshBuilder.CreateGround(
    "groundTextX",
    { width: 1, height: 0.5, subdivisions: 25 },
    scene
  );
  var groundTextX2 = BABYLON.MeshBuilder.CreateGround(
    "groundTextX",
    { width: 1, height: 0.5, subdivisions: 25 },
    scene
  );
  groundTextX2.rotation.y = Math.PI;
  //Create dynamic texture
  // var textureResolution = 512;
  var textureGroundX = new BABYLON.DynamicTexture(
    "dynamic texture",
    { width: 512, height: 256 },
    scene
  );
  var textureContextX = textureGroundX.getContext();

  var materialGroundX = new BABYLON.StandardMaterial("Mat", scene);
  materialGroundX.diffuseTexture = textureGroundX;
  materialGroundX.diffuseTexture.hasAlpha = true;
  groundTextX.material = materialGroundX;
  groundTextX2.material = materialGroundX;
  textX = 191;
  //Add text to dynamic texture
  var font = "120px Arial";
  textureGroundX.drawText(
    textX + "cm",
    null,
    null,
    font,
    "black",
    "transparent",
    true,
    true
  );

  //gound text Z
  var groundTextZ = BABYLON.MeshBuilder.CreateGround(
    "groundTextZ",
    { width: 1, height: 0.5, subdivisions: 25 },
    scene
  );
  groundTextZ.rotation.y = Math.PI / 2;
  var groundTextZ2 = BABYLON.MeshBuilder.CreateGround(
    "groundTextZ",
    { width: 1, height: 0.5, subdivisions: 25 },
    scene
  );
  groundTextZ2.rotation.y = -Math.PI / 2;
  //Create dynamic texture

  var textureGroundZ = new BABYLON.DynamicTexture(
    "dynamic texture",
    { width: 512, height: 256 },
    scene
  );
  var textureContextZ = textureGroundZ.getContext();

  var materialGroundZ = new BABYLON.StandardMaterial("Mat", scene);
  materialGroundZ.diffuseTexture = textureGroundZ;
  materialGroundZ.diffuseTexture.hasAlpha = true;
  groundTextZ.material = materialGroundZ;
  groundTextZ2.material = materialGroundZ;
  textZ = 7;
  //Add text to dynamic texture
  // var font = "120px Arial";
  textureGroundZ.drawText(
    textZ + "cm",
    null,
    null,
    font,
    "black",
    "transparent",
    true,
    true
  );

  /////////////////////////////////////////////////////////////////////////////////////////

  //FENCE COLORS
  fenceBoardsColors = ["#8c8c8c", "#474747", "#836953", "#ece6d6"];
  fencePartsColors = ["#e6e6e6", "#474747"];

  //ALL MATERIALS COLORS
  var grauMat = new BABYLON.StandardMaterial("grauMat", scene);
  grauMat.diffuseColor = BABYLON.Color3.FromHexString(fenceBoardsColors[0]);

  var anthrazitMat = new BABYLON.StandardMaterial("anthrazitMat", scene);
  anthrazitMat.diffuseColor = BABYLON.Color3.FromHexString(
    fenceBoardsColors[1]
  );

  var braunMat = new BABYLON.StandardMaterial("braunMat", scene);
  braunMat.diffuseColor = BABYLON.Color3.FromHexString(fenceBoardsColors[2]);

  var sandMat = new BABYLON.StandardMaterial("sandMat", scene);
  sandMat.diffuseColor = BABYLON.Color3.FromHexString(fenceBoardsColors[3]);

  var silberMat = new BABYLON.StandardMaterial("silberMat", scene);
  silberMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[0]);

  grauMat.specularColor =
    anthrazitMat.specularColor =
    braunMat.specularColor =
    sandMat.specularColor =
      // silberMat.specularColor =
      new BABYLON.Color3(0.1, 0.1, 0.1);

  //FENCE BORDS MATERIAL
  var fenceBoardMat = new BABYLON.StandardMaterial("fenceBoardMat", scene);
  fenceBoardMat.diffuseColor = BABYLON.Color3.FromHexString(
    fenceBoardsColors[0]
  );
  fenceBoardMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  //SMALL BOARDS MATERIAL
  // var smallBoardsMat = new BABYLON.StandardMaterial("smallBoardsMat", scene);
  // smallBoardsMat.diffuseColor = BABYLON.Color3.FromHexString(
  //   fencePartsColors[0]
  // );
  // smallBoardsMat.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);

  // var smallBoardsMatDark = new BABYLON.StandardMaterial(
  //   "smallBoardsMatDark",
  //   scene
  // );
  // smallBoardsMatDark.diffuseColor = BABYLON.Color3.FromHexString(
  //   fencePartsColors[1]
  // );
  // smallBoardsMatDark.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);

  // //FENCE POSTS MATERIAL
  var fencePostMat = new BABYLON.StandardMaterial("fencePostMat", scene);
  fencePostMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[1]);

  //FENCE START AND END MATERIALS
  var fenceStartEndMat = new BABYLON.StandardMaterial(
    "fenceStartEndMat",
    scene
  );
  fenceStartEndMat.diffuseColor = BABYLON.Color3.FromHexString(
    fencePartsColors[1]
  );
  fenceStartEndMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  var inlaysMat = new BABYLON.StandardMaterial("inlaysMat", scene);
  inlaysMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[1]);
  inlaysMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  //FENCE LAISNE MATERIALS
  var laisneMat = new BABYLON.StandardMaterial("laisneMat", scene);
  laisneMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[0]);
  laisneMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  //FENCE POST CAP MATERIALS
  var capMat = new BABYLON.StandardMaterial("capMat", scene);
  capMat.diffuseColor = BABYLON.Color3.FromHexString("#202020");
  capMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  //LED MATERIALS
  var glow = new BABYLON.GlowLayer("glow", scene);
  glow.intensity = 0.8;
  var ledMat = new BABYLON.StandardMaterial("ledMat", scene);
  ledMat.diffuseColor = ledMat.emissiveColor = BABYLON.Color3.FromHexString(
    lightColors[4]
  );

  //ROOT SRAF MATERIAL
  var rootMat = new BABYLON.StandardMaterial("rootMat", scene);
  rootMat.diffuseColor = BABYLON.Color3.FromHexString("#b4b4b4");

  //CONCRETE MATERIAL
  let concreteMat = new BABYLON.StandardMaterial("concreteMat", scene);
  concreteMat.diffuseTexture = new BABYLON.Texture("img/concrete.jpg", scene);
  concreteMat.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);
  concreteMat.backFaceCulling = false;

  //FOUNDATION MATERIAL
  var foundationMat = new BABYLON.StandardMaterial("foundationMat", scene);
  foundationMat.diffuseColor = BABYLON.Color3.FromHexString("#ffffff");
  foundationMat.alpha = 0.5;

  //SINGS MATEIALS AD TEXTURES
  //delete sign
  var signmatDel = new BABYLON.StandardMaterial("signmatDel", scene);
  var signTexDel = new BABYLON.Texture("img/deleteOn64.png", scene);
  signTexDel.hasAlpha = true;
  signmatDel.useAlphaFromDiffuseTexture = true;
  signmatDel.backFaceCulling = false;
  signmatDel.diffuseTexture = signTexDel;
  //warnin sign
  var signmatWar = new BABYLON.StandardMaterial("signmatWar", scene);
  var signTexWar = new BABYLON.Texture("img/warning.png", scene);
  signTexWar.hasAlpha = true;
  signTexWar.useAlphaFromDiffuseTexture = true;
  signmatWar.backFaceCulling = false;
  signmatWar.diffuseTexture = signTexWar;

  //ADD NEW FENCE SING MATERIAL
  const addNewFenceMeshMat = new BABYLON.StandardMaterial("addNewFenceMeshMat");
  addNewFenceMeshMat.diffuseTexture = new BABYLON.Texture("img/arrow.png");
  addNewFenceMeshMat.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);
  // addNewFenceMeshMat.diffuseColor = new BABYLON.Vector4(1,0,0,1);
  addNewFenceMeshMat.backFaceCulling = false;

  const addNewFenceMeshMatAct = new BABYLON.StandardMaterial(
    "addNewFenceMeshMatAct"
  );
  addNewFenceMeshMatAct.diffuseTexture = new BABYLON.Texture(
    "img/arrowActive.png"
  );
  addNewFenceMeshMatAct.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);
  // addNewFenceMeshMat.diffuseColor = new BABYLON.Vector4(1,0,0,1);
  addNewFenceMeshMatAct.backFaceCulling = false;

  //MATERIAL FOR SELECTION
  var selectedMat = new BABYLON.StandardMaterial("selectedMat", scene);
  selectedMat.diffuseColor = BABYLON.Color3.FromHexString("#C10000");
  // selectedMat.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);

  //FENCE VARIABLES
  var leftPostCaps = [];
  var rightPostCaps = [];
  var rightPostCapClones = [];
  var fenceBoards = [];
  var smallBoardsArr = [];
  var startParts = [];
  var endParts = [];
  var laisnes = [];
  var inlaysMaterials = [];
  var inlays = [];
  var leftPosts = [];
  var rightPosts = [];
  var allPosts = [];
  var fakePosts = [];
  var intersectedPosts = [];
  var intersectedPostsMain = [];
  var roots = [];
  var rightRoots = [];
  var singsDel = [];
  var singsDelRight = [];
  var singsWar = [];
  var singsWarRight = [];
  var leds = [];
  var ledsRight = [];
  var ledsOn = 0;
  var foundationStarts = [];
  var foundationStartsRight = [];
  var foundations = [];
  var foundationsRight = [];
  var sturmankersRuckseite = [];
  var sturRuckseiteSrafs = [];
  var sturmankersRuckseiteRight = [];
  var sturmankersVorderseite = [];
  var sturVorderseiteSrafs = [];
  var sturmankersVorderseiteRight = [];
  var foundationStartsVord = [];
  var foundationsVord = [];
  var foundationStartsRuck = [];
  var foundationsRuck = [];
  var directeHauswandMeshes = [];
  var directeHauswandMeshesRight = [];
  var newFenceForwardSigns = [];
  var newFenceRightSigns = [];
  var newFenceLeftSigns = [];
  var newFenceBackSigns = [];
  var addFenceSings = [];
  var fencesArr = [];
  var fakeFronts = [];
  var fakeBacks = [];
  var fakeFences = [];
  var wholeFences = [];

  //gardo
  var gardoFenceBoards = [];
  var topBoards = [];
  var metalParts = [];
  var rightMetalParts = [0];
  var smallMetalParts = [];
  var rightSmallMetalParts = [0];
  var rankelements = [];
  var allWoodPosts = [];
  var rightWoodPosts = [0];
  var woodMaterials = [];
  var woodTopParts = [];

  //FUNCTONS TO GET AND SET ABSOLUTE POSTIOIONS
  var getAbsPosX = (mesh) => {
    mesh.computeWorldMatrix(true);
    return mesh.getAbsolutePosition().x;
  };
  var getAbsPosY = (mesh) => {
    mesh.computeWorldMatrix(true);
    return mesh.getAbsolutePosition().y;
  };
  var getAbsPosZ = (mesh) => {
    mesh.computeWorldMatrix(true);
    return mesh.getAbsolutePosition().z;
  };
  var setAbsPosX = (mesh, newXPos) => {
    return mesh.setAbsolutePosition(
      new BABYLON.Vector3(
        newXPos,
        mesh.getAbsolutePosition().y,
        mesh.getAbsolutePosition().z
      )
    );
  };
  //FUNCTIONS OTHER
  function setActiveFenceOnCombineFences() {
    for (let j = 0; j < rightPosts.length; j++) {
      if (rightPosts[j].material.id == "selectedMat") {
        activeFence = j;
      }
    }
  }

  //CHANCHING SIZE ON SLIDER
  //function to change position and scale of fence
  function changePosAndScaleFence(valueToCount, activeFence) {
    // if (valueToCount > 15) {
    fenceScale = valueToCount / 180;
    // } else {
    //   fenceScale = 0.08;
    // }
    fenceSize = 1.8 * fenceScale;

    firstX = getAbsPosX(rightPosts[activeFence]);
    firstZ = getAbsPosZ(rightPosts[activeFence]);

    fenceBoards[activeFence].forEach((elm) => {
      elm.scaling.x = fenceScale;
      elm.position.x = -0.9 + fenceSize / 2 - 0.01;
    });

    laisnes[activeFence].forEach((elm) => {
      elm.scaling.x = fenceScale;
      elm.position.x = -0.9 + fenceSize / 2 - 0.01;
    });

    startParts[activeFence].scaling.x =
      endParts[activeFence].scaling.x =
      inlays[activeFence][0].scaling.x =
        fenceScale;
    inlays[activeFence][2].scaling.x = fenceScale;
    startParts[activeFence].position.x = endParts[activeFence].position.x =
      -0.9 + fenceSize / 2 - 0.01;
    inlays[activeFence][0].position.x = inlays[activeFence][2].position.x =
      -0.9 + fenceSize / 2 - 0.02;

    smallBoardsArr[activeFence].scaling.x = fenceScale;
    smallBoardsArr[activeFence].position.x = -0.9 + fenceSize / 2 - 0.01;
    rightPosts[activeFence].position.x = -0.9 + fenceSize;
    rightPostCaps[activeFence].position.x = rightPosts[activeFence].position.x;

    foundationsRight[activeFence].setAbsolutePosition(
      new BABYLON.Vector3(
        getAbsPosX(rightPosts[activeFence]),
        foundationsRight[activeFence].position.y,
        getAbsPosZ(rightPosts[activeFence])
      )
    );
    //GARDO FENCE
    if (
      fencesArr[activeFence].type == "gardoFence" ||
      fencesArr[activeFence].type == "gardoHalf" ||
      fencesArr[activeFence].type == "gardoRank"
    ) {
      fencesArr[activeFence].gardoParts.woodTopPart.scaling.x =
        fenceScale * 0.84;
      fencesArr[activeFence].gardoParts.woodTopPart.position.x =
        -0.9 + fenceSize / 2 - 0.01;

      fencesArr[activeFence].gardoParts.boards.forEach((elm) => {
        elm.scaling.x = fenceScale;
        elm.position.x = -0.9 + fenceSize / 2 - 0.01;
      });

      fencesArr[activeFence].gardoParts.woodPost.position.x =
        rightPosts[activeFence].position.x;

      fencesArr[activeFence].gardoParts.smallMetalParts.forEach((elm) => {
        elm.position.x = rightPosts[activeFence].position.x;
      });

      fencesArr[activeFence].gardoParts.metalParts.forEach((elm) => {
        elm.setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPosts[activeFence]),
            getAbsPosY(elm),
            getAbsPosZ(rightPosts[activeFence])
          )
        );
      });

      fencesArr[activeFence].gardoParts.topBoard.scaling.x = fenceScale;
      fencesArr[activeFence].gardoParts.topBoard.position.x =
        -0.9 + fenceSize / 2 - 0.01;
    }

    newFenceForwardSigns[activeFence].setAbsolutePosition(
      new BABYLON.Vector3(
        getAbsPosX(rightPosts[activeFence]) + 0.3,
        newFenceForwardSigns[activeFence].position.y,
        getAbsPosZ(rightPosts[activeFence])
      )
    );

    newFenceRightSigns[activeFence].setAbsolutePosition(
      new BABYLON.Vector3(
        getAbsPosX(rightPosts[activeFence]),
        newFenceRightSigns[activeFence].position.y,
        getAbsPosZ(rightPosts[activeFence]) - 0.3
      )
    );

    newFenceLeftSigns[activeFence].setAbsolutePosition(
      new BABYLON.Vector3(
        getAbsPosX(rightPosts[activeFence]),
        newFenceLeftSigns[activeFence].position.y,
        getAbsPosZ(rightPosts[activeFence]) + 0.3
      )
    );

    newFenceBackSigns[activeFence].setAbsolutePosition(
      new BABYLON.Vector3(
        getAbsPosX(rightPosts[activeFence]) - 0.3,
        newFenceBackSigns[activeFence].position.y,
        getAbsPosZ(rightPosts[activeFence])
      )
    );

    secondX = getAbsPosX(rightPosts[activeFence]);
    secondZ = getAbsPosZ(rightPosts[activeFence]);

    //set this fence obj size
    fencesArr[activeFence].size = valueToCount;
  }

  //confirm change on slider
  confirmSliderSize.onclick = () => {
    changePosAndScaleFence(valueOfSlider, activeFence);
    positionChildrenOnParentSizeChange(activeFence);
    checkPostIntersecting(
      fakePosts,
      allPosts,
      rightRoots,
      intersectedPosts,
      intersectedPostsMain,
      fencesArr
    );
    setGround();
  };

  function scaleToOtherFencesToDo(i) {
    foundationsRight[i].position.x =
      foundationsRight[i].position.x - (firstX - secondX);
    foundationsRight[i].position.z =
      foundationsRight[i].position.z - (firstZ - secondZ);

    wholeFences[i].position.x = wholeFences[i].position.x - (firstX - secondX);
    wholeFences[i].position.z = wholeFences[i].position.z - (firstZ - secondZ);

    //gardo fence
    if (
      fencesArr[i].type == "gardoFence" ||
      fencesArr[i].type == "gardoHalf" ||
      fencesArr[i].type == "gardoRank"
    ) {
      fencesArr[i].fenceGardo.position.x =
        fencesArr[i].fenceGardo.position.x - (firstX - secondX);
      fencesArr[i].fenceGardo.position.z =
        fencesArr[i].fenceGardo.position.z - (firstZ - secondZ);
    }

    newFenceForwardSigns[i].position.x =
      newFenceForwardSigns[i].position.x - (firstX - secondX);
    newFenceForwardSigns[i].position.z =
      newFenceForwardSigns[i].position.z - (firstZ - secondZ);

    newFenceRightSigns[i].position.x =
      newFenceRightSigns[i].position.x - (firstX - secondX);
    newFenceRightSigns[i].position.z =
      newFenceRightSigns[i].position.z - (firstZ - secondZ);

    newFenceLeftSigns[i].position.x =
      newFenceLeftSigns[i].position.x - (firstX - secondX);
    newFenceLeftSigns[i].position.z =
      newFenceLeftSigns[i].position.z - (firstZ - secondZ);

    newFenceBackSigns[i].position.x =
      newFenceBackSigns[i].position.x - (firstX - secondX);
    newFenceBackSigns[i].position.z =
      newFenceBackSigns[i].position.z - (firstZ - secondZ);
  }

  function positionChildrenOnParentSizeChange(activeFence) {
    for (let i = 0; i < fencesArr[activeFence].children.length; i++) {
      a = fencesArr[activeFence].children[i];
      scaleToOtherFencesToDo(a);
      recursiveToChildrenPositionChange(a);
    }
  }
  function recursiveToChildrenPositionChange(a) {
    if (fencesArr[a].children.length > 0) {
      fencesArr[a].children.forEach((elm) => {
        scaleToOtherFencesToDo(elm);
        recursiveToChildrenPositionChange(elm);
      });
    }
  }

  //MAIN POST MESH //////////////////////////////////////////////////////////////////////////
  BABYLON.SceneLoader.ImportMeshAsync("", "mesh/", "mainPost.glb").then(
    (result) => {
      var mainPost = result.meshes[0];
      mainPost.rotationQuaternion = null;
      mainPost.scaling = new BABYLON.Vector3(1.01, 1, 1.01);
      mainPost.addRotation(0, Math.PI, 0);

      //SET POSITION
      scene.getNodeByName("post-root-left").position.x =
        scene.getNodeByName("sturmanker-left-front").position.x =
        scene.getNodeByName("sturmanker-left-rear").position.x =
          0;
      for (let i = 0; i < result.meshes.length; i++) {
        result.meshes[i].position.x = 0;
      }
      //POST CAP
      let leftPostCap = scene.getMeshByName("post-cap-left");
      leftPostCap.material = capMat;
      leftPostCaps.push(leftPostCap);

      //POSTS
      let leftPost = scene.getMeshByName("post-left");
      leftPost.addRotation(0, Math.PI, 0);
      leftPosts.push(leftPost);
      allPosts.push(leftPost);
      leftPost.material = fencePostMat;

      //cerate fake rigth post
      let fakePost = new BABYLON.MeshBuilder.CreateBox(
        "fakePost",
        { width: 0.05, height: 2.1, depth: 0.05 },
        scene
      );
      fakePost.parent = leftPost;
      fakePosts.push(fakePost);
      fakePost.isVisible = false;

      createMainPostSigns();
      //add selected to mesh
      leftPost.actionManager = new BABYLON.ActionManager(scene);
      leftPost.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            if (
              leftPost.material.id != "selectedMat" &&
              leftPost.scaling.x == 1
            ) {
              removeSideAccesories(
                sideAccesories,
                deleteAccesorie,
                addFenceAcc,
                editPost,
                addNewFenceToSide
              );
              closeSliderContainer();
              addDefaultMaterial(
                fenceBoards,
                sturmankersVorderseite,
                rightPosts,
                leftPosts,
                directeHauswandMeshes,
                fenceBoardMat,
                fencePostMat,
                concreteMat,
                smallBoardsArr,
                silberMat,
                anthrazitMat,
                fencesArr,
                addFenceSings,
                grauMat,
                braunMat,
                sandMat,
                woodMaterials,
                topBoards,
                rankelements,
                rightWoodPosts,
                woodTopParts,
                gardoFenceBoards
              );
              activeFence = false;
              leftPost.material = selectedMat;
              addFenceSings[0].isVisible = true;
              addFenceSings[1].isVisible = true;
              intersectArrowSignsFence(
                fakeFences,
                newFenceForwardSigns,
                newFenceRightSigns,
                newFenceLeftSigns,
                newFenceBackSigns,
                activeFence,
                addFenceSings
              );
              //set day when select sturmanker
              setDayNight(0.6, 0.8, 0.7);
              setLightColor(4);
              glow.intensity = 0;
              singsWar.forEach((elm) => {
                elm.isVisible = false;
              });
              singsDel.forEach((elm) => {
                elm.isVisible = false;
              });
              sideAccesories.style.display = "block";
              editPost.style.display = "block";
              if (
                (leftPost.scaling.y > 0.999 && leftPost.scaling.y < 1.1) ||
                leftPost.scaling.y < 0.55
              ) {
                setActivnesStyle(
                  pfostensSingle,
                  0,
                  0,
                  "active-text-color-single-pfosten"
                );
              } else if (
                (leftPost.scaling.y > 1.1 && leftPost.scaling.y < 1.4) ||
                (leftPost.scaling.y > 0.7 && leftPost.scaling.y < 0.8)
              ) {
                setActivnesStyle(
                  pfostensSingle,
                  0,
                  1,
                  "active-text-color-single-pfosten"
                );
              } else if (
                leftPost.scaling.y > 1.4 ||
                (leftPost.scaling.y < 1 && leftPost.scaling.y > 0.9)
              ) {
                setActivnesStyle(
                  pfostensSingle,
                  0,
                  2,
                  "active-text-color-single-pfosten"
                );
              }
              document.getElementsByClassName("accTitle")[0].innerHTML =
                "Pfosten bearbeiten";
            } else {
              document.getElementsByClassName("accTitle")[0].innerHTML =
                "ausgewählter Zaun";
              leftPost.material = fencePostMat;
              addFenceSings[0].isVisible = false;
              addFenceSings[1].isVisible = false;
              sideAccesories.style.display = "none";
              editPost.style.display = "none";
            }
          }
        )
      );

      // onHover(leftPost, "Edit Post");

      //post roots
      let leftRoot0 = scene.getMeshByName("post-root-left_primitive0");
      let leftRoot1 = scene.getMeshByName("post-root-left_primitive1");
      roots.push(leftRoot0, leftRoot1);

      //create foundation start
      let foundationLeftStart = new BABYLON.MeshBuilder.CreateGround(
        "foundationLeftStart",
        { width: 0.4, height: 0.4 },
        scene
      );
      foundationLeftStart.position = new BABYLON.Vector3(
        leftPost.position.x,
        0.0001,
        0
      );
      foundationLeftStart.material = concreteMat;
      foundationStarts.push(foundationLeftStart);

      //create foundation
      let foundationLeft = new BABYLON.MeshBuilder.CreateBox(
        "foundationLeft",
        { width: 0.4, height: 0.5, depth: 0.4 },
        scene
      );
      foundationLeft.position.x = foundationLeftStart.position.x;
      foundationLeft.position.y = -0.5 / 2;
      foundationLeft.material = foundationMat;

      foundations.push(foundationLeft);

      //PLANE TO HOLD DELETE SIGN
      var signPlaneDelLeft = BABYLON.MeshBuilder.CreatePlane(
        "signPlaneDelLeft",
        {
          height: 0.4,
          width: 0.4,
        }
      );
      signPlaneDelLeft.position = new BABYLON.Vector3(
        leftPost.position.x,
        2.2,
        0
      );
      signPlaneDelLeft.isVisible = false;
      signPlaneDelLeft.material = signmatDel;
      singsDel.push(signPlaneDelLeft);

      //PLANE TO HOLD WARNING SIGN
      var signPlaneWarLeft = BABYLON.MeshBuilder.CreatePlane(
        "signPlaneWarLeft",
        {
          height: 0.4,
          width: 0.4,
        }
      );
      signPlaneWarLeft.position = new BABYLON.Vector3(
        leftPost.position.x,
        2.2,
        0
      );
      signPlaneWarLeft.isVisible = false;
      signPlaneWarLeft.material = signmatWar;
      singsWar.push(signPlaneWarLeft);

      //LEDS
      let leftLed = scene.getMeshByName("led-left");

      leds.push(leftLed);

      leftLed.material = ledMat;

      leftLed.isVisible = false;

      //spot light for led
      // var light5 = new BABYLON.SpotLight(
      //   "spotLight5",
      //   new BABYLON.Vector3(
      //     leftPost.getAbsolutePosition().x,
      //     1,
      //     leftPost.getAbsolutePosition().z
      //   ),
      //   new BABYLON.Vector3(0, -1, 0),
      //   Math.PI,
      //   1,
      //   scene
      // );

      // lights.push(light5);
      // lightsLed.push(light5);

      //STRUMANKER
      //VORD ***************
      let leftStrVord = scene.getMeshByName("sturmanker-left-front_primitive0");
      leftStrVord.isVisible = false;

      let leftStrVordSraf = scene.getMeshByName(
        "sturmanker-left-front_primitive1"
      );
      leftStrVordSraf.isVisible = false;

      sturmankersVorderseite.push(leftStrVord);
      sturVorderseiteSrafs.push(leftStrVordSraf);

      //create foundation start for front stunmankwer
      let foundationVordStart = new BABYLON.MeshBuilder.CreateGround(
        "foundationVordStart",
        { width: 0.4, height: 0.7 },
        scene
      );

      foundationVordStart.position = new BABYLON.Vector3(0, -0.01, 0.13);
      foundationVordStart.material = concreteMat;
      foundationVordStart.parent = leftRoot0;
      foundationStartsVord.push(foundationVordStart);
      foundationVordStart.isVisible = false;

      //create foundation for front stunmankwer
      let foundationVord = new BABYLON.MeshBuilder.CreateBox(
        "foundationVord",
        { width: 0.4, height: 0.5, depth: 0.7 },
        scene
      );
      foundationVord.material = foundationMat;
      foundationVord.position = new BABYLON.Vector3(0, -0.262, 0.13);
      foundationVord.parent = leftRoot0;
      foundationsVord.push(foundationVord);
      foundationVord.isVisible = false;

      // RUCK **********
      let leftStrRuck = scene.getMeshByName("sturmanker-left-rear_primitive0");
      leftStrRuck.isVisible = false;

      let leftStrRuckSraf = scene.getMeshByName(
        "sturmanker-left-rear_primitive1"
      );
      leftStrRuckSraf.isVisible = false;

      sturmankersRuckseite.push(leftStrRuck);
      sturRuckseiteSrafs.push(leftStrRuckSraf);

      //create foundation start for back stunmankwer
      let foundationRuckStart = new BABYLON.MeshBuilder.CreateGround(
        "foundationRuckStart",
        { width: 0.4, height: 0.7 },
        scene
      );
      foundationRuckStart.position = new BABYLON.Vector3(0, -0.01, -0.13);
      foundationRuckStart.material = concreteMat;
      foundationRuckStart.parent = leftRoot0;
      foundationStartsRuck.push(foundationRuckStart);
      foundationRuckStart.isVisible = false;

      //create foundation for back stunmankwer
      let foundationRuck = new BABYLON.MeshBuilder.CreateBox(
        "foundationRuck",
        { width: 0.4, height: 0.5, depth: 0.7 },
        scene
      );
      foundationRuck.material = foundationMat;
      foundationRuck.position = new BABYLON.Vector3(0, -0.262, -0.13);
      foundationRuck.parent = leftRoot0;
      foundationsRuck.push(foundationRuck);
      foundationRuck.isVisible = false;

      //set material
      leftStrVord.material = leftStrRuck.material = fencePostMat;
      //set sraf material
      leftStrVordSraf.material = leftStrRuckSraf.material = rootMat;

      //cerate fake strumanker
      let fakeFront = new BABYLON.MeshBuilder.CreateBox(
        "foundationRight",
        { width: 0.01, height: 0.3, depth: 0.3 },
        scene
      );
      fakeFront.parent = leftStrVord;
      fakeFronts.push(fakeFront);
      fakeFront.isVisible = false;

      let fakeBack = new BABYLON.MeshBuilder.CreateBox(
        "foundationRight",
        { width: 0.01, height: 0.3, depth: 0.3 },
        scene
      );
      fakeBack.parent = leftStrRuck;
      fakeBacks.push(fakeBack);
      fakeBack.isVisible = false;
    }

    //END OF MAIN POST
  );

  function NewFence(
    id,
    type,
    boardCol,
    startUndAbschCol,
    smBoaCol,
    size,
    inlays,
    children,
    laisnes,
    laisnesCol,
    numOfBoards
  ) {
    this.id = id;
    this.type = type;
    this.boardCol = boardCol;
    this.startUndAbschCol = startUndAbschCol;
    this.smBoaCol = smBoaCol;
    this.size = size;
    this.inlays = inlays;
    this.children = children;
    this.laisnes = laisnes;
    this.laisnesCol = laisnesCol;
    this.numOfBoards = numOfBoards;
  }
  // fencesArr.push(new NewFence(1, "easyFence", 180, false));
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //LOAD FENCE MESH
  var fenceIdCount = -1;
  var activeFence = false;
  var createRightFence = (posX, posZ, rotY, type, smCol, inlaysOnOff) =>
    BABYLON.SceneLoader.ImportMeshAsync(
      "",
      "mesh/",
      "easyFenceRightPartComb2.glb"
    ).then((result) => {
      var fence = result.meshes[0];
      fence.rotationQuaternion = null;

      fence.position.x = posX;
      fence.position.z = posZ;
      fence.rotation.y = rotY;
      wholeFences.push(fence);

      //function to active fence
      function toActiveFence() {
        //set this active fence
        for (let j = 0; j < rightPosts.length; j++) {
          if (rightPosts[j].material.id == "selectedMat") {
            activeFence = j;
          }
        }
        sideAccesories.style.display = "block";
        addFenceAcc.style.display = "block";
        addEasyFenceAcc.style.display = "block";
        addGardoFenceAcc.style.display = "none";
        addFenceAcc.children[0].style.display = "block";
        //set delete fence image and text
        deleteFenceOn(activeFence);
        //delete fence
        deleteFencePart.onclick = () => {
          if (activeFence > 0) {
            delFenFun(activeFence);
            deleteFence(activeFence);
            checkPostIntersecting(
              fakePosts,
              allPosts,
              rightRoots,
              intersectedPosts,
              intersectedPostsMain,
              fencesArr
            );
            //set inlays to ohne
            aaa = 0;
            inlays.forEach((elm) => {
              if (elm[0].isVisible) {
                aaa += 1;
              }
            });
            if (aaa < 1) {
              setActivnesStyle(designInlays, 4, 0, "active-text-color");
              inlaysOn = 0;
            }
            //set activnes of led when deleted led
            ledsOn = 0;
            leds.forEach((elm) => {
              if (elm.isVisible) {
                ledsOn += 1;
              }
            });
            if (ledsOn == 0) {
              //set to ohne on led lights
              //set html
              lightSettings.style.display = "none";
              lightColorSet.style.display = "none";
              //set babylon
              leds.forEach((elm) => {
                elm.isVisible = false;
              });
              setDayNight(0.6, 0.8, 0.7);
              ledColNum = 4;
              setLightColor(ledColNum);
              setLedColor(ledColNum);
              setActivnesStyle(ledParts, 6, 0, "active-text-color");
            }

            //set activnes of sturmanker parts
            sturNum = 0;
            for (let i = 0; i < sturmankersVorderseite.length; i++) {
              if (sturmankersVorderseite[i].isVisible) {
                sturNum += 1;
              } else if (sturmankersRuckseite[i].isVisible) {
                sturNum += 1;
              }
            }
            if (sturNum < 1) {
              setActivnesStyle(sturmankerCon, 10, 1, "active-text-color");
              strurmOn = false;
            } else {
              strurmOn = true;
            }
          }
        };

        //set inlays activnces style and fence obj inleys
        // if (inlaysOn > 0) {
        // changeFence[1].style.display = "flex";
        // if (fencesArr[activeFence].inlays > 0) {
        //   setActivnesStyle(changeFence, 0, 1, "active-text-color");
        // }
        // } else {
        // changeFence[1].style.display = "none";
        // }

        //set value of slider and slider to this fence
        if (
          fencesArr[activeFence].type == "easyRomBig" ||
          fencesArr[activeFence].type == "easyFenceInlaysAnth" ||
          fencesArr[activeFence].type == "easyFenceInlaysSilber"
        )
          pipsSlider.noUiSlider.updateOptions(bigRomSliderOpt);
        if (fencesArr[activeFence].type == "easyRomSmall")
          pipsSlider.noUiSlider.updateOptions(smallRomSliderOpt);
        if (
          fencesArr[activeFence].type == "easyFence" ||
          fencesArr[activeFence].type == "easyFenceHalf"
        )
          pipsSlider.noUiSlider.updateOptions(easyFenceSliderOpt);
        pipsSlider.noUiSlider.set(fencesArr[activeFence].size);
        closeSliderContainer();
        //set signs visibility baste on intesection with fances
        newFenceForwardSigns[activeFence].isVisible = true;
        newFenceRightSigns[activeFence].isVisible = true;
        newFenceLeftSigns[activeFence].isVisible = true;
        newFenceBackSigns[activeFence].isVisible = true;
        intersectArrowSignsFence(
          fakeFences,
          newFenceForwardSigns,
          newFenceRightSigns,
          newFenceLeftSigns,
          newFenceBackSigns,
          activeFence,
          addFenceSings
        );
        for (let i = 0; i < directeHauswandMeshesRight.length; i++) {
          if (directeHauswandMeshesRight[activeFence].isVisible) {
            newFenceForwardSigns[activeFence].isVisible = false;
            newFenceRightSigns[activeFence].isVisible = false;
            newFenceLeftSigns[activeFence].isVisible = false;
            newFenceBackSigns[activeFence].isVisible = false;
          }
        }

        //set activnes of active fence settings

        if (fencesArr[activeFence].type == "easyFence")
          setActivnesStyle(changeFence, 0, 0, "active-text-color");
        if (fencesArr[activeFence].type == "easyFenceInlaysSilber")
          setActivnesStyle(changeFence, 0, 1, "active-text-color");
        if (fencesArr[activeFence].type == "easyFenceInlaysAnth")
          setActivnesStyle(changeFence, 0, 2, "active-text-color");

        if (
          fencesArr[activeFence].type == "easyRomBig" &&
          fencesArr[activeFence].smBoaCol == "silber"
        )
          setActivnesStyle(changeFence, 0, 3, "active-text-color");
        if (
          fencesArr[activeFence].type == "easyRomBig" &&
          fencesArr[activeFence].smBoaCol == "anthrazit"
        )
          setActivnesStyle(changeFence, 0, 4, "active-text-color");
        if (
          fencesArr[activeFence].type == "easyRomSmall" &&
          fencesArr[activeFence].smBoaCol == "silber"
        )
          setActivnesStyle(changeFence, 0, 5, "active-text-color");
        if (
          fencesArr[activeFence].type == "easyRomSmall" &&
          fencesArr[activeFence].smBoaCol == "anthrazit"
        )
          setActivnesStyle(changeFence, 0, 6, "active-text-color");
        if (fencesArr[activeFence].type == "easyFenceHalf")
          setActivnesStyle(changeFence, 0, 7, "active-text-color");

        //set number of boards single fence
        numOfBordsSing.innerHTML = fencesArr[activeFence].numOfBoards;

        //deactivate arrows
        activeArrow = false;
        activeArrowSide = false;
        addFenceSings.forEach((elm) => {
          elm.material = addNewFenceMeshMat;
        });
        addNewFenceToSide.style.display = "none";
        //set day night
        setDayNight(0.6, 0.8, 0.7);
        setLightColor(4);
        glow.intensity = 0;
        singsWar.forEach((elm) => {
          elm.isVisible = false;
        });
        for (let i = 0; i < allPosts.length; i++) {
          if (leds[i].isVisible) {
            singsDel[i].isVisible = true;
          }
        }
        //single edits exit options on all
        for (let i = 0; i < clickablePartSingleFence.length; i++) {
          if (
            clickablePartSingleFence[i].className ==
            "set-part-click-title-single clicked"
          ) {
            clickablePartSingleFence[i].className = clickablePartSingleFence[
              i
            ].className.replace(" clicked", " not-clicked");
            clickablePartSingleFence[i].children[1].innerHTML = "+";
            clickablePartSingleFence[i].nextElementSibling.style.height = 0;
          }
        }
        //boards colors single
        if (fencesArr[activeFence].boardCol == "grau") {
          setActivnesStyle(boardsMatSingle, 0, 0, "active-text-color-single");
        } else if (fencesArr[activeFence].boardCol == "anthrazit") {
          setActivnesStyle(boardsMatSingle, 0, 1, "active-text-color-single");
        } else if (fencesArr[activeFence].boardCol == "braun") {
          setActivnesStyle(boardsMatSingle, 0, 2, "active-text-color-single");
        } else if (fencesArr[activeFence].boardCol == "sand") {
          setActivnesStyle(boardsMatSingle, 0, 3, "active-text-color-single");
        }
        //start un absch single edit
        if (fencesArr[activeFence].startUndAbschCol == "silber") {
          setActivnesStyle(
            startUndAbschSingle,
            1,
            0,
            "active-text-color-single"
          );
        } else if (fencesArr[activeFence].startUndAbschCol == "anthrazit") {
          setActivnesStyle(
            startUndAbschSingle,
            1,
            1,
            "active-text-color-single"
          );
        }
        //laines single edit
        if (fencesArr[activeFence].laisnesCol == "silber") {
          setActivnesStyle(
            designleistensMatSingle,
            2,
            0,
            "active-text-color-single"
          );
        } else if (fencesArr[activeFence].laisnesCol == "anthrazit") {
          setActivnesStyle(
            designleistensMatSingle,
            2,
            1,
            "active-text-color-single"
          );
        }

        for (let i = 0; i < fencesArr[activeFence].laisnes.length; i++) {
          if (fencesArr[activeFence].laisnes[i]) {
            designleistensSingle[
              i
            ].children[0].children[0].style.backgroundColor = "#3967ff";
            designleistensSingle[i].children[0].children[0].innerHTML =
              checkMark;
          } else {
            designleistensSingle[
              i
            ].children[0].children[0].style.backgroundColor = "transparent";
            designleistensSingle[i].children[0].children[0].innerHTML = "";
          }
        }
        cameraTargetMesh(cameraTarget, wholeFences[activeFence]);
        console.log(fencesArr[activeFence]);
      }

      //add selected to mesh
      for (let i = 0; i < result.meshes.length; i++) {
        result.meshes[i].actionManager = new BABYLON.ActionManager(scene);
        result.meshes[i].actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
              if (result.meshes[i].material.id != "selectedMat") {
                removeSideAccesories(
                  sideAccesories,
                  deleteAccesorie,
                  addFenceAcc,
                  editPost,
                  addNewFenceToSide
                );
                addDefaultMaterial(
                  fenceBoards,
                  sturmankersVorderseite,
                  rightPosts,
                  leftPosts,
                  directeHauswandMeshes,
                  fenceBoardMat,
                  fencePostMat,
                  concreteMat,
                  smallBoardsArr,
                  silberMat,
                  anthrazitMat,
                  fencesArr,
                  addFenceSings,
                  grauMat,
                  braunMat,
                  sandMat,
                  woodMaterials,
                  topBoards,
                  rankelements,
                  rightWoodPosts,
                  woodTopParts,
                  gardoFenceBoards
                );
                result.meshes[1].material =
                  result.meshes[2].material =
                  result.meshes[3].material =
                  result.meshes[9].material =
                  result.meshes[10].material =
                  result.meshes[11].material =
                  result.meshes[12].material =
                  result.meshes[13].material =
                  result.meshes[14].material =
                  result.meshes[15].material =
                    selectedMat;
                //function for fence activnes
                toActiveFence();
              } else {
                closeSliderContainer();
                sideAccesories.style.display = "none";
                addFenceAcc.style.display = "none";
                addDefaultMaterial(
                  fenceBoards,
                  sturmankersVorderseite,
                  rightPosts,
                  leftPosts,
                  directeHauswandMeshes,
                  fenceBoardMat,
                  fencePostMat,
                  concreteMat,
                  smallBoardsArr,
                  silberMat,
                  anthrazitMat,
                  fencesArr,
                  addFenceSings,
                  grauMat,
                  braunMat,
                  sandMat,
                  woodMaterials,
                  topBoards,
                  rankelements,
                  rightWoodPosts,
                  woodTopParts,
                  gardoFenceBoards
                );

                singsDel.forEach((elm) => {
                  elm.isVisible = false;
                });
                //turn off add new sings
                newFenceForwardSigns[activeFence].isVisible = false;
                newFenceRightSigns[activeFence].isVisible = false;
                newFenceLeftSigns[activeFence].isVisible = false;
                newFenceBackSigns[activeFence].isVisible = false;
                cameraTargetMesh(cameraTarget, ground);
                //turn of active fence
                setTimeout(() => {
                  activeFence = false;
                }, 100);
              }
            }
          )
        );
      }
      //POST CAP
      let rightPostCap = result.meshes[8];
      rightPostCap.material = capMat;
      rightPostCaps.push(rightPostCap);

      let rightPostCapClone = rightPostCap.clone("rightPostCapClone");
      rightPostCapClone.position.y = 0.052;
      rightPostCapClone.isVisible = false;
      rightPostCapClones.push(rightPostCapClone);
      //BOARDS
      var newBoarsdArr = new Array(
        result.meshes[2],
        result.meshes[9],
        result.meshes[10],
        result.meshes[11],
        result.meshes[12],
        result.meshes[13],
        result.meshes[14],
        result.meshes[15]
      );
      let boardColObj;
      newBoarsdArr.forEach((elm) => {
        elm.position.x -= 0.01;
        elm.material = fenceBoardMat;
        if (allBoardsCol == 0) {
          elm.material = grauMat;
          boardColObj = "grau";
        }
        if (allBoardsCol == 1) {
          elm.material = anthrazitMat;
          boardColObj = "anthrazit";
        }
        if (allBoardsCol == 2) {
          elm.material = braunMat;
          boardColObj = "braun";
        }
        if (allBoardsCol == 3) {
          elm.material = sandMat;
          boardColObj = "sand";
        }
      });

      fenceBoards.push(newBoarsdArr);

      //BOARDS SMALL
      let smallBoards = result.meshes[1];
      smallBoards.position.x -= 0.01;
      smallBoards.isVisible = false;
      smallBoards.material = silberMat;
      smallBoardsArr.push(smallBoards);

      //fake fence for intersection
      let fakeFence = new BABYLON.MeshBuilder.CreateBox(
        "fakeFence",
        { width: 1.7, height: 1.8, depth: 0.05 },
        scene
      );
      fakeFence.position = new BABYLON.Vector3(
        getAbsPosX(smallBoards) - 0.01,
        0.9,
        getAbsPosZ(smallBoards)
      );
      fakeFence.addRotation(0, rotY, 0);
      fakeFences.push(fakeFence);

      fakeFence.isVisible = false;
      smallBoards.addChild(fakeFence);

      //START AND END PARTS
      let startPart = result.meshes[7];
      startPart.position.x -= 0.01;
      startParts.push(startPart);
      let endPart = result.meshes[6];
      endPart.position.x -= 0.01;
      endParts.push(endPart);
      // startPart.material = endPart.material = fenceStartEndMat;
      if (startUndAbschMat == 0) {
        startPart.material = endPart.material = silberMat;
        startUndAbschColObj = "silber";
      }
      if (startUndAbschMat == 1) {
        startPart.material = endPart.material = anthrazitMat;
        startUndAbschColObj = "anthrazit";
      }

      //INLAYS
      // fenceBoards[6].isVisible = false;
      let inlaysViero = result.meshes[24];
      inlaysViero.position.x -= 0.02;
      inlaysViero.isVisible = false;

      inlaysMaterials.push(inlaysViero.material);

      let inlaysAstro = result.meshes[23];
      inlaysAstro.position.x -= 0.02;
      inlaysAstro.isVisible = false;

      let inlaysSnow = result.meshes[22];
      inlaysSnow.position.x -= 0.02;
      inlaysSnow.isVisible = false;
      inlaysSnow.material = inlaysMat;

      var newInlaysArr = new Array(inlaysViero, inlaysAstro, inlaysSnow);
      inlays.push(newInlaysArr);

      if (inlaysOnOff > 1) {
        newBoarsdArr[6].isVisible = false;
        inlaysViero.isVisible = true;
        inlaysSnow.isVisible = true;
      }

      //LAISNE
      let laisneOrg = result.meshes[16];
      laisneOrg.position.x -= 0.01;
      laisneOrg.isVisible = false;
      // laisneOrg.material = laisneMat;
      if (laisnesMat == 1) {
        laisneOrg.material = anthrazitMat;
        laisnesColObj = "anthrazit";
      }
      if (laisnesMat == 0) {
        laisneOrg.material = silberMat;
        laisnesColObj = "silber";
      }
      var newLaisnesArr = new Array();
      setTimeout(() => {
        for (let i = 0; i < 7; i++) {
          var laisne = laisneOrg.clone("laisne");
          // laisne.material = laisneMat;
          laisne.isVisible = false;
          //check if laisnes are active to show them
          if (checkboxActive[i]) {
            if (smallBoards.isVisible == false) {
              laisne.isVisible = true;
            }
            laisne.position.y = newBoarsdArr[i].position.y + 0.22 / 2 + 0.005;

            startPart.position.y += 0.01;

            if (i < 6) {
              inlaysViero.position.y += 0.01;
              inlaysSnow.position.y += 0.01;
            }

            for (let j = i; j < 7; j++) {
              newBoarsdArr[j + 1].position.y += 0.01;
            }
          }
          /////////////////
          newLaisnesArr.push(laisne);
        }
      }, 0);
      laisnes.push(newLaisnesArr);

      var editPost = document.getElementById("editPost");
      //POSTS
      let rightPost = result.meshes[3];

      rightPosts.push(rightPost);
      allPosts.push(rightPost);

      //cerate fake rigth post
      let fakePost = new BABYLON.MeshBuilder.CreateBox(
        "fakePost",
        { width: 0.05, height: 0.05, depth: 2.1 },
        scene
      );
      fakePost.parent = rightPost;
      fakePosts.push(fakePost);
      fakePost.isVisible = false;

      checkPostIntersecting(
        fakePosts,
        allPosts,
        rightRoots,
        intersectedPosts,
        intersectedPostsMain,
        fencesArr
      );

      rightPost.material = fencePostMat;

      rightPost.actionManager = new BABYLON.ActionManager(scene);
      rightPost.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            if (
              rightPost.material.id != "selectedMat" &&
              rightPost.scaling.x == 1
            ) {
              removeSideAccesories(
                sideAccesories,
                deleteAccesorie,
                addFenceAcc,
                editPost,
                addNewFenceToSide
              );
              addDefaultMaterial(
                fenceBoards,
                sturmankersVorderseite,
                rightPosts,
                leftPosts,
                directeHauswandMeshes,
                fenceBoardMat,
                fencePostMat,
                concreteMat,
                smallBoardsArr,
                silberMat,
                anthrazitMat,
                fencesArr,
                addFenceSings,
                grauMat,
                braunMat,
                sandMat,
                woodMaterials,
                topBoards,
                rankelements,
                rightWoodPosts,
                woodTopParts,
                gardoFenceBoards
              );
              rightPost.material = selectedMat;
              sideAccesories.style.display = "block";
              editPost.style.display = "block";
              if (
                (rightPost.scaling.z > 0.999 && rightPost.scaling.z < 1.1) ||
                rightPost.scaling.z < 0.55
              ) {
                setActivnesStyle(
                  pfostensSingle,
                  0,
                  0,
                  "active-text-color-single-pfosten"
                );
              } else if (
                (rightPost.scaling.z > 1.1 && rightPost.scaling.z < 1.4) ||
                (rightPost.scaling.z > 0.7 && rightPost.scaling.z < 0.8)
              ) {
                setActivnesStyle(
                  pfostensSingle,
                  0,
                  1,
                  "active-text-color-single-pfosten"
                );
              } else if (
                rightPost.scaling.z > 1.4 ||
                (rightPost.scaling.z < 1 && rightPost.scaling.z > 0.9)
              ) {
                setActivnesStyle(
                  pfostensSingle,
                  0,
                  2,
                  "active-text-color-single-pfosten"
                );
              }
              document.getElementsByClassName("accTitle")[0].innerHTML =
                "Pfosten bearbeiten";
            } else {
              removeSideAccesories(
                sideAccesories,
                deleteAccesorie,
                addFenceAcc,
                editPost,
                addNewFenceToSide
              );
              addDefaultMaterial(
                fenceBoards,
                sturmankersVorderseite,
                rightPosts,
                leftPosts,
                directeHauswandMeshes,
                fenceBoardMat,
                fencePostMat,
                concreteMat,
                smallBoardsArr,
                silberMat,
                anthrazitMat,
                fencesArr,
                addFenceSings,
                grauMat,
                braunMat,
                sandMat,
                woodMaterials,
                topBoards,
                rankelements,
                rightWoodPosts,
                woodTopParts,
                gardoFenceBoards
              );
            }
          }
        )
      );
      // onHover(rightPost, "Edit Post");
      //post roots
      let rightRoot0 = result.meshes[4];
      let rightRoot1 = result.meshes[5];

      roots.push(rightRoot0, rightRoot1);
      var newRootsArr = new Array(rightRoot0, rightRoot1);
      rightRoots.push(newRootsArr);

      roots.forEach((elm) => {
        elm.material = rootMat;
      });

      //create foundation start
      let foundationRightStart = new BABYLON.MeshBuilder.CreateGround(
        "foundationRightStart",
        { width: 0.4, height: 0.4 },
        scene
      );
      foundationRightStart.position = new BABYLON.Vector3(
        getAbsPosX(result.meshes[3]),
        0.0001,
        getAbsPosZ(result.meshes[3])
      );
      foundationRightStart.material = concreteMat;

      foundationStarts.push(foundationRightStart);
      foundationStartsRight.push(foundationRightStart);

      //create foundation
      let foundationRight = new BABYLON.MeshBuilder.CreateBox(
        "foundationRight",
        { width: 0.4, height: 0.5, depth: 0.4 },
        scene
      );
      foundationRight.position = new BABYLON.Vector3(
        getAbsPosX(result.meshes[3]),
        -0.5 / 2,
        getAbsPosZ(result.meshes[3])
      );
      foundationRight.material = foundationMat;

      foundations.push(foundationRight);
      foundationsRight.push(foundationRight);

      //PLANE TO HOLD DELETE SIGN
      var signPlaneDelRight = BABYLON.MeshBuilder.CreatePlane(
        "signPlaneDelRight",
        {
          height: 0.4,
          width: 0.4,
        }
      );
      signPlaneDelRight.position = new BABYLON.Vector3(
        getAbsPosX(rightPost),
        2.2,
        getAbsPosZ(rightPost)
      );
      signPlaneDelRight.addRotation(0, rotY, 0);
      signPlaneDelRight.material = signmatDel;
      signPlaneDelRight.isVisible = false;
      singsDel.push(signPlaneDelRight);
      singsDelRight.push(signPlaneDelRight);

      for (let i = 0; i < singsDel.length; i++) {
        singsDel[i].actionManager = new BABYLON.ActionManager(scene);
        singsDel[i].actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
              onDelete(i);
            }
          )
        );
      }

      //PLANE TO HOLD WARNING SIGN
      var signPlaneWarRight = BABYLON.MeshBuilder.CreatePlane(
        "signPlaneWarRight",
        {
          height: 0.4,
          width: 0.4,
        }
      );
      signPlaneWarRight.position = new BABYLON.Vector3(
        getAbsPosX(rightPost),
        2.2,
        getAbsPosZ(rightPost)
      );
      signPlaneWarRight.addRotation(0, rotY, 0);
      signPlaneWarRight.material = signmatWar;
      signPlaneWarRight.isVisible = false;
      singsWar.push(signPlaneWarRight);
      singsWarRight.push(signPlaneWarRight);

      for (let i = 0; i < singsWar.length; i++) {
        singsWar[i].actionManager = new BABYLON.ActionManager(scene);
        singsWar[i].actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
              modalFade.style.display = "block";
              onLedSturmanker.style.display = "block";
              if (leds[i].isVisible) {
                ledSturBtn.style.display = "block";
                sturLedBtn.style.display = "none";
              } else {
                sturLedBtn.style.display = "block";
                ledSturBtn.style.display = "none";
              }
              ledSturBtn.onclick = () => {
                ledSturOnClick(ledSturBtn, i, false);
                strurmOn = true;
                ledsOn -= 1;
                sturmankerOnOff(true, i);
                if (ledsOn < 1) {
                  setActivnesStyle(ledParts, 6, 0, "active-text-color");
                }
              };

              sturLedBtn.onclick = () => {
                ledSturOnClick(sturLedBtn, i, true);
                ledsOn += 1;
                // lightsLed[i].intensity = 0.5;
                sturmankerOnOff(false, i);
                foundationVisibilty(
                  foundationStarts,
                  foundations,
                  true,
                  foundationStartsVord,
                  foundationsVord,
                  false,
                  foundationStartsRuck,
                  foundationsRuck,
                  false,
                  i
                );
                //set activnes of sturmanker parts
                var sturNum = 0;
                for (let i = 0; i < sturmankersVorderseite.length; i++) {
                  if (sturmankersVorderseite[i].isVisible) {
                    sturNum += 1;
                  } else if (sturmankersRuckseite[i].isVisible) {
                    sturNum += 1;
                  }
                }
                if (sturNum < 1) {
                  setActivnesStyle(sturmankerCon, 10, 1, "active-text-color");
                  strurmOn = false;
                } else {
                  strurmOn = true;
                }
              };
              var warSingsOn;
              modalVerSchBtn[4].onclick = () => {
                singsWar[i].isVisible = false;
                singsWar.forEach((elm) => {
                  if (elm.isVisible) warSingsOn = true;
                });
                if (!strurmOn && !warSingsOn) {
                  setActivnesStyle(sturmankerCon, 10, 1, "active-text-color");
                  strurmOn = false;
                }
                if (ledsOn < 1 && !warSingsOn) {
                  setActivnesStyle(ledParts, 6, 0, "active-text-color");
                }
              };
            }
          )
        );
      }

      //LEDS
      let rightLed = result.meshes[21];
      leds.push(rightLed);
      ledsRight.push(rightLed);

      rightLed.material = ledMat;

      rightLed.isVisible = false;

      //spot light for led
      // var light6 = new BABYLON.SpotLight(
      //   "spotLight6",
      //   new BABYLON.Vector3(getAbsPosX(rightPost), 1, getAbsPosZ(rightPost)),
      //   new BABYLON.Vector3(0, -1, 0),
      //   Math.PI,
      //   1,
      //   scene
      // );

      // lights.push(light6);
      // lightsLed.push(light6);

      // //set led lights intensity
      // lightsLed.forEach((elm) => {
      //   elm.intensity = 1;
      // });

      //STRUMANKER
      let rightStrVord = result.meshes[19];
      rightStrVord.isVisible = false;
      let rightStrVordSraf = result.meshes[20];
      rightStrVordSraf.isVisible = false;

      sturmankersVorderseite.push(rightStrVord);
      sturVorderseiteSrafs.push(rightStrVordSraf);

      let rightVords = new Array(rightStrVord, rightStrVordSraf);
      sturmankersVorderseiteRight.push(rightVords);

      //create foundation start for front stunmankwer
      let foundationVordStart = new BABYLON.MeshBuilder.CreateGround(
        "foundationVordStart",
        { width: 0.4, height: 0.7 },
        scene
      );

      foundationVordStart.position = new BABYLON.Vector3(0, 0.13, 0.01);
      foundationVordStart.rotation.x = -Math.PI / 2;
      foundationVordStart.material = concreteMat;
      foundationVordStart.parent = rightRoot0;
      foundationStartsVord.push(foundationVordStart);
      foundationVordStart.isVisible = false;

      //create foundation for front stunmankwer
      let foundationVord = new BABYLON.MeshBuilder.CreateBox(
        "foundationVord",
        { width: 0.4, height: 0.7, depth: 0.5 },
        scene
      );
      foundationVord.material = foundationMat;
      foundationVord.position = new BABYLON.Vector3(0, 0.13, 0.262);
      foundationVord.parent = rightRoot0;
      foundationsVord.push(foundationVord);
      foundationVord.isVisible = false;

      ///sturmanker Ruck
      let rightStrRuck = result.meshes[17];
      rightStrRuck.isVisible = false;

      let rightStrRuckSraf = result.meshes[18];
      rightStrRuckSraf.isVisible = false;

      sturmankersRuckseite.push(rightStrRuck);
      sturRuckseiteSrafs.push(rightStrRuckSraf);

      let rightRucks = new Array(rightStrRuck, rightStrRuckSraf);
      sturmankersRuckseiteRight.push(rightRucks);

      //create foundation start for back stunmankwer
      let foundationRuckStart = new BABYLON.MeshBuilder.CreateGround(
        "foundationRuckStart",
        { width: 0.4, height: 0.7 },
        scene
      );
      foundationRuckStart.position = new BABYLON.Vector3(0, -0.13, 0.01);
      foundationRuckStart.rotation.x = Math.PI / 2;
      foundationRuckStart.material = concreteMat;
      foundationRuckStart.parent = rightRoot0;
      foundationStartsRuck.push(foundationRuckStart);
      foundationRuckStart.isVisible = false;

      //create foundation for back stunmankwer
      let foundationRuck = new BABYLON.MeshBuilder.CreateBox(
        "foundationRuck",
        { width: 0.4, height: 0.7, depth: 0.5 },
        scene
      );
      foundationRuck.material = foundationMat;
      foundationRuck.position = new BABYLON.Vector3(0, -0.13, 0.262);
      foundationRuck.parent = rightRoot0;
      foundationsRuck.push(foundationRuck);
      foundationRuck.isVisible = false;

      //set material
      rightStrVord.material = rightStrRuck.material = fencePostMat;
      //set sraf material
      rightStrVordSraf.material = rightStrRuckSraf.material = rootMat;

      //cerate fake strumanker
      let fakeFront = new BABYLON.MeshBuilder.CreateBox(
        "fakeFront",
        { width: 0.01, height: 0.3, depth: 0.3 },
        scene
      );
      fakeFront.parent = rightStrVord;
      fakeFronts.push(fakeFront);
      fakeFront.isVisible = false;

      let fakeBack = new BABYLON.MeshBuilder.CreateBox(
        "fakeBack",
        { width: 0.01, height: 0.3, depth: 0.3 },
        scene
      );
      fakeBack.parent = rightStrRuck;
      fakeBacks.push(fakeBack);
      fakeBack.isVisible = false;

      //SET NEW FENCE SAME POST SIZE AS THE OTHER
      if (befePfostenSize == 1) {
        rightPost.scaling.z = 1.2;
        rightPost.position.y = 0.7717;
        rightRoot0.isVisible = false;
        rightRoot1.isVisible = false;

        foundationRight.scaling.y = 1;
        foundationVord.scaling.z = 1;
        foundationRuck.scaling.z = 1;

        foundationRight.position.y = -0.25;
        foundationVord.position.z = 0.25;
        foundationRuck.position.z = 0.25;
      }
      // setbefePfosten(1.2, 0.7717, false, 1, -0.5 / 2);
      if (befePfostenSize == 2) {
        rightPost.scaling.z = 1.475;
        rightPost.position.y = 0.511;
        rightRoot0.isVisible = false;
        rightRoot1.isVisible = false;

        foundationRight.scaling.y = 1.8;
        foundationVord.scaling.z = 1.8;
        foundationRuck.scaling.z = 1.8;

        foundationRight.position.y = -0.45;
        foundationVord.position.z = 0.45;
        foundationRuck.position.z = 0.45;
      }
      // setbefePfosten(1.475, 0.511, false, 1.8, -0.9 / 2);

      //CREATE DIRECTE HAUSWAND
      createDirecteHauswand(
        concreteMat,
        fenceBoards,
        sturmankersVorderseite,
        rightPosts,
        leftPosts,
        directeHauswandMeshes,
        directeHauswandMeshesRight,
        fenceBoardMat,
        fencePostMat,
        concreteMat,
        smallBoardsArr,
        silberMat,
        anthrazitMat,
        fencesArr,
        addFenceSings,
        selectedMat,
        setDayNight,
        setLightColor,
        glow,
        singsWar,
        singsDel,
        leds,
        ledParts,
        setActivnesStyle,
        grauMat,
        braunMat,
        sandMat,
        woodMaterials,
        topBoards,
        rankelements,
        rightWoodPosts,
        woodTopParts,
        gardoFenceBoards
      );
      directeHauswandMeshesRight[directeHauswandMeshesRight.length - 1].parent =
        rightPostCap;

      //INTERSECTION FUNCTION
      intersectionFunction(
        fakeFronts,
        fakeFences,
        sturmankersVorderseite,
        sturVorderseiteSrafs,
        leds,
        singsDel,
        singsWar,
        fakeBacks,
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations,
        foundationStartsVord,
        foundationsVord,
        foundationStartsRuck,
        foundationsRuck
      );

      //CREATE SINGS FUNCTION
      createNewFenceSign();

      rightPostCap.addChild(rightPostCapClone);
      rightPostCap.addChild(foundationRightStart);
      // rightPostCap.addChild(foundationRight);
      rightPostCap.addChild(signPlaneWarRight);
      rightPostCap.addChild(signPlaneDelRight);
      rightPostCap.addChild(foundationRightStart);
      rightPostCap.addChild(rightLed);
      // rightPostCap.addChild(
      //   directeHauswandMeshesRight[directeHauswandMeshesRight.length - 1]
      // );
      rightPostCap.addChild(rightStrVord);
      rightPostCap.addChild(rightStrVordSraf);
      rightPostCap.addChild(rightStrRuck);
      rightPostCap.addChild(rightStrRuckSraf);
      rightPostCap.addChild(rightRoot0);
      rightPostCap.addChild(rightRoot1);

      if (type == "easyRomBig" && smCol == "silber") {
        smallBoards.isVisible = true;
        smallBoards.material = silberMat;
        newBoarsdArr.forEach((elm) => {
          elm.isVisible = false;
        });
        startPart.isVisible = endPart.isVisible = false;
      }
      if (type == "easyRomSmall" && smCol == "silber") {
        smallBoards.isVisible = true;
        smallBoards.material = silberMat;
        newBoarsdArr.forEach((elm) => {
          elm.isVisible = false;
        });
        startPart.isVisible = endPart.isVisible = false;

        smallBoards.scaling.x = smallBoards.scaling.x * 0.33;
        smallBoards.position.x = smallBoards.position.x - 0.6;
        rightPost.position.x = rightPost.position.x - 1.2;

        rightPostCap.position.x = rightPostCap.position.x - 1.2;
        foundationRight.position.x = getAbsPosX;
        foundationRight.setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPost),
            foundationRight.position.y,
            getAbsPosZ(rightPost)
          )
        );

        newFenceForwardSigns[
          newFenceForwardSigns.length - 1
        ].setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPost) + 0.3,
            newFenceForwardSigns[newFenceForwardSigns.length - 1].position.y,
            getAbsPosZ(rightPost)
          )
        );

        newFenceRightSigns[newFenceRightSigns.length - 1].setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPost),
            newFenceRightSigns[newFenceRightSigns.length - 1].position.y,
            getAbsPosZ(rightPost) - 0.3
          )
        );

        newFenceLeftSigns[newFenceLeftSigns.length - 1].setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPost),
            newFenceLeftSigns[newFenceLeftSigns.length - 1].position.y,
            getAbsPosZ(rightPost) + 0.3
          )
        );

        newFenceBackSigns[newFenceBackSigns.length - 1].setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPost) - 0.3,
            newFenceBackSigns[newFenceBackSigns.length - 1].position.y,
            getAbsPosZ(rightPost)
          )
        );
      }

      if (type == "easyRomBig" && smCol == "anthrazit") {
        smallBoards.isVisible = true;
        smallBoards.material = anthrazitMat;
        newBoarsdArr.forEach((elm) => {
          elm.isVisible = false;
        });
        startPart.isVisible = endPart.isVisible = false;
      }
      if (type == "easyRomSmall" && smCol == "anthrazit") {
        smallBoards.isVisible = true;
        smallBoards.material = anthrazitMat;
        newBoarsdArr.forEach((elm) => {
          elm.isVisible = false;
        });
        startPart.isVisible = endPart.isVisible = false;

        smallBoards.scaling.x = smallBoards.scaling.x * 0.33;
        smallBoards.position.x = smallBoards.position.x - 0.6;
        rightPost.position.x = rightPost.position.x - 1.2;

        rightPostCap.position.x = rightPostCap.position.x - 1.2;
        foundationRight.position.x = getAbsPosX;
        foundationRight.setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPost),
            foundationRight.position.y,
            getAbsPosZ(rightPost)
          )
        );

        newFenceForwardSigns[
          newFenceForwardSigns.length - 1
        ].setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPost) + 0.3,
            newFenceForwardSigns[newFenceForwardSigns.length - 1].position.y,
            getAbsPosZ(rightPost)
          )
        );

        newFenceRightSigns[newFenceRightSigns.length - 1].setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPost),
            newFenceRightSigns[newFenceRightSigns.length - 1].position.y,
            getAbsPosZ(rightPost) - 0.3
          )
        );

        newFenceLeftSigns[newFenceLeftSigns.length - 1].setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPost),
            newFenceLeftSigns[newFenceLeftSigns.length - 1].position.y,
            getAbsPosZ(rightPost) + 0.3
          )
        );

        newFenceBackSigns[newFenceBackSigns.length - 1].setAbsolutePosition(
          new BABYLON.Vector3(
            getAbsPosX(rightPost) - 0.3,
            newFenceBackSigns[newFenceBackSigns.length - 1].position.y,
            getAbsPosZ(rightPost)
          )
        );
      }

      //CREATE OBJ FOR FENCE
      fenceIdCount += 1;
      fenceId = fenceIdCount;

      fenceType = type;

      boardCol = boardColObj;

      startUndAbschCol = startUndAbschColObj;

      smallBoardsDefaultCol = smCol;
      if (type == "easyRomSmall") {
        fenceSizeObj = 60;
      } else {
        fenceSizeObj = 180;
      }

      fenceInlays = inlaysOnOff;

      childrenThis = [];

      laisnesThis = [];

      laisnesCol = laisnesColObj;

      for (let i = 0; i < checkboxActive.length; i++) {
        laisnesThis.push(checkboxActive[i]);
      }
      numOfBoards = 8;
      fencesArr.push(
        new NewFence(
          fenceId,
          fenceType,
          boardCol,
          startUndAbschCol,
          smallBoardsDefaultCol,
          fenceSizeObj,
          fenceInlays,
          childrenThis,
          laisnesThis,
          laisnesCol,
          numOfBoards
        )
      );

      fencesArr[fenceId].status = "activeFence";
      // var topBoards = [];
      // var metalParts = [];
      // var rightMetalParts = [];
      // var smallMetalParts = [];
      // var rightSmallMetalParts = [];
      // var rankelements = [];
      // var allWoodPosts = [];
      // var rightWoodPosts = [];
      // var woodMaterials = [];
      // var woodTopParts = [];

      //LOAD GARDO COMBO FENCE
      if (type == "gardoFence") {
        startPart.isVisible = endPart.isVisible = false;
        newBoarsdArr.forEach((elm) => {
          elm.isVisible = false;
        });

        loadGardoFence(
          posX,
          posZ,
          rotY,
          gardoFenceBoards,
          woodMaterials,
          topBoards,
          rankelements,
          metalParts,
          rightMetalParts,
          rootMat,
          smallMetalParts,
          rightSmallMetalParts,
          allWoodPosts,
          rightWoodPosts,
          woodTopParts,
          activeFence,
          removeSideAccesories,
          addDefaultMaterial,
          selectedMat,
          newFenceForwardSigns,
          newFenceRightSigns,
          newFenceLeftSigns,
          newFenceBackSigns,
          cameraTargetMesh,
          cameraTarget,
          ground,
          fenceBoards,
          sturmankersVorderseite,
          rightPosts,
          leftPosts,
          directeHauswandMeshes,
          fenceBoardMat,
          fencePostMat,
          concreteMat,
          smallBoardsArr,
          silberMat,
          anthrazitMat,
          fencesArr,
          addFenceSings,
          grauMat,
          braunMat,
          sandMat,
          deleteFenceOn,
          deleteFencePart,
          delFenFun,
          deleteFence,
          checkPostIntersecting,
          fakePosts,
          allPosts,
          rightRoots,
          intersectedPosts,
          intersectedPostsMain,
          sturmankersRuckseite,
          intersectArrowSignsFence,
          fakeFences,
          addNewFenceToSide,
          activeArrow,
          activeArrowSide,
          addNewFenceMeshMat,
          wholeFences,
          rightPost,
          fenceId,
          setActiveFenceOnCombineFences,
          pipsSlider,
          noUiSlider,
          easyFenceSliderOpt,
          closeSliderContainer,
          setDayNight,
          setLightColor,
          glow,
          singsWar,
          leds,
          singsDel,
          setActivnesStyle,
          sturmankerCon,
          lightSettings,
          lightColorSet,
          ledColNum,
          setLedColor,
          ledParts,
          addEasyFenceAcc,
          addGardoFenceAcc,
          changeFenceGardo,
          setPhostenAct
        );
      }

      if (fenceId > 0 && typeof activeFence != "boolean") {
        fencesArr[activeFence].children.push(fenceId);
        fencesArr[fenceId].parent = fencesArr[activeFence].id;

        //set parent right post
        ledsRight[fencesArr[fenceId].parent].scaling.z = 1;
        ledsRight[fencesArr[fenceId].parent].position.z = 0;
        ledsRight[fencesArr[fenceId].parent].position.y = 0.001;
        if (rightPosts[fencesArr[fenceId].parent].scaling.z < 0.55) {
          rightPosts[fencesArr[fenceId].parent].scaling.z = 1;
          rightPosts[fencesArr[fenceId].parent].position.y = 0.962;
        }
        if (
          rightPosts[fencesArr[fenceId].parent].scaling.z > 0.7 &&
          rightPosts[fencesArr[fenceId].parent].scaling.z < 0.8
        ) {
          rightPosts[fencesArr[fenceId].parent].scaling.z = 1.2;
          rightPosts[fencesArr[fenceId].parent].position.y = 0.7717;
        }
        if (
          rightPosts[fencesArr[fenceId].parent].scaling.z > 0.9 &&
          rightPosts[fencesArr[fenceId].parent].scaling.z < 1
        ) {
          rightPosts[fencesArr[fenceId].parent].scaling.z = 1.475;
          rightPosts[fencesArr[fenceId].parent].position.y = 0.511;
        }
        rightPostCaps[fencesArr[fenceId].parent].isVisible = true;
        rightPostCapClones[fencesArr[fenceId].parent].isVisible = false;
      }
      //set Ground
      setGround();
      // //
      //for loading
      setTimeout(() => {
        engine.hideLoadingUI();
      }, 3000);
      //END OF MESH
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    });

  //SET GROUND
  var groundSizeX = 0;
  var groundSizeZ = 0;

  function setGround() {
    arrX = [];
    arrZ = [];

    for (let i = 0; i < allPosts.length; i++) {
      if (allPosts[i].isVisible) {
        arrX.push(Math.round(getAbsPosX(allPosts[i]) * 100) / 100);

        arrZ.push(Math.round(getAbsPosZ(allPosts[i]) * 100) / 100);
      }
    }
    arrX.sort(function (a, b) {
      return a - b;
    });
    arrZ.sort(function (a, b) {
      return a - b;
    });

    arrXFirst = Math.abs(arrX[0]);
    arrXSecond = arrX[arrX.length - 1];
    arrZFirst = Math.abs(arrZ[0]);
    arrZSecond = arrZ[arrZ.length - 1];
    groundSizeX = arrXFirst + arrXSecond + 1.1;
    groundSizeZ = arrZFirst + arrZSecond + 1.1;

    groundChange(groundSizeX, groundSizeZ);

    ground.position = new BABYLON.Vector3(
      (arrX[0] + arrX[arrX.length - 1]) / 2,
      0,
      (arrZ[0] + arrZ[arrZ.length - 1]) / 2
    );
    //aniamtion to change camera target position
    var animationCameraTarget = new BABYLON.Animation(
      "myAnimationcamera",
      "position",
      60,
      BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    const keyFrames = [];

    keyFrames.push({
      frame: 0,
      value: cameraTarget.position.clone(),
    });
    //change camera target position
    cameraTarget.position.x = ground.position.x;
    cameraTarget.position.z = ground.position.z;

    keyFrames.push({
      frame: 120,
      value: cameraTarget.position.clone(),
    });

    animationCameraTarget.setKeys(keyFrames);
    const easingFun2 = new BABYLON.CubicEase();
    easingFun2.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
    animationCameraTarget.setEasingFunction(easingFun2);
    cameraTarget.animations.push(animationCameraTarget);
    //call animation
    scene.beginAnimation(cameraTarget, 0, 120, false);

    //set camera radius
    var cameraRadius;
    if (ground.scaling.x > ground.scaling.z) {
      if (ground.scaling.x < 2.7) {
        cameraRadius = 4;
      } else {
        cameraRadius = ground.scaling.x * 1.5;
      }
    } else {
      cameraRadius = ground.scaling.z * 1.5;
    }

    //radius  animation
    let radiusAnimation = new BABYLON.Animation(
      "radiusAnimation",
      "radius",
      60,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    let radiusKeyFrames = [];
    radiusKeyFrames.push({
      frame: 0,
      value: camera.radius,
    });
    radiusKeyFrames.push({
      frame: 120,
      value: cameraRadius,
    });
    radiusAnimation.setKeys(radiusKeyFrames);
    const easingFun = new BABYLON.CubicEase();
    easingFun.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
    radiusAnimation.setEasingFunction(easingFun);
    camera.animations.push(radiusAnimation);
    //call radius animation
    scene.beginAnimation(camera, 0, 120, false);

    displayGroundSizeX = Math.round((arrXFirst + arrXSecond) * 100) + 7;
    displayGroundSizeZ = Math.round((arrZFirst + arrZSecond) * 100) + 7;

    //set ground text position and value
    //x
    groundTextX.position.x = groundTextX2.position.x = ground.position.x;
    groundTextX.position.z = ground.position.z + -ground.scaling.z / 2 - 0.2;
    groundTextX2.position.z = ground.position.z + ground.scaling.z / 2 + 0.2;
    textX = displayGroundSizeX + "cm";
    textureContextX.clearRect(0, 0, 512, 256);
    textureContextX.textAlign = "center";
    textureContextX.fillText(textX, 256, 140);
    textureGroundX.update();
    //z
    groundTextZ.position.x = ground.position.x + -ground.scaling.x / 2 - 0.2;
    groundTextZ2.position.x = ground.position.x + ground.scaling.x / 2 + 0.2;
    groundTextZ.position.z = groundTextZ2.position.z = ground.position.z;
    textZ = displayGroundSizeZ + "cm";
    textureContextZ.clearRect(0, 0, 512, 256);
    textureContextZ.textAlign = "center";
    textureContextZ.fillText(textZ, 256, 140);
    textureGroundZ.update();
  }
  //CREATE DEFAULT FENCE
  function handleTabActivnes() {
    if (!document.hidden) {
      createRightFence(0.94, 0, 0, "easyFence", "silber", 0);
      clearInterval(refreshIntervalId);
    }
  }
  if (document.hidden) {
    var refreshIntervalId = setInterval(handleTabActivnes, 100);
  } else {
    createRightFence(0.94, 0, 0, "easyFence", "silber", 0);
  }
  //ADD NEW FENCES
  let addNewFenceNormal = document.getElementById("new-fence-normal");
  addNewFenceNormal.onclick = () => {
    createNewFence(
      createRightFence,
      activeArrowSide,
      rightPosts,
      leftPosts,
      activeArrow,
      fencePostMat,
      addFenceSings,
      addNewFenceMeshMat,
      sideAccesories,
      addNewFenceToSide,
      newFenceInlays,
      newStub,
      unselect,
      singsDel,
      "easyFence",
      "silber",
      0,
      getAbsPosX,
      getAbsPosZ
    );
  };
  let newFenceInlays = document.getElementById("newFenceInlays");
  newFenceInlays.onclick = () => {
    createNewFence(
      createRightFence,
      activeArrowSide,
      rightPosts,
      leftPosts,
      activeArrow,
      fencePostMat,
      addFenceSings,
      addNewFenceMeshMat,
      sideAccesories,
      addNewFenceToSide,
      newFenceInlays,
      newStub,
      unselect,
      singsDel,
      "easyFence",
      "silber",
      inlaysOn,
      getAbsPosX,
      getAbsPosZ
    );
  };

  let newFenceRomBigSilber = document.getElementById("newFenceRomBigSilber");
  newFenceRomBigSilber.onclick = () => {
    createNewFence(
      createRightFence,
      activeArrowSide,
      rightPosts,
      leftPosts,
      activeArrow,
      fencePostMat,
      addFenceSings,
      addNewFenceMeshMat,
      sideAccesories,
      addNewFenceToSide,
      newFenceInlays,
      newStub,
      unselect,
      singsDel,
      "easyRomBig",
      "silber",
      0,
      getAbsPosX,
      getAbsPosZ
    );
  };

  let newFenceRomBigAnthrazit = document.getElementById(
    "newFenceRomBigAnthrazit"
  );
  newFenceRomBigAnthrazit.onclick = () => {
    createNewFence(
      createRightFence,
      activeArrowSide,
      rightPosts,
      leftPosts,
      activeArrow,
      fencePostMat,
      addFenceSings,
      addNewFenceMeshMat,
      sideAccesories,
      addNewFenceToSide,
      newFenceInlays,
      newStub,
      unselect,
      singsDel,
      "easyRomBig",
      "anthrazit",
      0,
      getAbsPosX,
      getAbsPosZ
    );
  };

  let newFenceRomSmallSilber = document.getElementById(
    "newFenceRomSmallSilber"
  );
  newFenceRomSmallSilber.onclick = () => {
    createNewFence(
      createRightFence,
      activeArrowSide,
      rightPosts,
      leftPosts,
      activeArrow,
      fencePostMat,
      addFenceSings,
      addNewFenceMeshMat,
      sideAccesories,
      addNewFenceToSide,
      newFenceInlays,
      newStub,
      unselect,
      singsDel,
      "easyRomSmall",
      "silber",
      0,
      getAbsPosX,
      getAbsPosZ
    );
  };

  let newFenceRomSmallAnthrazit = document.getElementById(
    "newFenceRomSmallAnthrazit"
  );
  newFenceRomSmallAnthrazit.onclick = () => {
    createNewFence(
      createRightFence,
      activeArrowSide,
      rightPosts,
      leftPosts,
      activeArrow,
      fencePostMat,
      addFenceSings,
      addNewFenceMeshMat,
      sideAccesories,
      addNewFenceToSide,
      newFenceInlays,
      newStub,
      unselect,
      singsDel,
      "easyRomSmall",
      "anthrazit",
      0,
      getAbsPosX,
      getAbsPosZ
    );
  };

  // 0.7,
  // 0.7,
  // -0.005,
  // rightPostCaps[0].position.y - 0.01
  let newStub = document.getElementById("newStub");
  newStub.onclick = () => {
    directeHauswandMeshesRight[activeFence].isVisible = true;
    rightPosts[activeArrow].material = fencePostMat;
    rightPosts[activeArrow].scaling.z = 1;
    rightPosts[activeArrow].position.y = 0.95;
    rightPosts[activeArrow].scaling.x = rightPostCaps[
      activeArrow
    ].scaling.x = 0.7;
    rightPosts[activeArrow].scaling.y = rightPostCaps[
      activeArrow
    ].scaling.y = 0.7;
    directeHauswandMeshesRight[activeArrow].scaling.z =
      directeHauswandMeshesRight[activeArrow].scaling.x = 1.43;
    directeHauswandMeshesRight[activeArrow].position.z =
      directeHauswandMeshesRight[activeArrow].position.z - 0.05;
    directeHauswandMeshesRight[activeArrow].position.x =
      directeHauswandMeshesRight[activeArrow].position.x + 0.05;
    rightRoots[activeFence].forEach((elm) => {
      elm.isVisible = false;
    });
    rightPostCaps[activeFence].position.y =
      rightPostCaps[activeFence].position.y - 0.01;
    foundationStartsRight[activeFence].isVisible = false;
    foundationVisibilty(
      foundationStarts,
      foundations,
      false,
      foundationStartsVord,
      foundationsVord,
      false,
      foundationStartsRuck,
      foundationsRuck,
      false,
      activeFence + 1
    );
    activeArrow = false;
    activeArrowSide = false;
    addFenceSings.forEach((elm) => {
      elm.material = addNewFenceMeshMat;
    });
    sideAccesories.style.display = "none";
    addNewFenceToSide.style.display = "none";
    newFenceInlays.style.display = "none";
    newStub.style.display = "none";
    unselect(true);
    singsDel.forEach((elm) => {
      elm.isVisible = false;
    });
  };

  let addNewCombineFenceTitle = document.getElementById(
    "addNewCombineFenceTitle"
  );
  let combineFenceContainer = document.getElementById("combineFenceContainer");
  // addNewCombineFenceTitle.onclick = () => {
  //   combineFenceContainer.style.height = "auto";
  // };
  let newFenceGardo = document.getElementById("new-fence-gardo");

  let combineFencesOpen = false;
  function closecombineFencesContainer() {
    // addNewCombineFenceTitle.style.color = "#333333";
    addNewCombineFenceTitle.children[1].innerHTML = "+";
    combineFenceContainer.style.height = 0;
    combineFencesOpen = false;
  }
  addNewCombineFenceTitle.onclick = () => {
    if (!combineFencesOpen) {
      // addNewCombineFenceTitle.style.color = "#3967ff";
      addNewCombineFenceTitle.children[1].innerHTML = "-";
      combineFenceContainer.style.height = "auto";
      combineFencesOpen = true;
    } else {
      closecombineFencesContainer();
    }
  };

  newFenceGardo.onclick = () => {
    createNewFence(
      createRightFence,
      activeArrowSide,
      rightPosts,
      leftPosts,
      activeArrow,
      fencePostMat,
      addFenceSings,
      addNewFenceMeshMat,
      sideAccesories,
      addNewFenceToSide,
      newFenceInlays,
      newStub,
      unselect,
      singsDel,
      "gardoFence",
      "silber",
      0,
      getAbsPosX,
      getAbsPosZ
    );
  };

  //ADD NEW FENCE SIDE BAR SETTINGS
  function addNewFenceSideBar() {
    removeSideAccesories(
      sideAccesories,
      deleteAccesorie,
      addFenceAcc,
      editPost,
      addNewFenceToSide
    );
    sideAccesories.style.display = "block";
    addNewFenceToSide.style.display = "block";
    // if (inlaysOn > 1) {
    // newFenceInlays.style.display = "block";
    // } else {
    newFenceInlays.style.display = "none";
    // }
    if (
      !sturmankersVorderseite[activeFence + 1].isVisible &&
      !leds[activeFence + 1].isVisible
    ) {
      if (activeArrowSide == 1) {
        if (!newFenceBackSigns[activeFence].isVisible) {
          if (fencesArr[activeFence].children > 0) {
            newStub.style.display = "none";
          } else {
            rightPosts[activeFence].scaling.z > 0.99
              ? (newStub.style.display = "block")
              : (newStub.style.display = "none");
          }
        } else {
          newStub.style.display = "none";
        }
      }
      if (activeArrowSide == 4) {
        if (!newFenceForwardSigns[activeFence].isVisible) {
          if (fencesArr[activeFence].children > 0) {
            newStub.style.display = "none";
          } else {
            rightPosts[activeFence].scaling.z > 0.99
              ? (newStub.style.display = "block")
              : (newStub.style.display = "none");
          }
        } else {
          newStub.style.display = "none";
        }
      }
      if (activeArrowSide == 2) {
        if (!newFenceLeftSigns[activeFence].isVisible) {
          if (fencesArr[activeFence].children > 0) {
            newStub.style.display = "none";
          } else {
            rightPosts[activeFence].scaling.z > 0.99
              ? (newStub.style.display = "block")
              : (newStub.style.display = "none");
          }
        } else {
          newStub.style.display = "none";
        }
      }
      if (activeArrowSide == 3) {
        if (!newFenceRightSigns[activeFence].isVisible) {
          if (fencesArr[activeFence].children > 0) {
            newStub.style.display = "none";
          } else {
            rightPosts[activeFence].scaling.z > 0.99
              ? (newStub.style.display = "block")
              : (newStub.style.display = "none");
          }
        } else {
          newStub.style.display = "none";
        }
      }
    } else {
      newStub.style.display = "none";
    }
  }

  //CREATE SINGS FUNCTION
  var activeArrow = false;
  var activeArrowSide = false;
  function createNewFenceSign() {
    //FRONT SIGN
    const addNewFenceMesh = BABYLON.MeshBuilder.CreateCylinder(
      "addNewFenceMesh",
      {
        height: 0.01,
        diameter: 0.3,
        tessellation: 50,
      }
    );
    addNewFenceMesh.material = addNewFenceMeshMat;
    addNewFenceMesh.position = new BABYLON.Vector3(
      getAbsPosX(rightPosts[rightPosts.length - 1]) + 0.3,
      1,
      getAbsPosZ(rightPosts[rightPosts.length - 1])
    );
    addNewFenceMesh.addRotation(Math.PI / 2, 0, 0);

    newFenceForwardSigns.push(addNewFenceMesh);
    //CREATE FENCE FORWARD
    for (let i = 0; i < newFenceForwardSigns.length; i++) {
      newFenceForwardSigns[i].actionManager = new BABYLON.ActionManager(scene);
      newFenceForwardSigns[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            activeArrow = i;
            activeArrowSide = 1;
            addNewFenceSideBar();
            addFenceSings.forEach((elm) => {
              elm.material = addNewFenceMeshMat;
            });
            newFenceForwardSigns[i].material = addNewFenceMeshMatAct;
            addDefaultMaterial(
              fenceBoards,
              sturmankersVorderseite,
              rightPosts,
              leftPosts,
              directeHauswandMeshes,
              fenceBoardMat,
              fencePostMat,
              concreteMat,
              smallBoardsArr,
              silberMat,
              anthrazitMat,
              fencesArr,
              addFenceSings,
              grauMat,
              braunMat,
              sandMat,
              woodMaterials,
              topBoards,
              rankelements,
              rightWoodPosts,
              woodTopParts,
              gardoFenceBoards
            );
            newFenceForwardSigns[i].isVisible = true;
            newFenceRightSigns[i].isVisible = true;
            newFenceLeftSigns[i].isVisible = true;
            newFenceBackSigns[i].isVisible = true;
            intersectArrowSignsFence(
              fakeFences,
              newFenceForwardSigns,
              newFenceRightSigns,
              newFenceLeftSigns,
              newFenceBackSigns,
              activeFence,
              addFenceSings
            );
            rightPosts[i].material = selectedMat;
          }
        )
      );
    }

    //RIGHT SIGHN
    var addNewFenceMeshRight = addNewFenceMesh.clone("addNewFenceMeshRight");
    addNewFenceMeshRight.position = new BABYLON.Vector3(
      getAbsPosX(rightPosts[rightPosts.length - 1]),
      1,
      getAbsPosZ(rightPosts[rightPosts.length - 1]) - 0.3
    );
    addNewFenceMeshRight.addRotation(0, 0, -Math.PI / 2);
    newFenceRightSigns.push(addNewFenceMeshRight);
    //CREATE FENCE RIGHT
    for (let i = 0; i < newFenceRightSigns.length; i++) {
      newFenceRightSigns[i].actionManager = new BABYLON.ActionManager(scene);
      newFenceRightSigns[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            activeArrow = i;
            activeArrowSide = 2;
            addNewFenceSideBar();
            addFenceSings.forEach((elm) => {
              elm.material = addNewFenceMeshMat;
            });
            newFenceRightSigns[i].material = addNewFenceMeshMatAct;
            addDefaultMaterial(
              fenceBoards,
              sturmankersVorderseite,
              rightPosts,
              leftPosts,
              directeHauswandMeshes,
              fenceBoardMat,
              fencePostMat,
              concreteMat,
              smallBoardsArr,
              silberMat,
              anthrazitMat,
              fencesArr,
              addFenceSings,
              grauMat,
              braunMat,
              sandMat,
              woodMaterials,
              topBoards,
              rankelements,
              rightWoodPosts,
              woodTopParts,
              gardoFenceBoards
            );
            newFenceForwardSigns[i].isVisible = true;
            newFenceRightSigns[i].isVisible = true;
            newFenceLeftSigns[i].isVisible = true;
            newFenceBackSigns[i].isVisible = true;
            intersectArrowSignsFence(
              fakeFences,
              newFenceForwardSigns,
              newFenceRightSigns,
              newFenceLeftSigns,
              newFenceBackSigns,
              activeFence,
              addFenceSings
            );
            rightPosts[i].material = selectedMat;
          }
        )
      );
    }

    //LEFT SIGHN
    var addNewFenceMeshLeft = addNewFenceMesh.clone("addNewFenceMeshLeft");
    addNewFenceMeshLeft.position = new BABYLON.Vector3(
      getAbsPosX(rightPosts[rightPosts.length - 1]),
      1,
      getAbsPosZ(rightPosts[rightPosts.length - 1]) + 0.3
    );
    addNewFenceMeshLeft.addRotation(0, 0, Math.PI / 2);
    newFenceLeftSigns.push(addNewFenceMeshLeft);
    //CREATE FENCE RIGHT
    for (let i = 0; i < newFenceLeftSigns.length; i++) {
      newFenceLeftSigns[i].actionManager = new BABYLON.ActionManager(scene);
      newFenceLeftSigns[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            activeArrow = i;
            activeArrowSide = 3;
            addNewFenceSideBar();
            addFenceSings.forEach((elm) => {
              elm.material = addNewFenceMeshMat;
            });
            newFenceLeftSigns[i].material = addNewFenceMeshMatAct;
            addDefaultMaterial(
              fenceBoards,
              sturmankersVorderseite,
              rightPosts,
              leftPosts,
              directeHauswandMeshes,
              fenceBoardMat,
              fencePostMat,
              concreteMat,
              smallBoardsArr,
              silberMat,
              anthrazitMat,
              fencesArr,
              addFenceSings,
              grauMat,
              braunMat,
              sandMat,
              woodMaterials,
              topBoards,
              rankelements,
              rightWoodPosts,
              woodTopParts,
              gardoFenceBoards
            );
            newFenceForwardSigns[i].isVisible = true;
            newFenceRightSigns[i].isVisible = true;
            newFenceLeftSigns[i].isVisible = true;
            newFenceBackSigns[i].isVisible = true;
            intersectArrowSignsFence(
              fakeFences,
              newFenceForwardSigns,
              newFenceRightSigns,
              newFenceLeftSigns,
              newFenceBackSigns,
              activeFence,
              addFenceSings
            );
            rightPosts[i].material = selectedMat;
          }
        )
      );
    }

    //BACK SIGHN
    var addNewFenceMeshBack = addNewFenceMesh.clone("addNewFenceMeshBack");
    addNewFenceMeshBack.position = new BABYLON.Vector3(
      getAbsPosX(rightPosts[rightPosts.length - 1]) - 0.3,
      1,
      getAbsPosZ(rightPosts[rightPosts.length - 1])
    );
    addNewFenceMeshBack.addRotation(0, Math.PI, 0);
    newFenceBackSigns.push(addNewFenceMeshBack);
    //CREATE FENCE BACK
    for (let i = 0; i < newFenceBackSigns.length; i++) {
      newFenceBackSigns[i].actionManager = new BABYLON.ActionManager(scene);
      newFenceBackSigns[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            activeArrow = i;
            activeArrowSide = 4;
            addNewFenceSideBar();
            addFenceSings.forEach((elm) => {
              elm.material = addNewFenceMeshMat;
            });
            newFenceBackSigns[i].material = addNewFenceMeshMatAct;
            addDefaultMaterial(
              fenceBoards,
              sturmankersVorderseite,
              rightPosts,
              leftPosts,
              directeHauswandMeshes,
              fenceBoardMat,
              fencePostMat,
              concreteMat,
              smallBoardsArr,
              silberMat,
              anthrazitMat,
              fencesArr,
              addFenceSings,
              grauMat,
              braunMat,
              sandMat,
              woodMaterials,
              topBoards,
              rankelements,
              rightWoodPosts,
              woodTopParts,
              gardoFenceBoards
            );
            newFenceForwardSigns[i].isVisible = true;
            newFenceRightSigns[i].isVisible = true;
            newFenceLeftSigns[i].isVisible = true;
            newFenceBackSigns[i].isVisible = true;
            intersectArrowSignsFence(
              fakeFences,
              newFenceForwardSigns,
              newFenceRightSigns,
              newFenceLeftSigns,
              newFenceBackSigns,
              activeFence,
              addFenceSings
            );
            rightPosts[i].material = selectedMat;
          }
        )
      );
    }

    addFenceSings.push(
      addNewFenceMesh,
      addNewFenceMeshRight,
      addNewFenceMeshLeft,
      addNewFenceMeshBack
    );
    addFenceSings.forEach((elm) => {
      elm.isVisible = false;
    });
    //////////////////
  }

  function createMainPostSigns() {
    //RIGHT SIGHN MAIN POST
    const addNewFenceMeshRightMain = BABYLON.MeshBuilder.CreateCylinder(
      "addNewFenceMeshRightMain",
      {
        height: 0.01,
        diameter: 0.3,
        tessellation: 50,
      }
    );
    addNewFenceMeshRightMain.material = addNewFenceMeshMat;
    addNewFenceMeshRightMain.position = new BABYLON.Vector3(
      getAbsPosX(leftPosts[0]),
      1,
      getAbsPosZ(leftPosts[0]) - 0.3
    );
    addNewFenceMeshRightMain.addRotation(Math.PI / 2, 0, -Math.PI / 2);
    // newFenceRightSigns.push(addNewFenceMeshRightMain);
    addNewFenceMeshRightMain.actionManager = new BABYLON.ActionManager(scene);
    addNewFenceMeshRightMain.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        function () {
          activeArrow = false;
          activeArrowSide = 5;
          addNewFenceSideBar();
          addFenceSings.forEach((elm) => {
            elm.material = addNewFenceMeshMat;
          });
          addNewFenceMeshRightMain.material = addNewFenceMeshMatAct;
          addDefaultMaterial(
            fenceBoards,
            sturmankersVorderseite,
            rightPosts,
            leftPosts,
            directeHauswandMeshes,
            fenceBoardMat,
            fencePostMat,
            concreteMat,
            smallBoardsArr,
            silberMat,
            anthrazitMat,
            fencesArr,
            addFenceSings,
            grauMat,
            braunMat,
            sandMat,
            woodMaterials,
            topBoards,
            rankelements,
            rightWoodPosts,
            woodTopParts,
            gardoFenceBoards
          );
          addNewFenceMeshRightMain.isVisible = true;
          addNewFenceMeshLeftMain.isVisible = true;
          // newFenceRightSigns[i].isVisible = true;
          // newFenceLeftSigns[i].isVisible = true;
          // newFenceBackSigns[i].isVisible = true;
          // intersectArrowSignsFence(
          //   fakeFences,
          //   newFenceForwardSigns,
          //   newFenceRightSigns,
          //   newFenceLeftSigns,
          //   newFenceBackSigns,
          //   activeFence,
          //   addFenceSings
          // );
          leftPosts[0].material = selectedMat;
        }
      )
    );

    //LEFT SIGHN MAIN POST
    const addNewFenceMeshLeftMain = BABYLON.MeshBuilder.CreateCylinder(
      "addNewFenceMeshLeftMain",
      {
        height: 0.01,
        diameter: 0.3,
        tessellation: 50,
      }
    );
    addNewFenceMeshLeftMain.material = addNewFenceMeshMat;
    addNewFenceMeshLeftMain.position = new BABYLON.Vector3(
      getAbsPosX(leftPosts[0]),
      1,
      getAbsPosZ(leftPosts[0]) + 0.3
    );
    addNewFenceMeshLeftMain.addRotation(Math.PI / 2, 0, Math.PI / 2);
    // newFenceRightSigns.push(addNewFenceMeshLeftMain);
    addNewFenceMeshLeftMain.actionManager = new BABYLON.ActionManager(scene);
    addNewFenceMeshLeftMain.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        function () {
          activeArrow = false;
          activeArrowSide = 6;
          addNewFenceSideBar();
          addFenceSings.forEach((elm) => {
            elm.material = addNewFenceMeshMat;
          });
          addNewFenceMeshLeftMain.material = addNewFenceMeshMatAct;
          addDefaultMaterial(
            fenceBoards,
            sturmankersVorderseite,
            rightPosts,
            leftPosts,
            directeHauswandMeshes,
            fenceBoardMat,
            fencePostMat,
            concreteMat,
            smallBoardsArr,
            silberMat,
            anthrazitMat,
            fencesArr,
            addFenceSings,
            grauMat,
            braunMat,
            sandMat,
            woodMaterials,
            topBoards,
            rankelements,
            rightWoodPosts,
            woodTopParts,
            gardoFenceBoards
          );
          addNewFenceMeshRightMain.isVisible = true;
          addNewFenceMeshLeftMain.isVisible = true;
          // newFenceRightSigns[i].isVisible = true;
          // newFenceLeftSigns[i].isVisible = true;
          // newFenceBackSigns[i].isVisible = true;
          // intersectArrowSignsFence(
          //   fakeFences,
          //   newFenceForwardSigns,
          //   newFenceRightSigns,
          //   newFenceLeftSigns,
          //   newFenceBackSigns,
          //   activeFence,
          //   addFenceSings
          // );
          leftPosts[0].material = selectedMat;
        }
      )
    );

    addFenceSings.push(addNewFenceMeshRightMain, addNewFenceMeshLeftMain);
  }

  //TO DELETE FUNCTION for sturmanker led
  function onDelete(i) {
    leds[i].isVisible = false;
    singsDel[i].isVisible = false;

    //set activnes of led when deleted led
    ledsOn = 0;
    leds.forEach((elm) => {
      if (elm.isVisible) {
        ledsOn += 1;
      }
    });
    if (ledsOn == 0) {
      //set to ohne on led lights
      //set html
      lightSettings.style.display = "none";
      lightColorSet.style.display = "none";
      //set babylon
      leds.forEach((elm) => {
        elm.isVisible = false;
      });
      setDayNight(0.6, 0.8, 0.7);
      ledColNum = 4;
      setLightColor(ledColNum);
      setLedColor(ledColNum);
      setActivnesStyle(ledParts, 6, 0, "active-text-color");
    }
  }
  //LED STURMANKER FUNCTION
  function ledSturOnClick(a, i, b) {
    modalFade.style.display = "none";
    onLedSturmanker.style.display = "none";
    a.style.display = "none";
    leds[i].isVisible = b;
    singsWar[i].isVisible = false;
  }

  //LED STURMANKER FUNCTION
  function sturmankerOnOff(a, i) {
    if (vorderseiteOn) {
      sturmankersVorderseite[i].isVisible = a;
      sturVorderseiteSrafs[i].isVisible = a;
      foundationVisibilty(
        foundationStarts,
        foundations,
        false,
        foundationStartsVord,
        foundationsVord,
        true,
        foundationStartsRuck,
        foundationsRuck,
        false,
        i
      );
    }
    if (ruckseiteOn) {
      sturmankersRuckseite[i].isVisible = a;
      sturRuckseiteSrafs[i].isVisible = a;
      foundationVisibilty(
        foundationStarts,
        foundations,
        false,
        foundationStartsVord,
        foundationsVord,
        false,
        foundationStartsRuck,
        foundationsRuck,
        true,
        i
      );
    }
  }

  //ADD LAISNE ON FENCE - 3
  let createLaisne = (laisnePos, j) => {
    if (fencesArr[j].fenceGardo == undefined) {
      if (rightPosts[j].isVisible) {
        if (fencesArr[j].type != "easyFenceHalf" || laisnePos < 3) {
          laisnes[j][laisnePos].isVisible = true;
          startParts[j].position.y += 0.01;
        }
        laisnes[j][laisnePos].position.y =
          fenceBoards[j][laisnePos].position.y + 0.22 / 2 + 0.005;

        if (laisnePos < 6) {
          inlays[j][0].position.y += 0.01;
          inlays[j][2].position.y += 0.01;
        }
        for (let i = laisnePos; i < 7; i++) {
          fenceBoards[j][i + 1].position.y += 0.01;
          if (i < 6) {
            if (fencesArr[j].laisnes[i + 1]) {
              laisnes[j][i + 1].position.y += 0.01;
            }
          }
        }
      }
      for (let i = 0; i < laisnes.length; i++) {
        if (smallBoardsArr[i].isVisible) {
          laisnes[i].forEach((elm) => {
            elm.isVisible = false;
          });
        }
      }
    }
  };

  //REMOVE LAISNE FROM FENCE
  let disposeLaisne = (laisnePos, j) => {
    if (fencesArr[j].fenceGardo == undefined) {
      if (fencesArr[j].type != "easyFenceHalf" || laisnePos < 3) {
        laisnes[j][laisnePos].isVisible = false;
        startParts[j].position.y -= 0.01;
      }
      if (laisnePos < 6) {
        inlays[j][0].position.y -= 0.01;
        inlays[j][2].position.y -= 0.01;
      }
      for (let i = laisnePos; i < 7; i++) {
        fenceBoards[j][i + 1].position.y -= 0.01;
        if (i < 6) {
          if (fencesArr[j].laisnes[i + 1]) {
            laisnes[j][i + 1].position.y -= 0.01;
          }
        }
      }
    }
  };

  //SET NUMBER ON BEGINING
  let setNum = document.getElementsByClassName("set-num");
  for (let i = 0; i < setNum.length; i++) {
    setNum[i].innerHTML = i + 1;
  }

  //SET TITLE ACTIVNESS
  let clickableMainSec = document.getElementsByClassName(
    "set-part-click-title"
  );
  for (let i = 0; i < clickableMainSec.length; i++) {
    clickableMainSec[i].onclick = () => {
      if (clickableMainSec[i].className != "set-part-click-title clicked") {
        clickableMainSec[i].className = clickableMainSec[i].className.replace(
          " not-clicked",
          " clicked"
        );
        clickableMainSec[i].children[2].innerHTML = "-";
        clickableMainSec[i].nextElementSibling.style.height = "auto";
      } else if (
        clickableMainSec[i].className == "set-part-click-title clicked"
      ) {
        clickableMainSec[i].className = clickableMainSec[i].className.replace(
          " clicked",
          " not-clicked"
        );
        clickableMainSec[i].children[2].innerHTML = "+";
        clickableMainSec[i].nextElementSibling.style.height = 0;
      }

      //set activnes on leds parts to turn of led
      if (i != 5) {
        setActivnesStyle(ledDayNight, 8, 0, "active-text-color");
        for (let i = 0; i < leds.length; i++) {
          setDayNight(0.6, 0.8, 0.7);
          setLightColor(4);
          setLedColor(ledColNum);
          glow.intensity = 0;
          singsDel[i].isVisible = false;
        }
      }
    };
  }

  //FUNCTION TO SET COLOR AND MATERIAL - 1, 2, 3, 5
  function setPartsAndconf(parts, changable, matCol) {
    for (let i = 0; i < parts.length; i++) {
      //set colors in badge
      parts[i].children[0].children[0].style.backgroundColor = matCol[i];
      parts[i].addEventListener("click", () => {
        //change fence color
        if (changable != false) {
          changable.diffuseColor = BABYLON.Color3.FromHexString(matCol[i]);
        }
      });
    }
  }

  //SET ACTIVNES
  //ACTIVE CHECKMARK
  // "active-text-color"
  let checkMark = "&#10003";
  //set activness style
  function setActivnesStyle(parts, partNum, i, actClass) {
    //change active singhts
    var currentActCol = document.getElementsByClassName(actClass);
    //add remove active chackmark
    currentActCol[partNum].children[2].innerHTML = "";
    parts[i].children[2].innerHTML = checkMark;
    //change active color
    currentActCol[partNum].className = currentActCol[partNum].className.replace(
      " " + actClass,
      ""
    );
    parts[i].className += " " + actClass;
  }

  function setActivnes(parts, partNum, actClass) {
    for (let i = 0; i < parts.length; i++) {
      parts[i].addEventListener("click", () => {
        setActivnesStyle(parts, partNum, i, actClass);
      });
    }
  }
  //SET TOGGLE ACTIVNES
  let togAct = false;
  function setToggleActivnes(parts, partNum) {
    for (let i = 0; i < parts.length; i++) {
      parts[i].addEventListener("click", () => {
        var currentActCol =
          document.getElementsByClassName("active-text-color");
        if (!togAct) {
          parts[i].className += " active-text-color";
          parts[i].children[2].innerHTML = checkMark;
          togAct = true;
        } else {
          currentActCol[partNum].className = currentActCol[
            partNum
          ].className.replace(" active-text-color", "");
          parts[i].children[2].innerHTML = "";
          togAct = false;
        }
      });
    }
  }

  //1 SET MAIN FARBE FUNCIONALITY
  let mainFarbeParts = document.getElementsByClassName("set-part-main-farbe");
  setPartsAndconf(mainFarbeParts, false, fenceBoardsColors);
  setActivnes(mainFarbeParts, 1, "active-text-color");

  function allFenceBoardsChange(a, b) {
    for (let i = 0; i < fencesArr.length; i++) {
      fencesArr[i].boardCol = a;
      fenceBoards[i].forEach((elm) => {
        elm.material = b;
      });
    }
  }
  let allBoardsCol = 0;
  mainFarbeParts[0].addEventListener("click", () => {
    allFenceBoardsChange("grau", grauMat);
    allBoardsCol = 0;
  });
  mainFarbeParts[1].addEventListener("click", () => {
    allFenceBoardsChange("anthrazit", anthrazitMat);
    allBoardsCol = 1;
  });
  mainFarbeParts[2].addEventListener("click", () => {
    allFenceBoardsChange("braun", braunMat);
    allBoardsCol = 2;
  });
  mainFarbeParts[3].addEventListener("click", () => {
    allFenceBoardsChange("sand", sandMat);
    allBoardsCol = 3;
  });

  //2 SET START UND AVBSCH
  let startUndAbschParts = document.getElementsByClassName(
    "set-part-start-und-absch"
  );
  setPartsAndconf(startUndAbschParts, false, fencePartsColors);
  setActivnes(startUndAbschParts, 2, "active-text-color");

  let startUndAbschMat = 1;
  startUndAbschParts[0].addEventListener("click", () => {
    for (let i = 0; i < startParts.length; i++) {
      fencesArr[i].startUndAbschCol = "silber";
      startParts[i].material = endParts[i].material = silberMat;
    }
    startUndAbschMat = 0;
  });
  startUndAbschParts[1].addEventListener("click", () => {
    for (let i = 0; i < startParts.length; i++) {
      fencesArr[i].startUndAbschCol = "anthrazit";
      startParts[i].material = endParts[i].material = anthrazitMat;
    }
    startUndAbschMat = 1;
  });

  //3 DESIGNlLEISTEN AUS ALUMINIUM
  let designleistensMat = document.getElementsByClassName(
    "set-part-designleisten-aus-aluminium-act-col"
  );
  setPartsAndconf(designleistensMat, false, fencePartsColors);
  setActivnes(designleistensMat, 3, "active-text-color");
  let laisnesMat = 0;
  designleistensMat[1].addEventListener("click", () => {
    for (let i = 0; i < laisnes.length; i++) {
      fencesArr[i].laisnesCol = "anthrazit";
      laisnes[i].forEach((elm) => {
        elm.material = anthrazitMat;
      });
    }
    laisnesMat = 1;
  });
  designleistensMat[0].addEventListener("click", () => {
    for (let i = 0; i < laisnes.length; i++) {
      fencesArr[i].laisnesCol = "silber";
      laisnes[i].forEach((elm) => {
        elm.material = silberMat;
      });
    }
    laisnesMat = 0;
  });
  //DESIGNELEISTEN CHECH BOX TO ACTIVE
  let designleistens = document.getElementsByClassName(
    "set-part-designleisten-aus-aluminium"
  );
  if (designleistens.length > 0) {
    let actCol = "#3967ff";
    let transparent = "transparent";
    let empty = "";
    function addLaisnes(a, b, c, i) {
      designleistens[i].children[0].children[0].style.backgroundColor = a;
      designleistens[i].children[0].children[0].innerHTML = b;
      checkboxActive[i] = c;
    }
    var checkboxActive = [false, false, false, false, false, false, false];
    for (let i = 0; i < designleistens.length; i++) {
      designleistens[i].addEventListener("click", () => {
        if (!checkboxActive[i]) {
          for (let j = 0; j < fencesArr.length; j++) {
            if (checkboxActive[i] == fencesArr[j].laisnes[i]) {
              createLaisne(i, j);
              fencesArr[j].laisnes[i] = true;
            }
          }
          addLaisnes(actCol, checkMark, true, i);
        } else {
          for (let j = 0; j < fencesArr.length; j++) {
            if (checkboxActive[i] == fencesArr[j].laisnes[i]) {
              disposeLaisne(i, j);
              fencesArr[j].laisnes[i] = false;
            }
          }
          addLaisnes(transparent, empty, false, i);
        }
      });
    }
  }
  //4 SET DESIGN - INLAYS
  //set activnes
  let designInlays = document.getElementsByClassName(
    "set-activnes-design-inlays"
  );
  setActivnes(designInlays, 4, "active-text-color");
  //first inlay setings
  let designInlaysFirst = document.getElementsByClassName(
    "first-set-design-inlays-color"
  );
  setPartsAndconf(designInlaysFirst, false, fencePartsColors);
  // //second inlay setings
  // let designInlaysSecond = document.getElementsByClassName(
  //   "second-set-design-inlays-color"
  // );
  // setPartsAndconf(designInlaysSecond, inlaysMat, fencePartsColors);
  // //third inlay setings
  // let designInlaysThird = document.getElementsByClassName(
  //   "third-set-design-inlays-color"
  // );
  // setPartsAndconf(designInlaysThird, inlaysMat, fencePartsColors);

  //inlays show or not
  function inlaysFunction(a, b, c, d) {
    for (let i = 0; i < rightPosts.length; i++) {
      if (rightPosts[i].isVisible && fencesArr[i].fenceGardo == undefined) {
        inlays[i][0].isVisible = b;
        inlays[i][2].isVisible = b;
        fenceBoards[i][6].isVisible = a;
      }
    }
    // fenceBoards.forEach((elmF) => {
    //   elmF[6].isVisible = a;
    // });
    for (let i = 0; i < inlays.length; i++) {
      inlays[i][2].material = c;
      inlays[i][0].material.albedoColor = inlays[i][2].material.diffuseColor;
    }
    for (let i = 0; i < fenceBoards.length; i++) {
      if (smallBoardsArr[i].isVisible || fencesArr[i].type == "easyFenceHalf") {
        fenceBoards[i][6].isVisible = false;
        inlays[i][0].isVisible = false;
        inlays[i][2].isVisible = false;
        fencesArr[i].inlays = 0;
      } else {
        if (fencesArr[i].fenceGardo == undefined) fencesArr[i].type = d;
      }
    }
  }
  var inlaysOn = 0;
  if (designInlays.length > 0) {
    for (let i = 0; i < designInlays.length; i++) {
      designInlays[i].addEventListener("click", () => {
        inlaysOn = i;
        fencesArr.forEach((elm) => {
          elm.inlays = i;
        });
        if (i == 0) {
          inlaysFunction(true, false, silberMat, "easyFence");
        } else if (i == 1) {
          inlaysFunction(false, true, silberMat, "easyFenceInlaysSilber");
        } else if (i == 2) {
          inlaysFunction(false, true, anthrazitMat, "easyFenceInlaysAnth");
        }
      });
    }
  }

  //5 SET FARBE PFOSTEN
  let fencePostsParts = document.getElementsByClassName(
    "set-part-farbe-pfosten"
  );
  setPartsAndconf(fencePostsParts, fencePostMat, fencePartsColors);
  setActivnes(fencePostsParts, 5, "active-text-color");

  //6 SET LED
  let ledParts = document.getElementsByClassName("set-part-led");
  setActivnes(ledParts, 6, "active-text-color");
  let lightSettings = document.getElementById("light-settings");
  let lightColorSet = document.getElementById("light-color-settings");
  //set day night
  function setDayNight(a, b, c) {
    lightsHavy.forEach((elm) => {
      elm.intensity = a;
    });
    // lightsLed.forEach((elm) => {
    //   elm.intensity = b;
    // });
    skyBoxes[0].material.luminance = c;

    scene.environmentIntensity = b;
    // if (directeHauswandMesh.isVisible) lightsLed[0].intensity = 0;
  }
  //set lights color
  function setLightColor(lightNum) {
    lightsHavy.forEach((elm) => {
      elm.diffuse = elm.specular = BABYLON.Color3.FromHexString(
        lightColors[lightNum]
      );
    });
  }

  var ledColNum = 4;
  function setLedColor(lightNum) {
    // lightsLed.forEach((elm) => {
    //   elm.diffuse = elm.specular = BABYLON.Color3.FromHexString(
    //     lightColors[lightNum]
    //   );
    // });
    ledMat.diffuseColor = ledMat.emissiveColor = BABYLON.Color3.FromHexString(
      lightColors[lightNum]
    );
  }

  if (ledParts.length > 0) {
    var colorLedOn = false;
    ledParts[0].addEventListener("click", () => {
      colorLedOn = false;
      //set html
      lightSettings.style.display = "none";
      lightColorSet.style.display = "none";
      //set babylon
      leds.forEach((elm) => {
        elm.isVisible = false;
      });
      setDayNight(0.6, 0.8, 0.7);
      ledColNum = 4;
      setLightColor(ledColNum);
      setLedColor(ledColNum);
      singsDel.forEach((elm) => {
        elm.isVisible = false;
      });
      //set leds num to 0
      ledsOn = 0;
      singsWar.forEach((elm) => {
        elm.isVisible = false;
      });
    });
    ledParts[1].addEventListener("click", () => {
      intersectionFunction(
        fakeFronts,
        fakeFences,
        sturmankersVorderseite,
        sturVorderseiteSrafs,
        leds,
        singsDel,
        singsWar,
        fakeBacks,
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations,
        foundationStartsVord,
        foundationsVord,
        foundationStartsRuck,
        foundationsRuck
      );
      singsWar.forEach((elm) => {
        elm.isVisible = false;
      });
      colorLedOn = true;
      //set html
      lightSettings.style.display = "block";
      lightColorSet.style.display = "block";
      //set babylon
      glow.intensity = 0.8;
      for (let i = 0; i < sturmankersVorderseite.length; i++) {
        if (
          sturmankersVorderseite[i].isVisible ||
          sturmankersRuckseite[i].isVisible
        ) {
          strurmOn = true;
        }
      }
      if (!strurmOn) {
        for (let i = 0; i < allPosts.length; i++) {
          if (allPosts[i].isVisible) {
            leds[i].isVisible = true;
            singsDel[i].isVisible = true;
            // ledsOn += 1;
          }
        }
        leds.forEach((elm) => {
          if (elm.isVisible) ledsOn += 1;
        });
        ledColNum = 0;
        setLightColor(ledColNum);
        setLedColor(ledColNum);
        setDayNight(0.2, 0, 1.15);
      } else {
        singsWar.forEach((elm) => {
          elm.isVisible = false;
        });
        //set warning sings to visible if sturmanker is visible
        for (let i = 0; i < allPosts.length; i++) {
          if (allPosts[i].isVisible) {
            if (
              sturmankersVorderseite[i].isVisible ||
              sturmankersRuckseite[i].isVisible
            ) {
              singsWar[i].isVisible = true;
            }
            if (
              !sturmankersVorderseite[i].isVisible &&
              !sturmankersRuckseite[i].isVisible
            ) {
              leds[i].isVisible = true;
            }
          }
        }
        setDayNight(0.2, 0, 1.15);
        setLightColor(4);
        setLedColor(0);
        //set leds on lights on
        // for (let i = 0; i < leds.length; i++) {
        //   if (leds[i].isVisible) {
        //     lightsLed[i].intensity = 0.5;
        //   }
        // }
      }
      setActivnesStyle(ledDayNight, 8, 2, "active-text-color");
      //set active color to first
      //html
      var currentActColLig = document.getElementsByClassName(
        "active-color-light-contaier"
      );
      //change active color
      currentActColLig[0].className = currentActColLig[0].className.replace(
        " active-color-light-contaier",
        ""
      );
      colorLightContainer[0].className += " active-color-light-contaier";
      if (directeHauswandMesh.isVisible) {
        leds[0].isVisible = false;
        singsDel[0].isVisible = false;
      }
      for (let i = 0; i < directeHauswandMeshesRight.length; i++) {
        if (directeHauswandMeshesRight[i].isVisible) {
          ledsRight[i].isVisible = false;
          singsDel[i + 1].isVisible = false;
        }
      }
    });

    ledParts[2].addEventListener("click", () => {
      intersectionFunction(
        fakeFronts,
        fakeFences,
        sturmankersVorderseite,
        sturVorderseiteSrafs,
        leds,
        singsDel,
        singsWar,
        fakeBacks,
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations,
        foundationStartsVord,
        foundationsVord,
        foundationStartsRuck,
        foundationsRuck
      );
      singsWar.forEach((elm) => {
        elm.isVisible = false;
      });
      colorLedOn = false;
      //set html
      lightSettings.style.display = "block";
      lightColorSet.style.display = "none";
      //set babylon
      glow.intensity = 0.8;
      for (let i = 0; i < sturmankersVorderseite.length; i++) {
        if (
          sturmankersVorderseite[i].isVisible ||
          sturmankersRuckseite[i].isVisible
        ) {
          strurmOn = true;
        }
      }
      if (!strurmOn) {
        for (let i = 0; i < allPosts.length; i++) {
          if (allPosts[i].isVisible) {
            leds[i].isVisible = true;
            singsDel[i].isVisible = true;
          }
        }
        leds.forEach((elm) => {
          if (elm.isVisible) ledsOn += 1;
        });
        setDayNight(0.2, 0, 1.15);
      } else {
        singsWar.forEach((elm) => {
          elm.isVisible = false;
        });
        //set warning sings to visible if sturmanker is visible
        for (let i = 0; i < allPosts.length; i++) {
          if (allPosts[i].isVisible) {
            if (
              sturmankersVorderseite[i].isVisible ||
              sturmankersRuckseite[i].isVisible
            ) {
              singsWar[i].isVisible = true;
            }
            if (
              !sturmankersVorderseite[i].isVisible &&
              !sturmankersRuckseite[i].isVisible
            ) {
              leds[i].isVisible = true;
            }
          }
        }
        setDayNight(0.2, 0, 1.15);
        for (let i = 0; i < leds.length; i++) {
          if (leds[i].isVisible) {
            // lightsLed[i].intensity = 0.5;
          }
        }
      }
      ledColNum = 4;
      setLightColor(4);
      setLedColor(4);
      setActivnesStyle(ledDayNight, 8, 2, "active-text-color");
      if (directeHauswandMesh.isVisible) {
        leds[0].isVisible = false;
        singsDel[0].isVisible = false;
      }
      for (let i = 0; i < directeHauswandMeshesRight.length; i++) {
        if (directeHauswandMeshesRight[i].isVisible) {
          ledsRight[i].isVisible = false;
          singsDel[i + 1].isVisible = false;
        }
      }
    });
    //set if delete sings are visible
    let ledDeleteOnOff = document.getElementsByClassName("set-delete-on-off");
    setActivnes(ledDeleteOnOff, 7, "active-text-color");

    for (let i = 0; i < ledDeleteOnOff.length; i++) {
      ledDeleteOnOff[0].addEventListener("click", () => {
        singsDel.forEach((elm) => {
          elm.isVisible = true;
        });
      });
      ledDeleteOnOff[1].addEventListener("click", () => {
        singsDel.forEach((elm) => {
          elm.isVisible = false;
        });
      });
    }
    //set day and night
    var ledDayNight = document.getElementsByClassName("set-day-night");
    setActivnes(ledDayNight, 8, "active-text-color");

    function setDayNightOff(a, b, c, d, e) {
      setDayNight(a, b, e);
      setLightColor(c);
      setLedColor(ledColNum);
      glow.intensity = d;
    }

    for (let i = 0; i < ledDayNight.length; i++) {
      ledDayNight[0].addEventListener("click", () => {
        setDayNightOff(0.6, 0, 4, 0, 0.7);
        lightColorSet.style.display = "none";
      });
      ledDayNight[1].addEventListener("click", () => {
        setDayNightOff(0.6, 0, 4, 0.8, 0.7);
        if (colorLedOn) lightColorSet.style.display = "block";
      });
      ledDayNight[2].addEventListener("click", () => {
        setDayNightOff(0.2, 0.5, ledColNum, 0.8, 1.15);
        if (colorLedOn) lightColorSet.style.display = "block";
      });
    }
    //set colors
    let colorLightContainer = document.getElementsByClassName(
      "color-light-container"
    );
    for (let i = 0; i < colorLightContainer.length; i++) {
      colorLightContainer[i].style.backgroundColor = lightColors[i];
      colorLightContainer[i].addEventListener("click", () => {
        //html
        var currentActColLig = document.getElementsByClassName(
          "active-color-light-contaier"
        );
        //change active color
        currentActColLig[0].className = currentActColLig[0].className.replace(
          " active-color-light-contaier",
          ""
        );
        colorLightContainer[i].className += " active-color-light-contaier";
        //babylon
        ledColNum = i;
        setLightColor(ledColNum);
        setLedColor(ledColNum);
      });
    }
  }

  //7 DUBINSKI STUB Befestigungsmethode Pfosten
  let befePfostenParts = document.getElementsByClassName(
    "set-part-befe-pfosten"
  );
  setActivnes(befePfostenParts, 9, "active-text-color");

  function setbefePfosten(a, b, c, d, e, f, g) {
    //post roots
    for (let i = 0; i < allPosts.length; i++) {
      if (allPosts[i].isVisible) {
        roots[i * 2].isVisible = roots[i * 2 + 1].isVisible = c;
      }
    }
    // roots.forEach((elm) => {
    //   elm.isVisible = c;
    // });
    if (!directeHauswandMesh.isVisible) {
      if (fencesArr[0].type == "easyFenceHalf") {
        leftPosts[0].scaling.y = f;
        leftPosts[0].position.y = g;
      } else {
        leftPosts[0].scaling.y = a;
        leftPosts[0].position.y = b;
      }
      for (let i = 0; i < fencesArr.length; i++) {
        if (fencesArr[i].type == "easyFenceHalf") {
          //////////////
          let childTypeSetPhosten = 0;
          for (let j = 0; j < fencesArr[i].children.length; j++) {
            if (fencesArr[fencesArr[i].children[j]].type != "easyFenceHalf") {
              childTypeSetPhosten += 1;
            }
          }
          ////////////
          if (childTypeSetPhosten == 0) {
            rightPosts[i].scaling.z = f;
            rightPosts[i].position.y = g;
          } else {
            rightPosts[i].scaling.z = a;
            rightPosts[i].position.y = b;
          }
        } else {
          rightPosts[i].scaling.z = a;
          rightPosts[i].position.y = b;
        }
      }
      // rightPosts.forEach((elm) => {
      //   elm.scaling.z = a;
      //   elm.position.y = b;
      // });
      if (sturmankersVorderseite[0].isVisible) {
        foundationVisibilty(
          foundationStarts,
          foundations,
          false,
          foundationStartsVord,
          foundationsVord,
          true,
          foundationStartsRuck,
          foundationsRuck,
          false,
          0
        );
      } else if (sturmankersRuckseite[0].isVisible) {
        foundationVisibilty(
          foundationStarts,
          foundations,
          false,
          foundationStartsVord,
          foundationsVord,
          false,
          foundationStartsRuck,
          foundationsRuck,
          true,
          0
        );
      } else {
        foundationVisibilty(
          foundationStarts,
          foundations,
          true,
          foundationStartsVord,
          foundationsVord,
          false,
          foundationStartsRuck,
          foundationsRuck,
          false,
          0
        );
      }
    } else {
      for (let i = 0; i < fencesArr.length; i++) {
        if (fencesArr[i].type == "easyFenceHalf") {
          //////////////
          let childTypeSetPhosten = 0;
          for (let j = 0; j < fencesArr[i].children.length; j++) {
            if (fencesArr[fencesArr[i].children[j]].type != "easyFenceHalf") {
              childTypeSetPhosten += 1;
            }
          }
          ////////////
          if (childTypeSetPhosten == 0) {
            rightPosts[i].scaling.z = f;
            rightPosts[i].position.y = g;
          } else {
            rightPosts[i].scaling.z = a;
            rightPosts[i].position.y = b;
          }
        } else {
          rightPosts[i].scaling.z = a;
          rightPosts[i].position.y = b;
        }
      }
      // rightPosts.forEach((elm) => {
      //   elm.scaling.z = a;
      //   elm.position.y = b;
      // });
      roots[0].isVisible = false;
      roots[1].isVisible = false;
      foundations[0].isVisible = false;
      foundationsVord[0].isVisible = false;
      foundationsRuck[0].isVisible = false;
    }
    //foundation
    for (let i = 1; i < foundations.length; i++) {
      foundations[i].scaling.y = d;
      foundationsVord[i].scaling.z = d;
      foundationsRuck[i].scaling.z = d;

      foundations[i].position.y = e;
      foundationsVord[i].position.z = -e;
      foundationsRuck[i].position.z = -e;
    }
    foundations[0].scaling.y = d;
    foundations[0].position.y = e;

    foundationsVord[0].scaling.y = d;
    foundationsRuck[0].scaling.y = d;

    foundationsVord[0].position.y = e;
    foundationsRuck[0].position.y = e;

    //if hauswand is visible on other posts
    for (let i = 0; i < directeHauswandMeshesRight.length; i++) {
      if (directeHauswandMeshesRight[i].isVisible) {
        rightPosts[i].scaling.z = 1;
        rightPosts[i].position.y = 0.962;
        rightRoots[i].forEach((elm) => {
          elm.isVisible = false;
        });
      }
    }
  }
  var befePfostenSize = 0;
  if (befePfostenParts.length > 0) {
    befePfostenParts[0].addEventListener("click", () => {
      setbefePfosten(1, 0.962, true, 1, -0.5 / 2, 0.524, 0.504);
      // setbefePfosten(0.55, 0.53, true, 1, -0.5 / 2);
      befePfostenSize = 0;
    });
    befePfostenParts[1].addEventListener("click", () => {
      setbefePfosten(1.2, 0.7717, false, 1, -0.5 / 2, 0.724, 0.3119);
      // setbefePfosten(0.75, 0.3397, false, 1, -0.5 / 2);
      befePfostenSize = 1;
    });
    befePfostenParts[2].addEventListener("click", () => {
      setbefePfosten(1.475, 0.511, false, 1.8, -0.9 / 2, 0.999, 0.053);
      // setbefePfosten(1.025, 0.079, false, 1.8, -0.9 / 2);
      befePfostenSize = 2;
    });
  }
  //single post size change
  let pfostensSingle = document.getElementsByClassName(
    "set-part-befe-pfosten-single"
  );
  function changeSinglePostSize(a, b, c, d, e, f, g) {
    for (let i = 0; i < rightPosts.length; i++) {
      if (rightPosts[i].material.id == "selectedMat") {
        if (fencesArr[i].type == "easyFenceHalf") {
          //////////////
          let childTypeSetPhosten = 0;
          for (let j = 0; j < fencesArr[i].children.length; j++) {
            if (fencesArr[fencesArr[i].children[j]].type != "easyFenceHalf") {
              childTypeSetPhosten += 1;
            }
          }
          ////////////
          if (childTypeSetPhosten == 0) {
            rightPosts[i].scaling.z = f;
            rightPosts[i].position.y = g;
          } else {
            rightPosts[i].scaling.z = a;
            rightPosts[i].position.y = b;
          }
        } else {
          rightPosts[i].scaling.z = a;
          rightPosts[i].position.y = b;
        }

        rightRoots[i].forEach((elm) => {
          elm.isVisible = c;
        });

        foundations[i + 1].scaling.y = d;
        foundationsVord[i + 1].scaling.z = d;
        foundationsRuck[i + 1].scaling.z = d;

        foundations[i + 1].position.y = -e;
        foundationsVord[i + 1].position.z = e;
        foundationsRuck[i + 1].position.z = e;
      }
    }
    if (leftPosts[0].material.id == "selectedMat") {
      if (fencesArr[0].type == "easyFenceHalf") {
        leftPosts[0].scaling.y = f;
        leftPosts[0].position.y = g;
      } else {
        leftPosts[0].scaling.y = a;
        leftPosts[0].position.y = b;
      }
      roots[0].isVisible = roots[1].isVisible = c;

      foundations[0].scaling.y = d;
      foundationsVord[0].scaling.y = d;
      foundationsRuck[0].scaling.y = d;

      foundations[0].position.y = -e;
      foundationsVord[0].position.y = -e;
      foundationsRuck[0].position.y = -e;
    }
  }
  pfostensSingle[0].addEventListener("click", () => {
    changeSinglePostSize(1, 0.962, true, 1, 0.25, 0.524, 0.504);
    setActivnesStyle(pfostensSingle, 0, 0, "active-text-color-single-pfosten");
  });
  pfostensSingle[1].addEventListener("click", () => {
    changeSinglePostSize(1.2, 0.7717, false, 1, 0.25, 0.724, 0.3119);
    setActivnesStyle(pfostensSingle, 0, 1, "active-text-color-single-pfosten");
  });
  pfostensSingle[2].addEventListener("click", () => {
    changeSinglePostSize(1.475, 0.511, false, 1.8, 0.45, 0.999, 0.053);
    setActivnesStyle(pfostensSingle, 0, 2, "active-text-color-single-pfosten");
  });
  //8 STURMANKER
  let sturmankerCon = document.getElementsByClassName("sturmanker-con");
  setActivnes(sturmankerCon, 10, "active-text-color");
  function setSturmanker(a, b, c, d, e) {
    for (let i = 0; i < allPosts.length; i++) {
      if (!leds[i].isVisible && allPosts[i].isVisible) {
        sturmankersRuckseite[i].isVisible = a;
        sturRuckseiteSrafs[i].isVisible = a;
        sturmankersVorderseite[i].isVisible = b;
        sturVorderseiteSrafs[i].isVisible = b;

        foundationVisibilty(
          foundationStarts,
          foundations,
          c,
          foundationStartsVord,
          foundationsVord,
          d,
          foundationStartsRuck,
          foundationsRuck,
          e,
          i
        );
      }
    }
    if (directeHauswandMesh.isVisible) {
      sturmankersRuckseite[0].isVisible = false;
      sturRuckseiteSrafs[0].isVisible = false;
      sturmankersVorderseite[0].isVisible = false;
      sturVorderseiteSrafs[0].isVisible = false;
    }
  }
  if (sturmankerCon.length > 0) {
    var vorderseiteOn = false;
    var ruckseiteOn = false;
    var strurmOn = false;

    function sturmankerFunction(a, b, c, d, e, f, g) {
      //display onstrumanker if led is not on
      if (ledsOn < 1) {
        modalFade.style.display = "block";
        onSturmanker.style.display = "block";
        setSturmanker(a, b, c, d, e);
        strurmOn = true;
        setDayNight(0.6, 0.8, 0.7);
      } else {
        singsWar.forEach((elm) => {
          elm.isVisible = false;
        });
        for (let i = 0; i < leds.length; i++) {
          setDayNight(0.6, 0.8, 0.7);
          setLightColor(4);
          // setLedColor(ledColNum);
          glow.intensity = 0;
          //set sings
          if (leds[i].isVisible) {
            singsWar[i].isVisible = true;
          } else {
            setSturmanker(a, b, c, d, e);
          }
          singsDel[i].isVisible = false;
        }
        //set activnes on leds parts to turn of led
        setActivnesStyle(ledDayNight, 8, 0, "active-text-color");
      }
      //set wich one is activ
      vorderseiteOn = f;
      ruckseiteOn = g;
      for (let i = 0; i < directeHauswandMeshesRight.length; i++) {
        if (directeHauswandMeshesRight[i].isVisible) {
          sturmankersVorderseiteRight[i].forEach((elm) => {
            elm.isVisible = false;
          });
          sturmankersRuckseiteRight[i].forEach((elm) => {
            elm.isVisible = false;
          });
          foundationVisibilty(
            foundationStarts,
            foundations,
            false,
            foundationStartsVord,
            foundationsVord,
            false,
            foundationStartsRuck,
            foundationsRuck,
            false,
            i + 1
          );
        }
      }
    }
    sturmankerCon[0].addEventListener("click", () => {
      intersectionFunction(
        fakeFronts,
        fakeFences,
        sturmankersVorderseite,
        sturVorderseiteSrafs,
        leds,
        singsDel,
        singsWar,
        fakeBacks,
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations,
        foundationStartsVord,
        foundationsVord,
        foundationStartsRuck,
        foundationsRuck
      );
      singsWar.forEach((elm) => {
        elm.isVisible = false;
      });
      sturmankerFunction(true, false, false, false, true, false, true);
      //select stur
      sturSelectionFun(
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations
      );
    });
    sturmankerCon[1].addEventListener("click", () => {
      setSturmanker(false, false, true, false, false);
      //turn off warnig sings
      singsWar.forEach((elm) => {
        elm.isVisible = false;
      });
      //set wich one is active
      vorderseiteOn = false;
      ruckseiteOn = false;
      strurmOn = false;
      for (let i = 0; i < directeHauswandMeshesRight.length; i++) {
        if (directeHauswandMeshesRight[i].isVisible) {
          foundationVisibilty(
            foundationStarts,
            foundations,
            false,
            foundationStartsVord,
            foundationsVord,
            false,
            foundationStartsRuck,
            foundationsRuck,
            false,
            i + 1
          );
        }
      }
    });
    sturmankerCon[2].addEventListener("click", () => {
      intersectionFunction(
        fakeFronts,
        fakeFences,
        sturmankersVorderseite,
        sturVorderseiteSrafs,
        leds,
        singsDel,
        singsWar,
        fakeBacks,
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations,
        foundationStartsVord,
        foundationsVord,
        foundationStartsRuck,
        foundationsRuck
      );
      singsWar.forEach((elm) => {
        elm.isVisible = false;
      });
      sturmankerFunction(false, true, false, true, false, true, false);
      //select stur
      sturSelectionFun(
        sturmankersVorderseite,
        sturVorderseiteSrafs,
        foundationStarts,
        foundations
      );
    });
  }
  // to select sturmanker
  let selectedStur;
  let selectedSraf;
  let selectedFoundStart;
  let selectedFound;
  function sturSelectionFun(a, b, c, d) {
    for (let i = 0; i < a.length; i++) {
      a[i].actionManager = new BABYLON.ActionManager(scene);
      a[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            if (a[i].material.id != "selectedMat") {
              removeSideAccesories(
                sideAccesories,
                deleteAccesorie,
                addFenceAcc,
                editPost,
                addNewFenceToSide
              );
              addDefaultMaterial(
                fenceBoards,
                sturmankersVorderseite,
                rightPosts,
                leftPosts,
                directeHauswandMeshes,
                fenceBoardMat,
                fencePostMat,
                concreteMat,
                smallBoardsArr,
                silberMat,
                anthrazitMat,
                fencesArr,
                addFenceSings,
                grauMat,
                braunMat,
                sandMat,
                woodMaterials,
                topBoards,
                rankelements,
                rightWoodPosts,
                woodTopParts,
                gardoFenceBoards
              );
              a.forEach((elm) => {
                elm.material = fencePostMat;
              });
              a[i].material = selectedMat;
              selectedStur = a[i];
              selectedSraf = b[i];
              selectedFoundStart = c[i];
              selectedFound = d[i];
              sideAccesories.style.display = "block";
              deleteAccesorie[1].style.display = "block";
              addNewFenceToSide.style.display = "none";
              //set day when select sturmanker
              setDayNight(0.6, 0.8, 0.7);
              setLightColor(4);
              glow.intensity = 0;
              singsWar.forEach((elm) => {
                elm.isVisible = false;
              });
              singsDel.forEach((elm) => {
                elm.isVisible = false;
              });
              //set activnes of led when sturamnker is selected
              aaa = 0;
              leds.forEach((elm) => {
                if (elm.isVisible) {
                  aaa += 1;
                }
              });
              aaa > 0
                ? setActivnesStyle(ledParts, 6, 1, "active-text-color")
                : setActivnesStyle(ledParts, 6, 0, "active-text-color");
            } else {
              a.forEach((elm) => {
                elm.material = fencePostMat;
              });
              sideAccesories.style.display = "none";
              deleteAccesorie[1].style.display = "none";
            }
          }
        )
      );
    }
  }

  //to delete sturmanker
  deleteImgAccesories[1].addEventListener("click", () => {
    sideAccesories.style.display = "none";
    deleteAccesorie[1].style.display = "none";
    addFenceAcc.style.display = "none";
    selectedStur.isVisible = false;
    selectedSraf.isVisible = false;
    if (sturmankersVorderseite.includes(selectedStur)) {
      foundationVisibilty(
        foundationStarts,
        foundations,
        true,
        foundationStartsVord,
        foundationsVord,
        false,
        foundationStartsRuck,
        foundationsRuck,
        false,
        sturmankersVorderseite.indexOf(selectedStur)
      );
    } else {
      foundationVisibilty(
        foundationStarts,
        foundations,
        true,
        foundationStartsVord,
        foundationsVord,
        false,
        foundationStartsRuck,
        foundationsRuck,
        false,
        sturmankersRuckseite.indexOf(selectedStur)
      );
    }

    selectedStur.material = fencePostMat;
    //set activnes of sturmanker parts
    var sturNum2 = 0;
    for (let i = 0; i < sturmankersVorderseite.length; i++) {
      if (sturmankersVorderseite[i].isVisible) {
        sturNum2 += 1;
      } else if (sturmankersRuckseite[i].isVisible) {
        sturNum2 += 1;
      }
    }
    if (sturNum2 < 1) {
      setActivnesStyle(sturmankerCon, 10, 1, "active-text-color");
      strurmOn = false;
    }
  });

  //9 BETONSKI STUB SA STRANE
  let directeHauswand = document.getElementsByClassName(
    "set-part-direkte-hauswand"
  );
  setToggleActivnes(directeHauswand, 11);

  var directeHauswandMesh = BABYLON.MeshBuilder.CreateBox(
    "directeHauswandMesh",
    {
      height: 2,
      width: 0.2,
      depth: 0.25,
    }
  );
  directeHauswandMesh.position = new BABYLON.Vector3(-0.1, 1, 0);
  directeHauswandMesh.material = concreteMat;
  directeHauswandMesh.isVisible = false;

  function setHauswand(a, b, c, d, e, f, g, h, j, k) {
    directeHauswandMesh.isVisible = a;
    leftPosts[0].scaling.y = b;
    leftPosts[0].scaling.x = leftPostCaps[0].scaling.x = g;
    leftPosts[0].scaling.z = leftPostCaps[0].scaling.z = h;
    leftPosts[0].position.y = c;
    leftPosts[0].position.x = leftPostCaps[0].position.x = j;
    // leftPostCaps[0].position.y = k;

    if (roots[3].isVisible && !directeHauswandMesh.isVisible) {
      roots[0].isVisible = roots[1].isVisible = true;
    } else if (
      (roots[3].isVisible && directeHauswandMesh.isVisible) ||
      (!roots[3].isVisible && !directeHauswandMesh.isVisible) ||
      (!roots[3].isVisible && directeHauswandMesh.isVisible)
    ) {
      roots[0].isVisible = roots[1].isVisible = false;
    }
    foundationVisibilty(
      foundationStarts,
      foundations,
      d,
      foundationStartsVord,
      foundationsVord,
      e,
      foundationStartsRuck,
      foundationsRuck,
      f,
      0
    );
    // foundationStarts[0].isVisible = foundations[0].isVisible = d;
  }

  directeHauswandMesh.actionManager = new BABYLON.ActionManager(scene);
  directeHauswandMeshes.push(directeHauswandMesh);
  directeHauswandMesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      function () {
        if (directeHauswandMesh.material.id != "selectedMat") {
          removeSideAccesories(
            sideAccesories,
            deleteAccesorie,
            addFenceAcc,
            editPost,
            addNewFenceToSide
          );
          addDefaultMaterial(
            fenceBoards,
            sturmankersVorderseite,
            rightPosts,
            leftPosts,
            directeHauswandMeshes,
            fenceBoardMat,
            fencePostMat,
            concreteMat,
            smallBoardsArr,
            silberMat,
            anthrazitMat,
            fencesArr,
            addFenceSings,
            grauMat,
            braunMat,
            sandMat,
            woodMaterials,
            topBoards,
            rankelements,
            rightWoodPosts,
            woodTopParts,
            gardoFenceBoards
          );
          directeHauswandMesh.material = selectedMat;
          sideAccesories.style.display = "block";
          deleteAccesorie[0].style.display = "block";
          addNewFenceToSide.style.display = "none";
          singsDel[0].isVisible = false;
          //set day when select sturmanker
          setDayNight(0.6, 0.8, 0.7);
          setLightColor(4);
          glow.intensity = 0;
          singsWar.forEach((elm) => {
            elm.isVisible = false;
          });
          singsDel.forEach((elm) => {
            elm.isVisible = false;
          });
          //set activnes of led when sturamnker is selected
          aaa = 0;
          leds.forEach((elm) => {
            if (elm.isVisible) {
              aaa += 1;
            }
          });
          aaa > 0
            ? setActivnesStyle(ledParts, 6, 1, "active-text-color")
            : setActivnesStyle(ledParts, 6, 0, "active-text-color");
        } else {
          directeHauswandMesh.material = concreteMat;
          sideAccesories.style.display = "none";
          deleteAccesorie[0].style.display = "none";
          addFenceAcc.style.display = "none";
        }
      }
    )
  );

  deleteImgAccesories[0].addEventListener("click", () => {
    sideAccesories.style.display = "none";
    deleteAccesorie[0].style.display = "none";
    addFenceAcc.style.display = "none";
    if (directeHauswandMeshes[0].material.id == "selectedMat") {
      addRemoveHauswand();
      directeHauswandMesh.material = concreteMat;
      var currentActCol = document.getElementsByClassName("active-text-color");
      currentActCol[11].className = currentActCol[11].className.replace(
        " active-text-color",
        ""
      );
      directeHauswand[0].children[2].innerHTML = "";
      togAct = false;
    }
    for (let i = 0; i < directeHauswandMeshesRight.length; i++) {
      if (directeHauswandMeshesRight[i].material.id == "selectedMat") {
        directeHauswandMeshesRight[i].material = concreteMat;
        directeHauswandMeshesRight[i].isVisible = false;
        directeHauswandMeshesRight[i].scaling.z = directeHauswandMeshesRight[
          i
        ].scaling.x = 1;
        directeHauswandMeshesRight[i].position.z =
          directeHauswandMeshesRight[i].position.z + 0.05;
        directeHauswandMeshesRight[i].position.x =
          directeHauswandMeshesRight[i].position.x - 0.05;
        foundationStartsRight[i].isVisible = true;
        foundationVisibilty(
          foundationStarts,
          foundations,
          true,
          foundationStartsVord,
          foundationsVord,
          false,
          foundationStartsRuck,
          foundationsRuck,
          false,
          i + 1
        );
        if (befePfostenSize == 0) {
          rightPosts[i].scaling.z =
            rightPosts[i].scaling.y =
            rightPosts[i].scaling.x =
            rightPostCaps[i].scaling.x =
            rightPostCaps[i].scaling.y =
              1;
          rightPostCaps[i].position.y = rightPostCaps[i].position.y + 0.01;
          rightPosts[i].position.y = 0.962;
          rightRoots[i].forEach((elm) => {
            elm.isVisible = true;
          });
          foundations[i + 1].scaling.y = 1;
          foundations[i + 1].position.y = -0.5 / 2;
        }
        if (befePfostenSize == 1) {
          rightPosts[i].scaling.z = 1.2;
          rightPosts[i].scaling.y =
            rightPosts[i].scaling.x =
            rightPostCaps[i].scaling.x =
            rightPostCaps[i].scaling.y =
              1;
          rightPostCaps[i].position.y = rightPostCaps[i].position.y + 0.01;
          rightPosts[i].position.y = 0.7717;
          foundations[i + 1].scaling.y = 1;
          foundations[i + 1].position.y = -0.5 / 2;
        }
        if (befePfostenSize == 2) {
          rightPosts[i].scaling.z = 1.475;
          rightPosts[i].scaling.y =
            rightPosts[i].scaling.x =
            rightPostCaps[i].scaling.x =
            rightPostCaps[i].scaling.y =
              1;
          rightPostCaps[i].position.y = rightPostCaps[i].position.y + 0.01;
          rightPosts[i].position.y = 0.511;
          foundations[i + 1].scaling.y = 1.8;
          foundations[i + 1].position.y = -0.9 / 2;
        }
      }
    }
  });

  function addRemoveHauswand() {
    if (!directeHauswandMesh.isVisible && leftPosts[0].scaling.y > 0.99) {
      setHauswand(
        true,
        1,
        0.962,
        false,
        false,
        false,
        0.7,
        0.7,
        -0.005
        // leftPostCaps[0].position.y
      );
      sturmankersRuckseite[0].isVisible = false;
      sturRuckseiteSrafs[0].isVisible = false;
      sturmankersVorderseite[0].isVisible = false;
      sturVorderseiteSrafs[0].isVisible = false;
      leds[0].isVisible = false;
      // lightsLed[0].intensity = 0;
    } else if (directeHauswandMesh.isVisible && leftPosts[0].scaling.y > 0.99) {
      setHauswand(
        false,
        1,
        0.962,
        true,
        false,
        false,
        1,
        1,
        0
        // leftPostCaps[0].position.y
      );
      foundationStarts[0].scaling.z = foundations[0].scaling.y = 1;
      foundationStarts[0].position.z = 0;
      foundations[0].position.y = -0.5 / 2;
      directeHauswandMesh.material = concreteMat;
    } else {
      if (togAct) {
        document.getElementsByClassName("active-text-color")[11].className =
          document
            .getElementsByClassName("active-text-color")[11]
            .className.replace(" active-text-color", "");
        directeHauswand[0].children[2].innerHTML = "";
        togAct = false;
      }
    }
  }

  if (directeHauswand.length > 0) {
    directeHauswand[0].addEventListener("click", () => {
      addRemoveHauswand();
    });
  }

  //10 DELETE SINGLE FENCE BOARD ALL
  let delSingBut = document.getElementsByClassName("del-sing-btns");
  let numOfBords = document.getElementById("numOfBords");
  let numOfBordsVal = 8;
  delSingBut[0].onclick = () => {
    if (numOfBordsVal > 1) {
      numOfBordsVal -= 1;
      numOfBords.innerHTML = numOfBordsVal;
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          (fencesArr[i].type == "easyFence" &&
            numOfBordsVal + 1 == fencesArr[i].numOfBoards) ||
          (fencesArr[i].type == "easyFenceInlaysAnth" &&
            numOfBordsVal + 1 == fencesArr[i].numOfBoards) ||
          (fencesArr[i].type == "easyFenceInlaysSilber" &&
            numOfBordsVal + 1 == fencesArr[i].numOfBoards)
        ) {
          fenceBoards[i][numOfBordsVal].isVisible = false;
          if (fencesArr[i].laisnes[numOfBordsVal - 1])
            laisnes[i][numOfBordsVal - 1].isVisible = false;
          if (
            (fencesArr[i].type == "easyFenceInlaysAnth" &&
              numOfBordsVal == 6) ||
            (fencesArr[i].type == "easyFenceInlaysSilber" && numOfBordsVal == 6)
          ) {
            inlays[i][0].isVisible = false;
            inlays[i][2].isVisible = false;
          }
          startParts[i].position.y =
            fenceBoards[i][numOfBordsVal - 1].position.y + 0.23 / 2 + 0.005;
          fencesArr[i].numOfBoards = numOfBordsVal;
        }
        if (
          fencesArr[i].type == "easyFenceHalf" &&
          numOfBordsVal < 4 &&
          numOfBordsVal + 1 == fencesArr[i].numOfBoards
        ) {
          fenceBoards[i][numOfBordsVal].isVisible = false;
          if (fencesArr[i].laisnes[numOfBordsVal - 1])
            laisnes[i][numOfBordsVal - 1].isVisible = false;
          startParts[i].position.y =
            fenceBoards[i][numOfBordsVal - 1].position.y + 0.23 / 2 + 0.005;
          fencesArr[i].numOfBoards = numOfBordsVal;
        }
      }
    }
  };

  delSingBut[1].onclick = () => {
    if (numOfBordsVal < 8) {
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          (fencesArr[i].type == "easyFence" &&
            fenceBoards[i][numOfBordsVal].isVisible == false &&
            numOfBordsVal == fencesArr[i].numOfBoards) ||
          (fencesArr[i].type == "easyFenceInlaysAnth" &&
            fenceBoards[i][numOfBordsVal].isVisible == false &&
            numOfBordsVal == fencesArr[i].numOfBoards) ||
          (fencesArr[i].type == "easyFenceInlaysSilber" &&
            fenceBoards[i][numOfBordsVal].isVisible == false &&
            numOfBordsVal == fencesArr[i].numOfBoards)
        ) {
          fenceBoards[i][numOfBordsVal].isVisible = true;
          if (fencesArr[i].laisnes[numOfBordsVal - 1])
            laisnes[i][numOfBordsVal - 1].isVisible = true;
          if (
            (fencesArr[i].type == "easyFenceInlaysAnth" &&
              numOfBordsVal == 6) ||
            (fencesArr[i].type == "easyFenceInlaysSilber" && numOfBordsVal == 6)
          ) {
            inlays[i][0].isVisible = true;
            inlays[i][2].isVisible = true;
            fenceBoards[i][numOfBordsVal].isVisible = false;
          }
          startParts[i].position.y =
            fenceBoards[i][numOfBordsVal].position.y + 0.23 / 2 + 0.005;
          fencesArr[i].numOfBoards = numOfBordsVal + 1;
        }
        if (
          fencesArr[i].type == "easyFenceHalf" &&
          numOfBordsVal < 4 &&
          numOfBordsVal == fencesArr[i].numOfBoards
        ) {
          fenceBoards[i][numOfBordsVal].isVisible = true;
          if (fencesArr[i].laisnes[numOfBordsVal - 1])
            laisnes[i][numOfBordsVal - 1].isVisible = true;
          startParts[i].position.y =
            fenceBoards[i][numOfBordsVal].position.y + 0.23 / 2 + 0.005;
          fencesArr[i].numOfBoards = numOfBordsVal + 1;
        }
      }
      numOfBordsVal += 1;
      numOfBords.innerHTML = numOfBordsVal;
    }
  };

  //SET MATERIALS TO RECIVE MORE THEN 4 LIGHTS
  scene.materials.forEach(function (mtl) {
    mtl.maxSimultaneousLights = 100;
  });

  // ACCESORIES SECTION FUNCTIONS*****************************************************************************************
  function unselect(activnesToFalse) {
    // sideAccesories.style.width = 0;
    sideAccesories.style.display = "none";
    for (let j = 0; j < deleteAccesorie.length; j++) {
      deleteAccesorie[j].style.display = "none";
    }
    addFenceAcc.style.display = "none";
    closeSliderContainer();
    closecombineFencesContainer();
    addDefaultMaterial(
      fenceBoards,
      sturmankersVorderseite,
      rightPosts,
      leftPosts,
      directeHauswandMeshes,
      fenceBoardMat,
      fencePostMat,
      concreteMat,
      smallBoardsArr,
      silberMat,
      anthrazitMat,
      fencesArr,
      addFenceSings,
      grauMat,
      braunMat,
      sandMat,
      woodMaterials,
      topBoards,
      rankelements,
      rightWoodPosts,
      woodTopParts,
      gardoFenceBoards
    );
    addFenceSings;
    if (activnesToFalse) {
      setTimeout(() => {
        activeFence = false;
      }, 100);
    }
  }
  function accCloseButFun(clickable) {
    if (typeof clickable.length == "number") {
      for (let i = 0; i < clickable.length; i++) {
        clickable[i].addEventListener("click", () => {
          unselect(true);
        });
      }
    } else {
      clickable.addEventListener("click", () => {
        unselect(true);
      });
    }
  }

  //set activnes for add fence
  let changeFence = document.getElementsByClassName(
    "set-activnes-change-fence"
  );
  setActivnes(changeFence, 0, "active-text-color");

  //close add new fence accesoire when close button
  accCloseButFun(sideAccCloseBtn);

  //fFUNCTION  TO CHANGE FENCES
  function changeFenceFunction(a, b, c, d, e, f, g, h, k) {
    fenceBoards[h].forEach((elm) => {
      elm.isVisible = a;
    });
    startParts[h].isVisible = endParts[h].isVisible = a;

    smallBoardsArr[h].isVisible = b;

    changePosAndScaleFence(c, h);
    positionChildrenOnParentSizeChange(h);
    fencesArr[h].type = d;
    fencesArr[h].smBoaCol = e;
    fencesArr[h].size = c;
    fencesArr[h].inlays = g;
    fencesArr[h].numOfBoards = k;
    if (fencesArr[h].inlays == 0) {
      inlays[h][0].isVisible = false;
      inlays[h][2].isVisible = false;
    }
    if (fencesArr[h].inlays > 0) {
      if (fencesArr[h].inlays == 1) inlays[h][2].material = silberMat;
      if (fencesArr[h].inlays == 2) inlays[h][2].material = anthrazitMat;
      inlays[h][0].material.albedoColor = inlays[h][2].material.diffuseColor;
      inlays[h][0].isVisible = true;
      inlays[h][2].isVisible = true;
      fenceBoards[h][6].isVisible = false;
    }
    //set inlays to ohne
    aaa = 0;
    inlays.forEach((elm) => {
      if (elm[0].isVisible) {
        aaa += 1;
      }
    });
    if (aaa < 1) {
      setActivnesStyle(designInlays, 4, 0, "active-text-color");
      inlaysOn = 0;
    }
    //set laisnes
    for (let i = 0; i < fencesArr[h].laisnes.length; i++) {
      if (fencesArr[h].laisnes[i]) {
        laisnes[h][i].isVisible = f;
      }
    }
    //set fence height///////////////////////////
    if (d == "easyFenceHalf") {
      // del hauswand when half fence activated
      if (directeHauswandMesh.isVisible) {
        addRemoveHauswand();
        directeHauswandMesh.material = concreteMat;
        var currentActCol =
          document.getElementsByClassName("active-text-color");
        currentActCol[11].className = currentActCol[11].className.replace(
          " active-text-color",
          ""
        );
        directeHauswand[0].children[2].innerHTML = "";
        togAct = false;
      }
      //right hauswands
      if (directeHauswandMeshesRight[h].isVisible) {
        directeHauswandMeshesRight[h].material = concreteMat;
        directeHauswandMeshesRight[h].isVisible = false;
        directeHauswandMeshesRight[h].scaling.z = directeHauswandMeshesRight[
          h
        ].scaling.x = 1;
        directeHauswandMeshesRight[h].position.z =
          directeHauswandMeshesRight[h].position.z + 0.05;
        directeHauswandMeshesRight[h].position.x =
          directeHauswandMeshesRight[h].position.x - 0.05;
        foundationStartsRight[h].isVisible = true;
        foundationVisibilty(
          foundationStarts,
          foundations,
          true,
          foundationStartsVord,
          foundationsVord,
          false,
          foundationStartsRuck,
          foundationsRuck,
          false,
          h + 1
        );
        if (befePfostenSize == 0) {
          rightPosts[h].scaling.z =
            rightPosts[h].scaling.y =
            rightPosts[h].scaling.x =
            rightPostCaps[h].scaling.x =
            rightPostCaps[h].scaling.y =
              1;
          rightPostCaps[h].position.y = rightPostCaps[h].position.y + 0.01;
          rightPosts[h].position.y = 0.962;
          rightRoots[h].forEach((elm) => {
            elm.isVisible = true;
          });
          foundations[h + 1].scaling.y = 1;
          foundations[h + 1].position.y = -0.5 / 2;
        }
        if (befePfostenSize == 1) {
          rightPosts[h].scaling.z = 1.2;
          rightPosts[h].scaling.y =
            rightPosts[h].scaling.x =
            rightPostCaps[h].scaling.x =
            rightPostCaps[h].scaling.y =
              1;
          rightPostCaps[h].position.y = rightPostCaps[h].position.y + 0.01;
          rightPosts[h].position.y = 0.7717;
          foundations[h + 1].scaling.y = 1;
          foundations[h + 1].position.y = -0.5 / 2;
        }
        if (befePfostenSize == 2) {
          rightPosts[h].scaling.z = 1.475;
          rightPosts[h].scaling.y =
            rightPosts[h].scaling.x =
            rightPostCaps[h].scaling.x =
            rightPostCaps[h].scaling.y =
              1;
          rightPostCaps[h].position.y = rightPostCaps[h].position.y + 0.01;
          rightPosts[h].position.y = 0.511;
          foundations[h + 1].scaling.y = 1.8;
          foundations[h + 1].position.y = -0.9 / 2;
        }
      }
      ///////////// end of deleting hauswand when half size
      for (let i = 4; i < fenceBoards[h].length; i++) {
        fenceBoards[h][i].isVisible = false;
      }
      laisnes[h].forEach((elm) => {
        elm.isVisible = false;
      });
      for (let i = 0; i < 3; i++) {
        if (fencesArr[h].laisnes[i]) {
          laisnes[h][i].isVisible = true;
        }
      }

      //children
      let childType = 0;
      for (let i = 0; i < fencesArr[h].children.length; i++) {
        if (
          fencesArr[fencesArr[h].children[i]].type != "easyFenceHalf" &&
          fencesArr[fencesArr[h].children[i]].type != "gardoHalf"
        ) {
          childType += 1;
        }
      }
      if (childType == 0) {
        if (rightPosts[h].scaling.z < 1.1) {
          rightPosts[h].scaling.z = 0.524;
          rightPosts[h].position.y = 0.504;
        }
        if (rightPosts[h].scaling.z > 1 && rightPosts[h].scaling.z < 1.4) {
          rightPosts[h].scaling.z = 0.724;
          rightPosts[h].position.y = 0.3119;
        }
        if (rightPosts[h].scaling.z > 1.4) {
          rightPosts[h].scaling.z = 0.999;
          rightPosts[h].position.y = 0.053;
        }
        rightPostCaps[h].isVisible = false;
        rightPostCapClones[h].isVisible = true;
        ledsRight[h].scaling.z = 0.524;
        ledsRight[h].position.z = 0.46;
        ledsRight[h].position.y = 0.001;
      }

      //parent
      if (h > 0) {
        if (
          fencesArr[fencesArr[h].parent].type == "easyFenceHalf" ||
          fencesArr[fencesArr[h].parent].type == "gardoHalf"
        ) {
          let fenceSibling = 0;
          for (
            let i = 0;
            i < fencesArr[fencesArr[h].parent].children.length;
            i++
          ) {
            if (
              fencesArr[fencesArr[fencesArr[h].parent].children[i]].type !=
                "easyFenceHalf" &&
              fencesArr[fencesArr[fencesArr[h].parent].children[i]].type !=
                "gardoHalf"
            ) {
              fenceSibling += 1;
            }
          }
          if (fenceSibling < 1) {
            if (rightPosts[fencesArr[h].parent].scaling.z < 1.1) {
              rightPosts[fencesArr[h].parent].scaling.z = 0.524;
              rightPosts[fencesArr[h].parent].position.y = 0.504;
            }
            if (
              rightPosts[fencesArr[h].parent].scaling.z > 1 &&
              rightPosts[fencesArr[h].parent].scaling.z < 1.4
            ) {
              rightPosts[fencesArr[h].parent].scaling.z = 0.724;
              rightPosts[fencesArr[h].parent].position.y = 0.3119;
            }
            if (rightPosts[fencesArr[h].parent].scaling.z > 1.4) {
              rightPosts[fencesArr[h].parent].scaling.z = 0.999;
              rightPosts[fencesArr[h].parent].position.y = 0.053;
            }
            rightPostCaps[fencesArr[h].parent].isVisible = false;
            rightPostCapClones[fencesArr[h].parent].isVisible = true;
            ledsRight[fencesArr[h].parent].scaling.z = 0.524;
            ledsRight[fencesArr[h].parent].position.z = 0.46;
            ledsRight[fencesArr[h].parent].position.y = 0.001;
          }
        }
      }

      if (h == 0) {
        if (leftPosts[0].scaling.y < 1.1) {
          leftPosts[0].scaling.y = 0.524;
          leftPosts[0].position.y = 0.504;
        }
        if (leftPosts[0].scaling.y > 1 && leftPosts[0].scaling.y < 1.4) {
          leftPosts[0].scaling.y = 0.724;
          leftPosts[0].position.y = 0.3119;
        }
        if (leftPosts[0].scaling.y > 1.4) {
          leftPosts[0].scaling.y = 0.999;
          leftPosts[0].position.y = 0.053;
        }
        leftPostCaps[0].position.y = 0.052;
        leds[h].scaling.y = 0.524;
        leds[h].position.y = 0.5;
        leds[h].position.z = 0.001;
      }
      startParts[h].position.y =
        fenceBoards[h][3].position.y + 0.23 / 2 + 0.005;
    } else {
      for (let i = 4; i < fenceBoards[h].length; i++) {
        if (d == "easyRomBig" || d == "easyRomSmall") {
          fenceBoards[h][i].isVisible = false;
        } else {
          fenceBoards[h][i].isVisible = true;
        }
      }
      ledsRight[h].scaling.z = 1;
      ledsRight[h].position.z = 0;
      ledsRight[h].position.y = 0.001;
      if (fencesArr[h].inlays > 0) {
        fenceBoards[h][6].isVisible = false;
      }
      startParts[h].position.y =
        fenceBoards[h][7].position.y + 0.23 / 2 + 0.005;
      if (rightPosts[h].scaling.z < 0.6) {
        rightPosts[h].scaling.z = 1;
        rightPosts[h].position.y = 0.962;
      }
      if (rightPosts[h].scaling.z > 0.6 && rightPosts[h].scaling.z < 0.9) {
        rightPosts[h].scaling.z = 1.2;
        rightPosts[h].position.y = 0.7717;
      }
      if (rightPosts[h].scaling.z > 0.9 && rightPosts[h].scaling.z < 1) {
        rightPosts[h].scaling.z = 1.475;
        rightPosts[h].position.y = 0.511;
      }
      rightPostCaps[h].isVisible = true;
      rightPostCapClones[h].isVisible = false;

      if (h == 0) {
        if (leftPosts[0].scaling.y < 0.6) {
          leftPosts[0].scaling.y = 1;
          leftPosts[0].position.y = 0.962;
        }
        if (leftPosts[0].scaling.y > 0.6 && leftPosts[0].scaling.y < 0.9) {
          leftPosts[0].scaling.y = 1.2;
          leftPosts[0].position.y = 0.7717;
        }
        if (leftPosts[0].scaling.y > 0.9 && leftPosts[0].scaling.y < 1) {
          leftPosts[0].scaling.y = 1.475;
          leftPosts[0].position.y = 0.511;
        }
        leftPostCaps[0].position.y = 0.962;
        leds[h].scaling.y = 1;
        leds[h].position.y = 0.962;
        leds[h].position.z = 0.001;
      }
      //set parent right post
      if (h > 0 && fencesArr[h].parent != undefined) {
        if (rightPosts[fencesArr[h].parent].scaling.z < 0.6) {
          rightPosts[fencesArr[h].parent].scaling.z = 1;
          rightPosts[fencesArr[h].parent].position.y = 0.962;
        }
        if (
          rightPosts[fencesArr[h].parent].scaling.z > 0.6 &&
          rightPosts[fencesArr[h].parent].scaling.z < 0.9
        ) {
          rightPosts[fencesArr[h].parent].scaling.z = 1.2;
          rightPosts[fencesArr[h].parent].position.y = 0.7717;
        }
        if (
          rightPosts[fencesArr[h].parent].scaling.z > 0.9 &&
          rightPosts[fencesArr[h].parent].scaling.z < 1
        ) {
          rightPosts[fencesArr[h].parent].scaling.z = 1.475;
          rightPosts[fencesArr[h].parent].position.y = 0.511;
        }
        rightPostCaps[fencesArr[h].parent].isVisible = true;
        rightPostCapClones[fencesArr[h].parent].isVisible = false;
        ledsRight[fencesArr[h].parent].scaling.z = 1;
        ledsRight[fencesArr[h].parent].position.z = 0;
        ledsRight[fencesArr[h].parent].position.y = 0.001;
      }
    }
    //set ground size
    setGround();
  }

  changeFence[0].addEventListener("click", () => {
    changeFenceFunction(
      true,
      false,
      180,
      "easyFence",
      "silber",
      true,
      0,
      activeFence,
      8
    );
  });
  changeFence[1].addEventListener("click", () => {
    changeFenceFunction(
      true,
      false,
      180,
      "easyFenceInlaysSilber",
      "silber",
      true,
      1,
      activeFence,
      8
    );
  });
  changeFence[2].addEventListener("click", () => {
    changeFenceFunction(
      true,
      false,
      180,
      "easyFenceInlaysAnth",
      "silber",
      true,
      2,
      activeFence,
      8
    );
  });
  changeFence[3].addEventListener("click", () => {
    changeFenceFunction(
      false,
      true,
      180,
      "easyRomBig",
      "silber",
      false,
      0,
      activeFence,
      8
    );
  });
  changeFence[4].addEventListener("click", () => {
    changeFenceFunction(
      false,
      true,
      180,
      "easyRomBig",
      "anthrazit",
      false,
      0,
      activeFence,
      8
    );
  });
  changeFence[5].addEventListener("click", () => {
    changeFenceFunction(
      false,
      true,
      60,
      "easyRomSmall",
      "silber",
      false,
      0,
      activeFence,
      8
    );
  });
  changeFence[6].addEventListener("click", () => {
    changeFenceFunction(
      false,
      true,
      60,
      "easyRomSmall",
      "anthrazit",
      false,
      0,
      activeFence,
      8
    );
  });
  changeFence[7].addEventListener("click", () => {
    changeFenceFunction(
      true,
      false,
      180,
      "easyFenceHalf",
      "silber",
      true,
      0,
      activeFence,
      4
    );
  });
  // SINGLE FENCE EDITING
  //set activnes single fences
  let clickablePartSingleFence = document.getElementsByClassName(
    "set-part-click-title-single"
  );
  for (let i = 0; i < clickablePartSingleFence.length; i++) {
    clickablePartSingleFence[i].onclick = () => {
      if (
        clickablePartSingleFence[i].className !=
        "set-part-click-title-single clicked"
      ) {
        clickablePartSingleFence[i].className = clickablePartSingleFence[
          i
        ].className.replace(" not-clicked", " clicked");
        clickablePartSingleFence[i].children[1].innerHTML = "-";
        clickablePartSingleFence[i].nextElementSibling.style.height = "auto";
      } else if (
        clickablePartSingleFence[i].className ==
        "set-part-click-title-single clicked"
      ) {
        clickablePartSingleFence[i].className = clickablePartSingleFence[
          i
        ].className.replace(" clicked", " not-clicked");
        clickablePartSingleFence[i].children[1].innerHTML = "+";
        clickablePartSingleFence[i].nextElementSibling.style.height = 0;
      }
    };
  }

  //BOARDS COLORS SINGLE FENCE 1
  let boardsMatSingle = document.getElementsByClassName(
    "set-part-main-farbe-single"
  );
  setPartsAndconf(boardsMatSingle, false, fenceBoardsColors);
  setActivnes(boardsMatSingle, 0, "active-text-color-single");

  boardsMatSingle[0].addEventListener("click", () => {
    fencesArr[activeFence].boardCol = "grau";
  });
  boardsMatSingle[1].addEventListener("click", () => {
    fencesArr[activeFence].boardCol = "anthrazit";
  });
  boardsMatSingle[2].addEventListener("click", () => {
    fencesArr[activeFence].boardCol = "braun";
  });
  boardsMatSingle[3].addEventListener("click", () => {
    fencesArr[activeFence].boardCol = "sand";
  });

  //START UND ABSCH SINGLE 2
  let startUndAbschSingle = document.getElementsByClassName(
    "set-part-start-und-absch-single"
  );
  setPartsAndconf(startUndAbschSingle, false, fencePartsColors);
  setActivnes(startUndAbschSingle, 1, "active-text-color-single");

  startUndAbschSingle[0].addEventListener("click", () => {
    fencesArr[activeFence].startUndAbschCol = "silber";
    startParts[activeFence].material = endParts[activeFence].material =
      silberMat;
  });
  startUndAbschSingle[1].addEventListener("click", () => {
    fencesArr[activeFence].startUndAbschCol = "anthrazit";
    startParts[activeFence].material = endParts[activeFence].material =
      anthrazitMat;
  });

  //LAISNES SINGLE FENCE 3
  let designleistensMatSingle = document.getElementsByClassName(
    "set-part-designleisten-aus-aluminium-act-col-single"
  );
  setPartsAndconf(designleistensMatSingle, false, fencePartsColors);
  setActivnes(designleistensMatSingle, 2, "active-text-color-single");

  designleistensMatSingle[0].addEventListener("click", () => {
    fencesArr[activeFence].laisnesCol = "silber";
    laisnes[activeFence].forEach((elm) => {
      elm.material = silberMat;
    });
  });
  designleistensMatSingle[1].addEventListener("click", () => {
    fencesArr[activeFence].laisnesCol = "anthrazit";
    laisnes[activeFence].forEach((elm) => {
      elm.material = anthrazitMat;
    });
  });

  //add lisnes to single fence
  let createLaisneSingle = (laisnePos) => {
    if (fencesArr[activeFence].type != "easyFenceHalf" || laisnePos < 3) {
      laisnes[activeFence][laisnePos].isVisible = true;
      startParts[activeFence].position.y += 0.01;
    }
    laisnes[activeFence][laisnePos].position.y =
      fenceBoards[activeFence][laisnePos].position.y + 0.22 / 2 + 0.005;
    if (laisnePos < 6) {
      inlays[activeFence][0].position.y += 0.01;
      inlays[activeFence][2].position.y += 0.01;
    }
    for (let i = laisnePos; i < 7; i++) {
      fenceBoards[activeFence][i + 1].position.y += 0.01;
      if (i < 6) {
        if (fencesArr[activeFence].laisnes[i + 1]) {
          laisnes[activeFence][i + 1].position.y += 0.01;
        }
      }
    }
    for (let i = 0; i < laisnes.length; i++) {
      if (smallBoardsArr[activeFence].isVisible) {
        laisnes[activeFence].forEach((elm) => {
          elm.isVisible = false;
        });
      }
    }
  };

  //remove lisnes to single fence
  let disposeLaisneSingle = (laisnePos) => {
    if (fencesArr[activeFence].type != "easyFenceHalf" || laisnePos < 3) {
      laisnes[activeFence][laisnePos].isVisible = false;
      startParts[activeFence].position.y -= 0.01;
    }
    if (laisnePos < 6) {
      inlays[activeFence][0].position.y -= 0.01;
      inlays[activeFence][2].position.y -= 0.01;
    }
    for (let i = laisnePos; i < 7; i++) {
      fenceBoards[activeFence][i + 1].position.y -= 0.01;
      if (i < 6) {
        if (fencesArr[activeFence].laisnes[i + 1]) {
          laisnes[activeFence][i + 1].position.y -= 0.01;
        }
      }
    }
  };

  //desingnelisnes check box to active single
  let designleistensSingle = document.getElementsByClassName(
    "set-part-designleisten-aus-aluminium-single"
  );
  if (designleistensSingle.length > 0) {
    let actColSin = "#3967ff";
    let transparentSin = "transparent";
    let emptySin = "";
    function addLaisnesSingle(a, b, c, d, i) {
      designleistensSingle[i].children[0].children[0].style.backgroundColor = a;
      designleistensSingle[i].children[0].children[0].innerHTML = b;
      fencesArr[activeFence].laisnes[i] = c;
      d;
    }

    for (let i = 0; i < designleistensSingle.length; i++) {
      designleistensSingle[i].addEventListener("click", () => {
        if (!fencesArr[activeFence].laisnes[i]) {
          addLaisnesSingle(
            actColSin,
            checkMark,
            true,
            createLaisneSingle(i),
            i
          );
        } else {
          addLaisnesSingle(
            transparentSin,
            emptySin,
            false,
            disposeLaisneSingle(i),
            i
          );
        }
      });
    }
  }
  //4 DELETE SINGLE FENCE BOARD SINGLE
  let delSingButSingle = document.getElementsByClassName("del-sing-btns-sing");
  let numOfBordsSing = document.getElementById("numOfBordsSing");
  // let numOfBordsVal = 8;
  delSingButSingle[0].onclick = () => {
    if (
      fencesArr[activeFence].numOfBoards > 1 &&
      (fencesArr[activeFence].type == "easyFence" ||
        fencesArr[activeFence].type == "easyFenceInlaysAnth" ||
        fencesArr[activeFence].type == "easyFenceInlaysSilber" ||
        fencesArr[activeFence].type == "easyFenceHalf")
    ) {
      fencesArr[activeFence].numOfBoards -= 1;
      numOfBordsSing.innerHTML = fencesArr[activeFence].numOfBoards;
      if (
        fencesArr[activeFence].type == "easyFence" ||
        fencesArr[activeFence].type == "easyFenceInlaysAnth" ||
        fencesArr[activeFence].type == "easyFenceInlaysSilber"
      ) {
        fenceBoards[activeFence][
          fencesArr[activeFence].numOfBoards
        ].isVisible = false;
        if (
          fencesArr[activeFence].laisnes[fencesArr[activeFence].numOfBoards - 1]
        )
          laisnes[activeFence][
            fencesArr[activeFence].numOfBoards - 1
          ].isVisible = false;
        if (
          (fencesArr[activeFence].type == "easyFenceInlaysAnth" &&
            fencesArr[activeFence].numOfBoards == 6) ||
          (fencesArr[activeFence].type == "easyFenceInlaysSilber" &&
            fencesArr[activeFence].numOfBoards == 6)
        ) {
          inlays[activeFence][0].isVisible = false;
          inlays[activeFence][2].isVisible = false;
        }
        startParts[activeFence].position.y =
          fenceBoards[activeFence][fencesArr[activeFence].numOfBoards - 1]
            .position.y +
          0.23 / 2 +
          0.005;
      }
      if (
        fencesArr[activeFence].type == "easyFenceHalf" &&
        fencesArr[activeFence].numOfBoards < 4
      ) {
        fenceBoards[activeFence][
          fencesArr[activeFence].numOfBoards
        ].isVisible = false;
        if (
          fencesArr[activeFence].laisnes[fencesArr[activeFence].numOfBoards - 1]
        )
          laisnes[activeFence][
            fencesArr[activeFence].numOfBoards - 1
          ].isVisible = false;
        startParts[activeFence].position.y =
          fenceBoards[activeFence][fencesArr[activeFence].numOfBoards - 1]
            .position.y +
          0.23 / 2 +
          0.005;
        fencesArr[activeFence].numOfBoards = fencesArr[activeFence].numOfBoards;
      }
    }
  };

  delSingButSingle[1].onclick = () => {
    if (
      fencesArr[activeFence].numOfBoards < 8 &&
      (fencesArr[activeFence].type == "easyFence" ||
        fencesArr[activeFence].type == "easyFenceInlaysAnth" ||
        fencesArr[activeFence].type == "easyFenceInlaysSilber" ||
        fencesArr[activeFence].type == "easyFenceHalf")
    ) {
      if (
        fencesArr[activeFence].type == "easyFence" ||
        fencesArr[activeFence].type == "easyFenceInlaysAnth" ||
        fencesArr[activeFence].type == "easyFenceInlaysSilber"
      ) {
        fenceBoards[activeFence][
          fencesArr[activeFence].numOfBoards
        ].isVisible = true;
        if (
          fencesArr[activeFence].laisnes[fencesArr[activeFence].numOfBoards - 1]
        )
          laisnes[activeFence][
            fencesArr[activeFence].numOfBoards - 1
          ].isVisible = true;
        if (
          (fencesArr[activeFence].type == "easyFenceInlaysAnth" &&
            fencesArr[activeFence].numOfBoards == 6) ||
          (fencesArr[activeFence].type == "easyFenceInlaysSilber" &&
            fencesArr[activeFence].numOfBoards == 6)
        ) {
          inlays[activeFence][0].isVisible = true;
          inlays[activeFence][2].isVisible = true;
          fenceBoards[activeFence][
            fencesArr[activeFence].numOfBoards
          ].isVisible = false;
        }
        startParts[activeFence].position.y =
          fenceBoards[activeFence][fencesArr[activeFence].numOfBoards].position
            .y +
          0.23 / 2 +
          0.005;
        fencesArr[activeFence].numOfBoards += 1;
        numOfBordsSing.innerHTML = fencesArr[activeFence].numOfBoards;
      }
      if (
        fencesArr[activeFence].type == "easyFenceHalf" &&
        fencesArr[activeFence].numOfBoards < 4
      ) {
        fenceBoards[activeFence][
          fencesArr[activeFence].numOfBoards
        ].isVisible = true;
        if (
          fencesArr[activeFence].laisnes[fencesArr[activeFence].numOfBoards - 1]
        )
          laisnes[activeFence][
            fencesArr[activeFence].numOfBoards - 1
          ].isVisible = true;
        startParts[activeFence].position.y =
          fenceBoards[activeFence][fencesArr[activeFence].numOfBoards].position
            .y +
          0.23 / 2 +
          0.005;
        fencesArr[activeFence].numOfBoards = fencesArr[activeFence].numOfBoards;
        fencesArr[activeFence].numOfBoards += 1;
        numOfBordsSing.innerHTML = fencesArr[activeFence].numOfBoards;
      }
    }
  };
  //CHANGE ALL FENCES TO BE SAME AS ACTIVE
  //change all fences same as this
  let changeAllFences = document.getElementById("changeAllFences");
  changeAllFences.onclick = () => {
    if (fencesArr[activeFence].type == "easyFence") {
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          activeFence != i &&
          fencesArr[i].status != "disposedFence" &&
          fencesArr[i].fenceGardo == undefined
        ) {
          changeFenceFunction(
            true,
            false,
            180,
            "easyFence",
            "silber",
            true,
            0,
            i,
            8
          );
        }
      }
      setActivnesStyle(designInlays, 4, 0, "active-text-color");
    }
    if (fencesArr[activeFence].type == "easyFenceInlaysSilber") {
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          activeFence != i &&
          fencesArr[i].status != "disposedFence" &&
          fencesArr[i].fenceGardo == undefined
        ) {
          changeFenceFunction(
            true,
            false,
            180,
            "easyFenceInlaysSilber",
            "silber",
            true,
            1,
            i,
            8
          );
        }
      }
      setActivnesStyle(designInlays, 4, 1, "active-text-color");
    }
    if (fencesArr[activeFence].type == "easyFenceInlaysAnth") {
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          activeFence != i &&
          fencesArr[i].status != "disposedFence" &&
          fencesArr[i].fenceGardo == undefined
        ) {
          changeFenceFunction(
            true,
            false,
            180,
            "easyFenceInlaysAnth",
            "silber",
            true,
            2,
            i,
            8
          );
        }
      }
      setActivnesStyle(designInlays, 4, 2, "active-text-color");
    }
    if (
      fencesArr[activeFence].type == "easyRomBig" &&
      fencesArr[activeFence].smBoaCol == "silber"
    ) {
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          activeFence != i &&
          fencesArr[i].status != "disposedFence" &&
          fencesArr[i].fenceGardo == undefined
        ) {
          changeFenceFunction(
            false,
            true,
            180,
            "easyRomBig",
            "silber",
            false,
            0,
            i,
            8
          );
        }
      }
      setActivnesStyle(designInlays, 4, 0, "active-text-color");
    }
    if (
      fencesArr[activeFence].type == "easyRomBig" &&
      fencesArr[activeFence].smBoaCol == "anthrazit"
    ) {
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          activeFence != i &&
          fencesArr[i].status != "disposedFence" &&
          fencesArr[i].fenceGardo == undefined
        ) {
          changeFenceFunction(
            false,
            true,
            180,
            "easyRomBig",
            "anthrazit",
            false,
            0,
            i,
            8
          );
        }
      }
      setActivnesStyle(designInlays, 4, 0, "active-text-color");
    }
    if (
      fencesArr[activeFence].type == "easyRomSmall" &&
      fencesArr[activeFence].smBoaCol == "silber"
    ) {
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          activeFence != i &&
          fencesArr[i].status != "disposedFence" &&
          fencesArr[i].fenceGardo == undefined
        ) {
          changeFenceFunction(
            false,
            true,
            60,
            "easyRomSmall",
            "silber",
            false,
            0,
            i,
            8
          );
        }
      }
      setActivnesStyle(designInlays, 4, 0, "active-text-color");
    }
    if (
      fencesArr[activeFence].type == "easyRomSmall" &&
      fencesArr[activeFence].smBoaCol == "anthrazit"
    ) {
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          activeFence != i &&
          fencesArr[i].status != "disposedFence" &&
          fencesArr[i].fenceGardo == undefined
        ) {
          changeFenceFunction(
            false,
            true,
            60,
            "easyRomSmall",
            "anthrazit",
            false,
            0,
            i,
            8
          );
        }
      }
      setActivnesStyle(designInlays, 4, 0, "active-text-color");
    }
    if (fencesArr[activeFence].type == "easyFenceHalf") {
      for (let i = 0; i < fencesArr.length; i++) {
        if (
          activeFence != i &&
          fencesArr[i].status != "disposedFence" &&
          fencesArr[i].fenceGardo == undefined
        ) {
          changeFenceFunction(
            true,
            false,
            180,
            "easyFenceHalf",
            "silber",
            true,
            0,
            i,
            4
          );
        }
      }
      setActivnesStyle(designInlays, 4, 0, "active-text-color");
    }
    //change color of boards on all fences
    if (fencesArr[activeFence].boardCol == "grau") {
      allFenceBoardsChange("grau", grauMat);
      setActivnesStyle(mainFarbeParts, 1, 0, "active-text-color");
      allBoardsCol = 0;
    }
    if (fencesArr[activeFence].boardCol == "anthrazit") {
      allFenceBoardsChange("anthrazit", anthrazitMat);
      setActivnesStyle(mainFarbeParts, 1, 1, "active-text-color");
      allBoardsCol = 1;
    }
    if (fencesArr[activeFence].boardCol == "braun") {
      allFenceBoardsChange("braun", braunMat);
      setActivnesStyle(mainFarbeParts, 1, 2, "active-text-color");
      allBoardsCol = 2;
    }
    if (fencesArr[activeFence].boardCol == "sand") {
      allFenceBoardsChange("sand", sandMat);
      setActivnesStyle(mainFarbeParts, 1, 3, "active-text-color");
      allBoardsCol = 3;
    }
    //change color of start und on all fences
    if (fencesArr[activeFence].startUndAbschCol == "silber") {
      for (let i = 0; i < startParts.length; i++) {
        fencesArr[i].startUndAbschCol = "silber";
        startParts[i].material = endParts[i].material = silberMat;
      }
      setActivnesStyle(startUndAbschParts, 2, 0, "active-text-color");
      startUndAbschMat = 0;
    }
    if (fencesArr[activeFence].startUndAbschCol == "anthrazit") {
      for (let i = 0; i < startParts.length; i++) {
        fencesArr[i].startUndAbschCol = "anthrazit";
        startParts[i].material = endParts[i].material = anthrazitMat;
      }
      setActivnesStyle(startUndAbschParts, 2, 1, "active-text-color");
      startUndAbschMat = 1;
    }
    //change all laisnes on all fences
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < fencesArr.length; j++) {
        if (fencesArr[activeFence].laisnes[i] != fencesArr[j].laisnes[i]) {
          if (fencesArr[activeFence].laisnes[i]) {
            createLaisne(i, j);
            fencesArr[j].laisnes[i] = true;
            addLaisnes("#3967ff", checkMark, true, i);
          } else {
            disposeLaisne(i, j);
            fencesArr[j].laisnes[i] = false;
            addLaisnes("transparent", "", false, i);
          }
        }
      }
    }
    if (fencesArr[activeFence].laisnesCol == "anthrazit") {
      for (let i = 0; i < laisnes.length; i++) {
        fencesArr[i].laisnesCol = "anthrazit";
        laisnes[i].forEach((elm) => {
          elm.material = anthrazitMat;
        });
      }
      setActivnesStyle(designleistensMat, 3, 1, "active-text-color");
      laisnesMat = 1;
    }
    if (fencesArr[activeFence].laisnesCol == "silber") {
      for (let i = 0; i < laisnes.length; i++) {
        fencesArr[i].laisnesCol = "silber";
        laisnes[i].forEach((elm) => {
          elm.material = silberMat;
        });
      }
      setActivnesStyle(designleistensMat, 3, 0, "active-text-color");
      laisnesMat = 0;
    }
    //change all boards delite
    for (let i = 0; i < fencesArr.length; i++) {
      if (i != activeFence) {
        if (
          fencesArr[i].type == "easyFence" ||
          fencesArr[i].type == "easyFenceHalf"
        ) {
          for (let j = fencesArr[activeFence].numOfBoards; j < 8; j++) {
            fenceBoards[i][j].isVisible = false;
            startParts[i].position.y =
              fenceBoards[i][fencesArr[activeFence].numOfBoards - 1].position
                .y +
              0.23 / 2 +
              0.005;
          }
        }
      }
    }
    /////
  };
  //close when change all fences
  accCloseButFun(changeAllFences);
  //close side
  accCloseButFun(changeFence);
  ////////////////////////////////////////////////////////////////////////
  //CHANGE GARDO FENCE
  //set activnes for add fence
  let changeFenceGardo = document.getElementsByClassName(
    "set-activnes-change-fence-gardo"
  );
  setActivnes(changeFenceGardo, 0, "active-text-color-gardo-change");

  //close add new fence accesoire when close button
  accCloseButFun(sideAccCloseBtn);

  changeFenceGardo[0].addEventListener("click", () => {
    changeFenceFunctionGardo(
      180,
      "gardoFence",
      activeFence,
      fencesArr,
      changePosAndScaleFence,
      positionChildrenOnParentSizeChange,
      rightPosts,
      ledsRight,
      rightPostCaps,
      rightPostCapClones,
      setGround
    );
  });
  changeFenceGardo[1].addEventListener("click", () => {
    changeFenceFunctionGardo(
      180,
      "gardoHalf",
      activeFence,
      fencesArr,
      changePosAndScaleFence,
      positionChildrenOnParentSizeChange,
      rightPosts,
      ledsRight,
      rightPostCaps,
      rightPostCapClones,
      setGround
    );
  });
  changeFenceGardo[2].addEventListener("click", () => {
    changeFenceFunctionGardo(
      180,
      "gardoRank",
      activeFence,
      fencesArr,
      changePosAndScaleFence,
      positionChildrenOnParentSizeChange,
      rightPosts,
      ledsRight,
      rightPostCaps,
      rightPostCapClones,
      setGround
    );
  });
  //close when change all fences
  //   accCloseButFun(changeAllFences);
  //close side
  accCloseButFun(changeFenceGardo);

  //change gardo fence height
  let h76 = document.getElementById("h76");
  h76.style.color = "#3967ff";
  let h85 = document.getElementById("h85");

  function setPhostenAct(a, b) {
    a.style.color = "#3967ff";
    b.style.color = "#000000";
    a.children[1].innerHTML = checkMark;
    b.children[1].innerHTML = "";
  }

  h76.onclick = () => {
    setPhostenAct(h76, h85);
    fencesArr[activeFence].gardoParts.topBoard.isVisible = false;
    if (fencesArr[activeFence].type != "gardoHalf") {
      fencesArr[activeFence].gardoParts.woodTopPart.position.y =
        fencesArr[activeFence].gardoParts.boards[15].position.y + 0.102;
    } else {
      fencesArr[activeFence].gardoParts.boards[8].isVisible = false;
      fencesArr[activeFence].gardoParts.woodTopPart.position.y =
        fencesArr[activeFence].gardoParts.boards[7].position.y + 0.102;
    }
  };

  h85.onclick = () => {
    setPhostenAct(h85, h76);
    if (fencesArr[activeFence].type != "gardoHalf") {
      fencesArr[activeFence].gardoParts.topBoard.isVisible = true;
      fencesArr[activeFence].gardoParts.woodTopPart.position.y =
        fencesArr[activeFence].gardoParts.topBoard.position.y + 0.102;
    } else {
      fencesArr[activeFence].gardoParts.boards[8].isVisible = true;
      fencesArr[activeFence].gardoParts.woodTopPart.position.y =
        fencesArr[activeFence].gardoParts.boards[8].position.y + 0.102;
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //DELETE FENCE
  let deleteFencePart = document.getElementById("set-part-fence-acc-del");

  function deleteFenceOn(a) {
    if (a > 0) {
      deleteFencePart.children[0].children[0].style.backgroundImage =
        "url('img/deleteRound.png')";
      deleteFencePart.children[1].innerHTML = "Löschen";
    } else {
      deleteFencePart.children[0].children[0].style.backgroundImage =
        "url('img/deleteRoundNo.png')";
      deleteFencePart.children[1].innerHTML = "Der erste Zaun";
    }
  }
  function deleteFence(a) {
    wholeFences[a].dispose();
    foundationsRight[a].dispose();
    fakeFences[a].name = "disposedFakeFence";
    fencesArr[a].status = "disposedFence";
    newFenceForwardSigns[a].dispose();
    newFenceRightSigns[a].dispose();
    newFenceLeftSigns[a].dispose();
    newFenceBackSigns[a].dispose();
    allPosts[a + 1].isVisible = false;
    fencesArr[a].children.forEach((elm) => {
      fencesArr[elm].parent = fencesArr[a].parent;

      fencesArr[fencesArr[a].parent].children.push(elm);
    });
    if (fencesArr[fencesArr[a].parent] != undefined) {
      fencesArr[fencesArr[a].parent].children.splice(
        fencesArr[fencesArr[a].parent].children.indexOf(a),
        1
      );
    }

    setGround();
    //visibility because of cart counting
    rightPosts[a].isVisible = false;
    fenceBoards[a].forEach((elm) => {
      elm.isVisible = false;
    });
    roots[a * 2 + 2].isVisible = roots[a * 2 + 3].isVisible = false;
    directeHauswandMeshesRight[a].isVisible = false;
    sturmankersRuckseite[a + 1].isVisible = sturmankersVorderseite[
      a + 1
    ].isVisible = false;
    smallBoardsArr[a].isVisible = false;
    inlays[a][0].isVisible = false;
    laisnes[a].forEach((elm) => {
      elm.isVisible = false;
    });
    ledsRight[a].isVisible = false;
    startParts[a].isVisible = endParts[a].isVisible = false;

    //dispose gardo fence
    if (
      fencesArr[a].type == "gardoFence" ||
      fencesArr[a].type == "gardoHalf" ||
      fencesArr[a].type == "gardoRank"
    ) {
      Object.values(fencesArr[a].gardoParts).forEach((elm) => {
        if (elm.length == undefined) {
          elm.dispose();
          elm.isVisible = false;
        }
        if (elm.length > 0) {
          elm.forEach((element) => {
            element.dispose();
            element.isVisible = false;
          });
        }
      });
    }
    //set post size for small parent post
    if (
      fencesArr[fencesArr[a].parent].type == "easyFenceHalf" ||
      fencesArr[fencesArr[a].parent].type == "gardoHalf"
    ) {
      let childTypee = 0;
      for (let i = 0; i < fencesArr[fencesArr[a].parent].children.length; i++) {
        if (
          fencesArr[fencesArr[fencesArr[a].parent].children[i]].type !=
            "easyFenceHalf" &&
          fencesArr[fencesArr[fencesArr[h].parent].children[i]].type !=
            "gardoHalf"
        ) {
          childTypee += 1;
        }
      }
      if (childTypee == 0) {
        if (rightPosts[fencesArr[a].parent].scaling.z < 1.1) {
          rightPosts[fencesArr[a].parent].scaling.z = 0.524;
          rightPosts[fencesArr[a].parent].position.y = 0.504;
        }
        if (
          rightPosts[fencesArr[a].parent].scaling.z > 1 &&
          rightPosts[fencesArr[a].parent].scaling.z < 1.4
        ) {
          rightPosts[fencesArr[a].parent].scaling.z = 0.724;
          rightPosts[fencesArr[a].parent].position.y = 0.3119;
        }
        if (rightPosts[fencesArr[a].parent].scaling.z > 1.4) {
          rightPosts[fencesArr[a].parent].scaling.z = 0.999;
          rightPosts[fencesArr[a].parent].position.y = 0.053;
        }
        rightPostCaps[fencesArr[a].parent].isVisible = false;
        rightPostCapClones[fencesArr[a].parent].isVisible = true;
        ledsRight[fencesArr[a].parent].scaling.z = 0.524;
        ledsRight[fencesArr[a].parent].position.z = 0.46;
        ledsRight[fencesArr[a].parent].position.y = 0.001;
      }
    }
    //
    fencesArr[a].parent = undefined;
  }
  function recursiveToChildrenDelete(b) {
    if (fencesArr[b].children.length > 0) {
      fencesArr[b].children.forEach((elm) => {
        scaleToOtherFencesToDo(elm);
        recursiveToChildrenDelete(elm);
      });
    }
  }

  function recursiveToChildrenDelete2(c) {
    while (fencesArr[c].children.length > 0) {
      deleteFence(fencesArr[c].children[0]);
    }
  }

  function delFenFun(a) {
    if (fencesArr[a].children.length > 0) {
      firstX = getAbsPosX(rightPosts[a]);
      firstZ = getAbsPosZ(rightPosts[a]);
      if (fencesArr[a].parent != undefined) {
        secondX = getAbsPosX(rightPosts[fencesArr[a].parent]);
        secondZ = getAbsPosZ(rightPosts[fencesArr[a].parent]);
      } else {
        secondX = 0;
        secondZ = 0;
      }
      for (let i = 0; i < fencesArr[a].children.length; i++) {
        if (fencesArr[a].parent != undefined) {
          if (
            wholeFences[a].rotation.y !=
              wholeFences[fencesArr[a].parent].rotation.y ||
            wholeFences[a].rotation.y !=
              wholeFences[fencesArr[a].children[i]].rotation.y
          ) {
            recursiveToChildrenDelete2(a);
          } else {
            b = fencesArr[a].children[i];
            scaleToOtherFencesToDo(b);
            recursiveToChildrenDelete(b);
          }
        } else {
          recursiveToChildrenDelete2(a);
        }
      }
    }
  }
  accCloseButFun(deleteFencePart);
  //////////////////////////////////////////////////////////////
  //TAKE SCREENSHOT
  var screenshotBtn = document.getElementById("screenshot-but");
  screenshotBtn.onclick = () => {
    BABYLON.Tools.CreateScreenshot(engine, camera, 1024);
  };

  ////////////////////////////
  //LINK

  var link = document.getElementById("link");
  link.onclick = () => {
    var a = document.getElementsByClassName("scCartList")[0].children;
    var prodIds = [];
    var prodValues = [];
    var linkParts = [];
    for (let i = 0; i < a.length; i++) {
      prodIds.push(
        a[i].children[0].children[1].children[0].innerHTML.split("/ ")[2]
      );
      prodValues.push(a[i].children[2].children[1].value);

      linkParts.push(prodIds[i] + ":" + prodValues[i] + ",");
    }
    linkParts = linkParts.join("");
    link.href += "?add-to-cart=" + linkParts;
  };
  //parent.imgPDF();

  ////////////////////////////////////SMART CART///////////////////////////////
  loadCart(
    fenceBoards,
    sturmankersVorderseite,
    rightPosts,
    leftPosts,
    directeHauswandMeshes,
    fenceBoardMat,
    fencePostMat,
    concreteMat,
    smallBoardsArr,
    silberMat,
    anthrazitMat,
    fencesArr,
    addFenceSings,
    grauMat,
    braunMat,
    sandMat,
    startParts,
    allPosts,
    roots,
    sturmankersRuckseite,
    inlays,
    laisnes,
    leds,
    ledsRight,
    ledParts,
    woodMaterials,
    topBoards,
    rankelements,
    rightWoodPosts,
    woodTopParts,
    gardoFenceBoards,
    metalParts
  );
  ///////////////////////////////////////////////////////////////CANVAS PLAN///////////////////////////////////////////////////////////////////
  draw2dPlan(
    allPosts,
    fencesArr,
    getAbsPosX,
    getAbsPosZ,
    rightPosts,
    foundationsVord,
    foundationsRuck,
    foundations,
    foundationsRight,
    wholeFences
  );

  //end of scene
  return scene;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//END OF SCENE
