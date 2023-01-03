import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import TaskForm from "./pages/TaskForm"
import TaskPages from "./pages/TaskPages"
import Navigation from "./components/Navigation"
function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<TaskPages/>}/>
        <Route path="/new" element={<TaskForm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
