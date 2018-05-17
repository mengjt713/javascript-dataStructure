/*
* 双向链表
* */
/*
 * 构造链表 节点 node
 * */
function Node(element){
    this.element = element;
    this.next = null;
    this.previous = null;
}

/*
 * 构造LinkedList
 * */

function LList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
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
    newNode.previous = current;
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

function remove(item){
    var currNode = this.find(item);
    if(!(currNode.next ==null)){
        currNode.previous.next = currNode.next;
        currNode,next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

var cities = new LList();
cities.insert("a","head");
cities.insert("b","a");
cities.insert("c","b");
cities.display();