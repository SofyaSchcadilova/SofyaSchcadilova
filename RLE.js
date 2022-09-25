function coder(coderStr){
    let c = 0;
    let n = 1;
    let codeStr = ''
    while (c < coderStr.length){
        while(coderStr.charAt(c) === coderStr.charAt(c + n)){
            n++;
        }
        let sym = coderStr.charAt(c)
        let counter = Math.floor(n / 255);
        let remainder = n % 255
        codeStr += ('#' + String.fromCharCode(255) + sym).repeat(counter)
        if (remainder !== 0){
            if (sym === '#'){
                codeStr += '#' + String.fromCharCode(remainder) + '#'
            } else {
                if (remainder > 3){
                    codeStr += '#' + String.fromCharCode(remainder) + sym
                } else {
                    codeStr += sym.repeat(remainder)
                }
            }

        }
        c += n;
        n = 1;
    }
    return codeStr
}

function decoder(decoderStr){
    let decodeStr = ''
    let c = 0
    while (c < decoderStr.length){
        if(decoderStr.charAt(c) === '#'){
            decodeStr += (decoderStr.charAt(c + 2)).repeat((decoderStr.charAt(c + 1)).charCodeAt())
            c += 3
        } else {
            decodeStr += decoderStr.charAt(c)
            c += 1
        }
    }
    return decodeStr
}
let fs = require('fs');
const codeStr =  fs.readFileSync('input.txt', 'utf8');
const codedStr = coder(codeStr);
fs.writeFileSync('code.txt', codedStr);
const decodeStr = decoder(codedStr)
fs.writeFileSync('decode.txt', codedStr);

const compRatio = coder(codedStr) / codeStr
console.log(decoder(a))
