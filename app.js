let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
let iconElement = document.getElementById('icon');
let temperatureSection = document.querySelector('.temperature');
const temperatureSpan = document.querySelector('.temperature span');

const api = 'https://api.weatherapi.com/v1/current.json?key=d31b6060a8ca4962b13153908212010&q=Bucharest&aqi=no';
fetch(api)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    //setting DOM elements from the API
    temperatureDegree.textContent = data.current.temp_f;
    temperatureDescription.textContent = data.current.condition.text;
    let c2 = data.current.condition.text;
    locationTimezone.textContent = data.location.tz_id;
    iconElement.src = data.current.condition.icon;
    let celsius = (data.current.temp_f - 32) * (5 / 9);
    
    //change from degC to degF
    temperatureSection.addEventListener('click', () => {
      if (temperatureSpan.textContent === "F") {
        temperatureSpan.textContent = "C";
        temperatureDegree.textContent = Math.floor(celsius);
      } else {
        temperatureSpan.textContent = "F";
        temperatureDegree.textContent = data.current.temp_f;
      }
    });
  });