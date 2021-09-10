import React from "react";
import { BiSearch, BiCommentAdd } from "react-icons/bi";

function ChatHeader() {
  return (
    <div
      style={{
        paddingTop: 30,
        paddingBottom: 10,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2 style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: 600 }}>채팅</h2>
      <ul style={{ display: "flex", gap: 15 }}>
        <li>
          <BiSearch size={25} />
        </li>
        <li>
          <BiCommentAdd size={25} />
        </li>
      </ul>
    </div>
  );
}

export default ChatHeader;
