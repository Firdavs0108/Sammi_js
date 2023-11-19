

const originalObject = {
    key1: 'value1',
    key2: {
      nestedKey: 'nestedValue'
    }
  };
  
  // Creating a shallow copy using Object.assign
//   const shallowCopy = Object.assign({}, originalObject);            //assign Clone

  const shallowCopy = structuredClone(originalObject)                //deep Clone
  
  // Modifying the shallow copy
  shallowCopy.key1 = 'modifiedValue';
  shallowCopy.key2.nestedKey = 'modifiedNestedValue';
  
  // Logging the original and shallow copy
  console.log(originalObject);
  console.log(shallowCopy);
  