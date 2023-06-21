import { useContext } from "react";
import { TasksContext } from "@/context/TasksContext";

const useTasks = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  return {
    tasks,
    setTasks
  };
}

export default useTasks;
