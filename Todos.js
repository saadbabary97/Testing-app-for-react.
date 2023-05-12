import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div>
      {props.todos?.length===0? "No data yet":
      props.todos?.map((todo)=>
      {
        return <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} />
      }
      )
      }

    </div>
  )
}
