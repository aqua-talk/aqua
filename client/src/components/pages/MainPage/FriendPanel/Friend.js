import React, { useState } from "react";

import { Image } from "react-bootstrap";

function Friend(props) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div style={{ padding: "10px 0" }}>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Image
          src={props.friend.profileImage}
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
          <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>{props.friend.name}</h4>
          {props.friend.statusMessage && <p style={{ margin: 0 }}>{props.friend.statusMessage}</p>}
        </div>
      </div>
      {showProfile && <div style={{ backgroundColor: "#ececec" }}>Profile</div> /* modal? */}
    </div>
  );
}

export default Friend;
