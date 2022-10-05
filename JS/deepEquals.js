function deepEquals(value1, value2) {
  if (typeof value1 !== "object" && typeof value2 !== "object") {
    const isNotNaN1 = isNaN(value1) && typeof value1 === "number";
    const isNotNaN2 = isNaN(value2) && typeof value2 === "number";
    if (isNotNaN1 && isNotNaN2) return true;
    return value1 === value2;
  }
  if (typeof value1 !== typeof value2) return false;

  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length !== value2.length) return false;
    for (let i = 0; i < value1.length; i++) {
      if (!deepEquals(value1[i], value2[i])) return false;
    }
    return true;
  }
  if (Array.isArray(value1) && !Array.isArray(value2)) return false;
  if (!Array.isArray(value1) && Array.isArray(value2)) return false;

  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);
  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    if (!deepEquals(value1[keys1[i]], value2[keys2[i]])) return false;
  }
  return true;
}

console.log("True cases");
console.log(deepEquals(1, 1));
console.log(deepEquals(NaN, NaN));
console.log(deepEquals("abc", "abc"));
console.log(deepEquals([], []));
console.log(deepEquals([1], [1]));
console.log(deepEquals(["a"], ["a"]));
console.log(deepEquals({ a: "1" }, { a: "1" }));
console.log(deepEquals({}, {}));
console.log(deepEquals({ a: "1", b: { c: "2" } }, { a: "1", b: { c: "2" } }));

console.log("False cases");
console.log(deepEquals(1, 2));
console.log(deepEquals(1, NaN));
console.log(deepEquals("abc", NaN));
console.log(deepEquals([], [1]));
console.log(deepEquals([1], [2]));
console.log(deepEquals(["a"], ["1"]));
console.log(deepEquals({ a: "1" }, { a: "2" }));
console.log(deepEquals({}, []));
console.log(deepEquals({ a: "1", c: { d: "2" } }, { a: "1", b: { c: "2" } }));
