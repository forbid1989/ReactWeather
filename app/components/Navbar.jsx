var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Navbar = React.createClass({
//   render: function(){
//       return (
//
//         <div>
//           <h2>Navigation Bar</h2>
//           <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//           <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//           <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//         </div>
//
//       );
//   }
// });

var Navbar = () => {
  return (

    <div>
      <h2>Navigation Bar</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>

  );
};

module.exports = Navbar;
