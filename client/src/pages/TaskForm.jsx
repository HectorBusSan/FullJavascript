import {useEffect,useState} from 'react'
import {Form,Formik} from "formik"
import { useTasks } from '../context/TaskProvider';
import { useParams } from 'react-router-dom';

function TaskForm() {
    const{createTask,getTask}=useTasks();
    const [task, setTask] = useState([])
    const params= useParams();
    useEffect(() => {
        const loadTask=async()=>{
            if(params.id){
                const task=await getTask(params.id)
                console.log(task)
                setTask({
                    title:task.title,
                    description:task.description
                });
            }
        }
        loadTask();
    }, [])
  return (
    <div>
        <h1>{
            params.id?"Edit Task":"NewTask"
            }</h1>
        <Formik
        initialValues={task}
        onSubmit={async(values,actions)=>{
            createTask(values)
            actions.resetForm();
        }}>
            {
                ({handleChange, handleSubmit, values, isSubmitting})=>(
                    <Form on onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input type="text" name="title" placeholder='Title...' onChange={handleChange}
                        value={values.title}/>
        
                        <label>Description</label>
                        <textarea type="text" name="description" placeholder='Write a description...' onChange={handleChange}
                        value={values.description}></textarea>
                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting?"Saving...":"Save"}
                        </button>
                    </Form>       
                )
            }
        </Formik>
    </div>
  )
}

export default TaskForm