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

var weatherDiv = document.getElementById('weather-app')

var weatherSection = document.getElementById('weather')

var form = document.querySelector('form')

form.onsubmit = function(e) {
    e.preventDefault()
    var userLocation = form.search.value
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + userLocation + "&units=imperial&appid=cbf6a4540c5e167330be7dd558d11f9a"
    if (!userLocation) return
    form.search.value = ""
    fetch(URL)
    .then(function(response) {
        if (response.status !== 200) {
            throw new Error ('Location Not Found')
        }
        return response.json()
    })
    .then(function(weather){
        console.log(weather)
        weatherSection.innerHTML = ""
        
    var locHeader = document.createElement('h2')
    locHeader.textContent = weather.name + ', ' + weather.sys.country
    weatherSection.appendChild(locHeader)

    var googleMaps = document.createElement('a')
    var lat = weather.coord.lat
    var lon = weather.coord.lon
    googleMaps.href = 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lon
    googleMaps.textContent = 'Click to view map'
    weatherSection.appendChild(googleMaps)

    var icon = document.createElement('img')
    var iconCode = weather['weather'][0]['icon']
    icon.src = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png'
    icon.alt = weather['weather'][0]['description']
    weatherSection.appendChild(icon)

    var desc1 = weather['weather'][0]['description']
    var arr = desc1.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    var desc2 = arr.join(' ')
    var description = document.createElement('p')
    description.textContent = desc2
    weatherSection.appendChild(description)
    lineBreaks()

    var currentTemp = document.createElement('p')
    currentTemp.textContent = 'Current: ' + weather.main.temp + '\u00B0 F'
    weatherSection.appendChild(currentTemp)

    var perceivedTemp = document.createElement('p')
    perceivedTemp.textContent = 'Feels like: ' + weather.main.feels_like + '\u00B0 F' 
    weatherSection.appendChild(perceivedTemp)
    lineBreaks()

    var time = weather.dt * 1000
    var date = new Date(time)
    var timeString = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
    })
    var lastUpdate = document.createElement('p')
    lastUpdate.textContent = 'Last updated: ' + timeString
    weatherSection.appendChild(lastUpdate)
    })

    .catch(function(err) {
    var errMessage = document.createElement('h2')
    errMessage.innerHTML = err.message
    weatherSection.appendChild(errMessage)
    })
}

function lineBreaks() {
    var p = document.createElement('p')
    p.innerHTML = '&nbsp'
    weatherSection.appendChild(p)
}




    

    
