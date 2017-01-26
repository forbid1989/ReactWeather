var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//
//        var {location,temp} = this.props;
//
//       return (
//         <div>
//           <h4>It is {temp} in {location}.</h4>
//         </div>
//       )
//     }
// });

var WeatherMessage = (props) => {

   var {location,temp} = props;

  return (
    <div>
      <h4 className="text-center">It is {temp} in {location}.</h4>
    </div>
  );
}

module.exports = WeatherMessage;
