/*
* 构造链表 节点 node
* */
function Node(element){
    this.element = element;
    this.next = null;
}

/*
* 构造LinkedList
* */

function LList(){
    this.head = new Node("head");
    //this.head.next = this.head;//循环链表
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.finPrevious = findPrevious;
}

/*
* find node
* */
function find(item){
    var currNode = this.head;
    while(currNode.element !=item){
        currNode = currNode.next;
    }
    return currNode;
}

/*
* insert node
* */
function  insert(newElement,item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

/*
*show node in linkList
* */
function display(){
    var currNode = this.head;
    while(!(currNode.next==null)){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

/*
* find 当前节点的前一个节点
* */
function findPrevious(item){
    var currNode = this.head;
    while (!(currNode.next == null)&&(currNode.next.element != item)){
        currNode = currNode.next;
    }
    return currNode;
}
function remove(item){
    var prevNode = this.finPrevious(item);
    if(!(prevNode.next ==null)){
        prevNode.next = prevNode.next.next;
    }
}

var cities = new LList();
cities.insert("a","head");
cities.insert("b","a");
cities.insert("c","b");
cities.display();