var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(CounterOne),
        React.createElement(CounterTwo),
        React.createElement(CounterThree)
      )
    );
  }
});
