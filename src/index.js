let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city");
city = city.toLowerCase();

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let fahrenheit = Math.round(temperature);
  let celsius = Math.round(temperature - 32 * (9 / 5));
  let humidity = weather[city].humidity;

  alert(
    `It is currently ${fahrenheit}°F (${celsius}°C) in ${city} with a humidity of ${humidity}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for the city. Try going to https://www.google.com/search?q=weather+${city}`
  );
}

let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return formattedDate;
}

console.log(formatDate(currentTime));
let h2 = document.querySelector("h2");
h2.innerHTML = `${formatDate(currentTime)}`;
// search engine
function searchCityName(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-name");
  let input = document.querySelector("#city-input");
  cityName.innerHTML = `${input.value}`;
  cityData(input.value);
}
let form = document.querySelector("#searchCities-form");
form.addEventListener("submit", searchCityName);

// API
function showWeather(response) {
  let showTemp = document.querySelector("#city-name");
  let temperature = Math.round(response.data.main.temp);
  showTemp.innerHTML = `${temperature}° in ${response.data.name}`;
}

function cityData(city) {
  let apiKey = "7e52f346f8643505a8a4ef23b47645a8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
