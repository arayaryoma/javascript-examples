const max = 3;
(function(){
  for(let i = 0; i <= max; i++) {
    console.log('i', i);
    setTimeout(() => {
      console.log(max - i);
    },i * 1000)
  }
})();
