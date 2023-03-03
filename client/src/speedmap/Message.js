import React from "react";

function Message({ error, msg }) {
  return (
    <div className={error ? "message error" : "message"}>
      <h4>MESSAGES</h4>
      <p>{msg}</p>
    </div>
  );
}

export default Message;
