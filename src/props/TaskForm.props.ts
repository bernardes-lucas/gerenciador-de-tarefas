import type { ITask } from "../models/ITask"

export interface ITaskFormProps {
	addTask: (title: string, description: string) => void
	editTask: (taskId: string, title: string, description: string) => void
	taskToEdit: ITask | null
}