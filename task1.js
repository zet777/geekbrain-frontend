/* Task 1 */
function cut(){
	let str = process.argv[2];
	if(undefined !==str && str.length && 1<=str.length && str.length<=10000){
		process.stdout.write(str.replace(/[Р,р,К,к,Н,н]/g, ""));	
	}
	else{
		process.stdout.write("Строка должна быть не пустой и не более 10000");
	}	
} 
cut();