import NewMessageForm from "./NewMessageForm";

function NewMessage() {
  return (
    <div className="new-message__wrapper">
      <div className="new-message__content">
        <h2>Send Secret Message To</h2>
        <h3>GDSC UNSRI</h3>
      </div>
      <NewMessageForm />
    </div>
  );
}

export default NewMessage;
