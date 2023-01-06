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
        onSubmit={async(values,actions)=>{
            console.log(values);
            try{
                const response= await createTaskRequest(values);
                console.log(response);
                actions.resetForm();
            }catch(err){
                console.log(err);
            }
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