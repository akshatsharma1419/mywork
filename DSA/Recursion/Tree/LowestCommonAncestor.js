// Lowest Common Ancestor

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

function getPath(root, output, val) {
  if (root == null) return false;
  output.push(root.val);
  if (root.val == val) return true;
  if (getPath(root.left, output, val) || getPath(root.right, output, val))
    return true;
  output.pop();
  return false;
}

function lCA(root, val1, val2) {
  const path1 = [];
  const path2 = [];
  getPath(root, path1, val1);
  getPath(root, path2, val2);
  console.log(path1, path2);
}

lCA(root, 60, 80);

// Optimized

function optLCA(root, val1, val2) {
  if (root == null || root.val == val1 || root.val == val2) return root;
  let left = optLCA(root.left, val1, val2);
  let right = optLCA(root.right, val1, val2);
  if (left == null) return right;
  else if (right == null) return left;
  else return root;
}

console.log(optLCA(root, 60, 80));
