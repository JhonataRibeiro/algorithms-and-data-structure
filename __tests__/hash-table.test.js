/* eslint-disable no-undef */
import HashTable from '../src/hash-table/hash-table'

describe('hash table', () => {
  it('should initialize hash table with 10 position', () => {
    const table = new HashTable(10)
    expect(table.size).toBe(10)
  })

  it('should generate hash 13 for value 29', () => {
    const table = new HashTable(16)
    const hash = table.generateHash(29)
    expect(hash).toBe(13)
  })

  it('should generate hash 3 for value 899', () => {
    const table = new HashTable(16)
    const hash = table.generateHash(899)
    expect(hash).toBe(3)
  })

  it('should generate hash 444 for value word', () => {
    const table = new HashTable(16)
    const hash = table.generateHash('word')
    expect(hash).toBe(12)
  })

  it('should create new node and insert \'word\' in position 12', () => {
    const hashTable = new HashTable(16)
    const key = 'word'
    const value = 'data payload'
    hashTable.add(key, value)
    expect(hashTable.get(key).head.data).toBe(value)
  })

  it('should resolve colision when it occurs', () => {
    const hashTable = new HashTable(16)

    const payload = {
      key: 'demos',
      value: 'demos - data'
    }

    const payloadForColision = {
      key: 'domes',
      value: 'domes -data'
    }

    hashTable.add(payload.key, payload.value)
    hashTable.add(payloadForColision.key, payloadForColision.value)

    expect(hashTable.get(payload.key).head.data).toBe(payload.value)
    expect(hashTable.get(payloadForColision.key).tail.data).toBe(payloadForColision.value)
  })
})
