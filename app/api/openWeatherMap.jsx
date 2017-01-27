var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5774f164dfb98c350c1a4b6e265bd498&units=imperial';

module.exports = {
  getTemp: function(location) {

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return  axios.get(requestUrl).then(function(err){
      //debugger;
      if (err.response.data.cod && err.response.data.message) {
        throw new Error(err.response.data.message);
      } else {
        return err.response.data.main.temp;
      }
    },function(err){
      throw new Error(err.response.data.message);
      //throw new Error('Unable to fetch weather for that location.');
    });

  }
}
