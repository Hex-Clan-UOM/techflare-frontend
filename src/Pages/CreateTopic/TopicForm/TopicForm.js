import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import RoundedBorderBtn from "../../../Components/RoundedBorderBtn/RoundedBorderBtn";
import useStyles from "./style";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../Services/createPost";

function TopicForm() {
  const dispatch = useDispatch();
  const classes = useStyles();
  let history = useHistory();
  const [topic, settopic] = useState("");
  const [text, settext] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    console.log(data);
    data.append("file", image);
    data.append("upload_preset", "techflare");
    data.append("cloud_name", "hexclan");
    fetch("  	https://api.cloudinary.com/v1_1/hexclan/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  const handleTopicChange = (event) => {
    settopic(event.target.value);
  };
  const handleTextChange = (event) => {
    settext(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(topic, text));

    history.push("/home");
  };
  return (
    <div>
      <form className={classes.root} onSubmit={onSubmit}>
        <Grid container>
          <Typography
            variant="h4"
            className={classes.caption}
            marginBottom="10px"
          >
            Create Your Topic Here!
          </Typography>
          <Grid item xs={12} className={classes.grid}>
            <TextField
              label="Title"
              variant="outlined"
              className={classes.field}
              onChange={handleTopicChange}
              required
            />

            <TextField
              label="Text"
              variant="outlined"
              className={classes.field}
              maxRows={5}
              rows={6}
              multiline
              onChange={handleTextChange}
              required
            />
          </Grid>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          ></input>
          <RoundedBorderBtn
            btnText="Upload"
            onClick={() => {
              uploadImage();
            }}
            className={classes.btn}
          />
          <Grid item className={classes.grid}>
            <RoundedBorderBtn
              btnText="Cancel"
              onClick={() => {
                history.push("/home");
              }}
              className={classes.btn}
            />

            <RoundedBorderBtn
              btnText="Submit"
              type="submit"
              onClick={() => {
                console.log("submit clicked");
              }}
              className={classes.btn}
            />
          </Grid>
        </Grid>
        <img src={url} />
      </form>
    </div>
  );
}

export default TopicForm;
