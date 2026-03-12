
function jumpP(x) {
    document.getElementById('pages').style.setProperty('top', x)
}

var lnk = function() {
    if (this.id === 'header2') {
        jumpP('-100%')
    }
    if (this.id === 'header3' || this.id === 'header4') {
        jumpP('0')
    }
    if (this.id === 'j2' || this.id === 'k2') {
        window.open('eurc.html', '_blank').focus()
    }
    if (this.id === 'j3' || this.id === 'k3') {
        window.open('mailto:'+'netzgeld'+'.'+'sol'+'+'+'wtf'+'@'+'gmail'+'.com'+'?subject=Hola', '_self');
    }    
}  

document.getElementById('header2').onclick = lnk
document.getElementById('header3').onclick = lnk
document.getElementById('header4').onclick = lnk
document.getElementById('j2').onclick = lnk
document.getElementById('k2').onclick = lnk
document.getElementById('j3').onclick = lnk
document.getElementById('k3').onclick = lnk


async function hola() {
    blocktime = Math.floor(Date.now() /1000)
    
    const response = await fetch('/api/hola', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blocktime: blocktime })
    });

    const result = await response.json();
    document.getElementById('counter').innerHTML=result.counter;
}

hola()

//