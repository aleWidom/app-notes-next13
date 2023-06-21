"use client";
import useTasks from "@/hooks/useTasks";
import { Task } from "../interfaces/interfaces";
import { useRouter } from "next/navigation";

interface Props {
  task: Task;
}

const Task = ({ task }: Props) => {

  const {tasks, setTasks}= useTasks()

  const router = useRouter();

   const handleEditTask = () => {
    router.push(`/edit/${task.id}`);
  }; 

  const handleDeleteTask = () => {
    const taskCurrent= tasks.filter((e)=> (
      e.id !== task.id
    ))

    setTasks(taskCurrent)
  }

  return (
    <div style={{ background: "#202020", color: "white" }}>
      <h2>{task.title}</h2>
      <p>{task.comments}</p>
      <button onClick={handleEditTask}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;
