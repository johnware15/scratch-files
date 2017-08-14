//PROMISES
//Objects representing eventual completion/failure of asynchronous operations
//Created by use of constructor
//Returned object attached to callbacks, instead of passing callbacks

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

//OR

let promise2 = doSomething().then(successCallback, failureCallback);


//Each promise represents completion of another asynchronous function

//old code --- classic callback pyramid of doom
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

//Modern functions --> attach callbacks to returned promises instead, forming 'promise chain'
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);

//'Arrow function' version
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);

//chain after failure
new Promise((resolve, reject) => {
  console.log('Initial');

  resolve();
})
.then(() => {
  throw new Error('Something failed');

  console.log('Do this');
})
.catch(() => {
  console.log('Do that');
})

.then(() => {
  console.log('Do this whatever happened before');
});
