import React from "react";

import { BsPersonFill, BsFillChatFill, BsThreeDots } from "react-icons/bs";

function TabPanel(props) {
  return (
    <nav
      style={{
        width: 60,
        height: "100vh",
        paddingTop: 30,
        backgroundColor: "#ececec",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          padding: 0,
          height: 150,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <li
          onClick={() => {
            props.handleTab("friend");
          }}
        >
          <BsPersonFill size={30} color={props.tab == "friend" ? null : "#acacac"} />
        </li>
        <li
          onClick={() => {
            props.handleTab("chat");
          }}
        >
          <BsFillChatFill size={30} color={props.tab == "chat" ? null : "#acacac"} />
        </li>
        <li
          onClick={() => {
            props.handleTab("more");
          }}
        >
          <BsThreeDots size={30} color={props.tab == "more" ? null : "#acacac"} />
        </li>
      </ul>
      <ul></ul>
    </nav>
  );
}

export default TabPanel;
