import { createSlice } from "@reduxjs/toolkit";

interface Task {
    title: string,
    description: string,
    checked: boolean,
    id: number,
    subTasks?: Task[]
}
interface Todo {
    tasks: Task[]
    nextId: number,

}

const initialState: Todo = {
    tasks: [
        {
            title: "title",
            description: "description",
            checked: false,
            id: 0,
            subTasks: [
                {
                    title: "title2",
                    description: "description2",
                    checked: false,
                    id: 0,
                }
            ]
        }

    ],
    nextId: 1,
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, actions) => {
            state.tasks = [...state.tasks, {
                title: actions.payload.title,
                description: actions.payload.description,
                checked: actions.payload.checked,
                id: actions.payload.id
            }]
        },
        incrementNextId: (state) => {
            state.nextId = state.nextId + 1;
        },
        deleteTask: (state, actions) => {
            state.tasks = state.tasks.filter(task => task.id !== actions.payload.id)
        },
        changeTask: (state, actions) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === actions.payload.id) {
                    console.log("izmena")
                    return {
                        ...task,
                        title: actions.payload.title,
                        description: actions.payload.description,

                    }
                }
                return task
            })
        },
        checkedTask: (state, actions) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === actions.payload.id) {
                    return {
                        ...task,
                        checked: actions.payload.checked
                    }
                }
                return task
            })
        }
    }
})

export const { addTask, deleteTask, changeTask, checkedTask, incrementNextId } = todoSlice.actions
export default todoSlice.reducer