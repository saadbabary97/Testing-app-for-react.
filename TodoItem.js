import React from 'react'

export default function TodoItem(props) {
    return (
        <div>
            <div className="card text-center">
           
                <div className="card-body">
                    <h5 className="card-title">{props.todo.title}</h5>
                    <p className="card-text">{props.todo.description}</p>
                    <button className="btn btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
                </div>

            </div>
        </div>
        
    )
}
