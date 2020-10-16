import Node from '../linked-list/node'

class HashTable {
  constructor (size) {
    this.size = size
    this.buckets = new Array(this.size)

    return this
  }

  generateHash (value) {
    if (typeof (value) === 'number') {
      return value % this.size
    }

    if (typeof (value) === 'string') {
      let sumOfLetters = 0
      const lengthvalue = value.length

      for (let wordPosition = 0; wordPosition < lengthvalue; wordPosition++) {
        sumOfLetters += value.charCodeAt(wordPosition)
      }

      return sumOfLetters % this.size
    }

    throw new Error('Value not supported')
  }

  add (value) {
    if (typeof (value) !== 'number' && typeof (value) !== 'string') {
      throw new Error('Value not supported')
    }

    const position = this.generateHash(value)

    this.buckets[position] = new Node(position, null)
  }
}

export default HashTable
