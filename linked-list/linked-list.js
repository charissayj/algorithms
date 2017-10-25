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

LinkedList.prototype.removeHead = function(){
    // two cases: empty list and not empty list
    if(!this.head) return null;
    // list is not empty
    var val = this.head.value;
    this.head = this.head.next;
    if(this.head){
        this.head.previous = null;
    }
    else{
        this.tail = null;
    }
    return val;
}

LinkedList.prototype.removeTail = function(){
    if(!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.previous;
    if(this.tail){
        this.tail.next = null;
    }
    else{
        this.head = null;
    }
    return val;
}

LinkedList.prototype.search = function(searchValue){
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.value == searchValue){
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.indexOf = function(value){
    var arr = [];
    var currentIndex = 0;
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.value === value){
            arr.push(currentIndex);
        }
        currentNode = currentNode.next;
        currentIndex++;
    }
    return arr;
}
// var ll = new LinkedList();
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);

// console.log(ll);

// var myLL = new LinkedList();
// myLL.addToTail(10);
// myLL.addToTail(20);
// myLL.addToTail(30);

// myLL.addToHead(100);

//var ll = new LinkedList();
// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToTail(3000);
// ll.removeHead();
// console.log(ll.removeHead())

// ll.addToHead("one");
// ll.addToHead("two");
// ll.addToHead("three");

// console.log(ll.removeTail());

// var myLL = new LinkedList();

// myLL.addToHead(123);
// myLL.addToHead(70);
// myLL.addToHead('hello');
// myLL.addToTail(19);
// myLL.addToTail('world');
// myLL.addToTail(20);

// console.log(myLL.search(70));
// console.log(myLL.search("world"));
// console.log(myLL.search(10));
// console.log(myLL);

var myLL = new LinkedList()
myLL.addToTail(1);
myLL.addToTail(5);
myLL.addToTail(3);
myLL.addToTail(5);
myLL.addToTail(8);
myLL.addToTail(7);
myLL.addToTail(5);

console.log(myLL.indexOf(5));