import React from "react";

import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { useHistory } from "react-router";
import Navbar from "../../Components/NavBar/index";
function Profile() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let history = useHistory();
  return (
    <div>
      {userInfo !== null && <Navbar />}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 3,
          pb: 2,
        }}
      >
        <Container maxWidth="sm">
          <Avatar
            src={userInfo.avatar}
            sx={{ width: 80, height: 80, margin: "auto" }}
          />

          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ marginTop: "10px" }}
          >
            {userInfo.firstName} {userInfo.lastName}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Write Out Content Creator
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={() => {
                history.push("/home");
              }}
            >
              Back to Home
            </Button>
            {/* <Button variant="outlined">My Topics</Button> */}
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}></Grid>
      </Container>

      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h2" align="center" gutterBottom>
          Write Out
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          © 2021 Write Out. All Rights Reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default Profile;
