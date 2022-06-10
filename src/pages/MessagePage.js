import MessageList from "../components/message/MessageList";
import NewMessage from "../components/message/NewMessage";
import Container from "../components/ui/Container";
import Header from "../components/ui/Header";

const MessagePage = () => {
  const MESSAGE_DATA = [
    {
      id: 1,
      content: "Haloo",
      sender: "Artaramadanti",
      comments: [
        {
          id: 1,
          content: "Halo juga",
        },
        {
          id: 2,
          content: "Ehm",
        },
      ],
    },
    {
      id: 2,
      content: "test",
      sender: "SebutSajaAchmad",
      comments: [],
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <NewMessage />
        <MessageList messages={MESSAGE_DATA} />
      </Container>
    </>
  );
};

export default MessagePage;
