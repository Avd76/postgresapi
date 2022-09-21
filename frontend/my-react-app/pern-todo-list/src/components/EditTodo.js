import {React, useEffect, useState} from 'react'
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
      
      console.log(Todo)
    }
    getTodo(id)
   }, [Todo, id])

   const updateTodo = async (e, id) =>{
    e.preventDefault()
    
    let response = await axios.put(`http://localhost:5000/edit/${id}`, {description: Todo})
    console.log(response.data)


      navigate("/")
   }
  
 
   

    return (
    <>
  <form onSubmit={(e) => {updateTodo(e, id)}}>
      <input className="form-control" value={Todo} onChange={(e)=>{setTodo(e.target.value)}} />
      <input type="submit" value={"Save"} className="btn btn-primary block"  />
   </form>
    </>
      )
}

export default EditTodo