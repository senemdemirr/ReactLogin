import React, {useEffect, useState} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import axios from 'axios';
import TodoCard from "../todoCard";
import style from "./style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateTask from './CreateTask';

function TodoList() {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    const loggedUserId = localStorage.getItem("userId");
    useEffect(() => {
        getAllTodos();
    });

    const getAllTodos = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/todos`).then((response) => {
            const temp = response.data.filter(todo => {
                return todo.userId === loggedUserId
            });
            setTodos(temp);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        });
    }


    return (
        loading ? <ThreeDots color="#00BFFF" height={80} width={80}/> :


            <div className="todos">
                <div className='header text-center'>
                    <h2 className={style.headerTitle}>Todo List</h2>
                    <button  className='btn btn-primary'  onClick={() => setModal(true)}>Create Task</button>
                </div>
                {todos.map((row) => (
                    <TodoCard key={row.id} todoId={row.id} todoTitle={row.title} todoContent={row.content}
                              todoUserId={row.userId}/>

                ))}
                <CreateTask toggle={toggle} modal={modal}/>
            </div>
            

    )
}

export default TodoList
