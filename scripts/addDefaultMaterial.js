function addDefaultMaterial(a, b, c, d, e, f, g, h, m, n, o, fencesArr) {
  a.forEach((elm) => {
    elm.forEach((elmInside) => {
      elmInside.material = f;
    });
  });
  b.forEach((elm) => {
    elm.material = g;
  });
  c.forEach((elm) => {
    elm.material = g;
  });
  d.forEach((elm) => {
    elm.material = g;
  });
  e.forEach((elm) => {
    elm.material = h;
  });

  for (let i = 0; i < m.length; i++) {
    if (fencesArr[i].thisSmallBoardsMat == 0) {
      m[i].material = n;
    } else {
      m[i].material = o;
    }
  }
}
