import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, incrementNextId } from "../../hooks/reducer";
import AddIcon from '@mui/icons-material/Add';
import type { addTaskToTask } from "./type";
import { useAppSelector } from "../../hooks/hook";





export default function AddTask({ setAdd }: addTaskToTask) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const nextId = useAppSelector(state => state.todo.nextId)

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (title.trim() === '' || description.trim() === '') {
            return
        }
        dispatch(addTask({ title: title, description: description, checked: false, id: nextId }))
        dispatch(incrementNextId())
        setTitle('')
        setDescription('')
        setAdd(false)
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="standard-basic" label="Загловок подзадачи"
                variant="standard" fullWidth InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleFormSubmit}>
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }} />
            <TextField value={description} onChange={(e) => setDescription(e.target.value)} id="standard-basic" label="Описание подзадачи"
                variant="standard" fullWidth InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleFormSubmit}>
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }} />

            <Button sx={{ marginTop: '10px' }} type="submit" variant="contained">Добавить</Button>
        </form>
    )
}
