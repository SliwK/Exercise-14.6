var CounterThree = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: (this.state.counter + 1) * 2
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik wykonujacy operację (x+1) * 2 : ' + this.state.counter)
        );
    }
});
