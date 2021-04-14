let userAnswer = document.getElementById('answer')
let computerAnswer = document.getElementById('computerAnswer')
let warningMsg = document.getElementById('warningMsg')
let label = document.getElementById('label')



function play(){
    let useranswerValue = userAnswer.value;
    let computerAnswervalue = Math.ceil((Math.random() * 10));
if(useranswerValue){
    warningMsg.innerText = ''
    computerAnswer.value = computerAnswervalue;
    if(useranswerValue == computerAnswervalue){
        label.innerText = 'you win ^*^'
    }else{
        setTimeout(() => window.location.reload(), 1000 )
        label.innerText = 'your Answer is wrong, try again!'
    }
}else{
    warningMsg.innerText = 'please add a number'
}

}