import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import RoundedBorderBtn from "../../../Components/RoundedBorderBtn/RoundedBorderBtn";
import useStyles from "./style";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../../Services/updatePost";
import { PostAddTwoTone } from "@material-ui/icons";
import ImageLoader from "../../../Components/imageLoader/Loader";

function TopicForm() {
  const dispatch = useDispatch();
  const specificPost = useSelector((state) => state.fetchSpecificPost);
  const { loading, post } = specificPost;
  const classes = useStyles();
  let history = useHistory();
  const [topic, settopic] = useState(post.title);
  const [text, settext] = useState(post.body);
  const [url, setUrl] = useState(post.images);
  const [loadImage, setLoadImage] = useState(false);

  const uploadImage = (e) => {
    const data = new FormData();
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
    dispatch(updatePost(topic, text, post._id, url));

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
            Edit Your Topic Here!
          </Typography>
          <Grid item xs={12} className={classes.grid}>
            <TextField
              label="Title"
              variant="outlined"
              className={classes.field}
              onChange={handleTopicChange}
              required
              defaultValue={topic}
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
              defaultValue={text}
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
          <div>
            <img src={u} height="100" width="100" />
            <button onClick={() => removeImage(u)} className={classes.ribbon}>
              x
            </button>
          </div>
        ))}
      </form>
    </div>
  );
}

export default TopicForm;
