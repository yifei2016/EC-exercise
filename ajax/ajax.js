window.addEventListener('load',function(event){
	let button = document.getElementById('button');
	let div = document.getElementById('div');
	let list = document.getElementsByTagName("ul")[0];
	button.addEventListener('click',function(event){
		let req = new XMLHttpRequest();

		req.onreadystatechange = function(event) {
			//console.log('chuan');	
			if( req.readyState == 4 ){
				let res = req.responseText;
				let li = document.createElement("li");
				li.innerHTML=res;
				list.appendChild(li);
			}
		};
		
		req.open('GET', 'http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=10');
		//req.setRequestHeader("Accept", "application/json");
		//console.log('-----------');
		req.send();
		
		//console.log('yifei');
	});
	

})