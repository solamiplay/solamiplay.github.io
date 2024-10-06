const check = document.querySelector('body')

//
function jumpP(x) {
    document.getElementById('pages').style.setProperty('top', x)
}
function switchMode(from,to) {
    let n = 1
    while (n <= 32) {
        if (n >= 8 && n <= 19) {
            document.getElementById('i'+n).classList.remove('m8-'+from)
            document.getElementById('i'+n).classList.add('m8-'+to)
        } else if (n >= 20 && n <= 30) {
            document.getElementById('i'+n).classList.remove('m9-'+from)
            document.getElementById('i'+n).classList.add('m9-'+to)         
        } else {
            document.getElementById('i'+n).classList.remove('m'+n+'-'+from)
            document.getElementById('i'+n).classList.add('m'+n+'-'+to)  
        }
        n++
    }   
}
var clk = function() {
    if (this.id === "i3") {
        if (check.classList.contains('m1-1')) {
            switchMode(1,2)
            localStorage.setItem('Mode','2')
        } else if (check.classList.contains('m1-2')) {
            switchMode(2,3)
            localStorage.setItem('Mode','3')
        } else {
            switchMode(3,1)
            localStorage.setItem('Mode','1')
        }  
    }
}

//
document.getElementById('i3').onclick = clk
document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('Mode') === '2') {
    switchMode(1,2)
  }
  if (localStorage.getItem('Mode') === '3') {
    switchMode(1,3)
  }  
})

/*
*/