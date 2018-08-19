// Object.freeze
(function(){
  const obj = {a: 1};
  Object.freeze(obj);
  obj.a = obj.a * 10 // silently ignored
  obj.b = obj.a * 100; // silently ignored
  console.log(obj); // -> { a: 1 } 

  const arr = [1];
  Object.freeze(arr);
  arr[1] = 2; // silently ignored
  // arr.push(3);  // TypeError: Cannot add property 1, object is not extensible
  console.log(arr); // -> [1];
})();

// immutable-js
const {Map} = require('immutable');
(function(){
  const map1 = Map({a:1});
  map1.set('b', 2);
  console.log(map1.toObject()); // -> { a: 1 }
  const map2 = map1.set('b', 2);
  console.log(map2.toObject()); // -> { a: 1, b: 2 }
})()
