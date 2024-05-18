"use client";
import React from "react";
import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//www.socialintents.com/api/chat/socialintents.1.3.js#2c9fa6a68f750f6b018f8affd83a1a71";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      Chat
      <iframe
        src="https://chat.socialintents.com/c/chat-1716023973946"
        width="100%"
        style={{ height: "100%", minHeight: "550px", display: "none" }}
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Chat;
