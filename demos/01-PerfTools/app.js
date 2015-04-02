var React = require('react/addons'),
    Perf = React.addons.Perf;


var HelloMessage = React.createClass({

  getInitialState: function() {
    return {
        name: 'John'
    }
  },
  componentDidMount: function() {
    Perf.start();
  },
  componentDidUpdate: function() {
    Perf.printDOM();
  },
  handleClick: function() {
     this.setState({
            name: this.state.name === 'John' ? 'Joe' : 'John'
    });
  },
  render: function() {
    return (
      <div>
        <div>
            <div>
                <div>
                    {"Hello " + this.state.name}
                </div>
            </div>
         </div>

         <button onClick={this.handleClick}>Change My Name</button>
      </div>
    );
  }
});


React.render(<HelloMessage />, document.body);