"use client"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid';
import useTasks from "@/hooks/useTasks";
import { useLayoutEffect, useState } from "react";


interface Props {
    valueTitleInitial: string,
    valueCommentsInitial: string,
    idNote?: string,
}


const Note = ({ valueTitleInitial, valueCommentsInitial, idNote }: Props) => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { tasks, setTasks } = useTasks()

    const [placeholder, setPlaceholder] = useState({
        title: "Write a title",
        comments: "Write a description"
    })


    useLayoutEffect(() => {
        setPlaceholder({
            title: valueTitleInitial,
            comments: valueCommentsInitial
        })
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  

    const onSubmit = handleSubmit((data) => {
        if (valueTitleInitial === "" && valueCommentsInitial === "") {

            const newNote = {
                id: uuidv4(),
                title: data.title,
                comments: data.comments
            }

            setTasks([
                ...tasks,
                newNote
            ])


        } else {

            const taskEdit = tasks.filter((task) => {
                if (task.id === idNote) {
                    task.title = data.title
                    task.comments = data.comments
                }
                return task
            })

            setTasks([
                ...taskEdit
            ])
        }
        router.push(`/`);
    })


    return (
        <form onSubmit={onSubmit}>
            <input placeholder={placeholder.title} {...register("title", { required: true })} />
            {errors.title && <span>This field is required</span>}
            <textarea placeholder={placeholder.comments} {...register("comments", { required: true })}></textarea>
            {errors.comments && <span>This field is required</span>}
            <button>Save</button>
        </form>
    );

};


export default Note;