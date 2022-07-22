import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Success from './components/Success';
import TodoList from "./components/Todo";
import CreateTask from "./components/Todo/CreateTask"


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/success' element={<Success/>}></Route>
        <Route path='/todo' element={<TodoList/>}></Route>
        <Route path='/createtodo' element={<CreateTask/>}></Route>


      </Routes>
    </Router>
  );
}

export default App;
