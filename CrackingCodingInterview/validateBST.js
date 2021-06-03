const isBST = (node) => {
	const evaluateNode = (node, max=null, min=null) => {
		if (node === null) {
			return true;
		}
		if ((max !== null && node.val >= max) || (min !== null && node.val <= min)) {
			return false;
		} else {
			if (!evaluateNode(node.left, node.val, min) || !evaluateNode(node.right, max, node.val)) {
				return false;
			}
			return true;
		}
  };
  return evaluateNode(node);
};

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

// const root = new Node(10);
// const child1 = new Node(5);
// const child2 = new Node(3);
// const child3 = new Node(1);
// const child4 = new Node(4);
// const child5 = new Node(7);
// const child6 = new Node(6);
// const child7 = new Node(11);
// root.left = child1;
// child1.left = child2;
// child2.left = child3;
// child2.right = child4;
// child1.right = child5;
// child5.left = child6;
// child5.right = child7;

// console.log(isBST(root));