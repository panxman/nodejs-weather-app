const weatherForm = document.querySelector("form");
const locationButton = document.querySelector("#location-btn");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.getElementById("message-2");
const weatherIcon = document.getElementById("weather-icon");

weatherForm.addEventListener("submit", (e) => {
  // Stop form from refreshing the page
  e.preventDefault();

  messageOne.textContent = "Loading weather";
  messageTwo.textContent = "";
  weatherIcon.innerHTML = "";

  const location = search.value;
  fetchData("/weather?address=" + location);
});

locationButton.addEventListener("click", (e) => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.");
  }

  messageOne.textContent = "Loading weather";
  messageTwo.textContent = "";
  weatherIcon.innerHTML = "";  

  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetchData("/weather?coords=" + latitude + "," + longitude);
  });
});

// Fetch data from /weather
const fetchData = (url) => {
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = `It's ${data.description} in ${data.location}, at ${data.time}.`;
        messageTwo.textContent = `The temperature is ${data.temperature}°C and it feels like ${data.feelslike}°C.`;
        messageTwo.textContent += ` The humidity is at ${data.humidity}%.`;
        weatherIcon.innerHTML = `<img src="${data.img}" alt="weather-icon"/>`;
      }
    });
  });
};
