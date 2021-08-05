const quoteBtn = document.querySelector('.quote-btn');
const quotes = document.querySelector('.quotes');

const getQuote = async () => {
    const res = await fetch('https://www.officeapi.dev/api/quotes/random');
    const data = await res.json();
    const allData = data.data;
    console.log(allData)

    quotes.innerHTML = `
        <h3 class="office-quote">${allData.content}</h3>
        <p class="name">${allData.character.firstname} ${allData.character.lastname}</p>
    `
}

quoteBtn.addEventListener('click', getQuote)