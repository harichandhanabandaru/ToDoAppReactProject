import React from 'react'
import TodoItems from "../MyComponents/TodoItems";


export const Todos = (props) => {
  let myStyle ={
    minHeight:"70vh",
    margin:"10px auto"
  }
  
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
     {props.todoss.length === 0?"No todos to Display":
      props.todoss.map((todo) => {
        
        return( <TodoItems todo={todo} key={todo.sno} onDeleteFun={props.onDeleteFun} />)
      })
}
{/* 
      {props.todoss.map((todo) => {
        return <TodoItems todo={todo} />;
      })}

      {props.todoss.map((todo) => {
        return (
          <>
            <h3>This</h3>
            <TodoItems todo={todo} />
          </>
        );
      })} */}

    </div>
  );
};
