import Node from './node'

class linkedList{
    constructor(node){
        this.node = new Node(node.data)
    }

    add(node){
        let novoNode = new Node(node);
        this.node.next = novoNode
        return novoNode;
    }
} 

export default linkedList;