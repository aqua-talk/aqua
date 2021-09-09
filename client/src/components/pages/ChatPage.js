import React from "react";
import { useParams } from "react-router";

function ChatPage() {
  const { friendEmail } = useParams();

  return <div>{friendEmail}님과의 채팅</div>;
}

export default ChatPage;
