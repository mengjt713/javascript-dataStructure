/*
* 构造函数
* */

function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString  = toString;
    this.empty = empty;
}

/*
* 队尾增加元素
* */
function enqueue(element){
    this.dataStore.push(element);
}
/*
* 队首删除元素
* */
function dequeue() {
    return this.dataStore.shift();
}
/*
* 读取队尾元素
* */
function back(){
    return this.dataStore[this.dataStore.length-1]
}
/*
* 读取队首元素
* */
function front(){
    return this.dataStore[0];
}

/*
* show all element
* */
function toString(){
    var restr = "";
    for(var i =0;i<this.dataStore.length;++i){
        restr +=this.dataStore[i] + "\n";
    }
    return restr;
}
/*
* make sure the queue is empty
* */

function empty(){
    if(this.dataStore.length == 0){
        return true;
    }else {
        return false;
    }
}

/*
* queue apply  方块舞伴 优先队列
* */