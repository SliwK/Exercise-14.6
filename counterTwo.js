var CounterTwo = React.createClass({
    getInitialState: function() {
        return {
            counter: 1000000
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },


    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, 'Licznik powiększający'),
            React.createElement('span', {}, this.state.counter),
            React.createElement('button', {onClick: this.decrement}, 'Licznik pomniejszający')
        );

    }
});
