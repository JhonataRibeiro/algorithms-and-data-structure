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

    const payload = {
      key: 'word',
      value: 'data payload'
    }

    hashTable.add(payload)

    expect(hashTable.get(payload.key).data).toBe(payload)
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

    const payloadForColisionForced = {
      key: 'domse',
      value: 'domse -data'
    }

    hashTable.add(payload)
    hashTable.add(payloadForColision)
    hashTable.add(payloadForColisionForced)

    const value = hashTable.get(payload.key)
    const valueFromColision = hashTable.get(payloadForColision.key)
    const colisionForced = hashTable.get(payloadForColisionForced.key)

    expect(value.data).toEqual(payload)
    expect(valueFromColision.data).toEqual(payloadForColision)
    expect(colisionForced.data).toEqual(payloadForColisionForced)
  })

  it('should delete a element', () => {
    throw new Error('tests not implemented')
  })

  it('should delete a element with colision', () => {
    throw new Error('tests not implemented')
  })
})
