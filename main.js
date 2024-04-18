`use strict`;

const apikey = "982d5a3b3c7a8038e5cb48abf8d9cefe";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();


        // document.querySelector(".city").appendChild(document.createTextNode(data.name));
        document.querySelector(".city").innerHTML = data.name ;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ '°c';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = './Weather-image/clouds.png';
        }
        
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = './Weather-image/clouds.png';
        }
        
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = './Weather-image/clear.png';
        }
        
        if(data.weather[0].main == "Rain"){
            weatherIcon.src = './Weather-image/rain.png';
        }
        
        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = './Weather-image/drizzle.png';
        }
        
        if(data.weather[0].main == "Mist"){
            weatherIcon.src = './Weather-image/mist.png';
        }
    
    
        document.querySelector(`.weather`).style.display ="block";
        document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener(`click`,(e)=>{
    e.preventDefault();
    checkWeather(searchBox.value)
});
