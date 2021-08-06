const quoteBtn = document.querySelector('.quote-btn');
const input = document.querySelector('.input');
const quotesDiv = document.querySelector('.quotes');
const URL = "https://type.fit/api/quotes";

const getData = async () => {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        const allData = data.slice(0, input.value)
        shuffle(allData)

        const displayData = allData.map((item, index) => {
            return `
                <div class="quotes-container">
                    <h4>${item.text}</h4>
                    <p>${item.author}</p>
                </div>
            `
        })
        quotesDiv.innerHTML = displayData.join('')
        
    } catch (error) {
        console.log(error)
    }
}
quoteBtn.addEventListener('click', getData);

//SHUFFLE FUNCTION
function shuffle(theQuotes){
    let currentIndex = theQuotes.length, tempValue, randomIndex;

    //while elements exist in array
    while(currentIndex > 0) {
        randomIndex = Math.floor(Math.random()* currentIndex);
        //Decrease currentIndex by 1
        currentIndex --;
        //Swap the last element with currentIndex
        tempValue = theQuotes[currentIndex];
        theQuotes[currentIndex] = theQuotes[randomIndex];
        theQuotes[randomIndex] = tempValue;
    }
    return theQuotes;
}