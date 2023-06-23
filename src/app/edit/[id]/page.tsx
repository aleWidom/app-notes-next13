"use client"
import useTasks from "@/hooks/useTasks";
import { Note } from "@/components";



const EditPage = ({ params }: any) => {

  const {tasks} = useTasks()

 const noteSelected: any = tasks.find((e)=>(
   e.id === params.id
))



 return(
  <Note valueTitleInitial={noteSelected.title} valueCommentsInitial={noteSelected.comments} idNote={noteSelected.id}/>
 )
};

export default EditPage;
