const check = document.querySelector('body')
const ttl = 35
var amount = '0'

//
function jumpP(x) {
    document.getElementById('pages').style.setProperty('top', x)
}
function updateN(x) {
    if ( !x.includes('.') ) {
        if ( x.length >= 4 ) {
            x = [x.slice(0, x.length-3), ',', x.slice(x.length-3)].join('')
        }         
    } else {
        a = x.split('.')[0]
        b = x.split('.')[1]
        if ( a.length >= 4 ) {
            a = [a.slice(0, a.length-3), ',', a.slice(a.length-3)].join('')
        }
        x = a + '.' + b                
    }        
    document.getElementById('num').innerHTML=x
}
function switchMode(from,to) {
    let n = 1
    while (n <= ttl) {
        if (n >= 8 && n <= 19) {
            document.getElementById('i'+n).classList.remove('m8-'+from)
            document.getElementById('i'+n).classList.add('m8-'+to)
        } else if (n >= 20 && n <= 30) {
            document.getElementById('i'+n).classList.remove('m9-'+from)
            document.getElementById('i'+n).classList.add('m9-'+to) 
        } else if (n === 35) {
            document.getElementById('i'+n).classList.remove('m3-'+from)
            document.getElementById('i'+n).classList.add('m3-'+to)                  
        } else {
            document.getElementById('i'+n).classList.remove('m'+n+'-'+from)
            document.getElementById('i'+n).classList.add('m'+n+'-'+to)  
        }
        n++
    }   
}
var clk = function() {
    if (this.id === 'i3' || this.id === 'i35') {
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
    if (this.id==='i8' || this.id==='i9' || this.id==='i10' || this.id==='i11' || this.id==='i12' || this.id==='i13' || this.id==='i14' || this.id==='i15' || this.id==='i16'|| this.id==='i17' || this.id==='i18' || this.id==='i19') {
        let c = this.getAttribute("data-input")
        if ( !amount.includes(".") && amount.length<4 && c!="d" && c!="." ) {    
            if ( amount==="0" ) {
                amount = c
            } else {
                amount += c
            }
        } else if ( c==="." && !amount.includes(".") ) {
            if (amount==="0") {
                amount = "0."
            } else {    
                amount += c
            }
        } else if ( amount.includes(".") && amount.split(".").pop().length<=1 && c!="d" && c!="." ) {
            amount += c
        } else if ( c==="d" ) {
            if (amount.length===1) {
                amount = "0"
            } else {    
                amount = amount.slice(0, -1)
            }
        } 
        updateN(amount)
    }        
    if (this.id === 'i32' && parseFloat(amount)>0) {    
        jumpP('-100%')
    }
}

//
document.getElementById('i3').onclick = clk
document.getElementById('i8').onclick = clk
document.getElementById('i9').onclick = clk
document.getElementById('i10').onclick = clk
document.getElementById('i11').onclick = clk
document.getElementById('i12').onclick = clk
document.getElementById('i13').onclick = clk
document.getElementById('i14').onclick = clk
document.getElementById('i15').onclick = clk
document.getElementById('i16').onclick = clk
document.getElementById('i17').onclick = clk
document.getElementById('i18').onclick = clk
document.getElementById('i19').onclick = clk
document.getElementById('i32').onclick = clk
document.getElementById('i35').onclick = clk
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