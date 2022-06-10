import Message from "./Message";

function MessageList(props) {
  return (
    <div className="message-list__wrapper">
      {props.messages.map(function (message) {
        return (
          <Message
            key={`message_${message.id}`}
            id={message.id}
            sender={message.sender}
            content={message.content}
            comments={message.comments}
          />
        );
      })}
    </div>
  );
}

export default MessageList;
