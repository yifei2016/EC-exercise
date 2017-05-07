function Node(value){
	this.value = value; 
};

function pushNode(start,value){
	if(start.next === undefined){
		let newNode = new Node(value);
		start.next = newNode;
	}else{
		push(start.next,value);	
	}
}

function LinkedList(){
	this.startNode = null;
	this.length = 0;
	this.push = function(value){
		if(this.startNode === null){
			this.startNode = new Node(value);
		}
		else{
			pushNode(this.startNode,value);
		}
		this.length++;
	};
};

let linkedList = new LinkedList();

linkedList.push(3);


let node1 = new Node(4);
let node2 = new Node(6);
let node3 = new Node(8);

node1.next = node2;
node1.next.next = node3;

console.log("-----");
console.log(node1.next.next);

push(node1,10);




