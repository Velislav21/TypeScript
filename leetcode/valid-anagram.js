function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    const letters = {};

    for (let char of str1) {
        letters[char] ? ++letters[char] : letters[char] = 1;
    }
    
    for (let char of str2) {

        if(!letters[char]) {
            return false;
        } else {
            --letters[char]
        };
    }
    
    return true;
}
console.log(isAnagram("rac", "car"));