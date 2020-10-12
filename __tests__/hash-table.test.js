import HashTable  from '../src/hash-table/hash-table'

describe('hash table', ()=>{
    it('should initialize hash table with 10 position',()=>{
        const table = new HashTable(10);
        expect(table.size).toBe(10)
    })
    it('should generate hash X to value Y',()=>{})
    it('should return value Y given value X',()=>{})
})