import React from "react";

import FriendHeader from "./FriendPanel/FriendHeader";
import MyProfile from "./FriendPanel/MyProfile";
import FriendList from "./FriendPanel/FriendList";
import Partition from "../../common/Partition";

function FriendPanel() {
  return (
    <div
      style={{
        marginLeft: 60,
        width: "100%",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <FriendHeader />
      <MyProfile />
      <Partition />
      <FriendList />
    </div>
  );
}

export default FriendPanel;
