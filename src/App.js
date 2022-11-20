import './App.css';
import { useState } from 'react';

function App() {
  return (
    <TodoApp /> //components can be written like this, it calls the function TodoApp below 
  );
}

//component, parent component, controls all other components
function TodoApp() {

  const AppTitle = "Todo App"
  //todolist state , parent state mapped in child
  const [todoList, setTodoList] = useState([{    //array of object
    title: "Water the plants",
    strike: false
  }])

  const onAddTodo = (todo) => {
    setTodoList((previous) => {
      const newstate =[...previous,todo];
     
      return newstate
    })
  }

  const todoStrike = (index) => {
    const newList = todoList.map((todo, ind) => {
      if (index === ind) {
        return { ...todo, strike: !todo.strike }
      }
      return todo
    })
    setTodoList((previous) => [...newList])
  }

  const clearAll = () => {
    setTodoList((_) => [])
  }

  return (
    <div className='todo-box'>
      <TodoTitle title={AppTitle} />          {/* //passed as object    */}
      <AddTodo addTodo={onAddTodo} />
      <TodoList todos={todoList} onClickTodo={todoStrike} />
      <TodoPending todoClear={clearAll} />      {/*   props todoClear has reference of clearAll */}
    </div>
  )
}


function TodoTitle(props) {
  return (
    <div className=' title'>{props.title}</div>
  )
}

// function TodoTitle({title}){  //title is passed as object key
//   return(
//     <div className = 'todo-box title'>{title}</div>
//   )
// }

function AddTodo({ addTodo }) {

  // const[newtodo,setNewTodo]=useState('sv');
  const [newtodo, setNewTodo] = useState("");
  const handleNewTodo = (event) => {
    const todoValue = event.target.value;
    setNewTodo(todoValue)
// setNewTodo((_) => todoValue)
  }

  const handleAddTodo = () => {
    addTodo({
      title: newtodo,
      strike: false
    })
   
    setNewTodo((_) => " ")     //to clear the input box after adding
  }

  return (
    <div className='addtodo'>
      <input placeholder='Add your new todo' onChange={handleNewTodo} value={newtodo} />
      <button onClick={handleAddTodo}>+</button>
    </div>
  )
}


function TodoList({ todos, onClickTodo }) {

  const crossTodo = (index) => {
    onClickTodo(index)
  }

  return (
    <div>
      {/* {[<div>Water the plants</div>]} */}
      {
        todos.map((todo, index) => (
          <div key={index}
            style={todo.strike ? { textDecoration: "line-through" , cursor:"pointer"} : { cursor:"pointer"}} 
            onClick={() => crossTodo(index)}>
              {todo.title}
              </div>
        )
        )
      }</div>
  );
}



function TodoPending({ todoClear }) {

  return (
    <div className='pending'>
      <button className='clear' onClick={todoClear}>Clear all</button>
    </div>
  )
}


export default App;
