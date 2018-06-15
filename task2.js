/* Task 2 */
let a=process.argv[2];
let b=process.argv[3];
 
if(a.length != b.length){
	process.stdout.write( '-1' );
} 

for(let i = 0; i < a.length; i++){
    if(a[0] == b[i]){
        let str = b.substring(i);
        str = str + b.substring(0, i)
        if(~a.indexOf(str)){ // Воспользуемся тильдой
            let shift = b.length - i;
            if (shift > i) shift = i;
            process.exit (process.stdout.write(String(shift) ));
        }else
        str = "";
    }
} process.stdout.write( '-1' );