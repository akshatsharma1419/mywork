/*
IndexedDb is a NoSQL database present in the prowser which stores key value pairs



 */

const request = indexedDB.open("carsDB", 1);

request.onerror = (e) => {
  console.log(e);
};

request.onupgradeneeded = () => {
  const db = request.result;
  const store = db.createObjectStore("cars", { keyPath: "id" });
  store.createIndex("car_color", ["color"], { unique: false });
  store.createIndex("color_make", ["color", "make"], { unique: false });
};

request.onsuccess = () => {
  const db = request.result;
  const transaction = db.transaction("cars", "readwrite");
  const store = transaction.objectStore("cars");
  const colorIndex = store.index("car_color");
  const makeModelIndex = store.index("color_make");

  store.put({ id: 1, color: "Red", make: "Ferrari" });
  store.put({ id: 2, color: "Green", make: "Lambo" });
  store.put({ id: 3, color: "White", make: "BMW" });
  store.put({ id: 4, color: "Grey", make: "Audi" });

  const idQuery = store.get(4);
  const colorQuery = colorIndex.getAll(["Red"]);
  const colorMakeQuery = makeModelIndex.get(["White", "BMW"]);

  idQuery.onsuccess = () => {
    console.log(idQuery.result);
  };
};
