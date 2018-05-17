/*
 * 字典map
 * */
function Dictionary() {
    this.add = add;
    this.dataStore = [];
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
}
function add(key, value) {
    this.dataStore[key] = value;

}
function find(key) {
    return this.dataStore[key];
}
function remove(key) {
    delete this.dataStore[key];
}
function showAll() {
        var dataKeys =Array.prototype.slice.call(object.keys(this.dataStore));
        for (var key in dataKeys){
            console.log(this.dataStore[key]);
        }
}
function count(){

    return Object.keys(this.dataStore).length;
}