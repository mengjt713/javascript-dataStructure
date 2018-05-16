
/**
 * 迭代器
 */


function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev =prev;
    this.next = next;
    this.hasNext = hasNext;
    this.hasPrev = hasPrev;
    this.length = length;
    this.currPos= currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}
/*
 * 添加元素
 * */
function append(element){
    this.dataStore[this.listSize++] = element
}
/*
 *查找元素
 * */
function find(element){
    for(var i=0;i<this.dataStore.length;i++){
        if(this.dataStore[i]==element){
            return i;
        }
    }
    return -1;
}
/*
 *删除元素
 * */
function remove(element) {
    var foundAt = this.find(element);
    if(foundAt>-1){
        this.dataStore.splice(foundAt,1)
        --this.listSize;
        return true;
    }
    return false;
}

/*
 *有多少元素
 * */
function length(){
    return this.listSize;
}
/*
 * 显示元素
 * */
function toString(){
    return this.dataStore;
}
/*
 * 插入元素到列表中某个元素之后
 * */
function insert(element,after){
    var insertPos = this.find(after);
    if(insertPos>-1){
        this.dataStore.splice(insertPos+1,0,element);
        this.listSize++;
        return true;
    }
    return false
}
/*
 * 清空列表中元素
 * */

function clear(){
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = 0;
    this.pos = 0;
}

/*
 * 给定的值是否在列表中
 * */
function contains(element){
    for(var i = 0 ;i<this.dataStore.length;i++){
        if(this.dataStore[i]==element){
            return true
        }
    }
    return false;
}

/*
 *
 * */
function front(){
    this.pos = 0;
}
function end(){
    this.pos = this.listSize-1;
}
function prev() {
    --this.pos;
}
function next(){
    if(this.pos<this.listSize){
        ++this.pos;
    }
}
function currPos(){
    return this.pos;
}
function moveTo(postion){

    this.pos = postion;
}
function getElement(){
    return this.dataStorep[this.pos]
}
function hasNext() {
    return this.pos<this.listSize
}
function hasPrev(){
    return this.pos>=0
}



