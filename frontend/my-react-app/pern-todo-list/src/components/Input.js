import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Input() {
    const [description, setdescription] = useState("")
  const  handleSubmit = async (e)=>{
    e.preventDefault()
  try{  let response = await axios.post("http://localhost:5000/create", {description})
     

     
     
  window.location("/")
  }catch(e){

  }
  }
 
    
  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
        <input type="text" className="form-control" required onChange={e => setdescription(e.target.value)} />
        <input type="submit" className="btn btn-success btn-block" />
    </form>
    </>
  )
}

export default Input





