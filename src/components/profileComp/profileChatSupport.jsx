import React from "react";
import { useNavigate } from "react-router-dom";
import { ChatTextArea, H2profile, IconBack } from "../../styles/profileStyles";
import back from "../../assets/icon-back.png";
import send from "../../assets/icon-chat-send.png";

import { Input, NextButton, RegBackground } from "../../styles/registerStyles";

export default function ProfileChatSupport() {
  const navigate = useNavigate();

  const handlerReturn = () => {
    navigate(-1);
  };
  return (
    <RegBackground style={{ justifyContent: "flex-start", marginTop: "50px" }}>
      <IconBack onClick={handlerReturn} src={back} alt="second-icon" />
      <H2profile>Chat with specialist</H2profile>

      <ChatTextArea>
        <Input
          type="text"
          style={{
            width: "70%",
            margin: "0 5px",
            border: ".5px solid #ffe031",
            borderRadius: "10px",
            padding: "0 5px",
            height: "40px",
          }}
          placeholder="Send message"
        />
        <NextButton
          style={{
            position: "inherit",
            display: "inline-block",
            width: "20%",
            margin: "0 5px",
            borderRadius: "10px",
            height: "40px",
            padding: "3px",
            alignContent: "center",
          }}
        >
          <img style={{ alignItems: "center" }} src={send} alt="send" />
        </NextButton>
      </ChatTextArea>
    </RegBackground>
  );
}
