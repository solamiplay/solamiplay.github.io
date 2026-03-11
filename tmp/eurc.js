
function clip(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    return str;
}

function jumpP(x) {
    document.getElementById('pages').style.setProperty('top', x)
}

async function eurc(x) {
    add = x
    
    const response = await fetch('/api/eurc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ add: add })
    });

    const result = await response.json();
    if (result.message === 'confirmed') {
        document.getElementById('noti').setAttribute('class', '')
        document.getElementById('noti').innerHTML=''
        var shorty = add.slice(0,4)+'...'+add.slice(-4)
        localStorage.setItem('eurc',add)
        // draw shorty at second page
        jumpP('-100%')
        return shorty 
    } else {
        document.getElementById('noti').setAttribute('class', 'n1')
        document.getElementById('noti').innerHTML=result.message
    }
}

async function paste() {
    var add = await navigator.clipboard.readText()
    var trunc = clip(add, 150)
    document.getElementById('add').innerHTML=trunc
    if (add.length > 31 && add.length < 45 && !(/\s/.test(add))) {
        document.getElementById('noti').setAttribute('class', 'n2')
        document.getElementById('noti').innerHTML='... checking ...'
        // return eurc(add)
    } else {    
        document.getElementById('noti').setAttribute('class', 'n1')
        document.getElementById('noti').innerHTML='Not a valid Address'
    }
}

var clk = function() {     
    if (this.id === 'c01') {
        paste()
    }
}

document.getElementById('c01').onclick = clk

document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('eurc') !== null) {
        var add = localStorage.getItem('eurc')
        var shorty = add.slice(0,4)+'...'+add.slice(-4)
        // draw shorty at second page
        jumpP('-100%')
        return shorty
    } 
})

