
import { Button, IconButton, TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import SaveIcon from '@mui/icons-material/Save';
import { FormEvent, useState } from "react";

import { useAppDispatch } from "../../hooks/hook";
import { Edit } from "./type";
import { changeTask } from "../../hooks/reducer";

export function EditForm({ title, description, setEdit, id }: Edit) {
    const dispatch = useAppDispatch()
    const [taskTitle, setTaskTitle] = useState(title)
    const [taskDescription, setTaskDescription] = useState(description)
    console.log("task = ", taskTitle)

    const handleEdit = (e: FormEvent) => {
        e.preventDefault()
        setEdit(false)
        if (taskTitle.trim() === '') return
        dispatch(changeTask({ title: taskTitle, description: taskDescription, id: id }))

    }


    return (
        <form onSubmit={handleEdit} style={{ width: "100%" }}>
            <TextField value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} label="Новый заголовок"
                variant="standard" fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleEdit} >
                                <SaveIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }} />
            <TextField value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} label="Новое описание"
                variant="standard" fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleEdit} >
                                <SaveIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }} />
                <Button sx={{marginTop: '10px'}} type="submit" variant="contained">Сохранить</Button>
        </form>
    )
}