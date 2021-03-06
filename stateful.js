// State consists of any data your application needs to know about, that can change over time. 
// You want your apps to respond to state changes and present an updated UI when necessary. 

// You create state in a React component by declaring a state property on the component class in its constructor. 
// This initializes the component with state when it is created. 
// The state property must be set to a JavaScript object.

// this.state = {
//   // describe your state here
// }

// You have access to the state object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The state object can be as complex or as simple as you need it to be. Note that you must create a class component by extending React.Component in order to create state like this.

// There is a component in the code editor that is trying to render a name property from its state. However, there is no state defined. Initialize the component with state in the constructor and assign your name to a property of name.

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
  this.state = {
    name: "eva"
  }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
