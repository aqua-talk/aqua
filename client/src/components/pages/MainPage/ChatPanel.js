import React, { useState } from "react";

import ChatHeader from "./ChatPanel/ChatHeader";
import ChatList from "./ChatPanel/ChatList";

function ChatPanel() {
  const [messageTotal, setMessageTotal] = useState(0);
  return (
    <div
      style={{
        marginLeft: 60,
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
