import { Box, Checkbox, Typography } from "@mui/material"
import { useState } from "react";
import { useAppDispatch } from "../../hooks/hook";
import { Buttons } from "../Buttons/Buttons";
import { EditForm } from "../EditForm/EditForm";
import type { Task } from "./type";
import { checkedTask, deleteTask } from "../../hooks/reducer";
import styles from './Task.module.css'
import AddTask from "../AddTask/AddTask";

export function Task({ title, description, id, checked }: Task) {
  const [edit, setLocalEdit] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(false)
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ id: id }));
  }

  const handleEdit = () => {
    setLocalEdit(true);
  }

  const addTaskToTask = () => {
    setAdd(true);
  }

  const changeChecked = () => {
    dispatch(checkedTask({ id: id, checked: !checked }));
  }

  return (
    <Box>
      {edit ? (
        <EditForm title={title} description={description} setEdit={setLocalEdit} id={id} key={id} />
      ) : (
        add ? <AddTask addTaskToTask={addTaskToTask} setAdd={setAdd} /> :
          <Box className={styles.task}>
            <Checkbox onChange={changeChecked} checked={checked} />
            <Box className={styles.text}>
              <Typography variant="h5">{title}</Typography>
              <Typography>{description}</Typography>
            </Box>
            {checked ? <Buttons handleDelete={handleDelete} /> :
              <Buttons handleDelete={handleDelete} handleEdit={handleEdit} addTask={addTaskToTask} />}
          </Box>
      )}
    </Box>
  )
}
