import LinkedList from '../src/linked-list/linked-list'

// test('deve criar nó inicial na linked list', ()=>{
//     let node = {
//         texto:'primeiro nó'
//     }

//     let node2 = {
//         texto: 'segundo nó'
//     }

//     let linkedList = new LinkedList(node);

//     expect(linkedList).not.toBeNull();
//     expect(linkedList.head).toBeNull();
//     expect(linkedList.tail).toBeNull();

// })

test('deve inserir um nó em uma linkedList', ()=>{
    let node = {
        texto:'primeiro nó'
    }

    let node2 = {
        texto: 'segundo nó'
    }

    let linkedList = new LinkedList(node);
    let linckedListAtualizado = linkedList.add(node2);

    expect(linckedListAtualizado).not.toBeNull();
    expect(linckedListAtualizado.head.next).toEqual(node2);
    expect(linckedListAtualizado.tail.next).toBeNull();
    // expect(linckedListAtualizado.tail.data).toEqual(node);
})