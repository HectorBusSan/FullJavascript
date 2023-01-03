import React from 'react'
import {Form,Formik} from "formik"
function TaskForm() {
  return (
    <div>
        <Formik>
            <Form>
                <label>Title</label>
                <input type="text" name="title" placeholder='Title...'/>

                <label>Description</label>
                <textarea type="text" name="description" placeholder='Write a description...'></textarea>
                <button>Save</button>
            </Form>
        </Formik>
    </div>
  )
}

export default TaskForm