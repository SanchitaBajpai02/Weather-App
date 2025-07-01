const apikey = "be8b19c423787a6eaddc069019cf8dfd";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
   const response = await fetch(`${apiurl}${city}&appid=${apikey}`);

   if(response.status == 404){
    document.querySelector(".error").style.display= "block";
    document.querySelector(".weather").style.display= "none";
   }else{
    const data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";


    document.querySelector(".weather").style.display= "block";
    document.querySelector(".error").style.display= "none";
   }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

