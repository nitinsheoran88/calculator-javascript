console.log('js file is working........')

let result = document.querySelector('.box1 input')

function addInput(Value){
    result.value += Value
}
function allClear(){
    result.value = ''
}
function showResult(){   
    try{
        result.value = eval(result.value)
    }catch(error){
        result.value = 'Error'
    }
}
