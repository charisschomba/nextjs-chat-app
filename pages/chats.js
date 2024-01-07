import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine),
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial),
);
export default function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();


  useEffect(() => {
    if (typeof document) {
      setShowChat(true);
    }
    if (!showChat) return <div />;
  });
  useEffect(() => {
    if (username.length === 0 || secret.length === 0) {
      router.push("/").then();
    }
  }, []);

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          userName={username}
          userSecret={secret}
          projectID="660d6863-7788-4690-8eaf-ed3aaf300634"
          renderNewMassageForm={(() => <MessageFormSocial />)}
        />
      </div>
    </div>
  );
}
