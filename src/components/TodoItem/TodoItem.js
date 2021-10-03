import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Modal,
  Slide,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { Box } from "@mui/system";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TodoItem.css";
const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };
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
        {/* edit  */}
        <TableCell>
          <img style={{ width: 30 }} className="user-img" src={man} alt="" />
        </TableCell>
        <TableCell>
          <Box sx={{ display: "flex", gap: 1 }}>
            <div>
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
                  <Typography
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                  >
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
                    className="dark-btn"
                  >
                    Cancel
                  </Button>

                  <Button color="success" variant="outlined">
                    Update
                  </Button>
                </Box>
              </Modal>
            </div>
            {/* delete  */}

            <div></div>
            <IconButton
              className="delete-icon"
              variant="outlined"
              onClick={handleDeleteOpen}
            >
              <DeleteIcon />
            </IconButton>
            <Dialog
              open={deleteOpen}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleDeleteClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Are you sure want to delete"}</DialogTitle>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-slide-description"
                  sx={{ textAlign: "center" }}
                >
                  <ErrorOutlineIcon color="warning" sx={{ fontSize: 60 }} />
                  <h3>Are you sure?</h3>
                  <p>You won't be able to revert this!</p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  className="dark-btn"
                  variant="contained"
                  onClick={handleClose}
                >
                  Delete
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
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
