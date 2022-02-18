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
  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    0,
    0,
    0,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);
  camera.setPosition(new BABYLON.Vector3(0, 1.5, 4));
  camera.setTarget(new BABYLON.Vector3(0, 1, 0));
  camera.wheelPrecision = 300;

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

  //set lite lights
  var light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, -1),
    scene
  );
  lights.push(light);
  lightsLite.push(light);

  var light2 = new BABYLON.HemisphericLight(
    "light2",
    new BABYLON.Vector3(0, 1, 1),
    scene
  );
  lights.push(light2);
  lightsLite.push(light2);

  //set light lights intensity
  lightsLite.forEach((elm) => {
    elm.intensity = 0.1;
  });

  //set havy lights
  var light3 = new BABYLON.HemisphericLight(
    "light3",
    new BABYLON.Vector3(0, 0, -1),
    scene
  );
  // light3.intensity = 0.2;
  lights.push(light3);
  lightsHavy.push(light3);

  var light4 = new BABYLON.HemisphericLight(
    "light4",
    new BABYLON.Vector3(0, 0, 1),
    scene
  );
  // light4.intensity = 0.2;
  lights.push(light4);
  lightsHavy.push(light4);

  //set havy lights intensity
  lightsHavy.forEach((elm) => {
    elm.intensity = 0.6;
  });

  // GROUND
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

  //FENCE VARIABLES
  var fenceBoards = [];
  var startParts = [];
  var laisnes = [];
  var inlays = [];
  var leftPosts = [];
  var rightPosts = [];
  var roots = [];
  var leds = [];
  var sturmankersRuckseite = [];
  var sturmankersVorderseite = [];

  //LOAD FENCE MESH
  BABYLON.SceneLoader.ImportMeshAsync("", "mesh/", "easyFence3.glb").then(
    (result) => {
      var fence = result.meshes[0];

      //POST CAP
      let leftPostCap = scene.getMeshByName("post-cap-left");
      let rightPostCap = scene.getMeshByName("post-cap-right");
      leftPostCap.material = rightPostCap.material = capMat;

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
      let inlaysViero = scene.getMeshByName(
        "fence-board-frame-texture-squares"
      );
      inlaysViero.isVisible = false;
      inlays.push(inlaysViero);
      let inlaysAstro = scene.getMeshByName(
        "fence-board-frame-texture-circles"
      );
      inlaysAstro.isVisible = false;
      inlays.push(inlaysAstro);
      let inlaysSnow = scene.getMeshByName("fence-board-frame");
      inlaysSnow.isVisible = false;
      inlays.push(inlaysSnow);
      inlaysSnow.material = inlaysMat;

      //POSTS
      let leftPost = scene.getMeshByName("post-left");
      leftPosts.push(leftPost);

      let rightPost = scene.getMeshByName("post-right");
      rightPosts.push(rightPost);

      leftPost.material = rightPost.material = fencePostMat;

      //post roots
      let leftRoot0 = scene.getMeshByName("post-root-left_primitive0");
      roots.push(leftRoot0);
      let leftRoot1 = scene.getMeshByName("post-root-left_primitive1");
      roots.push(leftRoot1);
      let rightRoot0 = scene.getMeshByName("post-root-right_primitive0");
      roots.push(rightRoot0);
      let rightRoot1 = scene.getMeshByName("post-root-right_primitive1");
      roots.push(rightRoot1);
      roots.forEach((elm) => {
        elm.material = rootMat;
      });

      //create foundation start
      let foundationLeftStart = new BABYLON.MeshBuilder.CreateGround(
        "foundationLeftStart",
        { width: 0.4, height: 0.4 },
        scene
      );
      foundationLeftStart.position = new BABYLON.Vector3(
        rightPost.position.x,
        0.0001,
        0
      );
      foundationLeftStart.material = concreteMat;

      let foundationRightStart = foundationLeftStart.clone(
        "foundationRightStart"
      );
      foundationRightStart.position.x = leftPost.position.x;
      //create foundation
      // let foundationLeft = new BABYLON.MeshBuilder.CreateBox(
      //   "foundationLeft",
      //   { width: 0.4, height: 0.4, depth: 1 },
      //   scene
      // );
      // foundationLeft.position.x = rightPost.position.x;

      //LEDS
      let leftLed = scene.getMeshByName("led-left");
      leds.push(leftLed);
      let rightLed = scene.getMeshByName("led-right");
      leds.push(rightLed);
      leftLed.material = rightLed.material = ledMat;
      leftLed.isVisible = rightLed.isVisible = false;

      //spot light for led
      var light5 = new BABYLON.SpotLight(
        "spotLight5",
        new BABYLON.Vector3(0.9, 1, 1.5),
        new BABYLON.Vector3(0, 0, -1),
        Math.PI / 2,
        8,
        scene
      );
      // light5.intensity = 0.5;
      lights.push(light5);
      lightsLed.push(light5);

      var light6 = new BABYLON.SpotLight(
        "spotLight6",
        new BABYLON.Vector3(-0.9, 1, 1.5),
        new BABYLON.Vector3(0, 0, -1),
        Math.PI / 2,
        9,
        scene
      );
      // light6.intensity = 0.5;
      lights.push(light6);
      lightsLed.push(light6);

      //set led lights intensity
      lightsLed.forEach((elm) => {
        elm.intensity = 0;
      });

      //set lights color
      lights.forEach((elm) => {
        elm.diffuse = elm.specular = BABYLON.Color3.FromHexString(
          lightColors[4]
        );
      });

      //STRUMANKER
      let leftStrVord = scene.getMeshByName("sturmanker-left-front_primitive0");
      sturmankersVorderseite.push(leftStrVord);

      let leftStrVordSraf = scene.getMeshByName(
        "sturmanker-left-front_primitive1"
      );
      sturmankersVorderseite.push(leftStrVordSraf);

      let leftStrRuck = scene.getMeshByName("sturmanker-left-rear_primitive0");
      sturmankersRuckseite.push(leftStrRuck);

      let leftStrRuckSraf = scene.getMeshByName(
        "sturmanker-left-rear_primitive1"
      );
      sturmankersRuckseite.push(leftStrRuckSraf);

      let rightStrVord = scene.getMeshByName(
        "sturmanker-right-front_primitive0"
      );
      sturmankersVorderseite.push(rightStrVord);

      let rightStrVordSraf = scene.getMeshByName(
        "sturmanker-right-front_primitive1"
      );
      sturmankersVorderseite.push(rightStrVordSraf);

      let rightStrRuck = scene.getMeshByName(
        "sturmanker-right-rear_primitive0"
      );
      sturmankersRuckseite.push(rightStrRuck);

      let rightStrRuckSraf = scene.getMeshByName(
        "sturmanker-right-rear_primitive1"
      );
      sturmankersRuckseite.push(rightStrRuckSraf);
      //set material
      leftStrVord.material =
        leftStrRuck.material =
        rightStrVord.material =
        rightStrRuck.material =
          fencePostMat;
      //set sraf material
      leftStrVordSraf.material =
        leftStrRuckSraf.material =
        rightStrVordSraf.material =
        rightStrRuckSraf.material =
          rootMat;
      //set visibility
      sturmankersVorderseite.forEach((elm) => {
        elm.isVisible = false;
      });
      sturmankersRuckseite.forEach((elm) => {
        elm.isVisible = false;
      });
    }
  );

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

  //CREATE DIRECTE HAUSWAND - 9
  var directeHauswandMesh = BABYLON.MeshBuilder.CreateBox(
    "directeHauswandMesh",
    {
      height: 2.1,
      width: 0.2,
      depth: 0.25,
    }
  );
  directeHauswandMesh.position = new BABYLON.Vector3(1, 1.05, 0);
  directeHauswandMesh.material = concreteMat;
  directeHauswandMesh.isVisible = false;
  //ADD DIRECTE HAUSWAND - 9
  function addRemoveHauswand() {
    if (!directeHauswandMesh.isVisible) {
      directeHauswandMesh.isVisible = true;
      leftPosts[0].scaling.y = 1;
      leftPosts[0].position.y = 0.962;
    } else {
      directeHauswandMesh.isVisible = false;
      leftPosts[0].scaling.y = rightPosts[0].scaling.y;
      leftPosts[0].position.y = rightPosts[0].position.y;
    }
  }

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
      } else {
        clickableMainSec[i].className = clickableMainSec[i].className.replace(
          " clicked",
          " not-clicked"
        );
        clickableMainSec[i].children[2].innerHTML = "+";
        clickableMainSec[i].nextElementSibling.style.height = 0;
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
  function setActivnes(parts, partNum) {
    for (let i = 0; i < parts.length; i++) {
      parts[i].addEventListener("click", () => {
        //change active singhts
        var currentActCol =
          document.getElementsByClassName("active-text-color");
        //add remove active chackmark
        currentActCol[partNum].children[2].innerHTML = "";
        parts[i].children[2].innerHTML = "&#10003";
        //change active color
        currentActCol[partNum].className = currentActCol[
          partNum
        ].className.replace(" active-text-color", "");
        parts[i].className += " active-text-color";
      });
    }
  }
  //SET TOGGLE ACTIVNES
  function setToggleActivnes(parts, partNum) {
    let togAct = false;
    for (let i = 0; i < parts.length; i++) {
      parts[i].addEventListener("click", () => {
        var currentActCol =
          document.getElementsByClassName("active-text-color");
        if (!togAct) {
          parts[i].className += " active-text-color";
          parts[i].children[2].innerHTML = "&#10003";
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
    let checkboxActive = [false, false, false, false, false, false, false];
    for (let i = 0; i < designleistens.length; i++) {
      designleistens[i].addEventListener("click", () => {
        if (!checkboxActive[i]) {
          designleistens[i].children[0].children[0].style.backgroundColor =
            "#3967ff";
          designleistens[i].children[0].children[0].innerHTML = "&#10003";
          checkboxActive[i] = true;
          createLaisne(i);
        } else {
          designleistens[i].children[0].children[0].style.backgroundColor =
            "transparent";
          designleistens[i].children[0].children[0].innerHTML = "";
          checkboxActive[i] = false;
          disposeLaisne(i);
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
  if (designInlays.length > 0) {
    for (let i = 0; i < designInlays.length; i++) {
      designInlays[i].addEventListener("click", () => {
        if (i == 0) {
          fenceBoards[6].isVisible = true;
          inlays[0].isVisible = false;
          inlays[1].isVisible = false;
          inlays[2].isVisible = false;
        } else if (i == 1 || i == 2) {
          fenceBoards[6].isVisible = false;
          inlays[0].isVisible = true;
          inlays[1].isVisible = false;
          inlays[2].isVisible = false;
        } else if (i == 3 || i == 4) {
          fenceBoards[6].isVisible = false;
          inlays[0].isVisible = false;
          inlays[1].isVisible = true;
          inlays[2].isVisible = false;
        } else if (i == 5 || i == 6) {
          fenceBoards[6].isVisible = false;
          inlays[0].isVisible = false;
          inlays[1].isVisible = false;
          inlays[2].isVisible = true;
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
  function setDayNight(havyInt, ledInt) {
    lightsHavy.forEach((elm) => {
      elm.intensity = havyInt;
    });
    lightsLed.forEach((elm) => {
      elm.intensity = ledInt;
    });
  }
  //set lights color
  function setLightColor(lightNum) {
    lightsHavy.forEach((elm) => {
      elm.diffuse = elm.specular = BABYLON.Color3.FromHexString(
        lightColors[lightNum]
      );
    });
  }

  ledColNum = 4;
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
    ledParts[0].addEventListener("click", () => {
      //set html
      lightSettings.style.display = "none";
      lightColorSet.style.display = "none";
      //set babylon
      leds.forEach((elm) => {
        elm.isVisible = false;
      });
      setDayNight(0.6, 0);
      ledColNum = 4;
      setLightColor(ledColNum);
      setLedColor(ledColNum);
    });
    ledParts[1].addEventListener("click", () => {
      //set html
      lightSettings.style.display = "block";
      lightColorSet.style.display = "block";
      //set babylon
      leds.forEach((elm) => {
        elm.isVisible = true;
      });
      setDayNight(0.2, 0.5);
      ledColNum = 0;
      setLightColor(ledColNum);
      setLedColor(ledColNum);
    });
    ledParts[2].addEventListener("click", () => {
      //set html
      lightSettings.style.display = "block";
      lightColorSet.style.display = "none";
      //set babylon
      leds.forEach((elm) => {
        elm.isVisible = true;
      });
      setDayNight(0.2, 0.5);
      ledColNum = 4;
      setLightColor(4);
      setLedColor(4);
    });

    let ledDeleteOnOff = document.getElementsByClassName("set-delete-on-off");
    setActivnes(ledDeleteOnOff, 6);

    let ledDayNight = document.getElementsByClassName("set-day-night");
    setActivnes(ledDayNight, 7);

    for (let i = 0; i < ledDayNight.length; i++) {
      ledDayNight[0].addEventListener("click", () => {
        leds.forEach((elm) => {
          elm.isVisible = false;
        });
        setDayNight(0.6, 0);
        setLightColor(4);
        setLedColor(ledColNum);
      });
      ledDayNight[1].addEventListener("click", () => {
        leds.forEach((elm) => {
          elm.isVisible = true;
        });
        setDayNight(0.6, 0);
        setLightColor(4);
        setLedColor(ledColNum);
      });
      ledDayNight[2].addEventListener("click", () => {
        leds.forEach((elm) => {
          elm.isVisible = true;
        });
        setDayNight(0.2, 0.5);
        setLightColor(ledColNum);
        setLedColor(ledColNum);
      });
    }

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

  if (befePfostenParts.length > 0) {
    befePfostenParts[0].addEventListener("click", () => {
      leftPosts[0].scaling.y = rightPosts[0].scaling.y = 1;
      leftPosts[0].position.y = rightPosts[0].position.y = 0.962;
      for (let i = 0; i < roots.length; i++) {
        roots[i].isVisible = true;
      }
    });
    befePfostenParts[1].addEventListener("click", () => {
      leftPosts[0].scaling.y = rightPosts[0].scaling.y = 1.175;
      leftPosts[0].position.y = rightPosts[0].position.y = 0.796;
      for (let i = 0; i < roots.length; i++) {
        roots[i].isVisible = false;
      }
    });
    befePfostenParts[2].addEventListener("click", () => {
      leftPosts[0].scaling.y = rightPosts[0].scaling.y = 1.475;
      leftPosts[0].position.y = rightPosts[0].position.y = 0.511;
      for (let i = 0; i < roots.length; i++) {
        roots[i].isVisible = false;
      }
    });
  }

  //8 STURMANKER
  let sturmankerCon = document.getElementsByClassName("sturmanker-con");
  setActivnes(sturmankerCon, 9);
  if (sturmankerCon.length > 0) {
    sturmankerCon[0].addEventListener("click", () => {
      for (let i = 0; i < sturmankersRuckseite.length; i++) {
        sturmankersRuckseite[i].isVisible = true;
      }
      for (let i = 0; i < sturmankersVorderseite.length; i++) {
        sturmankersVorderseite[i].isVisible = false;
      }
    });
    sturmankerCon[1].addEventListener("click", () => {
      for (let i = 0; i < sturmankersRuckseite.length; i++) {
        sturmankersRuckseite[i].isVisible = false;
      }
      for (let i = 0; i < sturmankersVorderseite.length; i++) {
        sturmankersVorderseite[i].isVisible = false;
      }
    });
    sturmankerCon[2].addEventListener("click", () => {
      for (let i = 0; i < sturmankersRuckseite.length; i++) {
        sturmankersRuckseite[i].isVisible = false;
      }
      for (let i = 0; i < sturmankersVorderseite.length; i++) {
        sturmankersVorderseite[i].isVisible = true;
      }
    });
  }

  //9 BETONSKI STUB SA STRANE
  let directeHauswand = document.getElementsByClassName(
    "set-part-direkte-hauswand"
  );
  setToggleActivnes(directeHauswand, 10);
  if (directeHauswand.length > 0) {
    directeHauswand[0].addEventListener("click", () => {
      addRemoveHauswand();
    });
  }

  //SET MATERIALS TO RECIVE MORE THEN 4 LIGHTS
  scene.materials.forEach(function (mtl) {
    mtl.maxSimultaneousLights = 100;
  });

  //END OF SCENE
  return scene;
};
//BABYLON TO FUNCTION
window.initFunction = async function () {
  var asyncEngineCreation = async function () {
    try {
      return createDefaultEngine();
    } catch (e) {
      console.log(
        "the available createEngine function failed. Creating the default engine instead"
      );
      return createDefaultEngine();
    }
  };

  window.engine = await asyncEngineCreation();
  if (!engine) throw "engine should not be null.";
  startRenderLoop(engine, canvas);
  window.scene = createScene();
};
initFunction().then(() => {
  sceneToRender = scene;
});

// Resize
window.addEventListener("resize", function () {
  engine.resize();
});
