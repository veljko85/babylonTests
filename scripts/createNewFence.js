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
  inlaysOnOff
) {
  if (activeArrowSide == 1) {
    createRightFence(
      rightPosts[activeArrow].getAbsolutePosition().x + 0.9,
      rightPosts[activeArrow].getAbsolutePosition().z,
      0,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }
  if (activeArrowSide == 2) {
    createRightFence(
      rightPosts[activeArrow].getAbsolutePosition().x,
      rightPosts[activeArrow].getAbsolutePosition().z - 0.9,
      Math.PI / 2,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }
  if (activeArrowSide == 3) {
    createRightFence(
      rightPosts[activeArrow].getAbsolutePosition().x,
      rightPosts[activeArrow].getAbsolutePosition().z + 0.9,
      -Math.PI / 2,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }
  if (activeArrowSide == 4) {
    createRightFence(
      rightPosts[activeArrow].getAbsolutePosition().x - 0.9,
      rightPosts[activeArrow].getAbsolutePosition().z,
      Math.PI,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }
  if (activeArrowSide == 5) {
    createRightFence(
      leftPosts[0].getAbsolutePosition().x,
      leftPosts[0].getAbsolutePosition().z - 0.9,
      Math.PI / 2,
      fenceType,
      smallBoardsCol,
      inlaysOnOff
    );
  }
  if (activeArrowSide == 6) {
    createRightFence(
      leftPosts[0].getAbsolutePosition().x,
      leftPosts[0].getAbsolutePosition().z + 0.9,
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
  unselect();
  singsDel.forEach((elm) => {
    elm.isVisible = false;
  });
}
