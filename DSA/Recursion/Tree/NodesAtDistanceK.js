// Print all nodes at distance k

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
root.right.right = new Node(100);
root.left.left.left = new Node(70);
root.left.left.right = new Node(80);

/**
        10
    20      30
  40   50  60  100
70  80
 */

function markParent(root, parent) {
  if (root == null) return;
  if (root.left != null) parent[root.left] = root;
  if (root.right != null) parent[root.right] = root;
  markParent(root.left, parent);
  markParent(root.right, parent);
}

function findNodes(node, parent, k, output) {
  if (k == 0) {
    output.push(node.val);
    return;
  }
  if (node.left != null) findNodes(node.left, parent, k - 1, output);
  if (node.right != null) findNodes(node.right, parent, k - 1, output);
  findNodes(parent[node], parent, k - 1, output);
}

function nodesAtK(root, node, k) {
  let parent = {},
    output = [];
  markParent(root, parent);
  findNodes(node, parent, k, output);
  console.log(output);
}

nodesAtK(root, root.right.left, 2);
