import React, { useState } from "react";
import axios from "axios";

import { BiSearch, BiUserPlus } from "react-icons/bi";

function FriendHeader(props) {
  const [headerMenu, setHeaderMenu] = useState("");
  const handleHeaderMenuChange = (menu) => {
    if (menu == headerMenu) {
      setHeaderMenu("");
    } else {
      setHeaderMenu(menu);
    }
  };
  const handleOnChange = (e) => {
    let input = e.target.value.trim();
    switch (headerMenu) {
      case "친구 찾기":
        props.renderSearched(input);
        break;
      case "친구 추가":
        //handleAddFriend();
        break;
      default:
        console.log("error");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div
        style={{
          paddingTop: 30,
          paddingBottom: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ textAlign: "left", fontSize: "1.5rem", fontWeight: 600 }}>친구</h2>
        <ul style={{ display: "flex", gap: 15 }}>
          <li>
            <BiSearch
              size={25}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleHeaderMenuChange("친구 찾기");
              }}
            />
          </li>
          <li>
            <BiUserPlus
              size={25}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleHeaderMenuChange("친구 추가");
              }}
            />
          </li>
        </ul>
      </div>
      {headerMenu && (
        <form
          style={{
            padding: "10px 0",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <label style={{ marginRight: 10 }}>{headerMenu}</label>
          <input
            type="text"
            onChange={(e) => {
              handleOnChange(e);
            }}
            style={{
              width: "50%",
            }}
          ></input>
          {headerMenu == "친구 추가" && (
            <input
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            ></input>
          )}
        </form>
      )}
    </div>
  );
}

export default FriendHeader;
