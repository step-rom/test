
let i=0;
let firstItem, secondItem;
let calcInput = document.querySelector('input');
let info = document.getElementById('info')
const btnCalc = document.querySelectorAll('button');

btnCalc.forEach((elem)=>{
    elem.addEventListener('click', ()=>{
        calcInput.value += elem.value
        firstItem = calcInput.value
    })
});

/* для вывода сразу при загрузки страницы и определение ключа в localStorage
для продолжения записи в него*/
function  logOutput (){
    for( i=0 ;i<localStorage.length;i++) {
        let logSave = localStorage.getItem (`${i}`)
        info.innerHTML += '<p>' + logSave + '</p>';
    }
}

// функция обнуления
function reset(){
    calcInput.value = ''
}

//функция результата через '='
function result () {
    if(eval(calcInput.value) === undefined){
        calcInput.value='0'
    }else if (eval(calcInput.value) === Infinity){
        calcInput.value='На ноль делить нельзя!'
    }
    calcInput.value = eval(calcInput.value);
    secondItem = eval(calcInput.value);
    logs();
}

//функции корень квадратный и возведение в квадрат
function operation(name){
    if(name === 'sqrt') {
        calcInput.value= Math.sqrt(eval(calcInput.value))
        secondItem =" (Корень) " +''+ calcInput.value
    }
    else if (name === 'pow'){
        calcInput.value= Math.pow(eval(calcInput.value),2)
        secondItem= " (^2) " +''+ calcInput.value
    }
    logs()
}


/* это запись в localStorage а так же вывод в список оперции послеедние 100,
 после 100 операции обнуление индекса(ключа ) и перезапись существующих */
function logs() {
    let save = `${firstItem} = ${secondItem}`
    console.log(save)
    if (i <100) {
        localStorage.setItem(`${i}`, save)
    }else  {
        localStorage.clear();
        i=0
        localStorage.setItem(`${i}`, save)
    }
    let logLocal= localStorage.getItem(`${i}`);
    info.innerHTML += '<p>' + logLocal + '</p>';
    i++
}

logOutput ()

