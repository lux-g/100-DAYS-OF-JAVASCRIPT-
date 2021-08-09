const form = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const API_KEY = "7ef4fde73d96fdcbc63cbcdabaf37ef9";
const weatherInfo = document.querySelector('.weather-info');
const weather = document.querySelector('.weather');
const thumbnail = document.querySelector('.thumbnail');

//IMAGES
const cloudy = './images/cloudy.png';
const partlyCloudy = './images/partly-cloudy.png'
const rain = './images/rain.png';
const sun = './images/sun.png';
const storm = './images/thunderstorm.png';
const snow = './images/snow.png'

//KELVIN TO FAHRENHEIT
const kelvinToF = (temp) => {return Math.round(((temp - 273.15) * 1.8) + 32)};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValueCity = searchInput.value;

    if(searchValueCity) {
        const getData = async() => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValueCity}&appid=${API_KEY}`)
            const data = await res.json();
            console.log(data)
    
            //GET DATE
            let date = new Date()
    
            //GET WEEKDAY
            const getWeekDay = (date) => {
                let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let day = date.getDay();
                return weekdays[day]
            };
            //GET MONTH
            const getMonth = (date) => {
                let months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
              let month = date.getMonth();
              return months[month]
            };
    
            //DAY MONTH YEAR VARIABLES
            const weekDay = getWeekDay(date);
            const monthDate = getMonth(date);
            const monthDay = date.getDate();
            const fullYear = date.getFullYear();
            
            //DISPLAY DATA
            const displayData = () => {
                document.querySelector('.date-month-year').innerHTML = `${weekDay} ${monthDate} ${monthDay}, ${fullYear}`;
                document.querySelector('.tempature').innerHTML = `${kelvinToF(data.main.temp)}`;
                document.querySelector('.feels-like').innerHTML = `Feels Like: ${kelvinToF(data.main.feels_like)}`;
                document.querySelector('.city-country').innerHTML = `${data.name}, ${data.sys.country}`;
                document.querySelector('.weather').innerHTML = `${data.weather.map(each => each.description)}`;
                document.querySelector('.temp-range').innerHTML = `Temp Range: ${kelvinToF(data.main.temp_min)} - ${kelvinToF(data.main.temp_max)}`



                //WEATHER IMAGES
                if(weather.innerHTML.includes('cloud')){
                    thumbnail.src = cloudy
                }
                if(weather.innerHTML.includes('partly')){
                    thumbnail.src = partlyCloudy
                }
                if(weather.innerHTML.includes('rain')){
                    thumbnail.src = rain
                }
                if(weather.innerHTML.includes('sun') || weather.innerHTML.includes('clear')){
                    thumbnail.src = sun
                }
                if(weather.innerHTML.includes('rain')){
                    thumbnail.src = rain
                }
                if(weather.innerHTML.includes('snow')){
                    thumbnail.src = snow
                }
                if(weather.innerHTML.includes('thunder') || weather.innerHTML.includes('lightning')){
                    thumbnail.src = storm
                }
            };
    
            //CLEAR INPUT
            function clearInput(){
                searchInput.value = ""
            };
    
            //CALL FUNCTIONS
            clearInput()
            displayData();
        };
    
        //CALL MAIN FUNCTION
        getData()  
    } else {
        alert('ENTER A CITY NAME')
    }

});

