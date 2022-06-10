import { useState } from "react";

function NewMessageForm() {
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

  const [enteredNickname, setEnteredNickname] = useState("");

  const enteredMessageIsValid = enteredMessage.trim() !== "";
  const messageInputInvalid = !enteredMessageIsValid && enteredMessageTouched;

  function handleMessageChange(event) {
    setEnteredMessage(event.target.value);
  }

  function handleNicknameChange(event) {
    setEnteredNickname(event.target.value);
  }

  function handleMessageBlur() {
    setEnteredMessageTouched(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEnteredMessageTouched(true);
    if (!enteredMessageIsValid) {
      return;
    }

    console.log(enteredMessage, enteredNickname);

    setEnteredMessage("");
    setEnteredMessageTouched(false);
    setEnteredNickname("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-message-form__message">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className={messageInputInvalid ? "invalid" : ""}
          onChange={handleMessageChange}
          onBlur={handleMessageBlur}
          value={enteredMessage}
          placeholder="Write secret message"
          maxLength="255"
          autoComplete="off"
        />
        {messageInputInvalid && <p>Message is required</p>}
      </div>
      <div className="new-message-form__nickname">
        <label htmlFor="nickname">Nickname</label>
        <input
          type="text"
          id="nickname"
          onChange={handleNicknameChange}
          value={enteredNickname}
          placeholder="Enter cool nickname"
          maxLength="100"
          autoComplete="off"
        />
      </div>
      <button className="new-message-form__submit" type="submit">
        Send Message
      </button>
    </form>
  );
}

export default NewMessageForm;
