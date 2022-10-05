// Path sum

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function pathSum(root, sum) {
  if (root == null) return sum === 0;
  return (
    pathSum(root.left, sum - root.value) ||
    pathSum(root.right, sum - root.value)
  );
}

const root = new Node(5);
root.left = new Node(10);
root.right = new Node(8);
root.left.left = new Node(6);
root.right.left = new Node(3);
root.left.right = new Node(1);
root.right.right = new Node(2);

console.log(pathSum(root, 26));
