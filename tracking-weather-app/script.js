const searchButton = document.querySelector("#button-addon2");
const inputKeyword = document.querySelector(".input-keyword");

searchButton.addEventListener("click", function () {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=f6164972a9c24e658e6163443222511&q=" +
      inputKeyword.value
  )
    .then((response) => response.json())
    .then((response) => {
      let result = document.querySelector(".result");

      result.innerHTML = `<center><h2 style="margin-bottom: 15px;">${response.location.name}, ${response.location.country}</h2>
                                <h5><span class="temp">${response.current.temp_c}°С</span> <span class="temp">${response.current.condition.text}</span></h5>
                                <h5>Wind Speed : ${response.current.wind_mph} mph</h5>
                                <h5>Clouds : ${response.current.cloud}%</h5>
                                <h5 style="color: #012443;">Geo Coordinates : [${response.location.lat}, ${response.location.lon}]</h4><center>`;
    });
  inputKeyword.value = null;
});
