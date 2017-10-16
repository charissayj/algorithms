//A linked list is a list of elements called nodes, that are linked together
//in a single file line
//there are two types of lists, singly linked lists and doubly linked lists

function LinkedList(){ //linked list constructor function
    this.head = null;
    this.tail = null;
}

function Node(value, next, previous){ //node constructor function
    this.value = value;
    this.next = next;
    this.previous = previous;
}

LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    //if list is not empty, connect head node to all other nodes correctly
    if (this.head){
        this.head.previous = newNode;
    }
    //if list is empty create a new node with head and tail pointed at the new node
    else{
        this.tail = newNode;
    }
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);
    if (this.tail){
        //next pointer = new Node
        this.tail.next = newNode;
    }
    else{
        this.head = newNode;
    }
    this.tail = newNode;
}

// var ll = new LinkedList();
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);

// console.log(ll);

var myLL = new LinkedList();
myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);

myLL.addToHead(100);

console.log(myLL);