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

function topView(root) {
  let top = {};
  let queue = [];
  queue.push([root, 0]);
  while (queue.length > 0) {
    let size = queue.length;
    let curr = queue.shift();
    for (let i = 0; i < size; i++) {
      if (curr[0].left != null) queue.push([curr[0].left, curr[1] - 1]);
      if (curr[0].right != null) queue.push([curr[0].right, curr[1] + 1]);
      if (!(curr[1] in top)) top[curr[1]] = curr[0].value;
    }
  }
  console.log(top);
}

topView(tree);
