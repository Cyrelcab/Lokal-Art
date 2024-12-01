import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function Message() {
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [messages, setMessages] = useState([]); // State to store messages
  const [inputMessage, setInputMessage] = useState(""); // State to store current input

  const openMessage = () => {
    setShowMessage(true);
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Add the new message to the list of messages
      setMessages((prevMessages) => [...prevMessages, inputMessage]);
      setInputMessage(""); // Clear the input field
    }
  };

  useEffect(() => {
    const storedName = sessionStorage.getItem("userName");
    const storedProfilePic = sessionStorage.getItem("profilePic");

    setName(storedName || "User");
    setProfilePic(storedProfilePic || "default-pic.png");
  }, []);

  return (
    <div>
      <button
        onClick={openMessage}
        className="border px-8 py-2 rounded-full bg-cyan-400 text-white hover:bg-cyan-500"
      >
        Message
      </button>

      {showMessage && (
        <div
          onClick={closeMessage}
          className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-[26.5rem] h-[32rem] rounded-lg"
          >
            <button
              className="absolute top-[-20px] right-0 px-3 rounded text-4xl text-bold hover:text-red-400"
              onClick={closeMessage}
            >
              _
            </button>
            <div className="border-b-2 p-5 flex items-center">
              <img
                src={profilePic}
                alt="Profile"
                className="w-8 h-8 rounded-full mr-3"
              />
              <span>{name}</span>
            </div>
            <div className="p-7 h-[25rem] flex flex-col-reverse overflow-y-auto w-full">
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className="p-2 mb-2 border rounded-full bg-gray-100 self-end max-w-[80%] text-right"
                  >
                    {msg}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 mb-4">No messages yet.</p>
              )}
            </div>

            <div className="inline-flex absolute bottom-1 items-center p-3 border-t">
              <button className="px-3 py-1 text-cyan-400">
                <Icon icon="mdi:paperclip" width="24" height="24" />
              </button>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message"
                className="w-[15rem] sm:w-[19rem] px-4 py-2 border border-gray-400 rounded-xl focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className=" px-3 py-1 text-cyan-400"
              >
                <Icon icon="fluent:send-28-filled" width="28" height="28" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
