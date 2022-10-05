// Bottom View

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
      20      30
   40    50  60
 70
 */

function bottomView(root) {
  let map = {};
  let queue = [];
  queue.push([root, 0]);
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.pop();
      if (curr[0].left != null) queue.push([curr[0].left, curr[1] - 1]);
      if (curr[0].right != null) queue.push([curr[0].right, curr[1] + 1]);
      map[curr[1]] = curr[0].val;
    }
  }
  console.log(map);
}

bottomView(root);
