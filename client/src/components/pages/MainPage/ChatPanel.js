import React, { useState } from "react";

import ChatHeader from "./ChatPanel/ChatHeader";
import ChatList from "./ChatPanel/ChatList";

function ChatPanel() {
  const [messageTotal, setMessageTotal] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        padding: "0 20px 0 80px",
        boxSizing: "border-box",
      }}
    >
      <ChatHeader />
      <ChatList />
    </div>
  );
}

export default ChatPanel;
