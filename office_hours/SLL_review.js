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

    // Add a new node to the front of the list - version 1
    addFront(newNode) {
        // Link the new node to the list (even )
        newNode.next = this.head;
        // Moving the head of the list to the new node
        this.head = newNode;
    }

    // Alternate way to add a node to the front by directly passing in the data and NOT the node
    addFrontV2(valueToAdd) {
        // Create the node with the value passed in as a parameter
        let newNode = new SLLNode(valueToAdd);
        this.addFront(newNode); // Now add to front with the newly created node
        // Alternate way to add the node without calling on the addFront method we defined above
        // // Link the new node to the list (even )
        // newNode.next = this.head;
        // // Moving the head of the list to the new node
        // this.head = newNode;
    }

}

let firstNode = new SLLNode(20);
let mySLL = new SLL(firstNode);
mySLL.addFront(new Node(10));
// let mySLL = new SLL(new SLLNode(20));
// mySLL.head = firstNode;