import React from 'react'

export default function TodoItems(props) {
  return (
    <div>
      <p>{props.todo.title}</p>
      <p>{props.todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={()=>{props.onDeleteFun(props.todo)}}
      >
        Delete
      </button>
      <hr/>
    </div>
  );
}

