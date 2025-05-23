import type { ITask } from "../models/ITask";

export interface ITaskListProps {
	tasks: ITask[]
	finalizeTask: (taskId: string) => void
	deleteTask: (taskId: string) => void
	prepareToEdit: (task: ITask) => void
}