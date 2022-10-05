// Iterator pattern
// It allows you to loop over some collection of objects

const items = [1, 2, "Akshat", false, 1.3];
function Iterator(items) {
  this.items = items;
  this.index = 0;
}
Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.index[this.index++];
  },
};

const iter = new Iterator(items);
while (iter.hasNext()) {
  console.log(iter.next());
}
