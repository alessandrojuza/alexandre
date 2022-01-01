import React, { useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "../styles/ChatBot.scss";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const Bot = () => {
  const [chatBotClass, setChatBotClass] = useState("hidden");
  const [cancelIconClass, setCancelIconClass] = useState("hidden");

  const hideChatBot = () => {
    setChatBotClass("hidden");
    setCancelIconClass("visible");
  };

  const showChatBot = () => {
    setChatBotClass("visible");
    setCancelIconClass("hidden");
  };

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#919191",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#405a92",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  useEffect(() => {
    setTimeout(() => {
      setChatBotClass("visible");
    }, 15000);
  }, []);

  return (
    <div className="chatbot-container">
      <CancelRoundedIcon
        className={`cancel-icon ${chatBotClass}`}
        onClick={hideChatBot}
      />
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
      <HelpRoundedIcon
        className={`help-icon ${cancelIconClass}`}
        onClick={showChatBot}
      />
    </div>
  );
};

export default Bot;
