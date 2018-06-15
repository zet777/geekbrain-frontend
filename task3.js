/* Task 3 */
let t1 = Number(process.argv[2]);
let t2 = Number(process.argv[3]);
let time = [];
let hour = Math.floor((t1+t2)/3600);
let end;
function endingStr(node){
    node = node % 100;
    if(node <= 20 && node >= 10){
        return end = 0;
    }
    else if((node % 10) >=5 ){
        return end = 0;
    }
    else if((node % 10) == 1){
        return end = 1;
    }
    else {
        return end = 2;
    }
}
if(hour > 0){
    time.push(hour);
    endingStr(hour);
    if (end == 0){
        time.push('часов');
    }
    else if (end == 1){
        time.push('час');
    }
    else {
        time.push('часа')
    }
}
let minute = Math.floor(((t1+t2) % 3600)/60);
if(minute > 0){
    time.push(minute);
    endingStr(minute);
    if (end == 0){
        time.push('минут');
    }
    else if (end == 1){
        time.push('минута');
    }
    else {
        time.push('минуты');
    }
}
let second = ((t1+t2) % 3600) % 60;
if(second > 0){
    time.push(second);
    endingStr(second);
    if (end == 0){
        time.push('секунд');
    }
    else if (end == 1){
        time.push('секунда');
    }
    else {
     time.push('секунды');   
    }
}
process.stdout.write(time.join(' '));