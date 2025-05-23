import { useEffect, useState } from "react"
import type { ITaskFormProps } from "../props/TaskForm.props"
import Input from "../util/components/Input"

function TaskForm(props: ITaskFormProps) {
  const { addTask, editTask, taskToEdit } = props

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title)
      setDescription(taskToEdit.description)
    } else {
      setTitle('')
      setDescription('')
    }
  }, [taskToEdit])

  const onAddTask = (title: string, description: string) => {
    if(!title.trim() || !description.trim()) return alert('Preencha todos os campos')

    addTask(title, description)
    setTitle('')
    setDescription('')
  }

  const onSaveEdition = (title: string, description: string) => {
    if(!title.trim() ||!description.trim()) return alert('Preencha todos os campos')

    setTitle('')
    setDescription('')

    editTask(taskToEdit!.id, title, description)
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text" 
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}>
      </Input>
			<Input 
        type="text" 
        placeholder="Digite a descrição da tarefa" 
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}>
      </Input>
      {taskToEdit == null && (
        <button 
          className="bg-slate-500 text-white px-4 py-2 rounded-md"
          onClick={() => onAddTask(title, description)}
        >
          Adicionar
        </button>
      )}
			{taskToEdit && (
        <button 
          className="bg-slate-500 text-white px-4 py-2 rounded-md"
          onClick={() => onSaveEdition(title, description)}
        >
          Salvar alteração
        </button>
      )}
    </div>
  )
}

export default TaskForm