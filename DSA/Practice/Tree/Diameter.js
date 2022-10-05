class Node {
  value;
  left;
  right;
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

function diameter(root, max) {
  if (root == null) return 0;
  let left = diameter(root.left, max);
  let right = diameter(root.right, max);
  max[0] = Math.max(max, 1 + left + right);
  return 1 + Math.max(left, right);
}

const tree = new Node(10);
tree.left = new Node(20);
tree.right = new Node(30);
tree.left.left = new Node(40);
tree.left.right = new Node(50);
tree.right.left = new Node(60);
tree.left.left.left = new Node(70);

const ans = [];
ans[0] = 0;
diameter(tree, ans);
console.log(ans[0]);
