function isPalindrome(s: string): boolean {

    const filteredString =s.replace(/\W/g, ''); 
    let isPalindrome = filteredString.toLowerCase().split("").reverse().join("") === filteredString.toLowerCase();
    console.log(isPalindrome);
    console.log(filteredString.toLowerCase().split("").reverse().join(""));
    console.log(filteredString);
    return isPalindrome;
}

isPalindrome("A man, a plan, a canal: Panama")