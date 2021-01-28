//  Imagine you are building an App and have created three components, a Navbar, Dashboard, and Footer.
// you could create an App parent component which renders each of these three components as children. 
// To render a component as a child in a React component, 
// you include the component name written as a custom HTML tag in the JSX. 
// return (
//  <App>
//   <Navbar />
//   <Dashboard />
//   <Footer />
//  </App>
// )
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};