let apiKey=" aa93cf045af7ef6b96d7f0bf356e88c3"

let apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=New york&appid=$a{apiKey}"


let now = new Date ();
let h1 =document.querySelector("h1");
let hours= now.getHours();
let minutes = now.getMinutes();


let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
h1.innerHTML = `${day}, ${hours}: ${minutes}`;


function citySearch(city) {
  event.preventDefault();
  let apiKey = "aa93cf045af7ef6b96d7f0bf356e88c3";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#unit-temperature");
  temperatureElement.innerHTML = `${response.data.main.temp}`;
}


function search(event) {
  event.preventDefault();
  let input = document.querySelector(".city");
  citySearch(input.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);



function displayFahrenheitTemperature(event) {
  event.preventDefault();
  celciusTemp.classList.remove("active");
  fahreneitTemp.classList.add("active");
  let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  celciusTemperature = response.data.main.temp;
}
let fahreneitTemp = document.querySelector("#fahrenheit-link");
fahreneitTemp.addEventListener("click", displayFahrenheitTemperature);
function displayCelciusTemperature(event) {
  event.preventDefault();
  celciusTemp.classList.remove("active");
  fahreneitTemp.classList.add("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celciusTemperature);
}
let celciusTemperature = null;
let celciusTemp = document.querySelector("#celcius-link");
celciusTemp.addEventListener("click", displayCelciusTemperature);

