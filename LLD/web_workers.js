/**
A js process that runs in background of a webpage
As JS is a single threaded language, it responsible for execution of JS line by line
A web worker is a seperate JS thread that allows you to run parallely.
Limitation: Cannot perform DOM manipulation
It can be used to offload expensive work.
*/

// Inside script.js

const worker = new Worker("./worker.js");
worker.postMessage("Hello from script");
worker.onmessage((message) => {
  console.log(message);
});

// Inside worker.js
onmessage = function (message) {
  console.log(message);
  postMessage("Hello from worker");
};
