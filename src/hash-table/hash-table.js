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

  add (value) {
    if (typeof (value.key) !== 'number' && typeof (value.key) !== 'string') {
      throw new Error('Value not supported')
    }

    const position = this.generateHash(value.key)
    let bucket = this.buckets[position]

    if (bucket === null) {
      bucket = new LinkedList()
      bucket.add(value)

      this.buckets[position] = bucket

      return this
    }

    bucket.addEnd(value)
    return this
  }

  get (key) {
    const position = this.generateHash(key)
    const linkedList = this.buckets[position]

    if (!linkedList.tail) {
      return linkedList.head
    }

    let node = linkedList.head

    while (node.data.key !== key) {
      node = node.next
    }

    return node
  }
}

export default HashTable
