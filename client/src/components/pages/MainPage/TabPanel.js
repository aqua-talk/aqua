import React from "react";

import { BsPersonFill, BsFillChatFill, BsThreeDots } from "react-icons/bs";

function TabPanel(props) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
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
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.handleTab("friend");
          }}
        >
          <BsPersonFill size={30} color={props.tab === "friend" ? null : "#acacac"} />
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.handleTab("chat");
          }}
        >
          <BsFillChatFill size={30} color={props.tab === "chat" ? null : "#acacac"} />
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.handleTab("more");
          }}
        >
          <BsThreeDots size={30} color={props.tab === "more" ? null : "#acacac"} />
        </li>
      </ul>
      <ul></ul>
    </nav>
  );
}

export default TabPanel;
