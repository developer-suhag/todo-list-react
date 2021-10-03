import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Container } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import man from "../../images/man.png";
import CancelIcon from "@mui/icons-material/Cancel";
import { UserContext } from "../../App";

const TodoDetail = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState({});
  const man = useContext(UserContext);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    const loadTodo = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setTodo(data);
    };
    loadTodo();
  }, []);
  const { title, completed } = todo;
  return (
    <Container
      sx={{
        width: 700,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        padding: 4,
        bgcolor: "#faedcd",
        borderRadius: 2,
        boxShadow: 2,
        marginBottom: 4,
      }}
    >
      <img src={man} alt="" />

      {completed && <CheckCircleIcon color="success" />}
      {completed || <CancelIcon color="error" />}

      <p>{title?.toUpperCase()}</p>
    </Container>
  );
};

export default TodoDetail;
