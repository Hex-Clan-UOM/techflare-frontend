import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import Searchbar from "../Searchbar/Searchbar";
import TopicCard from "./TopicCard/TopicCard";

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
];

function TopicCards() {
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [loading, setloading] = useState(true);

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
      </Container>
    </div>
  );
}

export default TopicCards;
