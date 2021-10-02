import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";
import error from "../../images/404 Error with a cute animal.gif";

const PageError = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <img src={error} alt="" />
      <div>
        <Button color="secondary" variant="contained" onClick={handleClick}>
          Go back to Home
        </Button>
      </div>
    </Box>
  );
};

export default PageError;
