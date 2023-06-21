"use client";
import { Task } from "@/components";
import useTasks from "@/hooks/useTasks";

export default function Home() {
  const {tasks} = useTasks();

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
}
