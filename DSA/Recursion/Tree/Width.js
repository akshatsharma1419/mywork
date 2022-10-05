// Maximum Width of Binary Tree

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
          20     30
      40     50 60
    70  80
 */

function findWidth(root) {
  let queue = [];
  let ans = 0;
  queue.push([root, ans]);
  while (queue.length > 0) {
    let size = queue.length;
    let min = queue[0];
    let first, last;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      let curr_id = curr[1] - min[1];
      if (i == 0) first = curr_id;
      if (i == size - 1) last = curr_id;
      if (curr[0].left != null) queue.push([curr[0].left, curr_id * 2 + 1]);
      if (curr[0].right != null) queue.push([curr[0].right, curr_id * 2 + 2]);
    }
    ans = Math.max(ans, last - first + 1);
  }
  console.log(ans);
}

findWidth(root);
