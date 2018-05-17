/*
 * 栈构造函数
 * */
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

/*
 * 压栈push
 * */
function push(element) {
    this.dataStore[this.top++] = element;
}

/*
 * pop出栈
 * */
function pop() {
    return this.dataStore[--this.top];
}

/*
 * peek 取栈顶元素
 * */
function peek() {
    return this.dataStore[this.top - 1];
}
/*
 *栈内元素个数
 * */
function length() {
    return this.top;
}
/*
 * 清空栈
 * */
function clear() {
    this.top = 0;
}

/*
 var mystack = new Stack();
 mystack.push(1)
 mystack.push(2)
 mystack.push(3)
 mystack.push(4)
 console.log(mystack.length());
 console.log(mystack)
 mystack.clear()
 console.log(mystack)
 */

/*
 * Test 进制转换
 * */

function change(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);

    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }

    return converted;

}
console.log(change(32,2))


