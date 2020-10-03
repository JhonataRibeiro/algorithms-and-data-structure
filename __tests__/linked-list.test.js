import LinkedList from '../src/linked-list/linked-list'

let node = {
    text:'first node'
}

let node2 = {
    texto: 'second node'
}

test('should create linkedList', ()=>{
 
    let linkedList = new LinkedList(node);

    expect(linkedList).not.toBeNull();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

})

test('should add a node in linkedList', ()=>{
    
    let linkedList = new LinkedList();

    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()

    linkedList = linkedList.add(node);

    expect(linkedList.head.data).toEqual(node);
    expect(linkedList.tail.data).toEqual(node);

    let linkedListUpdated = linkedList.add(node2);

    expect(linkedListUpdated.head.data).toEqual(node2)
    expect(linkedListUpdated.tail.data).toEqual(node)
    expect(linkedListUpdated.tail.next).toBeNull();
})

test('should update next when a new node is added', ()=>{
    let linkedList = new LinkedList();

    linkedList = linkedList.add(node);
    expect(linkedList.head.next).toBeNull();
    
    let linkedListUpdated = linkedList.add(node2);
    expect(linkedListUpdated.head.next.data).toEqual(node)
    expect(linkedListUpdated.head.next.next).toBeNull()
    
})