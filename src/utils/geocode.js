const request = require("postman-request");

// MapBox
const mapboxToken = process.env.MAPBOX_TOKEN;

const geocode = (address, callback) => {
  const geocodeURL =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=" +
    mapboxToken;

  request(geocodeURL, { json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to MapBox Geocoding.", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find geocoding for given location.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
