// Scope
var global = 'global object';
(function() {
  var a = 1;
  console.log(global); // -> 'global object'
  console.log(a); // -> 1
})();

(function() {
  console.log(global); // -> 'global object'
  // console.log(a); // ReferenceError: a is not defined
})();

(function() {
  var x = 1;
  if(x > 0) {
    var y = x * 10;
  }
  console.log(y); // -> 10
})();


// Redeclaration
(function(){
  var a = 1;
  console.log(a); // -> 1
  var a = 2;
  console.log(a) // -> 2
})();

// variable shadowing
(function(){
  var a = 1;
  console.log(a); // -> 1
  if(true) {
    var a = 2;
    console.log(a); // -> 2
  }
})();

// Reassign
(function() {
  var a = 1;
  a = a * 10;
  console.log(a); // -> 10
})();

