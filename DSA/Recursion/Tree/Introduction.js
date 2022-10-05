/**
Types of Binary Tree
1) Full Binary Tree- Has 0 or 2 children
2) Complete binary tree- All levels are completely filled. Last level has all nodes left as possible
3) Perfect Binary Tree- All nodes are at same level.
4) Balanced Binary Tree- Height can be max at log(n), n is no of nodes.
5) Degenerate Tree- Skew Tree. Tree looks like a linked list.
 */

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

console.log(root);
