import React from "react";
import Navbar from "../../Components/NavBar/index";
import TopicCards from "./TopicCards/index";
import { useSelector } from "react-redux";

function DashBoard() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <>
      {/* <Navbar /> */}
      {userInfo !== null && <Navbar />}
      <TopicCards />
    </>
  );
}

export default DashBoard;
