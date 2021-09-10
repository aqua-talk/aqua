import React, { useState } from "react";

import FriendHeader from "./FriendPanel/FriendHeader";
import MyProfile from "./FriendPanel/MyProfile";
import FriendList from "./FriendPanel/FriendList";
import Partition from "../../common/Partition";

function FriendPanel() {
  const [isSearching, setIsSearching] = useState(false);
  const renderSearched = (input) => {
    setIsSearching(true);

    if (input) {
      console.log(input);
      /*
      var stringVal = "Hello World",
      exp = /java/;
      stringVal1.search(exp);
      */
    } else {
      setIsSearching(false);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        padding: "0 20px 0 80px",
        boxSizing: "border-box",
      }}
    >
      <FriendHeader renderSearched={renderSearched} />
      {isSearching ? (
        <FriendList />
      ) : (
        <>
          <MyProfile />
          <Partition />
          {/* added friend? */}
          <FriendList />
        </>
      )}
    </div>
  );
}

export default FriendPanel;
