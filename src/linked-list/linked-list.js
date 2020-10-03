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

        let searchedNode = this.head;

        while(searchedNode.getNext() !== null){
            searchedNode = searchedNode.getNext();
        }

        searchedNode.next = nodeToAddEnd;

        return this;

    }

} 

export default linkedList;