var createMainPost = (
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
  selectedMat,
  smallBoardsArr,
  smallBoardsMat,
  smallBoardsMatDark,
  fencesArr,
  posX
) =>
  BABYLON.SceneLoader.ImportMeshAsync("", "mesh/", "mainPost.glb").then(
    (result) => {
      var mainPost = result.meshes[0];
      mainPost.rotationQuaternion = null;
      //SET POSITION
      scene.getNodeByName("post-root-left").position.x =
        scene.getNodeByName("sturmanker-left-front").position.x =
        scene.getNodeByName("sturmanker-left-rear").position.x =
          posX;
      for (let i = 0; i < result.meshes.length; i++) {
        result.meshes[i].position.x = posX;
      }
      //POST CAP
      let leftPostCap = scene.getMeshByName("post-cap-left");
      leftPostCap.material = capMat;

      //POSTS
      let leftPost = scene.getMeshByName("post-left");
      leftPosts.push(leftPost);
      leftPost.material = fencePostMat;

      //add selected to mesh
      leftPost.actionManager = new BABYLON.ActionManager(scene);
      leftPost.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          function () {
            if (leftPost.material.id != "selectedMat") {
              removeSideAccesories(
                sideAccesories,
                deleteAccesorie,
                addFenceAcc
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
                smallBoardsMat,
                smallBoardsMatDark,
                fencesArr
              );
              leftPost.material = selectedMat;
            } else {
              leftPost.material = fencePostMat;
            }
          }
        )
      );

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
      let leftStrVord = scene.getMeshByName("sturmanker-left-front_primitive0");
      leftStrVord.isVisible = false;

      let leftStrVordSraf = scene.getMeshByName(
        "sturmanker-left-front_primitive1"
      );
      leftStrVordSraf.isVisible = false;

      let leftStrRuck = scene.getMeshByName("sturmanker-left-rear_primitive0");
      leftStrRuck.isVisible = false;

      let leftStrRuckSraf = scene.getMeshByName(
        "sturmanker-left-rear_primitive1"
      );
      leftStrRuckSraf.isVisible = false;

      sturmankersVorderseite.push(leftStrVord);
      sturVorderseiteSrafs.push(leftStrVordSraf);
      sturmankersRuckseite.push(leftStrRuck);
      sturRuckseiteSrafs.push(leftStrRuckSraf);

      //set material
      leftStrVord.material = leftStrRuck.material = fencePostMat;
      //set sraf material
      leftStrVordSraf.material = leftStrRuckSraf.material = rootMat;
    }
    //END OF MAIN POST
  );
