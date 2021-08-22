import React from "react";
import MoreHeader from "./MorePanel/MoreHeader";

function MorePanel() {
  return (
    <div
      style={{
        marginLeft: 60,
        width: "100%",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <MoreHeader />
    </div>
  );
}

export default MorePanel;
