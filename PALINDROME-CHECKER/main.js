const input = document.querySelector('.input');
const checkBtn = document.querySelector('.check-btn');
const palindromeText = document.querySelector('.palindrome-text');


checkBtn.addEventListener('click', ()=> {
    const newValue = input.value.toLowerCase();

    if(checkPalindrome(newValue) && newValue.length > 1) {
        palindromeText.innerHTML = `${input.value} is a palindrome`
    } else if(!checkPalindrome(input.value)) {
        palindromeText.innerHTML = `${input.value} is NOT a palindrome`
    } else if(input.value.length < 1) {
        palindromeText.innerHTML = 'enter a word'
    }

    input.value = ''
});


//CHECK PALINDROME FUNCTION
const checkPalindrome = (str) => {
    return str === [...str].reverse().join('')
};
