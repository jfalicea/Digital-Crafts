function transl33t(originalString) {

    const leetDictionary = {
        // Keys are strings, just like in python
        // But in JS, quotes are optional
        A:  4,
        E:  3,
        G:  6,
        I:  1,
        O:  0,
        S:  5,
        T:  7,    
    };
    let result = '';

    // loop through each letter in originalString
    // if it's in the dictionary, and if it is
    // put its value in `result`
    
    for (let i=0,len=originalString.length; i<len; i++) {
        let theLetter = originalString[i].toUpperCase();
        result += (leetDictionary[theLetter] !== undefined)
                    ? leetDictionary[theLetter]
                    : theLetter;    
    }
    return result;
}

console.log(transl33t('Hello this is my string'));



