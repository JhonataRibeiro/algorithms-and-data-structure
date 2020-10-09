/* eslint-disable no-undef */
import LinkedList from '../src/linked-list/linked-list'

const node = {
  text: 'first node'
}

const node2 = {
  texto: 'second node'
}

const node3 = {
  text: 'node 3'
}

test('should create linkedList', () => {
  const linkedList = new LinkedList(node)

  expect(linkedList).not.toBeNull()
  expect(linkedList.head).toBeNull()
  expect(linkedList.tail).toBeNull()
})

test('should add a node in linkedList', () => {
  let linkedList = new LinkedList()

  expect(linkedList.head).toBeNull()
  expect(linkedList.tail).toBeNull()

  linkedList = linkedList.add(node)

  expect(linkedList.head.data).toEqual(node)
  expect(linkedList.tail.data).toEqual(node)

  const linkedListUpdated = linkedList.add(node2)

  expect(linkedListUpdated.head.data).toEqual(node2)
  expect(linkedListUpdated.tail.data).toEqual(node)
  expect(linkedListUpdated.tail.next).toBeNull()
})

test('should update next when a new node is added', () => {
  let linkedList = new LinkedList()

  linkedList = linkedList.add(node)
  expect(linkedList.head.next).toBeNull()

  const linkedListUpdated = linkedList.add(node2)
  expect(linkedListUpdated.head.next.data).toEqual(node)
  expect(linkedListUpdated.head.next.next).toBeNull()
})

test('should add new node at end of linkedList', () => {
  const nodeForEnd = {
    text: 'last node'
  }

  const linkedList = new LinkedList()
  linkedList.add(node)
  linkedList.add(node2)
  const linkedListUpdated = linkedList.addEnd(nodeForEnd)

  let lastNode = linkedListUpdated.head

  while (lastNode.getNext() !== null) {
    lastNode = lastNode.getNext()
  }

  expect(lastNode.data).toEqual(nodeForEnd)
  expect(lastNode.next).toBeNull()
})

describe('delete', () => {
  it('shoud delete node', () => {
    const linkedList = new LinkedList()

    linkedList.add(node)
    linkedList.add(node2)
    linkedList.add(node3)

    const linkedListUpdated = linkedList.delete()

    expect(linkedListUpdated.head.data).toEqual(node2)
    expect(linkedListUpdated.head.next).toEqual({ data: node, next: null })
  })

  it('should delete node from end', () => {
    const linkedList = new LinkedList()

    linkedList.add(node)
    linkedList.add(node2)
    linkedList.add(node3)

    const linkedListUpdated = linkedList.deleteEnd()

    expect(linkedListUpdated.tail.data).toEqual(node2)
    expect(linkedListUpdated.tail.next).toEqual(null)
  })
})

describe('reverse', () => {
  it('next\'s head should point to null', () => {
    const linkedList = new LinkedList()

    linkedList.add(node)
    linkedList.add(node2)
    linkedList.add(node3)

    linkedList.toString()

    console.log('=======================================')
    const reversedLinkedList = linkedList.reverse()

    //reversedLinkedList.toString()

    expect(reversedLinkedList.tail.data).toEqual(node3)
    expect(reversedLinkedList.tail.next).toBeNull()
    expect(reversedLinkedList.head.data).toEqual(node)
    expect(reversedLinkedList.head.next.data).toEqual(node2)

    expect(reversedLinkedList.head.next.next.data).toEqual(node3)
  })
})
