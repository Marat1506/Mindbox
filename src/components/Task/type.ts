export interface Task {
    title: string,
    description: string,
    id: number,
    checked: boolean
    subTasks?: Task[]
}