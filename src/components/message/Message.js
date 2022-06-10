import CommentList from "../comment/CommentList";
import NewCommentForm from "../comment/NewCommentForm";

function Message(props) {
  return (
    <div className="message__wrapper">
      <div className="message__content">
        <h5>{props.sender}</h5>
        <p>{props.content}</p>
      </div>
      <NewCommentForm />
      <CommentList messageId={props.id} comments={props.comments} />
    </div>
  );
}

export default Message;
