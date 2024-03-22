class SLLNode {
    constructor(data, next = null) {
        this.data = data; // Data held by this node
        this.next = next; // Point to the next node (or null by default)
    }
}

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

    reverseList() {
        // Edge case: the list is empty OR there is ONLY one node in the list - nothing to reverse
        if (this.head === null || this.head.next === null) {
            return;
        }
        let prev = null;
        let curr = this.head;
        let nextNode = curr.next;
        while (curr !== null) {
            // Point the current node to the previous node (or null if it's the first node in the list originally)
            curr.next = prev;
            // Move the three pointers
            prev = curr;
            curr = nextNode;
            if (nextNode !== null) { // Only move this pointer if it's currently pointing to a node
                nextNode = nextNode.next;
            }
        }
        this.head = prev; // Move the head of the list
    }
}

let mySLL = new SLL();
console.log("Testing with no nodes in the list");
mySLL.printAllValues();
mySLL.reverseList();
console.log("After reversing the list:");
mySLL.printAllValues();
console.log(mySLL);
// Now add one node
mySLL.addFront(new SLLNode(5));
console.log("Testing with one node in the list");
mySLL.printAllValues();
mySLL.reverseList();
console.log("After reversing the list:");
mySLL.printAllValues();
console.log(mySLL);
// Test with 2 nodes
mySLL.addBack(new SLLNode(10));
console.log("Testing with 2 nodes in the list");
mySLL.printAllValues();
mySLL.reverseList();
console.log("After reversing the list:");
mySLL.printAllValues();
console.log(mySLL);
mySLL.reverseList();
// Test with 3 nodes
mySLL.addBack(new SLLNode(15));
console.log("Testing with 3 nodes in the list");
mySLL.printAllValues();
mySLL.reverseList();
console.log("After reversing the list:");
mySLL.printAllValues();
console.log(mySLL);