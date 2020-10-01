import LinkedList from '../src/linked-list/linked-list'

test('deve criar nó inicial na linked list', ()=>{
    let payload = {
        data:'primeiro nó'
    }

    let payloadSegundoNo = {
        data: 'segundo nó'
    }

    let linkedList = new LinkedList(payload);
    let nodeAdicionado = linkedList.add(payloadSegundoNo);

    expect(linkedList).not.toBeNull()
    expect(linkedList.node.next).toBe(nodeAdicionado);

})

// test('deve criar um segundo e inserir na linked list', ()=>{

// })