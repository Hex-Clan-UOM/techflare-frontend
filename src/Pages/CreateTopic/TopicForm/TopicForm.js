import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import RoundedBorderBtn from "../../../Components/RoundedBorderBtn/RoundedBorderBtn";
import useStyles from "./style";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../Services/createPost";
import ImageLoader from "../../../Components/imageLoader/Loader";

function TopicForm() {
  const dispatch = useDispatch();
  const classes = useStyles();
  let history = useHistory();
  const [topic, settopic] = useState("");
  const [text, settext] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState([]);
  const [loadImage, setLoadImage] = useState(false);

  const uploadImage = (e) => {
    const data = new FormData();
    console.log(data);
    setLoadImage(true);
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "techflare");
    data.append("cloud_name", "hexclan");
    fetch("  	https://api.cloudinary.com/v1_1/hexclan/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl([...url, data.url]);
        setLoadImage(false);
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
    dispatch(createPost(topic, text, url));

    history.push("/home");
  };

  const removeImage = (image) => {
    const newImages = url.filter((u) => u !== image);
    setUrl(newImages);
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
              uploadImage(e);
            }}
          ></input>

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
        <ImageLoader loading={loadImage} size="50px" />
        {url.map((u) => (
          <>
            <img src={u} height="100" width="100" />
            <button onClick={() => removeImage(u)}>x</button>
          </>
        ))}
      </form>
    </div>
  );
}

export default TopicForm;
