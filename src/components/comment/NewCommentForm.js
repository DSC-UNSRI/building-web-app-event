import { useState } from 'react';

function NewCommentForm(props) {

  const [enteredComment, setEnteredComment] = useState('');

  const handleCommentChange = (event) => {
    setEnteredComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredComment.trim() === '') {
      return;
    }

    props.onAddComment(enteredComment);
    setEnteredComment('');
  };

  return (
    <form onSubmit={handleSubmit} className='new-comment-form__wrapper'>
      <input type='text' maxLength='50' value={enteredComment} onChange={handleCommentChange} />
      <button type='submit'>Send</button>
    </form>
  );
}

export default NewCommentForm;
