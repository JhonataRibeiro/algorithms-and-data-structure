import LinkedList from '../linked-list/linked-list'

class HashTable {
  constructor (size) {
    this.size = size
    this.buckets = new Array(this.size).fill(null)

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

  add (key, value) {
    if (typeof (key) !== 'number' && typeof (key) !== 'string') {
      throw new Error('Value not supported')
    }

    const position = this.generateHash(key)
    let node = this.buckets[position]

    if (node === null) {
      node = new LinkedList()
      node.add(value)

      this.buckets[position] = node

      return this
    }

    node.addEnd(value)
    return this
  }

  get (key) {
    const position = this.generateHash(key)
    return this.buckets[position]
  }
}

export default HashTable
