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

const root2 = new Node(10);
root2.left = new Node(20);
root2.right = new Node(30);
root2.left.left = new Node(40);
root2.left.right = new Node(50);
root2.right.left = new Node(60);

function checkIdentical(root1, root2) {
  if (root1 == null && root2 == null) return true;
  if (
    (root1 == null && root2 != null) ||
    (root1 != null && root2 == null) ||
    root1.val !== root2.val
  )
    return false;
  return (
    checkIdentical(root1.left, root2.left) &&
    checkIdentical(root1.right, root2.right)
  );
}

console.log(checkIdentical(root, root2));
