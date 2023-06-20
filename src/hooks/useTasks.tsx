import { useContext } from "react";
import { TasksContext } from "@/context/TasksContext";

const useTasks = () => {
  const { tasks } = useContext(TasksContext);
  return tasks;
};

export default useTasks;
