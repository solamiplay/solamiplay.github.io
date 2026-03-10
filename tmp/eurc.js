
function clip(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    return str;
}

function jumpP(x) {
    document.getElementById('pages').style.setProperty('top', x)
}

// check wallet python call function
// display error or return wallet in variable & save to cookies + jumpP('-100%')  

async function paste() {
    var add = await navigator.clipboard.readText()
    var trunc = clip(add, 150)
    document.getElementById('add').innerHTML=trunc
    if (add.length > 31 && add.length < 45 && !(/\s/.test(add))) {
        // remove previous error/message
        // show checking message
        // return python call function
    } else {    
        // show error
    }
}

var clk = function() {     
    if (this.id === 'c01') {
        paste()
    }
}

document.getElementById('c01').onclick = clk
