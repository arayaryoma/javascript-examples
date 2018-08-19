// Scope
let global = 'global object';
(function() {
  let a = 1;
  console.log(global); // -> 'global object'
  console.log(a); // -> 1
})();

(function() {
  console.log(global); // -> 'global object'
  // console.log(a); // ReferenceError: a is not defined
})();

(function() {
  let x = 1;
  if(x > 0) {
    let y = x * 10;
  }
  // console.log(y); //  ReferenceError: y is not defined
})();

// Redeclaration
(function(){
  let a = 1;
  console.log(a);
  // let a = 2; // SyntaxError: Identifier 'a' has already been declared
  // console.log(a);
})();

// variable shadowing
(function(){
  let a = 1;
  console.log(a); // -> 1
  if(true) {
    let a = 2;
    console.log(a); // -> 2
  }
})();

// Reassign
(function() {
  let a = 1;
  a = a * 10;
  console.log(a);
})();
