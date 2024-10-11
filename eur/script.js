const check = document.querySelector('body')
const ttl = 40
var amount = '0'
var tx = '0'
const qrCode = new QRCodeStyling() 
qrCode.append(document.getElementById('code'))

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
        } else if (n === 32 || n === 36) {
            document.getElementById('i'+n).classList.remove('m32-'+from)
            document.getElementById('i'+n).classList.add('m32-'+to)  
        } else if (n === 33 || n === 37 || n === 38 || n === 39 || n === 40) {
            document.getElementById('i'+n).classList.remove('m33-'+from)
            document.getElementById('i'+n).classList.add('m33-'+to)                                          
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
        let c = this.getAttribute('data-input')
        if ( !amount.includes('.') && amount.length<4 && c!='d' && c!='.' ) {    
            if ( amount==='0' ) {
                amount = c
            } else {
                amount += c
            }
        } else if ( c==='.' && !amount.includes('.') ) {
            if (amount==='0') {
                amount = '0.'
            } else {    
                amount += c
            }
        } else if ( amount.includes('.') && amount.split('.').pop().length<=1 && c!='d' && c!='.' ) {
            amount += c
        } else if ( c==='d' ) {
            if (amount.length===1) {
                amount = '0'
            } else {    
                amount = amount.slice(0, -1)
            }
        } 
        updateN(amount)
    }        
    if (this.id === 'i32' && parseFloat(amount)>0) {  
        tx = 'solana:NZdwGgS1bs1CVEqBXvpG4A8wZd3dYUUesTnSsZ6XdGD?amount=' + amount + '&spl-token=HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr'
        qrCode.update({ 
            'width':396,
            'height':396,
            'data':tx,
            'margin':0,
            'qrOptions':{
                'typeNumber':'0',
                'mode':'Byte',
                'errorCorrectionLevel':'Q'
            },
            'imageOptions':{
                'hideBackgroundDots':false,
                'imageSize':0.4,'margin':0
            },
            'dotsOptions':{
                'type':'extra-rounded',
                'color':'#000000'
            },
            'backgroundOptions':{
                'color':'#ffffff'
            },
            'image':null,
            'dotsOptionsHelper':{
                'colorType':{
                    'single':true,
                    'gradient':false
                },
                'gradient':{
                    'linear':true,
                    'radial':false,
                    'color1':'#6a1a4c',
                    'color2':'#6a1a4c',
                    'rotation':'0'
                }
            },
            'cornersSquareOptions':{
                'type':'extra-rounded',
                'color':'#000000'
            },
            'cornersSquareOptionsHelper':{
                'colorType':{
                    'single':true,
                    'gradient':false
                },
                'gradient':{
                    'linear':true,
                    'radial':false,
                    'color1':'#000000',
                    'color2':'#000000',
                    'rotation':'0'
                }
            },
            'cornersDotOptions':{
                'type':'',
                'color':'#000000'
            },
            'cornersDotOptionsHelper':{
                'colorType':{
                    'single':true,
                    'gradient':false
                },
                'gradient':{
                    'linear':true,
                    'radial':false,
                    'color1':'#000000',
                    'color2':'#000000',
                    'rotation':'0'
                }
            },
            'backgroundOptionsHelper':{
                'colorType':{
                    'single':true,
                    'gradient':false
                },
                'gradient':{
                    'linear':true,
                    'radial':false,
                    'color1':'#ffffff',
                    'color2':'#ffffff',
                    'rotation':'0'
                }
            }           
        })      
        jumpP('-100%')
    }
    if (this.id === 'g1') {
        window.open('https://solscan.io/account/NZdwGgS1bs1CVEqBXvpG4A8wZd3dYUUesTnSsZ6XdGD#balanceChanges', '_blank').focus()
    }
    if (this.id === 'g2') {
        qrCode.download({ name: 'payment', extension: 'png' })
    } 
    if (this.id === 'g3') {
        window.open('sms:+491607822978?&body=Hilfe%2C%20bitte%21', '_blank').focus()
    }        
    if (this.id === 'g4') {
        amount = '0'  
        updateN(amount)  
        jumpP('0')
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
document.getElementById('g1').onclick = clk
document.getElementById('g2').onclick = clk
document.getElementById('g3').onclick = clk
document.getElementById('g4').onclick = clk

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