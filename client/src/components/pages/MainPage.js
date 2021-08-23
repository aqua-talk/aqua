import React, { useState } from "react";
import { useSelector } from "react-redux";

import TabPanel from "./MainPage/TabPanel";
import FriendPanel from "./MainPage/FriendPanel";
import ChatPanel from "./MainPage/ChatPanel";
import MorePanel from "./MainPage/MorePanel";

function MainPage() {
  const [tab, setTab] = useState("friend");
  const handleTab = (thisTab) => {
    setTab(thisTab);
  };

  const currentUser = useSelector((state) => state.user.currentUser);

  const renderMainPanel = () => {
    switch (tab) {
      case "friend":
        return <FriendPanel user={currentUser} />;
      case "chat":
        return <ChatPanel user={currentUser} />;
      case "more":
        return <MorePanel />;
      default:
        alert("something wrong..");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <TabPanel tab={tab} handleTab={handleTab} />
      {renderMainPanel()}
    </div>
  );
}

export default MainPage;
