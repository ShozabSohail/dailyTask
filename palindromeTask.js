function makePalindrome(input) {
    const isPalindrome = arr => arr.join('') === arr.reverse().join('');
    if (isPalindrome(input.split(''))) {
        return input;  
    }  
    for (let i = 0; i < input.length; i++) {
        if (isPalindrome(input.slice(i).split(''))) {
            return input + input.slice(0, i).split('').reverse().join(''); 
        }
    }
}
console.log(makePalindrome("aabbb"));
