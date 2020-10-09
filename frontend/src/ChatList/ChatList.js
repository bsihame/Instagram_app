import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/ListItemIcon";
import ListItemIcon, { ChatSharp } from "@material-ui/icons";
import NotificationImportant from "@material-ui/icons/NotificationImportant";
import "../css/chats/chatList.css";

const ChatList = ({
  newChatButtonClicked, chat, email, selectedIdex, selectedChatButton
}) => {

  const newChat = () => {
    newChatButtonClicked();
  }

  const userIsSender = (chat) => {
    let lasMessage = chat.messages[chat.messages.length - 1]
    if (lastMessage.sender === email) {
      return true
    } else {
      return false
    }
  }

  const selectChat = (index) => {
    selectedChatButton(index)
  }

  if (ChatSharp.length > 0) {
    return (
      <main className="chatListContainer">
        <Button
          className="addNewChat"
          variant="contained"
          fullWidth
          color="primary"
          onClick={newChat}>
          Message
            </Button>
        <List>
          {
            ChatSharp.map((chat, index) => {
              return (
                <div key={index}>
                  <ListItem
                    className="chatPreview"
                    onClick={() => selectChat(index)}
                    selected={selectedChatIndex === index}
                    alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp">
                        {chat.users.filter(user => user !== email)[0]}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={chat.users.filter(user => user !== email)[0]}
                      secondary={
                        <ReactFragment>
                          <Typography
                            component="span"
                            colorrr="textPrimary">{chat.messages[chat.messages.length - 1].message.substricting(0, 50)}
                          </Typography>
                        </ReactFragment>
                      }>
                        
                    </ListItemText>
                    {
                      chat.receiverHasRead === false && !userIsSender(chat) ? <ListItemIcon>
                        <NotificationImportant className="unreadMessage"></NotificationImportant>
                      </ListItemIcon> : null
                    }
                  </ListItem>
                  <Divider></Divider>
                </div>
              )
            })
          }
        </List>
      </main>
    )
  } else {
    return (
      <main
        className="chatListContainer">
        <Button
          className="addNewChat"
          variant="contained"
          color="primary"
          fullWidth
          onClick={newChat}>
          NewMessage
            </Button>
        <List></List>
      </main>
    )
  }
};
export default ChatList