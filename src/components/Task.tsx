"use client";
import { Task } from "../interfaces/interfaces";
import { useRouter } from "next/navigation";

interface Props {
  task: Task;
}

const Task = ({ task }: Props) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/edit/${task.id}`);
  };

  return (
    <div onClick={handleEdit} style={{ background: "#202020", color: "white" }}>
      <h2>{task.title}</h2>
      <p>{task.comments}</p>
      <button>Delete</button>
    </div>
  );
};

export default Task;
