import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <div>
           
            <TodoProvider>
            <Todo></Todo>
            </TodoProvider>
      {/* <Todo>
        <h1>Todo List</h1> 
        </Todo> */}
    </div>
  );
}

export default App;