"use client";
import { createContext, useContext } from "react";
import UseData from "../Hooks/useData";

// Create the context
const TaskContext = createContext();

// Create a Provider component
export const TaskProvider = ({ children }) => {
    const taskData = UseData();

    return (
        <TaskContext.Provider value={taskData}>
            { children }
        </TaskContext.Provider>
    )
}

// Create a custom hook to use the context
export const useTaskContext = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error("useTaskContext must be used within a TaskProvider");
      }
      return context;
    }