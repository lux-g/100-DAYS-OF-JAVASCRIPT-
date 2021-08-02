const input = document.querySelector('.input');
const checkBtn = document.querySelector('.check-btn');
const displayVowel = document.querySelector('.display-vowel')


const countVowels = (str) => {
    //match the string to the regex pattern length
    //gi is global case-insensitive
    return str.match(/[aeiou]/gi).length;
};

checkBtn.addEventListener('click', ()=> {
    if(input.value.length > 1) {
        displayVowel.innerHTML = `${input.value} has ${countVowels(input.value) + " vowels"}`;
        input.value = ''
    } else {
        displayVowel.innerHTML = "enter a word"
    }
})

