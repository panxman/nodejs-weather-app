const request = require("postman-request");

// WeatherStack
const weatherstackToken = process.env.WEATHERSTACK_TOKEN;

const forecast = (latitude, longitude, callback) => {
  const weatherURL =
    "http://api.weatherstack.com/current?access_key=" +
    weatherstackToken +
    "&query=" + latitude + "," + longitude;

    request(weatherURL, { json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service.", undefined);
        } else if (body.error) {
            callback("Unable to find location.", undefined);
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                location: body.location.name + ", " + body.location.region + ", " + body.location.country,
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                humidity: body.current.humidity,
                time: body.location.localtime.split(" ")[1],
                img: body.current.weather_icons,
            });
        }
    });
};

module.exports = forecast;