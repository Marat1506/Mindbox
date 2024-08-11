import { Box, Typography } from "@mui/material";
import TodoList from "../TodoList/TodoList";
import styles from './Content.module.css'
import { InputForm } from "../InputForm/InputForm";


export default function Content() {
  return (
    <Box className={styles.bg}>
      <Typography variant="h2" color="primary">TODO</Typography>
        <InputForm />
        <TodoList />
    </Box>
  )
}
