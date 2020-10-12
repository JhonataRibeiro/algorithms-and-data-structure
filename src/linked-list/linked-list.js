import Node from './node'

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null

    return this
  }

  add (node) {
    const novoNode = new Node(node, this.head)
    this.head = novoNode

    if (!this.tail) {
      this.tail = novoNode
    }

    return this
  }

  addEnd (node) {
    const nodeToAddEnd = new Node(node, null)

    this.tail.next = nodeToAddEnd
    this.tail = nodeToAddEnd

    return this
  }

  delete () {
    const targetNode = this.head.next

    this.head = null
    this.head = targetNode

    return this
  }

  deleteEnd () {
    let beforeTailNode = this.head

    while (beforeTailNode.next !== this.tail) {
      beforeTailNode = beforeTailNode.next
    }

    this.tail = beforeTailNode
    this.tail.next = null

    return this
  }

  reverse () {
    let previous = this.head
    let current = previous.next
    let next = current.next

    previous.next = null
    this.tail = previous

    while (next !== null || current !== null) {
      current.next = previous

      previous = current
      current = next

      if (current !== null) {
        next = current.next
      } else {
        this.head = previous
      }
    }

    return this
  }

  toString () {
    let node = this.head

    while (node !== null) {
      console.log(node)
      node = node.next
    }
  }
}

export default LinkedList
