import { Tabs, TabsContent, TabsTrigger } from "../../components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Image,
  Mail,
  MessageCircle,
  SendHorizonal,
  User,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { ChangeEvent, useState } from "react";
import ContactForm from "./custom/contact-form";
import ChatForm from "./custom/chat-form";

const Contact = () => {

  return (
    <section className="w-full p-3 min-h-screen flex-col flex justify-center items-center">
        <h2 className="text-foreground font-bold text-4xl mt-5 mb-10 cursor-pointer">
        Contact
      </h2>
      <Tabs defaultValue="contact-form" className=" md:w-3/4 lg:w-1/2 w-full ">
        <TabsList className="grid w-full grid-cols-2 bg-gray-700/20 rounded-sm ">
          <TabsTrigger value="contact-form">Contact form</TabsTrigger>
          <TabsTrigger value="live-chat">Chat Online</TabsTrigger>
        </TabsList>
        <TabsContent value="contact-form">
         <ContactForm/>
        </TabsContent>
        <TabsContent value="live-chat">
         <ChatForm/>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Contact;
