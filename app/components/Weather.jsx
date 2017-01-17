var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

    getInitialState: function() {
      return {
        //Converts props into state.
        IsLoading:false
      };
    },
    handleSearch:function(location) {
      var that = this
      //debugger;
      this.setState({isLoading: true});

      OpenWeatherMap.getTemp(location).then(function (temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }, function (errorMessage) {
        that.setState({isLoading: false});
        alert(errorMessage);
      });

    },
    render: function() {

      var {isLoading,temp,location} = this.state;

      function renderMessage() {
        if (isLoading) {
          return <h3>Fetching weather....</h3>
        } else if (temp && location) {
          return <WeatherMessage location={location} temp={temp} />
        }
      }

      return (
        <div>
          <h3>Get Weather</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
      )
    }
});

module.exports = Weather;
