/*
* 二叉树--BST 二叉查找树
* */
function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data
}

function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getMin= getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;

}
/*
* 插入节点
* */
function insert(data){
    var n = new Node(data,null,null);
    if(this.root ==null){
        this.root = n;
    }else{
        var current = this.root;
        var parent;
        while (true){
            parent = current;
            if(data <current.data){
                current = current.left;
                if(current ==null){
                    parent.left = n;
                    break;
                }
            }else {
                current = current.right;
                if(current ==null){
                    parent.right = n;
                    break;
                }
            }
        }
    }

}
/*
* 中序遍历---升序遍历   左子树- 父节点- 右子树
* */
function inOrder(node){
    if(!(node==null)){
        inOrder(node.left);
        console.log(node.show() + "");
        inOrder(node.right)

    }
}
/*
* 先序遍历
* */
function perOrder(node) {
    if(!(node ==null)){
        console.log(node.show() + "");
        perOrder(node.left);
        perOrder(node.right)
    }

}
/*
* 后续遍历
* */
function postOrder(node){
    if(!(node ==null)){
        postOrder(node.left);
        postOrder(node.right)
        console.log(node.show() + "")
    }
}

/*
* 最小值
* */

function getMin(){
    var current = this.root;
    while(!(current.left == null)){
        current = current.left;
    }
    return current.data;
}
/*
* 最大值  右子树的右子树
* */
function getMax(){
    var current = this.root;
    while (!(current.right == null)){
        current = current.right;
    }
    return current.data;
}
/*
* 查找
* */
function find(data){
    var current = this.root;
    while(current !=null){
        if(current.data ==  data){
            return current;
        }else if(data < current.data){
            current = current.left;
        }else{
            current = current.right
        }
    }
    return null;
}

/*
* 删除
* */
function remove(data){
    root = removeNode(this.root,data);
}

function removeNode(node,data){
    if(node == null){
        return null;
    }
    if(data == node.data){
        //无子节点
        if(node.left == null && node.right == null){
            return null;
        }
        if(node.left == null){
            return node.right;
        }
        if(node.right == null){
            return node.left;
        }
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right,tempNode.data);
        return node;
    }else if(data < node.data){
        node.left = removeNode(node.left,data);
        return node;
    }else{
        node.right =removeNode(node.right,data);
        return node;
    }

}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root)