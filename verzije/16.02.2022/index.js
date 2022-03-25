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
  var light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, -1),
    scene
  );
  light.intensity = 0.7;
  var light2 = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 1),
    scene
  );
  light2.intensity = 0.7;

  // scene.environmentTexture = new BABYLON.CubeTexture(
  //   "https://raw.githubusercontent.com/veljko85/environments/gh-pages/environment.env",
  //   scene
  // );

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
  grassMaterial.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
  ground.material = grassMaterial;

  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  //FENCE

  // //FUNCTION TO CREATE FENCE
  // let createEasyFenceModel = (posX, posZ, rotX) => {
  //   var fencePartPosY = 0.18;
  //   // var fenceCore = new BABYLON.CreateBox('box', {width: 0.1, height: 0.1, depth: 0.1}, scene)
  //   // fenceCore.position = new BABYLON.Vector3(posX, 1, posZ)
  //   // fenceCores.push(fenceCore)

  //   //CREATE FENCES BORDS
  //   for (let i = 0; i < 8; i++) {
  //     var fenceMainPart = BABYLON.MeshBuilder.CreateBox("fence", {
  //       height: 0.225,
  //       width: 1.8,
  //       depth: 0.02,
  //     });
  //     fenceMainPart.position = new BABYLON.Vector3(posX, fencePartPosY, posZ);
  //     // fenceMainPart.addRotation(0,rotX,0)
  //     fencePartPosY += 0.226;
  //     fenceMainPart.material = fenceMainPartMat;
  //     fenceMainParts.push(fenceMainPart);
  //   }

  //   //START AND END PARTS
  //   startPart = BABYLON.MeshBuilder.CreateBox("startPart", {
  //     height: 0.025,
  //     width: 1.8,
  //     depth: 0.02,
  //   });
  //   startPart.position = new BABYLON.Vector3(posX, fencePartPosY - 0.1, posZ);
  //   // startPart.addRotation(0,rotX,0)
  //   var endPart = BABYLON.MeshBuilder.CreateBox("endPart", {
  //     height: 0.025,
  //     width: 1.8,
  //     depth: 0.02,
  //   });
  //   endPart.position = new BABYLON.Vector3(posX, 0.054, posZ);
  //   // endPart.addRotation(0,rotX,0)
  //   startPart.material = endPart.material = fenceStartEndMat;

  //   //POSTS

  //   //left post
  //   var leftPost = BABYLON.MeshBuilder.CreateBox("leftPost", {
  //     height: 2,
  //     width: 0.06,
  //     depth: 0.06,
  //   });
  //   leftPost.position = new BABYLON.Vector3(posX + 0.9, 1, posZ);
  //   leftPosts.push(leftPost);

  //   //right post
  //   var rightPost = BABYLON.MeshBuilder.CreateBox("leftPost", {
  //     height: 2,
  //     width: 0.06,
  //     depth: 0.06,
  //   });
  //   rightPost.position = new BABYLON.Vector3(posX - 0.9, 1, posZ);
  //   // rightPost.addRotation(0,rotX,0)
  //   leftPost.material = rightPost.material = fencePostMat;
  //   rightPosts.push(rightPost);

  //   //STURMANKER
  //   //left sturmanker ruckseite
  //   var leftSturmankerRuckseite = BABYLON.MeshBuilder.CreateBox(
  //     "leftSturmankerRuckseite",
  //     {
  //       height: 0.4,
  //       width: 0.04,
  //       depth: 0.04,
  //     }
  //   );
  //   leftSturmankerRuckseite.position = new BABYLON.Vector3(
  //     leftPost.position.x,
  //     0.15,
  //     leftPost.position.z - 0.11
  //   );
  //   leftSturmankerRuckseite.rotation.x = 0.5;
  //   sturmankersRuckseite.push(leftSturmankerRuckseite);
  //   //right sturmanker ruckseite
  //   var rightSturmankerRuckseite = leftSturmankerRuckseite.clone(
  //     "rightSturmankerRuckseite"
  //   );
  //   rightSturmankerRuckseite.position = new BABYLON.Vector3(
  //     rightPost.position.x,
  //     0.15,
  //     rightPost.position.z - 0.11
  //   );
  //   sturmankersRuckseite.push(rightSturmankerRuckseite);
  //   //left sturmanker Vorderseite
  //   var leftSturmankerVorderseite = leftSturmankerRuckseite.clone(
  //     "leftSturmankerVorderseite"
  //   );
  //   leftSturmankerVorderseite.position.z = leftPost.position.z + 0.11;
  //   leftSturmankerVorderseite.rotation.x = -0.5;
  //   sturmankersVorderseite.push(leftSturmankerVorderseite);
  //   //right sturmanker Vorderseite
  //   var rightSturmankerVorderseite = leftSturmankerRuckseite.clone(
  //     "rightSturmankerVorderseite"
  //   );
  //   rightSturmankerVorderseite.position = new BABYLON.Vector3(
  //     rightPost.position.x,
  //     0.15,
  //     rightPost.position.z + 0.11
  //   );
  //   rightSturmankerVorderseite.rotation.x = -0.5;
  //   sturmankersVorderseite.push(rightSturmankerVorderseite);
  //   //set material
  //   leftSturmankerRuckseite.material =
  //     rightSturmankerRuckseite.material =
  //     leftSturmankerVorderseite.material =
  //     rightSturmankerVorderseite.material =
  //       fencePostMat;
  //   //set visibility
  //   leftSturmankerRuckseite.isVisible =
  //     rightSturmankerRuckseite.isVisible =
  //     leftSturmankerVorderseite.isVisible =
  //     rightSturmankerVorderseite.isVisible =
  //       false;

  //   // rightSturmanker.position.z += 0.22;
  //   // rightSturmanker.rotation.x = -0.5;

  //   //LAISNE
  //   for (let i = 0; i < 7; i++) {
  //     var laisne = new BABYLON.MeshBuilder.CreateBox("endPart", {
  //       height: 0.01,
  //       width: 1.8,
  //       depth: 0.02,
  //     });
  //     laisne.material = laisneMat;
  //     // laisne.addRotation(0,rotX,0)
  //     laisne.isVisible = false;
  //     laisnes.push(laisne);
  //   }

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
  fencePartsColors = [
    "#DCDCDC",
    /*"#8c8c8c",*/ "#474747",
    "#654321",
    "#c2b280",
  ];

  //FENCE BORDS MATERIAL
  var fenceBoardMat = new BABYLON.StandardMaterial("fencePartMat", scene);
  fenceBoardMat.diffuseColor = BABYLON.Color3.FromHexString(
    fencePartsColors[0]
  );

  // //FENCE POSTS MATERIAL
  var fencePostMat = new BABYLON.StandardMaterial("fencePartMat", scene);
  fencePostMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[1]);

  //FENCE START AND END MATERIALS
  var fenceStartEndMat = new BABYLON.StandardMaterial("fencePartMat", scene);
  fenceStartEndMat.diffuseColor = BABYLON.Color3.FromHexString(
    fencePartsColors[1]
  );

  var inlaysMat = new BABYLON.StandardMaterial("inlaysMat", scene);
  inlaysMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[1]);

  //FENCE LAISNE MATERIALS
  var laisneMat = new BABYLON.StandardMaterial("laisneMat", scene);
  laisneMat.diffuseColor = BABYLON.Color3.FromHexString(fencePartsColors[0]);

  //FENCE POST CAP MATERIALS
  var capMat = new BABYLON.StandardMaterial("laisneMat", scene);
  capMat.diffuseColor = BABYLON.Color3.FromHexString("#202020");

  //FENCE VARIABLES
  var fenceBoards = [];
  var startParts = [];
  var laisnes = [];
  var inlays = [];
  var leftPosts = [];
  var rightPosts = [];
  var roots = [];
  var sturmankersRuckseite = [];
  var sturmankersVorderseite = [];

  //LOAD FENCE MESH
  BABYLON.SceneLoader.ImportMeshAsync("", "mesh/", "easyFence3.glb").then(
    (result) => {
      var fence = result.meshes[0];

      //posts cap
      let leftPostCap = scene.getMeshByName("post-cap-left");
      let rightPostCap = scene.getMeshByName("post-cap-right");
      leftPostCap.material = rightPostCap.material = capMat;

      // var fencePartPosY = 0.18;

      //boards
      for (let i = 0; i < 8; i++) {
        let fenceBoard = scene.getMeshByName(`fence-board-${i}`);
        fenceBoard.material = fenceBoardMat;
        fenceBoards.push(fenceBoard);
      }

      //start and end parts
      let startPart = scene.getMeshByName("start-part");
      startParts.push(startPart);
      let endPart = scene.getMeshByName("end-part");

      startPart.material = endPart.material = fenceStartEndMat;

      //laisne
      let laisneOrg = scene.getMeshByName("lajsnica");
      laisneOrg.isVisible = false;
      laisneOrg.material = laisneMat;
      for (let i = 0; i < 7; i++) {
        var laisne = laisneOrg.clone("laisne");
        laisne.material = laisneMat;
        laisne.isVisible = false;
        laisnes.push(laisne);
      }

      //inlays
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

      //posts
      let leftPost = scene.getMeshByName("post-left");
      leftPosts.push(leftPost);
      console.log(leftPost.position.y);
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

      //leds
      let leftLed = scene.getMeshByName("led-left");
      // leftPosts.push(leftPost);
      let rightLed = scene.getMeshByName("led-right");
      // rightPosts.push(rightPost);
      leftLed.isVisible = rightLed.isVisible = false;

      // var sturmankersRuckseite = [];
      // var sturmankersVorderseite = [];

      //strumanker
      let leftStrVord = scene.getMeshByName("sturmanker-left-front_primitive0");
      let leftStrVordSraf = scene.getMeshByName(
        "sturmanker-left-front_primitive1"
      );
      let leftStrRuck = scene.getMeshByName("sturmanker-left-rear_primitive0");
      let leftStrRuckSraf = scene.getMeshByName(
        "sturmanker-left-rear_primitive1"
      );
      let rightStrVord = scene.getMeshByName(
        "sturmanker-right-front_primitive0"
      );
      let rightStrVordSraf = scene.getMeshByName(
        "sturmanker-right-front_primitive1"
      );
      let rightStrRuck = scene.getMeshByName(
        "sturmanker-right-rear_primitive0"
      );
      let rightStrRuckSraf = scene.getMeshByName(
        "sturmanker-right-rear_primitive1"
      );
      leftStrVord.material =
        leftStrRuck.material =
        rightStrVord.material =
        rightStrRuck.material =
          fencePostMat;
      leftStrVord.isVisible = true;
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
  function setPartsAndconf(parts, changable) {
    for (let i = 0; i < parts.length; i++) {
      //set colors in badge
      parts[i].children[0].children[0].style.backgroundColor =
        fencePartsColors[i];
      parts[i].addEventListener("click", () => {
        //change fence color
        changable.diffuseColor = BABYLON.Color3.FromHexString(
          fencePartsColors[i]
        );
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
  setPartsAndconf(mainFarbeParts, fenceBoardMat);
  setActivnes(mainFarbeParts, 0);

  //2 SET START UND AVBSCH
  let startUndAbschParts = document.getElementsByClassName(
    "set-part-start-und-absch"
  );
  setPartsAndconf(startUndAbschParts, fenceStartEndMat);
  setActivnes(startUndAbschParts, 1);

  //3 DESIGNlLEISTEN AUS ALUMINIUM
  let designleistensMat = document.getElementsByClassName(
    "set-part-designleisten-aus-aluminium-act-col"
  );
  setPartsAndconf(designleistensMat, laisneMat);
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
  setPartsAndconf(designInlaysFirst, inlaysMat);
  //second inlay setings
  let designInlaysSecond = document.getElementsByClassName(
    "second-set-design-inlays-color"
  );
  setPartsAndconf(designInlaysSecond, inlaysMat);
  //third inlay setings
  let designInlaysThird = document.getElementsByClassName(
    "third-set-design-inlays-color"
  );
  setPartsAndconf(designInlaysThird, inlaysMat);
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
  setPartsAndconf(fencePostsParts, fencePostMat);
  setActivnes(fencePostsParts, 4);

  //6 SET LED
  let ledParts = document.getElementsByClassName("set-part-led");
  setActivnes(ledParts, 5);
  let lightSettings = document.getElementById("light-settings");
  let lightColorSet = document.getElementById("light-color-settings");
  if (ledParts.length > 0) {
    ledParts[0].addEventListener("click", () => {
      lightSettings.style.display = "none";
      lightColorSet.style.display = "none";
    });
    ledParts[1].addEventListener("click", () => {
      lightSettings.style.display = "block";
      lightColorSet.style.display = "block";
    });
    ledParts[2].addEventListener("click", () => {
      lightSettings.style.display = "block";
      lightColorSet.style.display = "none";
    });

    let colorLightsColors = [
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
    let colorLightContainer = document.getElementsByClassName(
      "color-light-container"
    );
    for (let i = 0; i < colorLightContainer.length; i++) {
      colorLightContainer[i].style.backgroundColor = colorLightsColors[i];
      colorLightContainer[i].addEventListener("click", () => {
        var currentActColLig = document.getElementsByClassName(
          "active-color-light-contaier"
        );
        //change active color
        currentActColLig[0].className = currentActColLig[0].className.replace(
          " active-color-light-contaier",
          ""
        );
        colorLightContainer[i].className += " active-color-light-contaier";
      });
    }
  }

  let ledDeleteOnOff = document.getElementsByClassName("set-delete-on-off");
  setActivnes(ledDeleteOnOff, 6);
  let ledDayNight = document.getElementsByClassName("set-day-night");
  setActivnes(ledDayNight, 7);

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
