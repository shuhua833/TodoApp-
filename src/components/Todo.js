import { useEffect, useState } from "react";
import TodoList from "./TodoList";

// export default function Todo(props) {
  function Todo() {
  

  return (
    <>
      <h1>Todo App</h1>
      {/* {props.children} */}
      <TodoList/>
    </>
  );
}
export default  Todo;