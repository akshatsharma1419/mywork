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
tree.right.left.right = new Node(70);

function leftView(root) {
  let left = [];
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (i == 0) left.push(curr.value);
      if (curr.left != null) queue.push(curr.left);
      if (curr.right != null) queue.push(curr.right);
    }
  }
  console.log(left);
}

leftView(tree);
