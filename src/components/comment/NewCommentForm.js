function NewCommentForm() {
  return (
    <form className="new-comment-form__wrapper">
      <input type="text" maxLength="50" />
      <button type="submit">Send</button>
    </form>
  );
}

export default NewCommentForm;
