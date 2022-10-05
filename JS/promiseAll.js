Promise.myAll = function (promises) {
  const output = [];
  let current = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then((result) => {
        output[i] = result;
        current++;
        if (current == promises.length) resolve(output);
      }).catch((err) => {
        reject(err);
      });
    });
  });
};

const promise1 = Promise.resolve(10);

const promise2 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("resolved"), 1000);
  reject("error");
});

const promise3 = Promise.resolve(["Hey", "How are you?"]);

Promise.myAll([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
