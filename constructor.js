//Constructor Function
//returns reference to 'Object' constructor that
//created instance Object
//***Value of property is reference to function itself


//DESCRIPTION
//All objects will have constructor property

var o = {}
o.constructor === Object; //true

var a = []
a.constructor === Array; //true

var a = new Array
a.constructor === Array; //true

var n = new Number(3)
n.constructor === Number; //true


//EXAMPLE
function Tree(name) {
  this.name = name;
}

var theTree = new Tree('Redwood');
console.log('theTree.constructor is ' + theTree.constructor);

//output
theTree.constructor is function Tree(name) {
  this.name = name;
}
