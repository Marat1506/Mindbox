import { Button, IconButton, TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, incrementNextId } from "../../hooks/reducer";
import { useAppSelector } from "../../hooks/hook";

export function InputForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const nextId = useAppSelector(state => state.todo.nextId);
    const tasks = useAppSelector(state => state.todo.tasks); // Получаем текущие задачи из состояния
    const dispatch = useDispatch();

    // Сохранение задач в localStorage при изменении tasks
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (title.trim() === '' || description.trim() === '') {
            return;
        }
        dispatch(addTask({ title: title, description: description, checked: false, id: nextId }));
        dispatch(incrementNextId());
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="standard-basic" label="Загловок задачи"
                variant="standard" fullWidth InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleFormSubmit}>
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }} />
            <TextField value={description} onChange={(e) => setDescription(e.target.value)} id="standard-basic" label="Описание задачи"
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
    );
}
