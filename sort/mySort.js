/*
* 数组类
* */
function CArray(numElements){
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.bubbleSort = bubbleSort;
    this.selectSort = selectSort;
    this.insertSort = insertSort;
    this.swap = swap;
    for(var i = 0;i <numElements;++i){
        this.dataStore[i] = i;
    }

}

function setData() {
    for(var i=0;i<this.numElements;++i){
        this.dataStore[i] = Math.floor(Math.random()*(this.numElements + 1))
    }
}
function clear() {
    for(var i=0;i<this.dataStore.length;++i){
        this.dataStore[i] = 0;
    }
}
function insert(element) {
    this.dataStore[this.pos++] = element;
}
function toString() {
    var restr = "";
    for(var i=0;i<this.dataStore.length;++i){
        restr += this.dataStore[i]+" ";
       if( (i > 0)&& (i%10 ==0)){
           restr += "\n";
       }
    }
    return restr;
}
function swap(arr,index1,index2) {
    var temp = arr[index1];
    arr[index1 ] = arr[index2];
    arr[index2] = temp;

}


/*
*冒泡排序
* */
function bubbleSort(){

    var numElements = this.dataStore.length;
    for(var i = 0;i<numElements-1;i++){
        for(var j = 0;j<numElements-1-i;j++){
            if(this.dataStore[j] > this.dataStore[j + 1]){
                swap(this.dataStore,j,j+1);
            }
        }
        console.log(this.toString());
    }
}

/*
* 选择排序
* */
function selectSort(){

    var min;
    for(var i = 0;i<this.dataStore.length-1;i++){
        min = i;
        for(var j=i+1;j<this.dataStore.length;j++){
            if(this.dataStore[j]<this.dataStore[min]){
                min = j
            }
        }
        this.swap(this.dataStore,i,min);
    }
}
/*
* 插入排序
* */
function insertSort(){
    var temp,inner;
    for(var outer = 1;outer<this.dataStore.length-1;outer++){
        temp = this.dataStore[outer];//取出要比较的元素
        inner = outer;//排序过的元素最大
        while (inner>0&&(this.dataStore[inner-1] >= temp)){
            this.dataStore[inner] =this.dataStore[inner-1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}

var numElements = 10;

var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
//
// myNums.bubbleSort()
// console.log(myNums.toString());

myNums.insertSort();
console.log(myNums.toString());
