import React from 'react'
import {Form,Formik} from "formik"
import { createTaskRequest } from '../api/task.api'
function TaskForm() {
  return (
    <div>
        <Formik
        initialValues={{
            title:"",
            description:""
        }}
        onSubmit={async(values)=>{
            console.log(values);
            try{
                const response= await createTaskRequest(values);
                console.log(response);
            }catch(err){
                console.log(err);
            }
        }}>
            {
                ({handleChange, handleSubmit})=>(
                    <Form on onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input type="text" name="title" placeholder='Title...' onChange={handleChange}/>
        
                        <label>Description</label>
                        <textarea type="text" name="description" placeholder='Write a description...' onChange={handleChange}></textarea>
                        <button type='submit'>Save</button>
                    </Form>       
                )
            }
        </Formik>
    </div>
  )
}

export default TaskForm