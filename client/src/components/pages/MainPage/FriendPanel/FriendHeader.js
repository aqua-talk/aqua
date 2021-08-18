import React from "react";
import { BiSearch, BiUserPlus } from "react-icons/bi";

function FriendHeader() {
  return (
    <div style={{ paddingTop: 30, display: "flex", justifyContent: "space-between" }}>
      <h2 style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: 600 }}>친구</h2>
      <ul style={{ display: "flex" }}>
        <li>
          <BiSearch size={25} />
        </li>
        <li>
          <BiUserPlus size={25} style={{ marginLeft: 15 }} />
        </li>
      </ul>
    </div>
  );
}

export default FriendHeader;
