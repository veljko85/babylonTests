function createNewFence(
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
  fenceType,
  smallBoardsCol,
  inlaysOnOff,
  getAbsPosX,
  getAbsPosZ
) {
  if (activeArrowSide == 1) {
    createRightFence(
      getAbsPosX(rightPosts[activeArrow]) + 0.94,
      getAbsPosZ(rightPosts[activeArrow]),
      0,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }
  if (activeArrowSide == 2) {
    createRightFence(
      getAbsPosX(rightPosts[activeArrow]),
      getAbsPosZ(rightPosts[activeArrow]) - 0.94,
      Math.PI / 2,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }
  if (activeArrowSide == 3) {
    createRightFence(
      getAbsPosX(rightPosts[activeArrow]),
      getAbsPosZ(rightPosts[activeArrow]) + 0.94,
      -Math.PI / 2,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }
  if (activeArrowSide == 4) {
    createRightFence(
      getAbsPosX(rightPosts[activeArrow]) - 0.94,
      getAbsPosZ(rightPosts[activeArrow]),
      Math.PI,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }
  if (activeArrowSide == 5) {
    createRightFence(
      getAbsPosX(leftPosts[0]),
      getAbsPosZ(leftPosts[0]) - 0.94,
      Math.PI / 2,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }
  if (activeArrowSide == 6) {
    createRightFence(
      getAbsPosX(leftPosts[0]),
      getAbsPosZ(leftPosts[0]) + 0.94,
      -Math.PI / 2,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }

  if (activeArrow != false) rightPosts[activeArrow].material = fencePostMat;

  activeArrow = false;
  activeArrowSide = false;
  addFenceSings.forEach((elm) => {
    elm.material = addNewFenceMeshMat;
  });
  sideAccesories.style.display = "none";
  addNewFenceToSide.style.display = "none";
  newFenceInlays.style.display = "none";
  newStub.style.display = "none";

  unselect(false);

  singsDel.forEach((elm) => {
    elm.isVisible = false;
  });
}
