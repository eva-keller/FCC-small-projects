// React provides a method for updating component state called setState. 
// You call the setState method within your component class 
//  this.setState(), 
//  passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. 

// this.setState({
//   username: 'Lewis'
// });

// Always use this.setState() when state changes occur. 
// There is a button element in the code editor which has an onClick() handler. 
// This handler is triggered when the button receives a click event in the browser, 
// and runs the handleClick method defined on MyComponent. 
// Within the handleClick method, update the component state using this.setState(). 
// Set the name property in state to equal the string React Rocks!.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState( {
    name: 'React Rocks!'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};