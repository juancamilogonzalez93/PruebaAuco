"use client"
import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext)
    if (!context) throw new Error('useTasks must used within a provider')
    return context

};

export const TaskProvider = ({ children }) => {
    const tasks = [
        {
        title: "My 1 Post",
        descripcion: "info1",
        autor: "Camilo1"    
    },
        {
        title: "My 2 Post",
        descripcion: "info2",
        autor: "sneider"  
    },
    {
        title: "My 3 Post",
        descripcion: "info3",
        autor: "Camilo3" 
    },
];

const createTask = (titulo, descripcion) =>{
    [...tasks, {
        titulo,
        descripcion,
        autor: camilo
    }]
}

    return (
    <TaskContext.Provider 
        value={{
            tasks,
            }}
    >
        {children}
        </TaskContext.Provider>
    );
};