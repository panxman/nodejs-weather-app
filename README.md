# nodejs-weather-app
Weather App using WeatherStack and Mapbox

## Link to heroku: https://panxman-nodejs-weather-app.herokuapp.com/

Before running this locally on a dev environment, you need to:
1. Create a **config** folder on the root of the project
2. Inside config, create a file named **dev.env**
3. Set the following values:

```
PORT=yourport
WEATHERSTACK_TOKEN=yourweatherstacktoken
MAPBOX_TOKEN=yourmapboxtoken
```

You can go to https://www.mapbox.com/ and https://weatherstack.com/ to create and account and new tokens.

### Third-Party Modules
- express
- hbs
- postman-request

### Third-Party Dev Modules
- nodemon
- env-cmd
