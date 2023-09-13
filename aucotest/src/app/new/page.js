"use client"
import { useState } from "react";

function Page() {

  const [task, setTask] = useState()

  const handleChange = (e) => 
    setTask({ ...task, [e.target.name]: e.target.value});

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(task)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Escribe un titulo" onChange={handleChange} />
      <textarea
        name= "descripcion" 
        placeholder="Escribe una descripcion"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
}
 export default Page