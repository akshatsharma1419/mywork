// Root to leaf path

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.null == null;
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.left.left.left = new Node(70);
root.left.left.right = new Node(80);

/**
            10
        20      30
    40     50  60
  70
 */

function rootToLeafPath(root) {
  let output = [];
  findPath(root, 70, output);
  console.log(output);
}

function findPath(root, x, output) {
  if (root == null) return false;
  output.push(root.val);
  if (root.val == x) return true;
  if (
    findPath(root.left, x, output) == true ||
    findPath(root.right, x, output) == true
  )
    return true;
  output.pop();
  return false;
}

rootToLeafPath(root);
