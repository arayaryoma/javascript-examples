// Scope
const global = 'global object';
(function() {
  const a = 1;
  console.log(global); // -> 'global object'
  console.log(a); // -> 1
})();

(function() {
  console.log(global); // -> 'global object'
  // console.log(a); // ReferenceError: a is not defined
})();

(function() {
  const x = 1;
  if(x > 0) {
    const y = x * 10;
  }
  // console.log(y); //  ReferenceError: y is not defined
})();

// Redeclaration
(function(){
  const a = 1;
  console.log(a);
  // const a = 2; // SyntaxError: Identifier 'a' has already been declared
  // console.log(a);
})();

// variable shadowing
(function(){
  const a = 1;
  console.log(a); // -> 1
  if(true) {
    const a = 2;
    console.log(a); // -> 2
  }
})();

// Reassign
(function() {
  const a = 1;
  // a = a * 10; // TypeError: Assignment to constant variable.
  console.log(a);
})();

// but it's not immutable
(function() {
  const obj = {a: 1};
  console.log(obj); // -> { a: 1 }
  obj.a = obj.a * 10
  obj.b = obj.a * 100;
  console.log(obj); // -> { a: 10, b: 1000 }
  const arr = [1];
  console.log(arr); // -> [ 1 ]
  arr[1] = 2;
  arr.push(3);
  console.log(arr); // -> [ 1, 2, 3 ]
})();


