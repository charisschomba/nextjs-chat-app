import React, { useContext } from "react";
import axios from "axios";
import  { useRouter} from "next/router";
import { Context } from "../context";

export default function Auth() {
  const context = useContext(Context);
  const { username, secret, setUsername, setSecret } = context;
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) {
      return;
    }
    axios.put(
      "https://api.chatengine.io/users",
      { username, secret },
      { headers: { "Private-key": "5d1a08bc-1a64-4301-976a-17c424de1413" } },
    ).then(r => router.push("/chats"));
  };
  return (
    <div className="background">
      <div className="auth-container">
        <div className="auth-form">
          <div className="auth-title">Conversify</div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Email"
                className="text-input"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                className="text-input"
                onChange={(e) => setSecret(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-button">
              Login / Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
