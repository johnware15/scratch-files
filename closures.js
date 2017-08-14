//CLOSURES
//Combination of a function and lexical environment within which that function was declared

//LEXICAL SCOPING
function init() {
  var name = 'Mozilla'; //name is local variable created by init
  function displayName() { //displayName() is inner function, a closure
    alert(name); //use variable declared in parent function
  }
  displayName();
}
init();


//CLOSURE
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
