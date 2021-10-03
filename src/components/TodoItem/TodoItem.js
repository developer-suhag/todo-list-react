import {
  Button,
  Checkbox,
  IconButton,
  Modal,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { borderRadius, Box } from "@mui/system";

const TodoItem = (props) => {
  const { id, title, completed, userId } = props.todo;
  const [checked, setChecked] = React.useState(false);
  const man = useContext(UserContext);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#e5e5e5",
    border: "1px solid #06d6a0",
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <TableRow className="table-row">
        <TableCell>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </TableCell>
        <TableCell>{title}</TableCell>
        <TableCell>
          <img style={{ width: 30 }} className="user-img" src={man} alt="" />
        </TableCell>
        <TableCell>
          <IconButton
            className="edit-btn"
            onClick={handleOpen}
            edge="end"
            aria-label="comments"
          >
            <EditIcon />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                Edit Title
              </Typography>
              <TextField
                className="text-field"
                color="secondary"
                id="outlined-textarea"
                label={title}
                placeholder={title}
                multiline
                margin="normal"
                fullWidth
              />

              <Button
                sx={{ marginRight: 2 }}
                variant="contained"
                className="cancle-btn"
              >
                Cancel
              </Button>

              <Button color="success" variant="outlined">
                Update
              </Button>
            </Box>
          </Modal>
        </TableCell>
        <TableCell>
          <IconButton edge="end" aria-label="comments">
            {completed ? (
              <CheckCircleIcon color="secondary" />
            ) : (
              <RadioButtonUncheckedIcon color="primary" />
            )}
          </IconButton>
        </TableCell>
        <TableCell>
          <Link to={`/todo-detail/${id}`}>
            <Button variant="outlined" color="secondary">
              Show Detials
            </Button>
          </Link>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TodoItem;
