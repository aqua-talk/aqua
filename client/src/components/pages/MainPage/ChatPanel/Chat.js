import React, { useState } from "react";
import { useHistory } from "react-router";

import { Image } from "react-bootstrap";

function Chat(props) {
  const [showProfile, setShowProfile] = useState(false);

  const history = useHistory();
  const handleOpenChat = () => {
    alert(props.chat.email);
    history.push(`/chat/${props.chat.email}`);
  };
  return (
    <div
      style={{ padding: "10px 0" }}
      onDoubleClick={() => {
        handleOpenChat();
      }}
    >
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Image
          src={props.chat.profileImage}
          width={50}
          height={50}
          roundedCircle
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowProfile((prev) => !prev);
          }}
        />
        <div
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>{props.chat.name}</h4>
          {props.chat.statusMessage && (
            <p
              style={{
                margin: 0,
                overflowX: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {props.chat.statusMessage}
            </p>
          )}
        </div>
      </div>
      {showProfile && <div style={{ backgroundColor: "#ececec" }}>Profile</div> /* modal? */}
    </div>
  );
}

export default Chat;
