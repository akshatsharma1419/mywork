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

/**
       10
    20     30
  40  50  60
70
 */

function zigZag(root) {
  let output = [];
  if (root == null) return output;
  let stack = [];
  let check = true;
  stack.push(root);
  while (stack.length > 0) {
    let size = stack.length,
      temp = [];

    for (let i = 0; i < size; i++) {
      let curr = stack.shift();
      if (curr.left != null) stack.push(curr.left);
      if (curr.right != null) stack.push(curr.right);
      temp.push(curr.val);
    }
    check ? output.push([...temp]) : output.push([...temp.reverse()]);
    check = !check;
  }
  return output;
}

console.log(zigZag(root));
