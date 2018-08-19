const arr = [1,2,3,4,5];
(function() {
  for(var i = 0; i < arr.length; i++) {
    arr[i] *= 10;
  }
  console.log(arr);
})();

(function() {
  for(let i = 0; i < arr.length; i++) {
    arr[i] *= 10;
  }
  console.log(arr);
})();

(function() {
  const newArr = arr.map(el => el *= 10)
  console.log(newArr);
})();


(function(){
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
})();

(function(){
  const sum = arr.reduce((accumulator, current) => accumulator + current);
  console.log(sum);
})();


