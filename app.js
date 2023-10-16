console.log('connected')

let btns = document.querySelectorAll('.button')
let display = document.querySelector('input')
let string = ''

for(let btn of btns){
    btn.addEventListener('click',(e)=>{
        if(e.target.innerText == '='){
            string = eval(string)
            display.value= string
        }else if(e.target.innerText == 'X'){
            string += '*'
            display.value= string
        }
        else if(e.target.innerText == 'C'){
            string = ''
            display.value= string
        }
        else{
            string += e.target.innerText
            display.value= string
            }
    })
}
