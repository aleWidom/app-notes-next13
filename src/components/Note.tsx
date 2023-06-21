"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import useTasks from "@/hooks/useTasks";


interface Props {
    valueTitleInitial: string,
    valueCommentsInitial: string,
    idNote?: string,
}


const Note = ({ valueTitleInitial, valueCommentsInitial, idNote }: Props) => {
    const router = useRouter();

    const { tasks, setTasks } = useTasks()

    const [valueTitle, setValueTitle] = useState(valueTitleInitial);

    const [valueComments, setValueComments] = useState(valueCommentsInitial);

    const handleChangeTitle = (e: any) => {
        setValueTitle(e.target.value)
    }

    const handleChangeComments = (e: any) => {
        setValueComments(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (valueTitleInitial === "" && valueCommentsInitial === "") {
            setTasks([
                ...tasks,
                {
                    id: uuidv4(),
                    title: valueTitle,
                    comments: valueComments
                }
            ])
        } else {

            const taskEdit = tasks.filter((task) => {
                if (task.id === idNote) {
                    task.title = valueTitle
                    task.comments = valueComments
                }
                return task
            })

            setTasks([
                ...taskEdit
            ])
        }
        router.push(`/`);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input name='title' placeholder='Write a title' onChange={handleChangeTitle} value={valueTitle} />
            <textarea name='description' placeholder='write a description' onChange={handleChangeComments} value={valueComments}></textarea>
            <button>Save</button>
        </form>
    );

};


export default Note;