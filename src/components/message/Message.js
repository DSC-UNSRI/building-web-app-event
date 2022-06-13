import { useCallback, useEffect, useState } from 'react';
import CommentList from '../comment/CommentList';
import NewCommentForm from '../comment/NewCommentForm';

function Message(props) {
  const baseURL = 'https://strapi-demo-gdsc.herokuapp.com';

  const [data, setData] = useState(props);

  const fetchComments = async (messageId) => {
    try {
      const resp = await fetch(`${baseURL}/api/posts/${messageId}?populate=comments&sort=createdAt:desc`, {
        method: 'GET',
      });
      if (!resp.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await resp.json();
      const newData = {
        id: data.data.id,
        sender: data.data.attributes.nickname,
        content: data.data.attributes.message,
        comments: data.data.attributes.comments.data,
      };
      // reformat comments
      newData.comments = newData.comments.map((value) => ({
        id: value.id,
        content: value.attributes.message,
      }));
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = useCallback(async (message) => {
    try {
      const resp = await fetch(`${baseURL}/api/comments`, {
        method: 'POST',
        body: JSON.stringify({
          data: {
            message,
            nickname: null,
            post: props.id,
          },
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!resp.ok) {
        throw new Error('Telah terjadi kesalahan');
      }
      await fetchComments(props.id);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='message__wrapper'>
      <div className='message__content'>
        <h5>{data.sender}</h5>
        <p>{data.content}</p>
      </div>
      <NewCommentForm onAddComment={addComment} />
      <CommentList messageId={data.id} comments={data.comments} />
    </div>
  );
}

export default Message;
