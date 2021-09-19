import React, { useState } from "react";

import TabPanel from "./MainPage/TabPanel";
import FriendPanel from "./MainPage/FriendPanel";
import ChatPanel from "./MainPage/ChatPanel";
import MorePanel from "./MainPage/MorePanel";

function MainPage(props) {
  const [tab, setTab] = useState("friend");

  const handleTab = (thisTab) => {
    setTab(thisTab);
  };

  const renderMainPanel = () => {
    switch (tab) {
      case "friend":
        return <FriendPanel />;
      case "chat":
        return <ChatPanel />;
      case "more":
        return <MorePanel />;
      default:
        alert("something wrong..");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <TabPanel tab={tab} handleTab={handleTab} signOut={props.signOut} />
      {renderMainPanel()}
    </div>
  );
}

export default MainPage;
