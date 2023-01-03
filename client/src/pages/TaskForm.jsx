import React from 'react'
import {Form,Formik} from "formik"
function TaskForm() {
  return (
    <div>
        <Formik
        initialValues={{
            title:"",
            description:""
        }}
        onSubmit={(values)=>{
            console.log(values);
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