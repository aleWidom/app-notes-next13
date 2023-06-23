"use client";
import { Task } from "@/components";
import useTasks from "@/hooks/useTasks";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <>
      {tasks.length === 0 ?
        <h2>
          No se han encontrado notas
        </h2> :
        <>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </>}
    </>
  );
}
