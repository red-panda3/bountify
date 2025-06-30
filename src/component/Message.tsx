import { Chat, Channel, ChannelList, Window, MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";
const Message = () => {
    const apiKey = "ha7gjgkavk2m";
const chatClient = StreamChat.getInstance(apiKey);
const serverClient = StreamChat.getInstance(apiKey, "z9c33a2y359wc5mwfzrz47s35z2uxsaw6zjxfme4mtz43kkgrm3uehhs8vhyz5na");
const token = serverClient.createToken("user-id");
  return (
    <Chat client={chatClient}>
      <ChannelList />
      <Channel>
        <Window>
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </Chat>
  );
};
export default Message