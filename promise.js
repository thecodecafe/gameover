const promiseParam = function(resolve, reject){
  if(username === storedUsername && 
    password === storedPassword
  ){
    // success
    return resolve("Success!");
  }
  // failure
  reject(Error("Username and password do not match."))
}

promiseParam(resolveFn, rejectFn);

function Promise(parameter){

  this.successCallback = undefined;
  this.failureCallback = undefined;

  this.then = function(sb){
    this.successCallback = sb;
    return this;
  }

  this.catch = function(fb){
    this.failureCallback = fb;
    return this;
  }

  this.resolve = function(params){
    if(this.successCallback !== undefined){
      this.successCallback(params);
      return;
    }
  }

  this.reject = function(params){
    if(this.failureCallback !== undefined){
      this.failureCallback(params);
    }
  }

  parameter(this.resolve, this.reject);
}

// Example(instantiated from the Promise function using the new keyword)
const promisObject = {
  successCallback: undefined,
  failureCallback: undefined,
  then: function(sb){
    this.successCallback = sb;
    return this;
  },
  catch: function(fb){
    this.failureCallback = fb;
    return this;
  }
}

function login(username, password){
  // stored username and password
  const storedUsername = "foo";
  const storedPassword = "bar";
  // instantiate a promise object
  const promise = new Promise(promiseParam);
  // return the promis object
  return promise;
}

// login("foo", "ba").then(success).catch(failure);

login("foo", "ba").then(success).catch(failure);

const success = function(result){
  console.log(result); 
}
const failure = function(error){ 
  console.log(error); 
}

// && AND
// || OR


// asyncronous // continue firing 
// syncronous // wait before continuing