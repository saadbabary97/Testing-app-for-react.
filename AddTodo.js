import React, { useState } from 'react';

export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if (!title || ! description){
            alert('Title or description cannot be blank')
        }

        addTodo(title, description)
        setTitle("");
        setDescription("");
    }

    return (
        <div className='container border border-radius'>
            <h4 className='bg-danger text-light text-center'>Add Data</h4>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" onChange={(e)=>setTitle(e.target.value)} value={title} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" id="description" onChange={(e)=>setDescription(e.target.value)} value={description} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
           
        </div>
        
    )
}
