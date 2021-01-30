// you should pass setState a function that allows you to access state and props. Using a function with setState guarantees you are working with the most current values of state and props. 
// this.setState((state, props) => ({
//   counter: state.counter + props.increment
// }));
// You can also use a form without props if you need only the state:
// this.setState(state => ({
//   counter: state.counter + 1
// }));

// MyComponent has a visibility property which is initialized to false. The render method returns one view if the value of visibility is true, and a different view if it is false.
// There is a click handler on the button which triggers a class method called toggleVisibility(). 
// Pass a function to setState to define this method 
// so that the state of visibility toggles to the opposite value when the method is called. 
// If visibility is false, the method sets it to true, and vice versa.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
 this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
   toggleVisibility() {
    this.setState(state => {
      if (state.visibility === true) {
         return { visibility: false };
       } else {
         return { visibility: true };
      }
    });
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
