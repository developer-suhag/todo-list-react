import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Home.css";

import checkList from "../../images/Checklist-bro.png";

const Home = () => {
  return (
    <Container>
      <div className="checklist">
        <Typography variant="h3" component="h3">
          To do list
        </Typography>
        <img src={checkList} alt="" />
      </div>
    </Container>
  );
};

export default Home;
