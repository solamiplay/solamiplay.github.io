const check = document.querySelector('body');
const pages = document.getElementById('pages');
var x1 = document.body;
var x2 = document.getElementById('i2')
var x3 = document.getElementById('i3')

//
function jumpP(x) {
    pages.style.setProperty("top", x);
}
function switchMode(from,to) {
    x1.classList.remove('m1-'+from);
    x1.classList.add('m1-'+to);
    x2.classList.remove('m2-'+from);
    x2.classList.add('m2-'+to);
    x3.classList.remove('m3-'+from);
    x3.classList.add('m3-'+to);
}
var clk = function()
{
    if (this.id === "i3") {
        if (check.classList.contains('m1-1')) {
            switchMode(1,2);
            localStorage.setItem('Mode','2');
        } else if (check.classList.contains('m1-2')) {
            switchMode(2,3);
            localStorage.setItem('Mode','3');
        } else {
            switchMode(3,1);
            localStorage.setItem('Mode','1');
        }  
    }
}

//
document.getElementById('i3').onclick = clk;
document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('Mode') === '2') {
    switchMode(1,2);
  }
  if (localStorage.getItem('Mode') === '3') {
    switchMode(1,3);
  }  
});

/*
*/