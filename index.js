// Your code here
//Pseudocode:
//Objective: Create a weather app that diplays current weather data by location
//Note: First create an OpenWeather API account and visit the API key management page

//1. The weather app should call to Open Weather API's current endpoint using JavaScript Fetch API

//2. To receive full credit the app must display: city/country code, Google Maps link, weather icon, description of current weather, actual temp., perceived temp., time weather info was last updated. 

//3. If user enters data that does not retrieve weather data it should display 'location not found'

//4. To obtain weather data from API, construct URL for request using JavaScript.

//5. Add an extra parameter to ensure measurements are imperial units.

//6. Use string concatenation to ensure that user entered data will be pulled. 

//7. Additional steps to take when setting up icon, time updated, and Google maps link.

var URL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cbf6a4540c5e167330be7dd558d11f9a'

var weatherDiv = document.getElementById('weather-app')

var weatherSection = document.getElementById('weather')

var form = document.querySelector('form')

form.onsubmit = function(e) {
    e.preventDefault()
    // var queryString = "?units=imperial&appid=cbf6a4540c5e167330be7dd558d11f9a" + userLocation
    // var fetchURL = URL + queryString
    // var input = document.querySelector('input')
    // var userLocation = input.value
    // input.value = ""
    // console.log(userLocation)
    fetch(URL)
    .then(function(response) {
        return response.json()
    })
    .then(function(weather){
        console.log(weather)
    })
}
