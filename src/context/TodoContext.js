import { useState,useEffect,createContext } from "react";

export const TodoContext = createContext()

function TodoProvider(props){
    const [todos, setTodos] = useState([]);
  const fetchTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTodos(data);
  };

  const setCompleted =(id)=>{
    const newList =todos.map(todo =>{
if(todo.id===id){
  return{...todo,completed:!todo.completed}
}
return todo
    })
    setTodos(newList)
  }

  useEffect(() => {
    fetchTodo();
  }, []);

return(
    <TodoContext.Provider value={{todos, setCompleted}}>
    {props.children}
    </TodoContext.Provider>
)}
export default TodoProvider;
