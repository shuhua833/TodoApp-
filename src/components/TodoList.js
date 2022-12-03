import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const {todos} =useContext(TodoContext)
    return (
      <>
        {/* {todos.map(todo=>{ return <div key={todo.id}>{todo.title}</div>})} */}
        {todos.map((todo) => (
          <Todos key={todo.id} todo={todo} />
        ))}
      </>
    );
  }
   function Todos({todo}){
    const {setCompleted} =useContext(TodoContext)
     return(
     
       <div onClick={()=>setCompleted(todo.id) }
        style={todo.completed?
          {textDecoration:'line-through', cursor:'pointer'}:
          {cursor:'pointer'}}>{todo.title}</div>
       
     )
   }
  export default TodoList;