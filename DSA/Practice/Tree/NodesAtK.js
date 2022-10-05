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
tree.left.left.right = new Node(80);
tree.left.right.left = new Node(90);
tree.right.left = new Node(100);

function nodesAtK(root, node, k) {
  let parent = {};
  markParent(root, parent);
  let queue = [];
  queue.push(node);
  while (queue.length > 0 && k > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (curr.left != null) queue.push(curr.left);
      if (curr.right != null) queue.push(curr.right);
      queue.push(JSON.parse(parent[JSON.stringify(curr)]));
    }
    k--;
  }
  console.log(queue);
}

function markParent(root, parent) {
  if (root == null) return;
  if (root.left != null) parent[JSON.stringify(root.left)] = root;
  if (root.right != null) parent[JSON.stringify(root.right.value)] = root;
  markParent(root.left, parent);
  markParent(root.right, parent);
}

nodesAtK(tree, tree.right.right, 2);
