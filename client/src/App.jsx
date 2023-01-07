import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import TaskForm from "./pages/TaskForm"
import TaskPages from "./pages/TaskPages"
import { TaskContextProvider } from "./context/TaskProvider"
import Navigation from "./components/Navigation"
function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navigation/>
      <div className="container mx-auto p-4">
      <TaskContextProvider>
        <Routes>
          <Route path="/" element={<TaskPages/>}/>
          <Route path="/new" element={<TaskForm/>}/>
          <Route path="/edit/:id" element={<TaskForm/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </TaskContextProvider>
      </div>
    </div>
  )
}

export default App
