let main = {
    a: 12,
    b: 33,
    c: {
      x: 'abc',
      y: 'hello',
      z: {
        t: 'same',
        u: 'lake',
      }
    }
  };
  let outpu={
    a:main.a,
    b:main.b,
    cx:main.c.x,
    cy:main.c.y,
    czt:main.c.z.t,
    czu:main.c.z.u,
  }
console.log(outpu.cx);
  
