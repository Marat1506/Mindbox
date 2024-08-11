import { Box, Typography } from '@mui/material'
import styles from './TodoList.module.css'
import { Task } from '../Task/Task'
import { useAppSelector } from '../../hooks/hook'


export default function TodoList() {
  const tasks = useAppSelector(state => state.todo.tasks)
  console.log(tasks)
  return (
    <Box className={styles.list}>
      <Typography>план</Typography>
      {tasks.map((task) => (
        !task.checked ?
        <Task title={task.title} description={task.description} id={task.id} checked={task.checked}  />: null
      ))}
      <Typography sx={{marginTop: '30px'}}>готово</Typography>
      {tasks.map((task) => (
        task.checked ?
        <Task title={task.title} description={task.description} id={task.id} checked={task.checked} />: null
      ))}

    </Box>
  )
}
