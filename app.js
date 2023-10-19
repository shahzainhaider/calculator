console.log('connected')

let btns = document.querySelectorAll('.button')
let display = document.querySelector('input')
display.value = 0
let string = ''


Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        try {
            if ('+-*X/'.includes(display.value[display.value.length - 1]) && '+-X*/'.includes(e.target.innerText)) {
                string = string.slice(0, -1)
            }
            if (e.target.innerText == '=') {
                string = eval(string)
                display.value = string
            } else if (e.target.innerText == 'X') {
                string += '*'
                display.value = string
            }
            else if (e.target.innerText == 'C') {
                string = ''
                display.value = 0
            }
            else {
                string += e.target.innerText
                display.value = string
            }
        } catch (error) {
            display.value = 'Invalid expression'
        }
    })
})