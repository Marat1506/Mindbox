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
    nextId: number
}

// Функция для загрузки задач из localStorage
const loadTasksFromStorage = (): Task[] => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
};

// Начальное состояние с загрузкой задач из localStorage
const initialState: Todo = {
    tasks: loadTasksFromStorage(), // Загружаем задачи из localStorage
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
            }];
            localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Сохраняем в localStorage
        },
        incrementNextId: (state) => {
            state.nextId = state.nextId + 1;
        },
        deleteTask: (state, actions) => {
            state.tasks = state.tasks.filter(task => task.id !== actions.payload.id);
            localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Сохраняем в localStorage
        },
        changeTask: (state, actions) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === actions.payload.id) {
                    return {
                        ...task,
                        title: actions.payload.title,
                        description: actions.payload.description,
                    };
                }
                return task;
            });
            localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Сохраняем в localStorage
        },
        checkedTask: (state, actions) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === actions.payload.id) {
                    return {
                        ...task,
                        checked: actions.payload.checked
                    };
                }
                return task;
            });
            localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Сохраняем в localStorage
        }
    }
});

export const { addTask, deleteTask, changeTask, checkedTask, incrementNextId } = todoSlice.actions;
export default todoSlice.reducer;
