import Node from './node'

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;

        return this;

    }

    add(node){

        let novoNode = new Node(node, this.head);
        this.head = novoNode;

        if(!this.tail){
            this.tail = novoNode;
        }

        return this;
    }

    addEnd(node){
        let nodeToAddEnd = new Node(node, null);

        this.tail.next = nodeToAddEnd;
        this.tail = nodeToAddEnd

        return this;

    }

    delete(){
        let targetNode = this.head.next;
        
        this.head = null;
        this.head = targetNode;

        return this;
    }

} 

export default linkedList;