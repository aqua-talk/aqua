import React, { useState } from "react";

import Friend from "./Friend";

import testFriendImage1 from "../../../../assets/images/UTH.png"; // 임시
import testFriendImage2 from "../../../../assets/images/KJG.png"; // 임시
import testFriendImage3 from "../../../../assets/images/CGS.png"; // 임시

function FriendList() {
  const [friendList, setFriendList] = useState([
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
      statusMessage: "test",
      profileImage: testFriendImage3,
    },
  ]);

  const renderFriends = () => {
    let friendArray = [];
    friendList.map((friend, index) => {
      friendArray.push(<Friend key={index} friend={friend} />);
    });
    return friendArray.sort((a, b) => {
      return a.props.friend.name > b.props.friend.name ? 1 : -1;
    });
  };

  return (
    <div>
      <h5
        style={{
          fontSize: "0.8rem",
          color: "#777",
          textAlign: "left",
        }}
      >
        친구 {friendList.length}
      </h5>
      {renderFriends()}
    </div>
  );
}

export default FriendList;
