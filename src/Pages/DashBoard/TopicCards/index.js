import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import Searchbar from "../Searchbar/Searchbar";

import TopicCard from "./TopicCard/TopicCard";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../../Services/fetchPosts";
import { PostAddSharp } from "@material-ui/icons";
import Pagination from "@mui/material/Pagination";
const Topics = [
  {
    title: "Title 1",
    author: "Jhon",
    avatar: "../../../../Assets/login_bg.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum at minima reprehenderit autem iure delectus! Dolorem, perspiciatis voluptatibus minus, ipsum sequi fuga esse atque fugit, laborum neque modi sed.",
    date: "12/06/2020",
  },
  {
    title: "Title 2",
    author: "Mathew",
    avatar: "../../../../Assets/login_bg.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum at minima reprehenderit autem",
    date: "12/06/2021",
  },
  {
    title: "Title 3",
    author: "Philips",
    avatar: "../../../../Assets/login_bg.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum at minima reprehenderit autem",
    date: "12/07/2020",
  },
  {
    title: "Title 2",
    author: "Mathew",
    avatar: "../../../../Assets/login_bg.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum at minima reprehenderit autem",
    date: "12/06/2021",
  },
  {
    title: "Title 3",
    author: "Philips",
    avatar: "../../../../Assets/login_bg.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum at minima reprehenderit autem",
    date: "12/07/2020",
  },
  {
    title: "Title 2",
    author: "Mathew",
    avatar: "../../../../Assets/login_bg.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum at minima reprehenderit autem",
    date: "12/06/2021",
  },
  {
    title: "Title 3",
    author: "Philips",
    avatar: "../../../../Assets/login_bg.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum at minima reprehenderit autem",
    date: "12/07/2020",
  },
];

function TopicCards() {
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  const postLists = useSelector((state) => state.fetchPost);
  // const { loading, error, posts } = postLists;
  const { error, posts } = postLists;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <Searchbar />
        {loading ? (
          <Spinner loading={loading} size={300} />
        ) : (
          <div>
            {Topics.map((item) => (
              <div>
                <TopicCard
                  avatar={item.avatar}
                  author={item.author}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                />
              </div>
            ))}
          </div>
        )}
        <Pagination count={5} onChange={console.log("change")} />
        {posts.map((post) => {
          console.log(post);
          console.log("hello");
        })}

        {/* <div>
      <Container sx={{ mt: 2 }}>
        {loading && "loading"}
        {!loading &&
          posts.map((post) => <TopicCard topic={post} key={post._id} />)} */}
      </Container>
    </div>
  );
}

export default TopicCards;
