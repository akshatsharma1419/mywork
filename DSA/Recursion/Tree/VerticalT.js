// Vertical Order Traversal

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
      20   30
    40  50 60
  70
 */

function verticalOrder(root) {
  let map = {};
  let queue = [];
  queue.push([root, 0]);
  while (queue.length > 0) {
    let size = queue.length;
    let temp;
    for (let i = 0; i < size; i++) {
      temp = queue.pop();
      if (temp[0].left != null) queue.push([temp[0].left, temp[1] - 1]);
      if (temp[0].right != null) queue.push([temp[0].right, temp[1] + 1]);
      temp[1] in map
        ? (map[temp[1]] = [...map[temp[1]], temp[0].val])
        : (map[temp[1]] = [temp[0].val]);
    }
  }
  console.log(map);
}

verticalOrder(root);
