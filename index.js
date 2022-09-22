const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config
const pool = require("./database/pool")
app.use(cors())
app.use(express.json())


// get all todos
app.get("/", async (req, res)=>{
   const todos = await pool.query("SELECT * FROM todos")

   res.json(todos.rows)
})

// Create a todo
app.post("/create", async (req, res)=>{
  try{
    const {description} = req.body;
    const newTodo = await pool.query("INSERT INTO todos (description) VALUES ($1) RETURNING *", [description]);
    res.json(newTodo.rows[0]);
  }catch (e){
    res.status(401).send(e)
  }
})
// Get one todo
app.get("/:id", async (req, res)=>{
  try{
    const {id} = req.params
    const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1",[id])
   res.json(todo.rows[0]).status(201)
  }catch (e){
    res.status(404).send(e)
  }
})

// Update a todo
app.put("/edit/:id", async (req, res)=>{
    try{
        const {description} = req.body
        const {id} = req.params
        
        const updatedTodo = await pool.query("UPDATE todos SET description = $1 WHERE todo_id = $2 RETURNING *", [description, id])
     res.json(updatedTodo.rows[0]).status(201);
    }catch(e){
        res.status(404).send("Not found")
    }
})

//Delete todo
app.delete("/delete/:id", async (req, res)=>{
   try{
   
    const {id} = req.params
   await pool.query("DELETE FROM todos WHERE todo_id = $1", [id])
    res.json({message: "Todo deleted"})
   }catch (e){
    res.status(404).send(e)
   }
})

const port = process.env.PORT || 5002
app.listen(port, ()=>{
    console.log(`Server is up and listening on port ${port}`)
})