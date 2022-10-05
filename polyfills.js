// for each
// arr.forEach(callback(currentVal,index,arr))

let arr = [1, 2, 4, 6, 8, 10];
Array.prototype.myForEach = function (callback) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

// map
// arr.map(callback(currentVal,index,arr))

Array.prototype.myMap = function (callback) {
  let arr = this;
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output[i] = callback(arr[i], i, arr);
  }
  return output;
};

// Filter
// arr.filter(callback(currentVal,index,arr))

Array.prototype.myFilter = function (callback) {
  let output = [],
    arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) output.push(arr[i]);
  }
  return output;
};

// Reduce
// arr.reduce(callback(currentVal,index,arr),initialVal)

Array.prototype.myReduce = function (callback, initialValue) {
  let arr = this;
  let acc = initialValue;
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
};

// ---------------------------------------------------------------------------------------------
const name = {
  fname: "Akshat",
  lname: "Sharma",
};

function showName(a, b, c, d) {
  console.log(this.fname, this.lname, a, b, c, d);
}

// Call
Function.prototype.myCall = function (scope, ...args) {
  scope._this = this;
  return scope._this(...args);
};

// Apply
Function.prototype.myCall = function (scope, ...args) {
  scope._this = this;
  return scope._this(args);
};

// Bind
Function.prototype.myBind = function (scope, ...args) {
  scope._this = this;
  return function (...args2) {
    return scope._this(...args, ...args2);
  };
};

const myBind = showName.myBind(name, 10, 20);
myBind(2, 3);

// --------------------------------------------------------------------------

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), delay);
  };
};

const throttle = (fn, delay) => {
  let flag = true;
  return function () {
    let args = arguments,
      context = this;
    if (flag) {
      fn.apply(context, args);
      setTimeout(() => {
        flag = true;
      }, delay);
      flag = false;
    }
  };
};

// --------------------------------------------------------------------------

//Promise
new Promise((resolve) => {
  resolve("Hello");
}).then((data) => console.log(data));

// Only Sync data with then
class MyPromise1 {
  resolvedData;
  isResolved = false;

  constructor(executor) {
    const resolve = (value) => {
      this.resolvedData = value;
      this.isResolved = true;
    };
    executor(resolve);
  }

  then(fn) {
    if (this.isResolved) {
      fn(this.resolvedData);
    }
  }
}

// Async data with then

new MyPromise1((res) => {
  res("Hello 2");
}).then((data) => console.log(data));

class MyPromise2 {
  resolvedData;
  isResolved = false;
  thenFunc;
  constructor(executor) {
    const resolve = (data) => {
      this.resolvedData = data;
      this.isResolved = true;

      if (typeof this.thenFunc === "function") this.thenFunc(this.resolvedData);
    };
    executor(resolve);
  }

  then(fn) {
    this.thenFunc = fn;
    if (this.isResolved) this.thenFunc(this.resolvedData);
  }
}

new MyPromise2((res) => {
  setTimeout(() => {
    res("Hello 3");
  }, 1000);
}).then((data) => console.log(data));

// Async with then chaining
class Promise3 {
  resolvedData;
  isResolved = false;
  fnChain = [];

  constructor(executor) {
    const resolve = (value) => {
      this.resolvedData = value;
      this.isResolved = true;
      if (this.fnChain.length) {
        this.fnChain.reduce((acc, fn) => {
          fn(acc);
        }, this.resolvedData);
      }
    };
    executor(resolve);
  }

  then(fn) {
    this.fnChain.push(fn);
    if (this.isResolved) fn(this.resolvedData);
    return this;
  }
}

new Promise3((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 100);
}).then((data) => console.log(`From Promise 3: ${data}`));

// Promise.all
// It takes an array of promises/normal value as parameter,
// it will run all the resolved values as array only if all the values gets resolved
// If a single promise gets rejects, it throws the error

Promise.myall = function (values) {
  let output = [];
  let completed = 0;
  return new Promise((resolve, reject) => {
    values.forEach((val, index) => {
      Promise.resolve(val)
        .then((result) => {
          completed++;
          output[index] = result;
          if (completed === values.length) resolve(output);
        })
        .catch((err) => reject(err));
    });
  });
};

const promise1 = 4;
const promise2 = Promise.resolve(2);
const promise3 = 10;
const promise4 = Promise.resolve(5);

Promise.myall([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

// Promise.any- Returns the very first promise which gets resolved,
// incase of error returns error

Promise.myAny = function (values) {
  let rejected = 0;
  return new Promise((resolve, reject) => {
    values.forEach((val) => {
      Promise.resolve(val)
        .then((output) => {
          resolve(output);
        })
        .catch((err) => {
          rejected++;
          if (rejected === values.length) return err;
        });
    });
  });
};
