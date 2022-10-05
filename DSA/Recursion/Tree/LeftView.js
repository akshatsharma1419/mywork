// Left View of Tree

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
root.left.right.left = new Node(90);

/**
          10
      20      30
  40     50  60
70   80  90
 */

function leftView(root) {
  let output = [];
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let size = stack.length;
    for (let i = 0; i < size; i++) {
      let curr = stack.shift();
      if (i == 0) output.push(curr.val);
      if (curr.left != null) stack.push(curr.left);
      if (curr.right != null) stack.push(curr.right);
    }
  }
  console.log(output);
}

leftView(root);
