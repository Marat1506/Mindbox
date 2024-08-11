
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';




interface Buttons {
    handleDelete: () => void;
    handleEdit?: () => void;
    addTask?: () => void;
}
export function Buttons({ handleDelete, handleEdit, addTask }: Buttons) {


    return (
        <Box sx={{display: 'flex'}}>
            <IconButton onClick={handleDelete} sx={{ "&:focus": { outline: 'none' } }}>
                <DeleteOutlineIcon />

            </IconButton>
            {handleEdit ?
                <Box sx={{display: 'flex'}}>
                    <IconButton onClick={handleEdit} sx={{ "&:focus": { outline: 'none' } }}>
                        <EditIcon />
                    </IconButton> 
                    <IconButton onClick={addTask} sx={{ "&:focus": { outline: 'none' } }}>
                        <AddIcon />
                    </IconButton> 
                </Box>
            : null}

        </Box>


    )
}