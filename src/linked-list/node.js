class Node{

    constructor(data=null, next=null){
        this.data = data;
        this.next = next;
    }

    toString(callback){
        return callback?callback(this.data) : `${this.value}`
    }

    getNext(){
        return this.next;
    }
    
}

export default Node;