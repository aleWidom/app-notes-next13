import { Task } from "@/interfaces/interfaces";
import { SetStateAction, createContext } from "react";

interface ContextProps {
  tasks: Task[];
  setTasks: (value: SetStateAction<Task[]>) => void;
}

export const TasksContext = createContext({} as ContextProps);
