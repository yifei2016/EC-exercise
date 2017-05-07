function rateMoney(account,rate){
	let total = account + account * rate;
	return total;
}
function total (account,rate,year){
	let total = account + account*rate*year;
	return total;
}


function year (string){
	let date = new Date(string);
	return date.getFullYear();

}
//year('2016-03-12')
function month (string){
	let date = new Date(string);
	return date.getMonth() + 1;
}
function day (string){
	let date = new Date(string);
	return date.getDate();
}

/*function Date(argument) {

}
Date.prototype.getMonth = function() {
	return 
}*/
function howManyMonth(){
	let birthday = new Date('2017-01-01');
	let today = new Date();
	let birthdayMonth = birthday.getMonth() + 1;
	let todayMonth = today.getMonth() + 1;
	let leftMonth = 12 - todayMonth + birthdayMonth;
	return leftMonth;
}

function isProperDate(string){
	let dateArray = string.split('-');
	//let year = Number(dateArray[0]);
	let month = Number(dateArray[1]);
	let date = Number(dateArray[2]);

	if(month < 12 && month > 0 && date > 0 && date < 31)
		return true;
	else
		return false;
}
function nextDay(string){
	let date = new Date(string);
	let nextDay = date.getDate() + 1;
	date.setDate(nextDay);
	return date;
}
/*function nextDay(string){
	let year = Number(date.substring(0,4));
	let month = Number(date.substring(5,7));
	let day = Number(date.substring(8,10));
	if((month = 1 || month ==3 || month ==) && day > 31){
		month++;
		day = 1;
	}
	return year + 
}*/

function weekday(number) {
	let endDay = number * 7 + 1;
	let beginDay = endDay - 7;
	
	let beginDate = new Date(2016,0,beginDay);
	let endDate = new Date(2016,0,endDay);
	
	let beginDateString = beginDate.getFullYear() + "-" + (beginDate.getMonth() + 1)  + '-' + beginDate.getDate();
	let endDateString = endDate.getFullYear() + "-" + (endDate.getMonth() + 1)  + '-' + endDate.getDate();
	
	return {beginDate: beginDateString,endDate: endDateString};
}
/*function weekday(week) {
	let w44start = '2016-10-30';
	if(week == 44){
		let w44end = w44start;
		for(let i=0;i<6;i++)
			w44end = nextDate(w44end);
		return [w44start, w44end];
	}//else if(week == 45){
		let weekstart = w44start;
		for(let i = 0;i<7*(week-44);i++){
			weekstart = nextDate(weekstart);
		let weekEnd = weekstart;
		for(let i=0;i<6;i++){
			weekend = nextDate(weekend);
		}
		return [weekstart,weekend];
		}
	}//
}*/

function List (){
	
}

let list = [{next: list[1], value: , length: , push: function()},{next: list[2]},{next:null}];
