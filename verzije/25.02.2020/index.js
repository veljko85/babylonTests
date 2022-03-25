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
//CREATE SCENE
var createScene = function () {
  // SCENE
  var scene = new BABYLON.Scene(engine);

  //CAMERA
  cameraBabylon();

  //LIGHTS
  let lights = [];
  let lightsLite = [];
  let lightsHavy = [];
  let lightsLed = [];
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

  //SKY
  var skyBoxes = [];
  addSkyBox(skyBoxes);

  // GROUND
  createGround();
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  //FENCE

  //   //SIGHNS FOR ADDING NEW FENCE
  //   //FORWARD SIGH
  //   const addNewFenceMeshMat = new BABYLON.StandardMaterial("addNewFenceMesh");
  //   addNewFenceMeshMat.diffuseTexture = new BABYLON.Texture("img/arrow.png");
  //   // addNewFenceMeshMat.diffuseColor = new BABYLON.Vector4(1,0,0,1);
  //   addNewFenceMeshMat.backFaceCulling = false;
  //   const addNewFenceMesh = BABYLON.MeshBuilder.CreatePlane("plane", {
  //     height: 0.3,
  //     width: 0.3,
  //   });
  //   addNewFenceMesh.position = new BABYLON.Vector3(
  //     rightPost.position.x - 0.3,
  //     1,
  //     posZ
  //   );
  //   addNewFenceMesh.material = addNewFenceMeshMat;
  //   addNewFenceMesh.isVisible = true;
  //   //CREATE FENCE FORWARD
  //   addNewFenceMesh.actionManager = new BABYLON.ActionManager(scene);
  //   addNewFenceMesh.actionManager.registerAction(
  //     new BABYLON.ExecuteCodeAction(
  //       BABYLON.ActionManager.OnPickUpTrigger,
  //       function () {
  //         createEasyFenceModel(rightPost.position.x - 0.9, posZ, 0);
  //       }
  //     )
  //   );
  //   //LEFT SIGHN
  //   var addNewFenceMeshLeft = addNewFenceMesh.clone("addNewFenceMeshLeft");
  //   addNewFenceMeshLeft.position = new BABYLON.Vector3(
  //     rightPost.position.x,
  //     0.4,
  //     posZ + 0.3
  //   );
  //   addNewFenceMeshLeft.addRotation(0, Math.PI / 2, 0);
  //   //CREATE FENCE LEFT
  //   // addNewFenceMeshLeft.actionManager = new BABYLON.ActionManager(scene);
  //   // addNewFenceMeshLeft.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
  //   //   createEasyFenceModel(posX, rightPost.position.z + 0.9, Math.PI / 2);
  //   // }));
  //   //RIGHT SIGHN
  //   var addNewFenceMeshRight = addNewFenceMesh.clone("addNewFenceMeshRight");
  //   addNewFenceMeshRight.position = new BABYLON.Vector3(
  //     rightPost.position.x,
  //     1.4,
  //     posZ - 0.3
  //   );
  //   addNewFenceMeshRight.addRotation(0, -Math.PI / 2, 0);
  //   //CREATE RIGHT FENCE

  //    end of fence mesh function
  // };

  //turn off mesh if mesh is pickable
  // for (let i = 0; i < result.meshes.length; i++) {
  //   result.meshes[i].isPickable = false;
  // }

  //FENCE COLORS
  fenceBoardsColors = ["#8c8c8c", "#474747", "#836953", "#ece6d6"];
  fencePartsColors = ["#e6e6e6", "#474747"];

  //FENCE BORDS MATERIAL
  var fenceBoardMat = new BABYLON.StandardMaterial("fencePartMat", scene);
  fenceBoardMat.diffuseColor = BABYLON.Color3.FromHexString(
    fenceBoardsColors[0]
  );
  fenceBoardMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

  // //FENCE POSTS MATERIAL
  var fencePostMat = new BABYLON.StandardMaterial("fencePartMat", scene);
  fencePostMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[1]);

  //FENCE START AND END MATERIALS
  var fenceStartEndMat = new BABYLON.StandardMaterial("fencePartMat", scene);
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
  let concreteMat = new BABYLON.StandardMaterial("dirHausMat", scene);
  concreteMat.diffuseTexture = new BABYLON.Texture("img/concrete.jpg", scene);
  concreteMat.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);
  concreteMat.backFaceCulling = false;

  //FOUNDATION MATERIAL
  var foundationMat = new BABYLON.StandardMaterial("rootMat", scene);
  foundationMat.diffuseColor = BABYLON.Color3.FromHexString("#ffffff");
  foundationMat.alpha = 0.5;

  //SINGS MATEIALS AD TEXTURES
  //delete sign
  var signmatDel = new BABYLON.StandardMaterial("signmatOne", scene);
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

  //MATERIAL FOR SELECTION
  var selectedMat = new BABYLON.StandardMaterial("selectedMat", scene);
  selectedMat.diffuseColor = BABYLON.Color3.FromHexString("#C10000");
  selectedMat.specularColor = new BABYLON.Color3(0.01, 0.01, 0.01);

  //FENCE VARIABLES
  var fenceBoards = [];
  var startParts = [];
  var laisnes = [];
  var inlays = [];
  var leftPosts = [];
  var rightPosts = [];
  var roots = [];
  var singsDel = [];
  var singsWar = [];
  var leds = [];
  var ledsOn = 0;
  var foundationStarts = [];
  var foundations = [];
  var sturmankersRuckseite = [];
  var sturRuckseiteSrafs = [];
  var sturmankersVorderseite = [];
  var sturVorderseiteSrafs = [];
  var directeHauswandMeshes = [];

  //MAIN POST MESH
  createMainPost(
    capMat,
    leftPosts,
    roots,
    fencePostMat,
    concreteMat,
    foundationStarts,
    foundationMat,
    foundations,
    signmatDel,
    singsDel,
    signmatWar,
    singsWar,
    leds,
    ledMat,
    lights,
    lightsLed,
    sturmankersVorderseite,
    sturVorderseiteSrafs,
    sturmankersRuckseite,
    sturRuckseiteSrafs,
    rootMat,
    fenceBoards,
    rightPosts,
    directeHauswandMeshes,
    fenceBoardMat,
    selectedMat
  );

  //LOAD FENCE MESH
  BABYLON.SceneLoader.ImportMeshAsync(
    "",
    "mesh/",
    "easyFenceRightPart.glb"
  ).then((result) => {
    var fence = result.meshes[0];
    fence.rotationQuaternion = null;

    //add selected to mesh
    for (let i = 0; i < result.meshes.length; i++) {
      result.meshes[i].actionManager = new BABYLON.ActionManager(scene);
      result.meshes[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickUpTrigger,
          function () {
            if (result.meshes[i].material.id != "selectedMat") {
              removeSideAccesories(sideAccesories, deleteAccesorie);
              addDefaultMaterial(
                fenceBoards,
                sturmankersVorderseite,
                rightPosts,
                leftPosts,
                directeHauswandMeshes,
                fenceBoardMat,
                fencePostMat,
                concreteMat
              );
              result.meshes[1].material =
                result.meshes[2].material =
                result.meshes[8].material =
                result.meshes[9].material =
                result.meshes[10].material =
                result.meshes[11].material =
                result.meshes[12].material =
                result.meshes[13].material =
                result.meshes[14].material =
                  selectedMat;
            } else {
              result.meshes[1].material =
                result.meshes[8].material =
                result.meshes[9].material =
                result.meshes[10].material =
                result.meshes[11].material =
                result.meshes[12].material =
                result.meshes[13].material =
                result.meshes[14].material =
                  fenceBoardMat;
              result.meshes[2].material = fencePostMat;
            }
          }
        )
      );
    }

    //POST CAP
    let rightPostCap = scene.getMeshByName("post-cap-right");
    rightPostCap.material = capMat;

    //BOARDS
    for (let i = 0; i < 8; i++) {
      let fenceBoard = scene.getMeshByName(`fence-board-${i}`);
      fenceBoard.material = fenceBoardMat;
      fenceBoards.push(fenceBoard);
    }

    //START AND END PARTS
    let startPart = scene.getMeshByName("start-part");
    startParts.push(startPart);
    let endPart = scene.getMeshByName("end-part");

    startPart.material = endPart.material = fenceStartEndMat;

    //LAISNE
    let laisneOrg = scene.getMeshByName("lajsnica");
    laisneOrg.isVisible = false;
    laisneOrg.material = laisneMat;
    for (let i = 0; i < 7; i++) {
      var laisne = laisneOrg.clone("laisne");
      laisne.material = laisneMat;
      laisne.isVisible = false;
      laisnes.push(laisne);
    }

    //INLAYS
    // fenceBoards[6].isVisible = false;
    let inlaysViero = scene.getMeshByName("fence-board-frame-texture-squares");
    inlaysViero.isVisible = false;
    let inlaysAstro = scene.getMeshByName("fence-board-frame-texture-circles");
    inlaysAstro.isVisible = false;
    let inlaysSnow = scene.getMeshByName("fence-board-frame");
    inlaysSnow.isVisible = false;
    inlaysSnow.material = inlaysMat;

    inlays.push(inlaysViero, inlaysAstro, inlaysSnow);

    //POSTS
    let rightPost = scene.getMeshByName("post-right");
    rightPosts.push(rightPost);
    rightPost.material = fencePostMat;
    //post roots
    let rightRoot0 = scene.getMeshByName("post-root-right_primitive0");
    let rightRoot1 = scene.getMeshByName("post-root-right_primitive1");

    roots.push(rightRoot0, rightRoot1);

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
      rightPost.position.x,
      0.0001,
      0
    );
    foundationRightStart.material = concreteMat;

    foundationStarts.push(foundationRightStart);

    //create foundation
    let foundationRight = new BABYLON.MeshBuilder.CreateBox(
      "foundationRight",
      { width: 0.4, height: 0.5, depth: 0.4 },
      scene
    );
    foundationRight.position.x = foundationRightStart.position.x;
    foundationRight.position.y = -0.5 / 2;
    foundationRight.material = foundationMat;

    foundations.push(foundationRight);

    //PLANE TO HOLD SIGN
    var signPlaneDelRight = BABYLON.MeshBuilder.CreatePlane(
      "signPlaneDelRight",
      {
        height: 0.4,
        width: 0.4,
      }
    );
    signPlaneDelRight.position = new BABYLON.Vector3(
      rightPost.position.x,
      2.2,
      0
    );
    signPlaneDelRight.material = signmatDel;
    signPlaneDelRight.isVisible = false;
    singsDel.push(signPlaneDelRight);

    for (let i = 0; i < singsDel.length; i++) {
      singsDel[i].actionManager = new BABYLON.ActionManager(scene);
      singsDel[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickUpTrigger,
          function () {
            onDelete(i);
          }
        )
      );
    }

    //PLANE TO HOLD SIGN
    var signPlaneWarRight = BABYLON.MeshBuilder.CreatePlane(
      "signPlaneWarRight",
      {
        height: 0.4,
        width: 0.4,
      }
    );
    signPlaneWarRight.position = new BABYLON.Vector3(
      rightPost.position.x,
      2.2,
      0
    );
    signPlaneWarRight.material = signmatWar;
    signPlaneWarRight.isVisible = false;
    singsWar.push(signPlaneWarRight);

    for (let i = 0; i < singsWar.length; i++) {
      singsWar[i].actionManager = new BABYLON.ActionManager(scene);
      singsWar[i].actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickUpTrigger,
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
              sturmankerOnOff(true, 1.75, 0.13, i);
              if (ledsOn < 1) {
                setActivnesStyle(ledParts, 5, 0);
              }
            };

            sturLedBtn.onclick = () => {
              ledSturOnClick(sturLedBtn, i, true);
              ledsOn += 1;
              lightsLed[i].intensity = 0.5;
              sturmankerOnOff(false, 1, 0, i);
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
                setActivnesStyle(sturmankerCon, 9, 1);
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
                setActivnesStyle(sturmankerCon, 9, 1);
                strurmOn = false;
              }
              if (ledsOn < 1 && !warSingsOn) {
                setActivnesStyle(ledParts, 5, 0);
              }
            };
          }
        )
      );
    }

    //LEDS
    let rightLed = scene.getMeshByName("led-right");

    leds.push(rightLed);

    rightLed.material = ledMat;

    rightLed.isVisible = false;
    //spot light for led

    var light6 = new BABYLON.SpotLight(
      "spotLight6",
      new BABYLON.Vector3(0.9, 1, -1.5),
      new BABYLON.Vector3(0, 0, 1),
      Math.PI / 2,
      9,
      scene
    );

    lights.push(light6);
    lightsLed.push(light6);

    //set led lights intensity
    lightsLed.forEach((elm) => {
      elm.intensity = 0;
    });

    //set lights color
    lights.forEach((elm) => {
      elm.diffuse = elm.specular = BABYLON.Color3.FromHexString(lightColors[4]);
    });

    //STRUMANKER
    let rightStrVord = scene.getMeshByName("sturmanker-right-front_primitive0");
    rightStrVord.isVisible = false;

    let rightStrVordSraf = scene.getMeshByName(
      "sturmanker-right-front_primitive1"
    );
    rightStrVordSraf.isVisible = false;

    let rightStrRuck = scene.getMeshByName("sturmanker-right-rear_primitive0");
    rightStrRuck.isVisible = false;

    let rightStrRuckSraf = scene.getMeshByName(
      "sturmanker-right-rear_primitive1"
    );
    rightStrRuckSraf.isVisible = false;
    sturmankersVorderseite.push(rightStrVord);
    sturVorderseiteSrafs.push(rightStrVordSraf);
    sturmankersRuckseite.push(rightStrRuck);
    sturRuckseiteSrafs.push(rightStrRuckSraf);

    //set material
    rightStrVord.material = rightStrRuck.material = fencePostMat;
    //set sraf material
    rightStrVordSraf.material = rightStrRuckSraf.material = rootMat;

    //END OF MESH
  });

  //TO DELETE FUNCTION for sturmanker led
  function onDelete(i) {
    leds[i].isVisible = false;
    singsDel[i].isVisible = false;
    ledsOn -= 1;
    lightsLed[i].intensity = 0;
    if (ledsOn < 1) {
      //set to ohne on led lights
      //set html
      lightSettings.style.display = "none";
      lightColorSet.style.display = "none";
      //set babylon
      leds.forEach((elm) => {
        elm.isVisible = false;
      });
      setDayNight(0.6, 0, 0.7);
      ledColNum = 4;
      setLightColor(ledColNum);
      setLedColor(ledColNum);
      setActivnesStyle(ledParts, 5, 0);
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
  function sturmankerOnOff(a, b, c, i) {
    if (vorderseiteOn) {
      sturmankersVorderseite[i].isVisible = a;
      sturVorderseiteSrafs[i].isVisible = a;
      foundationStarts[i].scaling.z = foundations[i].scaling.z = b;
      foundationStarts[i].position.z = foundations[i].position.z = -c;
    } else {
      sturmankersRuckseite[i].isVisible = a;
      sturRuckseiteSrafs[i].isVisible = a;
      foundationStarts[i].scaling.z = foundations[i].scaling.z = b;
      foundationStarts[i].position.z = foundations[i].position.z = c;
    }
  }

  //ADD LAISNE ON FENCE - 3
  let createLaisne = (laisnePos) => {
    laisnes[laisnePos].isVisible = true;
    laisnes[laisnePos].position.y =
      fenceBoards[laisnePos].position.y + 0.22 / 2 + 0.005;
    for (let i = laisnePos; i < 7; i++) {
      fenceBoards[i + 1].position.y += 0.01;
      if (i < 6) {
        if (laisnes[i + 1].isVisible) {
          laisnes[i + 1].position.y += 0.01;
        }
      }
    }
    startParts[0].position.y += 0.01;
  };

  //REMOVE LAISNE FROM FENCE
  let disposeLaisne = (laisnePos) => {
    laisnes[laisnePos].isVisible = false;
    for (let i = laisnePos; i < 7; i++) {
      fenceBoards[i + 1].position.y -= 0.01;
      if (i < 6) {
        if (laisnes[i + 1].isVisible) {
          laisnes[i + 1].position.y -= 0.01;
        }
      }
    }
    startParts[0].position.y -= 0.01;
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
      // for (let j = 0; j < clickableMainSec.length; j++) {
      //   if (clickableMainSec[j].className == "set-part-click-title clicked") {
      //     clickableMainSec[j].className = clickableMainSec[i].className.replace(
      //       " clicked",
      //       " not-clicked"
      //     );
      //     clickableMainSec[j].className == "set-part-click-title not-clicked";
      //     clickableMainSec[j].children[2].innerHTML = "+";
      //     clickableMainSec[j].nextElementSibling.style.height = 0;
      //   }
      // }
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
        setActivnesStyle(ledDayNight, 7, 0);
        for (let i = 0; i < leds.length; i++) {
          setDayNight(0.6, 0, 0.7);
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
        changable.diffuseColor = BABYLON.Color3.FromHexString(matCol[i]);
      });
    }
  }

  //SET ACTIVNES
  //ACTIVE CHECKMARK

  let checkMark = "&#10003";
  //set activness style
  function setActivnesStyle(parts, partNum, i) {
    //change active singhts
    var currentActCol = document.getElementsByClassName("active-text-color");
    //add remove active chackmark
    currentActCol[partNum].children[2].innerHTML = "";
    parts[i].children[2].innerHTML = checkMark;
    //change active color
    currentActCol[partNum].className = currentActCol[partNum].className.replace(
      " active-text-color",
      ""
    );
    parts[i].className += " active-text-color";
  }

  function setActivnes(parts, partNum) {
    for (let i = 0; i < parts.length; i++) {
      parts[i].addEventListener("click", () => {
        setActivnesStyle(parts, partNum, i);
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
  setPartsAndconf(mainFarbeParts, fenceBoardMat, fenceBoardsColors);
  setActivnes(mainFarbeParts, 0);

  //2 SET START UND AVBSCH
  let startUndAbschParts = document.getElementsByClassName(
    "set-part-start-und-absch"
  );
  setPartsAndconf(startUndAbschParts, fenceStartEndMat, fencePartsColors);
  setActivnes(startUndAbschParts, 1);

  //3 DESIGNlLEISTEN AUS ALUMINIUM
  let designleistensMat = document.getElementsByClassName(
    "set-part-designleisten-aus-aluminium-act-col"
  );
  setPartsAndconf(designleistensMat, laisneMat, fencePartsColors);
  setActivnes(designleistensMat, 2);
  //DESIGNELEISTEN CHECH BOX TO ACTIVE
  let designleistens = document.getElementsByClassName(
    "set-part-designleisten-aus-aluminium"
  );
  if (designleistens.length > 0) {
    let actCol = "#3967ff";
    let transperent = "transparent";
    let empty = "";
    function addLaisnes(a, b, c, d, i) {
      designleistens[i].children[0].children[0].style.backgroundColor = a;
      designleistens[i].children[0].children[0].innerHTML = b;
      checkboxActive[i] = c;
      d;
    }
    let checkboxActive = [false, false, false, false, false, false, false];
    for (let i = 0; i < designleistens.length; i++) {
      designleistens[i].addEventListener("click", () => {
        if (!checkboxActive[i]) {
          addLaisnes(actCol, checkMark, true, createLaisne(i), i);
        } else {
          addLaisnes(transperent, empty, false, disposeLaisne(i), i);
        }
      });
    }
  }

  //4 SET DESIGN - INLAYS
  //set activnes
  let designInlays = document.getElementsByClassName(
    "set-activnes-design-inlays"
  );
  setActivnes(designInlays, 3);
  //first inlay setings
  let designInlaysFirst = document.getElementsByClassName(
    "first-set-design-inlays-color"
  );
  setPartsAndconf(designInlaysFirst, inlaysMat, fencePartsColors);
  //second inlay setings
  let designInlaysSecond = document.getElementsByClassName(
    "second-set-design-inlays-color"
  );
  setPartsAndconf(designInlaysSecond, inlaysMat, fencePartsColors);
  //third inlay setings
  let designInlaysThird = document.getElementsByClassName(
    "third-set-design-inlays-color"
  );
  setPartsAndconf(designInlaysThird, inlaysMat, fencePartsColors);
  //inlays show or not
  function inlaysFunction(a, b, c, d) {
    fenceBoards[6].isVisible = a;
    inlays[0].isVisible = b;
    inlays[1].isVisible = c;
    inlays[2].isVisible = d;
  }
  if (designInlays.length > 0) {
    for (let i = 0; i < designInlays.length; i++) {
      designInlays[i].addEventListener("click", () => {
        if (i == 0) {
          inlaysFunction(true, false, false, false);
        } else if (i == 1 || i == 2) {
          inlaysFunction(false, true, false, false);
        } else if (i == 3 || i == 4) {
          inlaysFunction(false, false, true, false);
        } else if (i == 5 || i == 6) {
          inlaysFunction(false, false, false, true);
        }
      });
    }
  }

  //5 SET FARBE PFOSTEN
  let fencePostsParts = document.getElementsByClassName(
    "set-part-farbe-pfosten"
  );
  setPartsAndconf(fencePostsParts, fencePostMat, fencePartsColors);
  setActivnes(fencePostsParts, 4);

  //6 SET LED
  let ledParts = document.getElementsByClassName("set-part-led");
  setActivnes(ledParts, 5);
  let lightSettings = document.getElementById("light-settings");
  let lightColorSet = document.getElementById("light-color-settings");
  //set day night
  function setDayNight(a, b, c) {
    lightsHavy.forEach((elm) => {
      elm.intensity = a;
    });
    lightsLed.forEach((elm) => {
      elm.intensity = b;
    });
    skyBoxes[0].material.luminance = c;
    if (directeHauswandMesh.isVisible) lightsLed[0].intensity = 0;
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
    lightsLed.forEach((elm) => {
      elm.diffuse = elm.specular = BABYLON.Color3.FromHexString(
        lightColors[lightNum]
      );
    });
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
      setDayNight(0.6, 0, 0.7);
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
        leds.forEach((elm) => {
          elm.isVisible = true;
        });
        ledsOn = leds.length;
        singsDel.forEach((elm) => {
          elm.isVisible = true;
        });
        ledColNum = 0;
        setLightColor(ledColNum);
        setLedColor(ledColNum);
        setDayNight(0.2, 0.5, 1.15);
      } else {
        singsWar.forEach((elm) => {
          elm.isVisible = false;
        });
        //set warning sings to visible if sturmanker is visible
        for (let i = 0; i < sturmankersVorderseite.length; i++) {
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
        setDayNight(0.2, 0, 1.15);
        setLightColor(4);
        setLedColor(0);
        //set leds on lights on
        for (let i = 0; i < leds.length; i++) {
          if (leds[i].isVisible) {
            lightsLed[i].intensity = 0.5;
          }
        }
      }
      setActivnesStyle(ledDayNight, 7, 2);
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
      if (directeHauswandMesh.isVisible) leds[0].isVisible = false;
    });
    ledParts[2].addEventListener("click", () => {
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
      console.log(strurmOn);
      if (!strurmOn) {
        leds.forEach((elm) => {
          elm.isVisible = true;
        });
        ledsOn = leds.length;
        singsDel.forEach((elm) => {
          elm.isVisible = true;
        });
        setDayNight(0.2, 0.5, 1.15);
      } else {
        singsWar.forEach((elm) => {
          elm.isVisible = false;
        });
        //set warning sings to visible if sturmanker is visible
        for (let i = 0; i < sturmankersVorderseite.length; i++) {
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
        setDayNight(0.2, 0, 1.15);
        for (let i = 0; i < leds.length; i++) {
          if (leds[i].isVisible) {
            lightsLed[i].intensity = 0.5;
          }
        }
      }
      ledColNum = 4;
      setLightColor(4);
      setLedColor(4);
      setActivnesStyle(ledDayNight, 7, 2);
      if (directeHauswandMesh.isVisible) leds[0].isVisible = false;
    });
    //set if delete sings are visible
    let ledDeleteOnOff = document.getElementsByClassName("set-delete-on-off");
    setActivnes(ledDeleteOnOff, 6);

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
    setActivnes(ledDayNight, 7);

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
  setActivnes(befePfostenParts, 8);

  function setbefePfosten(a, b, c, d, e) {
    //post roots
    roots.forEach((elm) => {
      elm.isVisible = c;
    });
    if (!directeHauswandMesh.isVisible) {
      leftPosts[0].scaling.y = rightPosts[0].scaling.y = a;
      leftPosts[0].position.y = rightPosts[0].position.y = b;
      foundations[0].isVisible = true;
    } else {
      rightPosts[0].scaling.y = a;
      rightPosts[0].position.y = b;
      roots[0].isVisible = false;
      roots[1].isVisible = false;
      foundations[0].isVisible = false;
    }
    //foundation
    foundations.forEach((elm) => {
      elm.scaling.y = d;
      elm.position.y = e;
    });
  }

  if (befePfostenParts.length > 0) {
    befePfostenParts[0].addEventListener("click", () => {
      setbefePfosten(1, 0.962, true, 1, -0.5 / 2);
    });
    befePfostenParts[1].addEventListener("click", () => {
      setbefePfosten(1.2, 0.7717, false, 1, -0.5 / 2);
    });
    befePfostenParts[2].addEventListener("click", () => {
      setbefePfosten(1.475, 0.511, false, 1.8, -0.9 / 2);
    });
  }

  //8 STURMANKER
  let sturmankerCon = document.getElementsByClassName("sturmanker-con");
  setActivnes(sturmankerCon, 9);
  function setSturmanker(a, b, c, d) {
    for (let i = 0; i < leds.length; i++) {
      if (!leds[i].isVisible) {
        sturmankersRuckseite[i].isVisible = a;
        sturRuckseiteSrafs[i].isVisible = a;
        sturmankersVorderseite[i].isVisible = b;
        sturVorderseiteSrafs[i].isVisible = b;
        foundationStarts[i].scaling.z = foundations[i].scaling.z = c;
        foundationStarts[i].position.z = foundations[i].position.z = d;
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

    function sturmankerFunction(a, b, c, d, e) {
      //display onstrumanker if led is not on
      if (ledsOn < 1) {
        modalFade.style.display = "block";
        onSturmanker.style.display = "block";
        setSturmanker(a, b, 1.75, c);
        strurmOn = true;
        setDayNight(0.6, 0, 0.7);
      } else {
        singsWar.forEach((elm) => {
          elm.isVisible = false;
        });
        for (let i = 0; i < leds.length; i++) {
          setDayNight(0.6, 0, 0.7);
          setLightColor(4);
          // setLedColor(ledColNum);
          glow.intensity = 0;
          //set sings
          if (leds[i].isVisible) {
            singsWar[i].isVisible = true;
          } else {
            setSturmanker(a, b, 1.75, c);
          }
          singsDel[i].isVisible = false;
        }
        //set activnes on leds parts to turn of led
        setActivnesStyle(ledDayNight, 7, 0);
      }
      //set wich one is activ
      vorderseiteOn = d;
      ruckseiteOn = e;
    }
    sturmankerCon[0].addEventListener("click", () => {
      singsWar.forEach((elm) => {
        elm.isVisible = false;
      });
      sturmankerFunction(true, false, 0.13, false, true);
      //select stur
      sturSelectionFun(
        sturmankersRuckseite,
        sturRuckseiteSrafs,
        foundationStarts,
        foundations
      );
    });
    sturmankerCon[1].addEventListener("click", () => {
      setSturmanker(false, false, 1, 0);
      //turn off warnig sings
      singsWar.forEach((elm) => {
        elm.isVisible = false;
      });
      //set wich one is active
      vorderseiteOn = false;
      ruckseiteOn = false;
      strurmOn = false;
    });
    sturmankerCon[2].addEventListener("click", () => {
      singsWar.forEach((elm) => {
        elm.isVisible = false;
      });
      sturmankerFunction(false, true, -0.13, true, false);
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
          BABYLON.ActionManager.OnPickUpTrigger,
          function () {
            if (a[i].material.id != "selectedMat") {
              removeSideAccesories(sideAccesories, deleteAccesorie);
              addDefaultMaterial(
                fenceBoards,
                sturmankersVorderseite,
                rightPosts,
                leftPosts,
                directeHauswandMeshes,
                fenceBoardMat,
                fencePostMat,
                concreteMat
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
    selectedStur.isVisible = false;
    selectedSraf.isVisible = false;
    selectedFoundStart.scaling.z = selectedFound.scaling.z = 1;
    selectedFoundStart.position.z = selectedFound.position.z = 0;
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
      setActivnesStyle(sturmankerCon, 9, 1);
      strurmOn = false;
    }
  });

  //9 BETONSKI STUB SA STRANE
  let directeHauswand = document.getElementsByClassName(
    "set-part-direkte-hauswand"
  );
  setToggleActivnes(directeHauswand, 10);

  var directeHauswandMesh = BABYLON.MeshBuilder.CreateBox(
    "directeHauswandMesh",
    {
      height: 2.1,
      width: 0.2,
      depth: 0.25,
    }
  );
  directeHauswandMesh.position = new BABYLON.Vector3(-1, 1.05, 0);
  directeHauswandMesh.material = concreteMat;
  directeHauswandMesh.isVisible = false;

  function setHauswand(a, b, c, d) {
    directeHauswandMesh.isVisible = a;
    leftPosts[0].scaling.y = b;
    leftPosts[0].position.y = c;
    if (roots[3].isVisible && !directeHauswandMesh.isVisible) {
      roots[0].isVisible = roots[1].isVisible = true;
    } else if (
      (roots[3].isVisible && directeHauswandMesh.isVisible) ||
      (!roots[3].isVisible && !directeHauswandMesh.isVisible) ||
      (!roots[3].isVisible && directeHauswandMesh.isVisible)
    ) {
      roots[0].isVisible = roots[1].isVisible = false;
    }
    foundationStarts[0].isVisible = foundations[0].isVisible = d;
  }

  directeHauswandMesh.actionManager = new BABYLON.ActionManager(scene);
  directeHauswandMeshes.push(directeHauswandMesh);
  directeHauswandMesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickUpTrigger,
      function () {
        if (directeHauswandMesh.material.id != "selectedMat") {
          removeSideAccesories(sideAccesories, deleteAccesorie);
          addDefaultMaterial(
            fenceBoards,
            sturmankersVorderseite,
            rightPosts,
            leftPosts,
            directeHauswandMeshes,
            fenceBoardMat,
            fencePostMat,
            concreteMat
          );
          directeHauswandMesh.material = selectedMat;
          sideAccesories.style.display = "block";
          deleteAccesorie[0].style.display = "block";
        } else {
          directeHauswandMesh.material = concreteMat;
          sideAccesories.style.display = "none";
          deleteAccesorie[0].style.display = "none";
        }
      }
    )
  );

  deleteImgAccesories[0].addEventListener("click", () => {
    addRemoveHauswand();
    sideAccesories.style.display = "none";
    deleteAccesorie[0].style.display = "none";
    directeHauswandMesh.material = concreteMat;
    var currentActCol = document.getElementsByClassName("active-text-color");
    if (!togAct) {
      directeHauswand[0].className += " active-text-color";
      directeHauswand[0].children[2].innerHTML = checkMark;
      togAct = true;
    } else {
      currentActCol[10].className = currentActCol[10].className.replace(
        " active-text-color",
        ""
      );
      directeHauswand[0].children[2].innerHTML = "";
      togAct = false;
    }
  });

  function addRemoveHauswand() {
    if (!directeHauswandMesh.isVisible) {
      setHauswand(true, 1, 0.962, false);
      sturmankersRuckseite[0].isVisible = false;
      sturRuckseiteSrafs[0].isVisible = false;
      sturmankersVorderseite[0].isVisible = false;
      sturVorderseiteSrafs[0].isVisible = false;
      leds[0].isVisible = false;
      lightsLed[0].intensity = 0;
    } else {
      setHauswand(
        false,
        rightPosts[0].scaling.y,
        rightPosts[0].position.y,
        true
      );
      foundationStarts[0].scaling.z = foundations[0].scaling.z = 1;
      foundationStarts[0].position.z = foundations[0].position.z = 0;
      directeHauswandMesh.material = concreteMat;
    }
  }

  if (directeHauswand.length > 0) {
    directeHauswand[0].addEventListener("click", () => {
      addRemoveHauswand();
    });
  }

  //SET MATERIALS TO RECIVE MORE THEN 4 LIGHTS
  scene.materials.forEach(function (mtl) {
    mtl.maxSimultaneousLights = 100;
  });

  // ACCESORIES SECTION FUNCTIONS*****************************************************************************************

  for (let i = 0; i < sideAccCloseBtn.length; i++) {
    sideAccCloseBtn[i].addEventListener("click", () => {
      // sideAccesories.style.width = 0;
      sideAccesories.style.display = "none";
      directeHauswandMesh.material = concreteMat;
      sturmankersRuckseite.forEach((elm) => {
        elm.material = fencePostMat;
      });
      sturmankersVorderseite.forEach((elm) => {
        elm.material = fencePostMat;
      });
      for (let j = 0; j < deleteAccesorie.length; j++) {
        deleteAccesorie[j].style.display = "none";
      }
    });
  }

  //END OF SCENE
  return scene;
};
