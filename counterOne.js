var CounterOne = React.createClass({
    getInitialState: function() {
        console.log("tu można ustawić początkowy stan licznika - jeśli jest");
        return {
            counter: 0
        };
    },

    getDefaultProps: function() {
      console.log('GetDefaultProps - ustawiamy domyślne propsy');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    componentWillMount: function() {
        console.log('ComponentWillMount - metoda wywoływana przed zmontowaniem komponentu (nie wymyśliłem zastosowania dla tej metody)');
    },

    componentDidMount: function() {
          console.log('ComponentDidMount - tu można wykonać coś na DOM - prezentujemy komponent użytkownikowi. Każda zmiana setState powoduje aktualizacje i prezentacje');
      },

    componentWillReceiveProps: function(nextProps) {
          console.log('ComponentWillRecieveProps - tu będziemy gdy przekażemy nowe propsy - skoro przekazujemy te propsy to można w tym momencie porównać czy się rzeczywiscie zmieniły');
      },

    shouldComponentUpdate: function() {
          console.log('ShouldComponentUpdate - tutaj można wstrzymać renderowanie zmian - czyli (false) nie renderować skoro nie trzeba');
          return true;
      },

    componentWillUpdate: function() {
          console.log('ComponentWillUpdate - komponent sie zakualizuje - nie znalazłem zastosowania :(');
      },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik wzrastajacy : ' + this.state.counter)
        );
    },

    componentDidUpdate: function() {
          console.log('ComponentDidUpdate - zaktualizował się - tutaj znowu można odnieść się do DOM i coś na nim wykonać');
      },

    componentWillUnmount: function() {
          console.log('componentWillUnmount - czyli usuwamy to co nie potrzebne - wprowadzamy zmiany w DOM, usuwamy timery i subskrypcje ... pytanie czym są?');
      }

});
