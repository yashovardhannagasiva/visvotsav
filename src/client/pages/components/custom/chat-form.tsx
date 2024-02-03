
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Textarea } from '../../../components/ui/textarea';
import { Button } from '../../../components/ui/button';
import { Image, SendHorizonal } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import MessageCard from './message-card';

interface Message {
  content: string;
  time: string;
}

const ChatForm = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    if (message.trim() !== '') {
        const currentTime = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

     
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: message, time: currentTime },
      ]);

   
      setMessage('');
    }
  };

  return (
    <Card className="p-0 h-screen my-2 flex flex-col">
      <CardHeader>
        <CardTitle className="mb-5">Live Chat</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 w-full flex flex-col gap-3">
        {/* Render MessageCard for each message in the array */}
        {messages.map((msg, index) => (
          <MessageCard key={index} message={msg.content} time={msg.time} />
        ))}
      </CardContent>
      <CardContent className="w-full relative">
        <Textarea
          placeholder="Message"
          className="resize-none"
          rows={2}
          value={message}
          onChange={handleInputChange}
        ></Textarea>
        <div className="absolute bottom-[30px] right-[30px]">
          <Button className="rounded-full p-2 ml-2" variant="ghost">
            <Image className="h-6 w-6" />
          </Button>
          <Button className="rounded-full p-2 ml-2" onClick={handleClick}>
            <SendHorizonal className="h-6 w-6" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};





export default ChatForm;