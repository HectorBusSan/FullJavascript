import React from 'react'
import {Form,Formik} from "formik"
import { useTasks } from '../context/TaskProvider';
import { useParams } from 'react-router-dom';

function TaskForm() {
    const{createTask}=useTasks();
    useParams();
  return (
    <div>
        <Formik
        initialValues={{
            title:"",
            description:""
        }}
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