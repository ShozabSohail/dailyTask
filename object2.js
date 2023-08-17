function flattenObject(obj, prefix = '') {
    let result = {}; 
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        let nestedKeys = flattenObject(obj[key], `${prefix}${key}`);
        result = { ...result, ...nestedKeys };
      } 
      else {
        result[`${prefix}${key}`] = obj[key];
      } 
    }
    return result;
  }
  let main = {
    a: 12,
    b: 33,
    c: {
      x: 'abc',
      y: 'hello',  
      z: {
        t: 'same',
        u: 'lake'
      }
    }
  };
  
  let flattened = flattenObject(main);
   console.log(flattened); // Flattened object
  
//   console.log(main); // Original object is unchanged
  
