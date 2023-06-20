import { Task } from "@/interfaces/interfaces";
import { createContext } from "react";

interface ContextProps {
  tasks: Task[];
}

export const TasksContext = createContext({} as ContextProps);
