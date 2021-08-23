import React from "react";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import testProfileImage from "../../../../assets/images/testProfileImage.jpg"; // 임시

function MyProfile() {
  const currentUser = useSelector((state) => state.user.currentUser);

  let userStatusMessage = "test"; // 임시

  return (
    <div style={{ padding: "10px 0" }}>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Image src={testProfileImage} width={60} roundedCircle style={{ cursor: "pointer" }} />
        <div
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>
            {currentUser.displayName}
          </h4>
          {userStatusMessage && <p style={{ margin: 0 }}>{userStatusMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
