var CounterOne = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    getDefaultProps: function() {
      console.log('GetDefaultProps', 'info');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik wzrastajacy : ' + this.state.counter)
        );
    },

    componentWillMount: function() {
        console.log('ComponentWillMount');
    },

  componentDidMount: function() {
        console.log('ComponentDidMount');
    },

  shouldComponentUpdate: function() {
        console.log('ShouldComponentUpdate');
        return true;
    },

  componentWillReceiveProps: function(nextProps) {
        console.log('ComponentWillRecieveProps');
    },

  componentWillUpdate: function() {
        console.log('ComponentWillUpdate');
    },

  componentDidUpdate: function() {
        console.log('ComponentDidUpdate');
    },

  componentWillUnmount: function() {
        console.log('componentWillUnmount');
    }

});
