import { Avatar, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import NavBar from "../../Components/NavBar/index";
import RoundedBorderBtn from "../../Components/RoundedBorderBtn/RoundedBorderBtn";

function DetailedTopic() {
  let history = useHistory();
  return (
    <div>
      <NavBar />
      <Container sx={{ mt: 3, mb: 3 }}>
        <Grid container>
          <Grid item xs={1}>
            <Avatar />
          </Grid>
          <Grid item xs={3}>
            <Typography>UserName</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Title</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              officia perferendis expedita ex magnam illum facere pariatur.
              Recusandae quisquam beatae esse ad error qui accusamus doloribus
              numquam, perferendis, vitae odit?
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <RoundedBorderBtn
        btnText="Cancel"
        onClick={() => {
          history.push("/home");
        }}
      />
    </div>
  );
}

export default DetailedTopic;
