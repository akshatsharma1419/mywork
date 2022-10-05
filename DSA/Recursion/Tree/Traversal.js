/**Traversal techniques-
DFS types:
Inorder - Left->Root->Right
PreOrder - Root->Left->Right
PostOrder - Left->Right->Root

BFS: We print level by level.
*/

class Node {
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

// Recursive Traversals

// Inorder
console.log("In-order");
function inOrder(root) {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}
inOrder(tree);

// Pre-Order
console.log("Pre-Order");
function preOrder(root) {
  if (root === null) return;
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
}
preOrder(tree);

// Post-Order
console.log("Post-Order");
function postOrder(root) {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
}
postOrder(tree);

// Level Order Traversal
function levelOrder(root) {
  let arr = [];
  arr.push(root);
  while (arr.length > 0) {
    let curr = arr.shift();
    if (curr.left !== null) arr.push(curr.left);
    if (curr.right !== null) arr.push(curr.right);
    console.log(curr.value);
  }
}
console.log("Level Order");
levelOrder(tree);

// Iterative

// In order  --> Left, Root, Right

function inOrderItr(root) {
  let arr = [];
  let curr = root;
  while (arr.length > 0 || curr != null) {
    while (curr != null) {
      arr.push(curr);
      curr = curr.left;
    }
    curr = arr.pop();
    console.log(curr.value);
    curr = curr.right;
  }
}
console.log("In Order Iterative");
inOrderItr(tree);

/**
       1
    2     3
  4   5  6  7

Output- 1 2 4 5 3 6 7
 */

// Pre order --> Root, Left, Right
function preOrderItr(root) {
  let arr = [];
  arr.push(root);
  while (arr.length > 0) {
    let curr = arr.pop();
    console.log(curr.value);
    if (curr.right != null) arr.push(curr.right);
    if (curr.left != null) arr.push(curr.left);
  }
}
console.log("Pre Order Iterative");
preOrderItr(tree);

// PostOrder --> Left, Right, Root
console.log("Post Order Iterative");
function postOrderItr(root) {
  let stk1 = [];
  let stk2 = [];
  stk1.push(root);
  while (stk1.length > 0) {
    let curr = stk1.pop();
    if (curr.left != null) stk1.push(curr.left);
    if (curr.right != null) stk1.push(curr.right);
    stk2.push(curr.value);
  }
  console.log(stk2.reverse());
}
postOrderItr(tree);
