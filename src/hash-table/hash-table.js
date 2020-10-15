import Node from '../linked-list/node'

class HashTable {
  constructor (size) {
    this.size = size
    this.buckets = new Array(this.size)

    return this
  }

  generateHash (value) {
    return value % this.size
  }

  add (value) {
    if (typeof (value) !== 'number') {
      throw new Error('Value not supported')
    }

    const position = this.generateHash(value)

    this.buckets[position] = new Node(position, null)
  }
}

export default HashTable
