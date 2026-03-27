
function jumpP(x) { document.getElementById('pages').style.setProperty('top', x) }

const qrCode = new QRCodeStyling() 
qrCode.append(document.getElementById('code'))

tx = 'solana:Y1TnGGeKo2zCHeWyrmpWMQi2yDv9YaWwJqVCkA8YD1Y?amount=1.00&spl-token=HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr&memo=688212127313874'
//tx = 'solana:CA1GTtUkgXsKDVyEHjkVYzg2oDS4jE3RCEJNwEJwXdSH?amount=1.00&spl-token=HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr&label=Netcash&memo=765121816112569'

qrCode.update({ 
    'width':396,
    'height':396,
    'data':tx,
    'margin':0,
    'qrOptions':{
        'typeNumber':'0',
        'mode':'Byte',
        'errorCorrectionLevel':'H'
        },
    'imageOptions':{
        'hideBackgroundDots':false,
        'imageSize':0.4,'margin':0
        },
    'dotsOptions':{
        'type':'rounded',
        'color':'#000000',
        'roundSize': false
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
jumpP('-200%') 

//https://github.com/oblakstudio/qr-code-styling