import { useCallback, useEffect, useState } from "react";
import MessageList from "../components/message/MessageList";
import NewMessage from "../components/message/NewMessage";
import Container from "../components/ui/Container";
import Header from "../components/ui/Header";

const MessagePage = () => {
  const baseURL = "https://strapi-demo-gdsc.herokuapp.com";
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessages = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${baseURL}/api/posts?populate=comments&sort=createdAt:desc`
      );

      if (!response.ok) {
        throw new Error("Telah terjadi kesalahan");
      }
      const data = await response.json();

      // Load messages
      const loadedMessages = [];
      for (const message of data.data) {
        // Load comments
        const loadedComments = [];
        for (const comment of message.attributes.comments.data) {
          loadedComments.push({
            id: comment.id,
            content: comment.attributes.message,
          });
        }

        loadedMessages.push({
          id: message.id,
          content: message.attributes.message,
          sender: message.attributes.nickname,
          comments: loadedComments,
        });
      }
      setMessages(loadedMessages);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleAddMessage = async (message) => {
    const response = await fetch(`${baseURL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: message,
      }),
    });

    const data = await response.json();
    setMessages((prev) => [
      {
        id: data.data.id,
        content: data.data.attributes.message,
        sender: data.data.attributes.nickname,
        comments: [],
      },
      ...prev,
    ]);
  };

  const handleAddComment = () => {};

  return (
    <>
      <Header />
      <Container>
        <NewMessage onAddMessage={handleAddMessage} />
        {isLoading && !error && <p className="feedback">Loading...</p>}
        {error && <p className="feedback">{error}</p>}
        {!isLoading && !error && (
          <MessageList messages={messages} onAddComment={handleAddComment} />
        )}
      </Container>
    </>
  );
};

export default MessagePage;
