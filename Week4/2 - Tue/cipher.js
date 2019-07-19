

function cipher(str, offset) {
    offset = offset || 13;
    const allLetters = str.toLowerCase().split('');
    let updated = allLetters.map(function(letter){
        const code = letter.charCodeAt(0);
        if (code > 96 && code < 123) {
            return String.fromCharCode(code-offset);
        }
        return letter;
    });
    updated = updated.join('');
    return updated.charAt(0).toUpperCase() + updated.slice(1);   
}

function decipher(str, offset) {
    offset = offset || 13;
    const allLetters = str.toLowerCase().split('');
    let updated = allLetters.map(function(letter){
        const code = letter.charCodeAt(0);
        if (code > 83 && code < 110) {
            return String.fromCharCode(code+offset);
        }
        return letter;
    });
    updated = updated.join('');
    return updated.charAt(0).toUpperCase() + updated.slice(1);   
}

const res = cipher('Hello world');
console.log(res);
console.log(decipher(res));