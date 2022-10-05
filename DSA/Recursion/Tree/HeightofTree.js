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
root.left.left.left = new Node(60);

function findHeight(root) {
  if (root == null) return 0;
  let left = findHeight(root.left);
  let right = findHeight(root.right);
  return 1 + Math.max(left, right);
}

console.log(findHeight(root));

// Using Level order traversal

function findHeightLOT(root) {
  let height = 0;
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    for (let i = 0; i <= queue.length; i++) {
      let curr = queue.shift();
      if (curr.left != null) queue.push(curr.left);
      if (curr.right != null) queue.push(curr.right);
    }
    height++;
  }
  console.log(height);
}
findHeightLOT(root);
