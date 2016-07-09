function fib() {
var count = 1;
var count2 = 1;
var counter = 0;
  // Some variables here
  function nacci() {
    // do something to those variables here
    if (counter%2 == 0){
    console.log(count);
    count = count+count2;
  }
    else{
      console.log(count2);
      count2 = count+count2;
    }
    counter++;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
