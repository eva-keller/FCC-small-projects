// React provides useful type-checking features to verify that components receive props of the correct type. 
// For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set propTypes on your component to require the data to be of type array. This will throw a useful warning when the data is of any other type.

// Best practice: to set propTypes when you know the type of a prop ahead of time. Here's an example to require the type function for a prop called handleClick:
// MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
// PropTypes.func part checks that handleClick is a function
// isRequired tells React that handleClick is a required property for that component
// func represents function
// As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';

// Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line

Items.propTypes = { quantity: PropTypes.number.isRequired }
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};