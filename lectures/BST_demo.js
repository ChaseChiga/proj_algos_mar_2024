class BSTNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(root = null) {
        this.root = root; // Top of the tree
    }

    addNode(val) {
        let newNode = new BSTNode(val); // Create the node
        // Edge case: the tree is empty
        if (this.root === null) {
            this.root = newNode; // Make the new node the root of the tree - this is our first node
            return;
        }
        let runner = this.root; // Start at the root of the tree
        // Travel down the tree
        while (runner != null) {
            if (val < runner.data) { // Value is less than the current node (runner)'s value
                if (runner.left === null) { // Nothing to the left, so let's insert the new node here
                    runner.left = newNode;
                    break;
                } else { // Continue moving down the tree
                    // Move to the left
                    runner = runner.left;
                }
            } else { // Move to the right (we will NOT worry about nodes of equal value in this demo)
                if (runner.right === null) { // Nothing to the right, so let's insert the new node here
                    runner.right = newNode;
                    break;
                } else { // Continue moving down the tree
                    // Move to the right
                    runner = runner.right;
                }
            }
        }
    }
    // Function to count the number of nodes in the tree - including the root node
    size(currentNode = this.root) {
        // Base case - we're at a dead end (null)
        if (currentNode === null) {
            return 0; // No nodes
        } else {
            // Add 1 for the current node, then count all the nodes to the left, then all the nodes to the right
            return 1 + this.size(currentNode.left) + this.size(currentNode.right);
        }
    }
}
// Demoing how to add nodes
let myBST = new BST();
// console.log(myBST.size());
myBST.addNode(39);
console.log("Added 39 node to tree");
myBST.addNode(30);
console.log('Added the 30 node');
console.log(myBST);
myBST.addNode(50);
console.log('Added the 50 node');
console.log(myBST);
myBST.addNode(45);
console.log('Added the 45 node');
console.log(myBST);
console.log(myBST.root.right); // Print the subtree starting at the 50 node
console.log(myBST.size());