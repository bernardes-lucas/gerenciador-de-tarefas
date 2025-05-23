import { ChevronRightIcon, Pencil, TrashIcon } from "lucide-react"
import type { ITask } from "../models/ITask"
import type { ITaskListProps } from "../props/TaskList.props"
import { useNavigate } from "react-router-dom"
import Empty from "../util/components/Empty"
import Button from "../util/components/Button"

function TaskList(props: ITaskListProps) {
	const { tasks, finalizeTask, deleteTask, prepareToEdit } = props
	const navigate = useNavigate()

	const onSeeDetails = (title: string, description: string) => {
		const query = new URLSearchParams()
		query.set('title', title)
		query.set('description', description)

		navigate(`/task-detail?${query.toString()}`)
	}

	if (tasks.length === 0) {
		return <Empty />
	}

	return (
		<>
			<ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
				{tasks.map((task: ITask) => (
					<li key={task.id} className="flex gap-2">
						<button 
							className={`
								bg-slate-400 rounded-md
								w-full p-2
								text-white text-left
								cursor-pointer
								${task.isCompleted ? 'line-through' : ''}
							`}
							onClick={() => finalizeTask(task.id)}
						>
							{task.title}
						</button>
						<Button
							onClick={() => onSeeDetails(task.title, task.description)}
						>
							<ChevronRightIcon />
						</Button>
						<Button
							onClick={() => deleteTask(task.id)}
						>
							<TrashIcon />
						</Button>
						<Button
							onClick={() => prepareToEdit(task)}
						>
							<Pencil />
						</Button>
					</li>
				))}
			</ul>
		</>
	)
}

export default TaskList
