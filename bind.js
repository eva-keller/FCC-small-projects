// you can also define methods for your component class. A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. 

// One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. 
// this.handleClick = this.handleClick.bind(this) for its handleClick method in the constructor. 
// when you call a function like this.setState() within your class method, this refers to the class and will not be undefined.

// The code editor has a component with a state that keeps track of the text. 
// It also has a method which allows you to set the text to "You clicked!". 
// However, the method doesn't work because it's using the this keyword that is undefined. Fix it by explicitly binding this to the handleClick() method in the component's constructor.

// Next, add a click handler to the button element in the render method. It should trigger the handleClick() method when the button receives a click event. Remember that the method you pass to the onClick handler needs curly braces because it should be interpreted directly as JavaScript.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};