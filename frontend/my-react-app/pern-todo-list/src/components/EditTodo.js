import React,  {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

function EditTodo() {
  const [Todo, setTodo] = useState("")
  
  const {id} = useParams()
      const navigate = useNavigate()
   
      useEffect(()=>{
    const getTodo = async(id) =>{
      let response = await axios.get(`http://localhost:5000/${id}`)
     
      setTodo(response.data.description)
      
    
    }
    getTodo(id)
   }, [Todo, id])

   const updateTodo = async (e, id) =>{
    e.preventDefault()
    
    let response = await axios.put(`http://localhost:5000/edit/${id}`, {description: Todo})
     console.log(response.data)

      navigate("/")
   }
  
   const onTodoChange = (e)=>{
    setTodo(e.target.value)
   }
   

    return (
    <>
    
      <input className="form-control" type="text" value={Todo} onChange={(e) => {onTodoChange(e)}} />
      <input type="submit" value={"Save"} className="btn btn-primary btn-block"onClick={(e) => {updateTodo(e, id)}}  />
   
    </>
      )
}

export default EditTodo