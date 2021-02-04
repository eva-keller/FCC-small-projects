// form control elements for text input, such as input and textarea, maintain their own state in the DOM as the user types. 
// With React, you can move this mutable state into a React component's state. 
// The user's input becomes part of the application state, so React controls the value of that input field. 
// Typically, if you have React components with input fields the user can type into, it will be a controlled input form.

// The component's state in the example is already initialized with an input property that holds an empty string. 
// This value represents the text a user types into the input field.
// 1. create a method called handleChange() that has a parameter called event. When the method is called, it receives an event object that contains a string of text from the input element. 
// You can access this string with event.target.value inside the method. 
// 2.Update the input property of the component's state with this new string.

// 3.In the render method, create the input element above the h4 tag. 
// Add a value attribute which is equal to the input property of the component's state. 
// 4.Then add an onChange() event handler set to the handleChange() method.

