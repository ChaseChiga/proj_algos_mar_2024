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
}
// Demoing SLLs
const firstSLL = new SLL();
console.log(firstSLL);
firstSLL.addFront(new SLLNode(5));
console.log(firstSLL);
firstSLL.addFront(new SLLNode(15));
console.log(firstSLL);
firstSLL.addFront(new SLLNode(25));
console.log(firstSLL);
