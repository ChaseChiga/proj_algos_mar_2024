class SLLNode {
    constructor(data, next = null) {
        this.data = data; // Data held by this node
        this.next = next; // Point to the next node (or null by default)
    }
}
// Creating nodes
const node1 = new SLLNode(10);
console.log(node1);
const node2 = new SLLNode(20, node1);
console.log(node2);

// Another way to link nodes
// node2.next = node1; // Links the 20 node to the 10 node

// Singly Linked List class
class SLL {
    constructor(head = null) {
        this.head = head; // The first node in the list itself
    }

    // Add a new node to the front of the list
    addFront(newNode) {
        // Link the new node to the list (even )
        newNode.next = this.head;
        // Moving the head of the list to the new node
        this.head = newNode;
    }

    // Print each node's value in the list
    printAllValues() {
        // Start with the head of the list
        let runner = this.head;
        // Print value at the node
        while (runner !== null) {
            console.log(runner.data); // Print the value
            // Move to the next node
            runner = runner.next;
        }
    }

    addBack(newNode) {
        // Start with the head of the list
        let runner = this.head;
        // EDGE CASE: If the list is empty
        if (this.head === null) {
            this.head = newNode; // The list now has one node added, and since it's the only node, it's also the head of the list
            return this; // Allows for chaining (returns the list back) - optional
        }
        // Move to the end of the list
        while (runner.next !== null) {
            runner = runner.next;
        }
        runner.next = newNode; // Connect the new node to the end of the list
    }

    removeFront() { // Remove the node from the front of the list and then return it
        // Edge case: the list is already empty
        if (this.head == null) {
            return null;
        }
        // If there is at least one node
        let nodeToRemove = this.head;
        this.head = this.head.next; // Move the head of the list to the next node
        nodeToRemove.next = null; // Disconnect the node from the list
        return nodeToRemove;
    }
}
// Demoing SLLs
const firstSLL = new SLL();
// firstSLL.addBack(new SLLNode(10)); // Demo adding to the back of an empty list
// firstSLL.addBack(new SLLNode(20)); // Add to the back with one node
console.log(firstSLL);
firstSLL.addFront(new SLLNode(5));
console.log(firstSLL);
// Testing removing nodes from the front with different numbers of nodes in the list, including empty lists
// firstSLL.removeFront(); 
// console.log(firstSLL);
// firstSLL.removeFront();
// console.log(firstSLL);

firstSLL.addFront(new SLLNode(15));
console.log(firstSLL);
firstSLL.addFront(new SLLNode(25));
console.log(firstSLL);

// Printing the values in the list - and adding to the back and removing from the front
firstSLL.printAllValues();
firstSLL.addBack(new SLLNode(30));
console.log("After adding the 30 node:");
firstSLL.printAllValues();
firstSLL.removeFront();
console.log("After removing the 25 node:");
firstSLL.printAllValues();