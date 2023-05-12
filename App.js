import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import TestState from './Context/testapp/TestState';

function App() {
  const onDelete = (todo) => {
    // console.log('delete working');
    // let initTodo;
    // if (localStorage.getItem("todos") === null) {
    //   initTodo = [];
    // }
    // else {
    //   initTodo = JSON.parse(localStorage.getItem("todos"));
    // }

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, description) => {
    let id;
    if (todos.length === 0) {
      id = 0;
    }
    else {
      id = todos[todos.length - 1].id + 1;
    }

    const myTodo = {
      "id": id,
      "title": title,
      'description': description,
    }

    setTodos([...todos, myTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState([{
    'id': 1,
    'title': 'python',
    'description': 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.',
  },
  {
    'id': 2,
    'title': 'flutter',
    'description': 'Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase.',
  },
  {
    'id': 3,
    'title': 'django',
    'description': 'Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern. It is maintained by the Django Software Foundation, an independent organization established in the US as a 501 non-profit. ',
  }
  ]);
  return (
    <>
      <Header title='Todos' searchbar={true} />
      <TestState>
      <Routes>
        <Route path="/" element={ <Todos todos={todos} onDelete={onDelete} />} />
        <Route path="/about" element={ <About/> } />
        <Route path="/addtodo" element={ <AddTodo addTodo={addTodo} />} />
      </Routes>
      </TestState>

      <Footer />
    </>
  );
}

export default App;
