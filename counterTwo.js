var CounterTwo = React.createClass({
    getInitialState: function() {
        return {
            counter: 1000000
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik pomniejszający : ' + this.state.counter)
        );
    }
});
