"use client"
import { TasksContext } from "./TasksContext";
import useLocalStorage from "@/hooks/useLocalStorage";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TasksProvider = ({ children }: Props) => {
  
  const {tasks, setTasks} = useLocalStorage("tasks", []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>
  );
};
