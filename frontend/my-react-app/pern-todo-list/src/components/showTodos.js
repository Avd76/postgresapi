import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom'


function ShowTodos () {
  const [todos, setTodos] = useState([])
   const navigate  = useNavigate()
  const submitUpdate = (id) =>{
    
      navigate(`/edit/${id}`)
  }
  const getTodos = async ()=>{
    try{
      
      let response = await axios.get("http://localhost:5000")
    
      setTodos(response.data)
     
    }catch(e){
      console.error(e)
    }
    
  } 
    
    useEffect(()=>{
      getTodos()
    }, [todos])
    
    
    
    
 async function deleteTodo(id){
  try{  
   await axios.delete(`http://localhost:5000/delete/${id}`)
  setTodos(todos.filter(todo =>  todo.todo_id !== id))
}catch (e){
    console.error(e)
  }
  }
    return (
    <>
    <table className="table table-striped">
    <thead>
     <tr>
         <th>Description</th>
         <th>Edit</th>
         <th>Delete</th>
     </tr>
     </thead>
     <tbody>
          {
          todos.map(todo =>(
           <tr key={todo.todo_id}>
               <td>{todo.description}</td> 
              <td><button class="btn btn-warning" onClick={() => submitUpdate(todo.todo_id)}>Update todo</button></td>
               <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
               </tr>  
              
          ))
          }
       </tbody> 

    </table>
    </>
  )
}

export default ShowTodos;