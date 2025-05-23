import { useEffect, useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import type { ITask } from "./models/ITask"
import { v4 } from "uuid"
import { TaskLocalStorageService } from "./service/localStorage/taskLocalStorage.service"
import Title from "./util/components/Title"

function App() {
  const [taskList, setTaskList] = useState<ITask[]>(TaskLocalStorageService.getTasks())

  useEffect(() => {
    TaskLocalStorageService.saveTasks(taskList)
  }, [taskList])

  const onFinalizeTask = (taskId: string) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })
    setTaskList(newTaskList)
  }

  const onDeleteTask = (taskId: string) => {
    const newTaskList = taskList.filter((task) => task.id !== taskId)
    setTaskList(newTaskList)
  }

  const onAddTask = (title: string, description: string) => {
    let newTask: ITask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }

    setTaskList([...taskList, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>
          Gerenciador de tarefas
        </Title>
        <TaskForm addTask={onAddTask} />
        <TaskList tasks={taskList} finalizeTask={onFinalizeTask} deleteTask={onDeleteTask}/>
      </div>
    </div>
  )
}

export default App
