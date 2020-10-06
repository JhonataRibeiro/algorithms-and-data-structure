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

test('should add new node at end of linkedList', ()=>{
    const nodeForEnd = {
        text: "last node"
    }

    let linkedList = new LinkedList();
    linkedList.add(node);
    linkedList.add(node2);
    let linkedListUpdated = linkedList.addEnd(nodeForEnd)

    let lastNode = linkedListUpdated.head;
    
    while(lastNode.getNext() !== null){
        lastNode = lastNode.getNext();
    }

    expect(lastNode.data).toEqual(nodeForEnd);
    expect(lastNode.next).toBeNull();

})

describe('delete', ()=>{
   it('deve deletar node', ()=>{
    let linkedList = new LinkedList();
    let node3 = {
        text: 'node 3'
    }

    linkedList.add(node);
    linkedList.add(node2);
    linkedList.add(node3);

    let linkedListUpdated = linkedList.delete();
    
    expect(linkedListUpdated.head.data).toEqual(node2)
    expect(linkedListUpdated.head.next).toEqual({data:node, next: null})
   })
})


