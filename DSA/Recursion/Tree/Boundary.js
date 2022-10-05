// Boundary Traversal

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

/**
        10
      20   30
    40  50 60
  70
 */

let output = [];
function travelLeft(root) {
  if (root.left == null && root.right == null) return;
  output.push(root.val);
  if (root.left != null) travelLeft(root.left);
  else travelLeft(root.right);
}

function travelRight(root) {
  if (root.left == null && root.right == null) return;
  output.push(root.val);
  if (root.right != null) travelRight(root.right);
  else travelRight(root.left);
}

function travelLeaves(root) {
  if (root == null) return;
  if (root.left == null && root.right == null) {
    output.push(root.val);
    return;
  }
  travelLeaves(root.left);
  travelLeaves(root.right);
}

function boundary(root) {
  travelLeft(root);
  travelLeaves(root);
  travelRight(root.right);
  return output;
}

console.log(boundary(root));
