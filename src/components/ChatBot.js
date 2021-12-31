import React, { useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import "../styles/ChatBot.scss";

const Bot = () => {
  const [chatBotClass, setChatBotClass] = useState("hidden");

  useEffect(() => {
    setTimeout(() => {
      setChatBotClass("visible");
    }, 15000);
  }, []);

  return (
    <ChatBot
      className={`chatbot ${chatBotClass}`}
      steps={[
        {
          id: "hello-world",
          message: "Need some help?",
          end: true,
        },
      ]}
    />
  );
};

export default Bot;
