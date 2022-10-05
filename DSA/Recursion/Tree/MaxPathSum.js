class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.null == null;
  }
}

const root = new Node(-10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(-20);
root.left.right = new Node(30);
root.right.left = new Node(10);
//root.left.left.left = new Node(70);

/**
       -10
  20        30
-20  30   10
 */

function maxPathSum(root, max) {
  if (root == null) return 0;
  let left = maxPathSum(root.left, max);
  let right = maxPathSum(root.right, max);
  max[0] = Math.max(max, root.value + left + right);
  return Math.max(left, right) + root.value;
}

const max = [];
max[0] = 0;
maxPathSum(root, max);
console.log(max);
