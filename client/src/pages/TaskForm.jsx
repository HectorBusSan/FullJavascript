import {useEffect,useState} from 'react'
import {Form,Formik} from "formik"
import { useTasks } from '../context/TaskProvider';
import { useNavigate, useParams } from 'react-router-dom';

function TaskForm() {
    const{createTask,getTask,updateTask}=useTasks();
    const [task, setTask] = useState({
        title:"",
        description:""
    })
    const params= useParams();
    const navigate=useNavigate();
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
    <div className='mx-auto'>
        <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async(values,actions)=>{
            // console.log("-",values);
            if(params.id){
                await updateTask(params.id,values);
            }
            else{
                await createTask(values);
            }
            navigate("/");
            actions.resetForm(); 
            setTask({
                title:"",
                description:""
            });
        }}>
            {
                ({handleChange, handleSubmit, values, isSubmitting})=>(
                    <Form onSubmit={handleSubmit} className="bg-slate-300 max-w-md rounded p-4 mx-auto my-10">
                        <h1 className='text-xl font-bold uppercase text-center'>{
                            params.id?"Edit Task":"NewTask"
                        }</h1>
                        <label className='block'>Title</label>
                        <input className='px-2 py-1 rounded-sm w-full' type="text" name="title" placeholder='Title...' onChange={handleChange}
                        value={values.title}/>
        
                        <label className='block'>Description</label>
                        <textarea className='px-2 py-1 rounded-sm w-full' type="text" name="description" placeholder='Write a description...' onChange={handleChange}
                        value={values.description}></textarea>
                        <button className='block bg-indigo-500 text-white px-2 py-1 rounded w-full hover:bg-indigo-700 duration-300' type='submit' disabled={isSubmitting}>
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