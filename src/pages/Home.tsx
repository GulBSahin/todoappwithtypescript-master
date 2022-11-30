/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';

const url ="https://63878fe4d9b24b1be3f445ae.mockapi.io/todos"


const Home = () => {
  const [todos, setTodos] = useState<TodoType[]> ([]);  
  
  const getTodos = async () => {
    try {
      const {data} = await axios.get<TodoType[]>(url);
      setTodos(data);
      console.log(data);
    }catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className='main'>
      <InputForm  />
      <TodoList todos={todos} />
    </div>
  )
}

export default Home