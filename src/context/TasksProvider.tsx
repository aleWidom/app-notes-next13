"use client";
import { useState } from "react";
import { TasksContext } from "./TasksContext";
import { Task } from "@/interfaces/interfaces";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TasksProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Limpiar",
      comments: "Tengo que limpiar el escritorio",
    },
    {
      id: "2",
      title: "Comer",
      comments: "Quiero comer algo rico",
    },
    {
      id: "3",
      title: "Viajar",
      comments: "Tengo que cargar la Sube",
    },
  ]);

  return (
    <TasksContext.Provider value={{ tasks }}>{children}</TasksContext.Provider>
  );
};
