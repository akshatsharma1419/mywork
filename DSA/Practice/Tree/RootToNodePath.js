class Node {
  value;
  left;
  right;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new Node(10);
tree.left = new Node(20);
tree.right = new Node(30);
tree.left.left = new Node(40);
tree.left.right = new Node(50);
tree.right.left = new Node(60);
tree.right.right = new Node(70);

function findPath(root, path, value) {
  if (root == null) return false;
  path.push(root.value);
  if (root.value == value) return true;
  if (
    findPath(root.left, path, value) == true ||
    findPath(root.right, path, value) == true
  )
    return true;
  path.pop();
  return false;
}

const path = [];
findPath(tree, path, 20);

console.log(path);
