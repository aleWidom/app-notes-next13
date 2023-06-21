import { Task } from "@/interfaces/interfaces";
import { createContext } from "react";

interface ContextProps {
  tasks: Task[];
  setTasks: (description: Task[]) => void;
}

export const TasksContext = createContext({} as ContextProps);
