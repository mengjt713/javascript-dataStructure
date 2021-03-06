/*
* 集合
* */
function Set(){
    this.dataStore = [];
    this.add  = add;
    this.remove = remove;
    this.size = size;
    this.union =union;
    this.intersect = intersect;
    this.subset =subsect;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
}
function add(data){
    if(this.dataStore.indexOf(data)<0){
        this.dataStore.push(data);
        return true;
    }else {
        return false;
    }
}
function remove(data){
    var pos = this.dataStore.indexOf(data)
    if(pos>-1){
        this.dataStore.splice(pos,1);
        return true;
    }else{
        return false;
    }
}
function  show() {
    return this.dataStore;
}
/*
* union 合并
* */
function union(set){
    var tempSet = new Set();
    for(var i = 0;i<this.dataStore.length;++i){
        tempSet.add(this.dataStore[i])
    }
    for(var i=0;i<set.dataStore.length;++i){
        if(!tempSet.contains(set.dataStore[i])){
            tempSet.dataStore.push(set.dataStore[i])
        }
    }
    return tempSet;
}
/*
* 交集
* */
function intersect(set){
    var tempSet = new Set();
    for(var i=0;i<this.dataStore.length;++i){
        if(se.contains(this.dataStore[i])){
            tempSet.dataStore.push(this.dataStore[i])
        }
    }
    return tempSet;
}
/*
* 求一个集合是否是另一个集合的子集
* */

function subsect(set){
    if(this.size()>set.size()){
        return false
    }else {
        this.dataStore.foreach(function (member) {
            if (!set.contains(member)) {
                return false;
            }
        })
    }
    return true;
}
/*
* 补集
* */
function difference(set){
    var tempSet = new Set();
    for (var i=0;i<this.dataStore.length;++i){
        if(!set.contains(this.dataStore[i])){
            tempSet.push(this.dataStore[i]);
        }
    }
    return tempSet

}
function contains(data){
    if(this.dataStore.indexOf(data)>-1){
        return true;
    }else{
        return false;
    }
}


function size(){
    return this.dataStore.length;
}