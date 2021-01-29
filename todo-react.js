// There are List and ToDo components in the code editor. 
// When rendering each List from the ToDo component, 
// pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"]. 
// Then access this tasks array in the List component, 
// showing its value within the p element. 
// Use join(", ") to display the props.tasksarray in the p element as a comma separated list. 

const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk", "Cook", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]} />
      </div>
    );
  }
};