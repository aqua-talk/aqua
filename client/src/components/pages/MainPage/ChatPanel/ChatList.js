import React, { useState } from "react";

import Chat from "./Chat";

import testFriendImage1 from "../../../../assets/images/UTH.png"; // 임시
import testFriendImage2 from "../../../../assets/images/KJG.png"; // 임시
import testFriendImage3 from "../../../../assets/images/CGS.png"; // 임시

function ChatList() {
  const [chatList, setChatList] = useState([
    {
      name: "엄태혁",
      email: "test1@test.test",
      statusMessage: "test",
      profileImage: testFriendImage1,
    },
    {
      name: "김정국",
      email: "test2@test.test",
      statusMessage: "test",
      profileImage: testFriendImage2,
    },
    {
      name: "차광성",
      email: "test3@test.test",
      statusMessage:
        "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      profileImage: testFriendImage3,
    },
  ]);

  const renderChats = () => {
    let chatArray = [];
    chatList.map((chat, index) => {
      chatArray.push(<Chat key={index} chat={chat} />);
    });
    return chatArray;
  };

  return <div>{renderChats()}</div>;
}

export default ChatList;
