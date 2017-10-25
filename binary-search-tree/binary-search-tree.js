function BST(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

BST.prototype.insert = function(value){
	if(value <= this.value){
		if(!this.left){
			this.left = new BST(value);
		}
		else{
			this.left.insert(value);
		}
	}
	else if(value > this.value){
		if(!this.right){
			this.right = new BST(value);
		}
		else{
			this.right.insert(value);
		}
	}
}

BST.prototype.contains = function(value){
	if(value === this.value){
		return true;
	}
	else if(value < this.value){
		if(!this.left){
			return false;
		}
		else{
			return this.left.contains(value);
		}
	}
	else if(value > this.value){
		if(!this.right){
			return false;
		}
		else{
			return this.right.contains(value);
		}
	}
}

// In order version of Depth First Traversal
BST.prototype.depthFirstTraversal = function(iteratorFunc){
	//this will touch every node in the tree
	//in order from least to greatest
	if(this.left){
		this.left.depthFirstTraversal(iteratorFunc);
	}
	iteratorFunc(this.value); //parent node
	if(this.right){
		this.right.depthFirstTraversal(iteratorFunc);
	}
}


var bst = new BST(50); //this creats a binary search tree with
//one node and no child nodes
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

bst.depthFirstTraversal(log);

function log(value){
	console.log(value);
}

console.log(bst.contains(50));
console.log(bst.contains(59));
console.log(bst.contains(10));
console.log(bst.contains(15));

console.log(bst.right.left.left); //59
console.log(bst.left.right.left); //35
console.log(bst.right.right); //100
console.log(bst.right.right.right); //105
