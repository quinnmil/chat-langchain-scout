"use client";

import { ChatWindow } from "../app/components/ChatWindow";
import { ToastContainer } from "react-toastify";

import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <ToastContainer />
      <ChatWindow
        titleText="Chat Scout"
        placeholder="Ask me anything"
      ></ChatWindow>
    </ChakraProvider>
  );
}
