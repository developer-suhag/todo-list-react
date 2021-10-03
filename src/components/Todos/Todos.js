import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 50)));
  }, []);

  return (
    <Container
      sx={{ boxShadow: 4, borderRadius: 4, marginY: 4, padding: 2 }}
      className="table-container"
    >
      <TableContainer className="table">
        <Table sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <TableCell>Edit</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos?.map((todo) => (
              <TodoItem key={todo.id} todo={todo}></TodoItem>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Todos;
