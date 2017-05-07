/*function countBs(str) {
	// Your code here
var count=0;
for(x=0;x<str.length;x++){
	if(str.charAt(x)=="B"){
		count++;
	}
}
console.log(count);
}
countBs("string.Next")*/
function countChar(str, character) {
	// Your code here
	var count=0;
    for(x=0; x<str.length;x++){
    	if(str.charAt(x)==character){
			count++;
		}
    }
    return count;
    var result = countChar(str,character);
    console.log(result);
}

countChar("test", "t");