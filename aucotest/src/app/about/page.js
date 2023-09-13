"use client"
import {useTasks} from '../../context/TaskContext'

function page() {
 const {tasks} = useTasks()
 console.log(tasks);
    return <div>about</div>;
      
  }
  export default page