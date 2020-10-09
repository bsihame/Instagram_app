import React, { useState } from "react";
import TexField from "@material-ui/TextField";
import Send from "@material-ui/icons/Send";


const ChatTextBox = ({
  submitMessageToFirebase,
  messageRead,
  selectedChatText
}) => {
  const userTyping = (e) => {
    e.keyCode === 13 ? submitMessage() : selectedChatText(e.target.value);
  };

  const messageValid = (text) => {
    if (text && text.replace(/\s/g, "").length) {
      return true;
    }
  };

  const userClickedInput = () => {
        messageRead(selectedChatIndex)
    }

    const submitMessage = () => {
        if(messageValid(chatText)) {
            submitMessageToFirebase(chatText);
            document.getElementById("chatTextBox").value = "";
        }
    }

    return(
        <div className="chatTextBoxContainer">
            <TextField placeholder="Type Your Message..." onKeyUp={(e) => userTyping(e)} id="chatTextBox" className="chatTextBox" onFocus={userClickedInput}></TextField>
            <Send onClick={submitMessage} className="sendButton"></Send>
      </div>
    )
}

export default ChatTextBox;