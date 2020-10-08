import Node from "./node";

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;

    return this;
  }

  add(node) {
    const novoNode = new Node(node, this.head);
    this.head = novoNode;

    if (!this.tail) {
      this.tail = novoNode;
    }

    return this;
  }

  addEnd(node) {
    const nodeToAddEnd = new Node(node, null);

    this.tail.next = nodeToAddEnd;
    this.tail = nodeToAddEnd;

    return this;
  }

  delete() {
    const targetNode = this.head.next;

    this.head = null;
    this.head = targetNode;

    return this;
  }

  deleteEnd() {
    let beforeTailNode = this.head;

    while (beforeTailNode.next !== this.tail) {
      beforeTailNode = beforeTailNode.next;
    }

    this.tail = beforeTailNode;
    this.tail.next = null;

    return this;
  }

  reverse() {
    let previous = null;
    let current = null;
    let next = null;

    previous = this.head;
    current = previous.next;
    next = current.next;

    //reverse arrow
    current.next = previous;

    previous = current;
    current = previous.next;
    next = current.next;

    //reverse arrow
    current.next = previous;

    throw new Error("reverse not implemented");
  }
}

export default linkedList;
