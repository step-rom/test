

let i=0;
const arr = [ ];

function insert(num){
    document.getElementById('pole').value += num;
}
function clean(){
    document.getElementById('pole').value = '';
}
function operation(name){
    if(name == 'sqrt'){
    document.getElementById('pole').value =
        Math.sqrt(eval(document.getElementById('pole').value))
    }
    if (name == 'sqr'){
        document.getElementById('pole').value =
            Math.pow(eval(document.getElementById('pole').value),2)
    }
}
function sqr(){
    document.getElementById('pole').value =
        Math.sqrt(eval(document.getElementById('pole').value))
}


function result(){
    let exp = document.getElementById('pole').value;
    if(exp){
        document.getElementById('pole').value=eval(exp);
    }

    log(exp)
}

function log(exp){
    let save=`${exp}=${eval(exp)}`;
    if(i<100){
        arr[i]=save;
    }else {
        arr.shift(save)  ;
        i--
    }
    localStorage.setItem('test',JSON.stringify(arr));
    info.innerHTML+='<p>'+arr[i]+'</p>';
    i++;
}
function logOutput(){
    let logSave = localStorage.getItem('test');
    logSave=JSON.parse(logSave)
    for( let i=0 ;i<logSave.length;i++) {
        info.innerHTML += '<p>' + logSave[i] + '</p>';
    }
}
logOutput();