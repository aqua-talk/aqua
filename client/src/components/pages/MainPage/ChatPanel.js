import React from "react";

import ChatHeader from "./ChatPanel/ChatHeader";
import ChatList from "./ChatPanel/ChatList";

function ChatPanel() {
  return (
    <div
      style={{
        width: "100%",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <ChatHeader />
      <ChatList />
    </div>
  );
}

export default ChatPanel;
