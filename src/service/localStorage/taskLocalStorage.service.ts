import type { ITask } from "../../models/ITask";

export class TaskLocalStorageService {
  static saveTasks(taskList: ITask[]) {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }

  static getTasks(): ITask[] {
    const taskList = localStorage.getItem('taskList')
    
    if (!taskList) return []
    return JSON.parse(taskList)
  }
}