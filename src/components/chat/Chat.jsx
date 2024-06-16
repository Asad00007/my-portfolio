"use client";
import { useRef, useState } from "react";
import { FaMusic } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

const Chat = () => {
  const [showChat, setShowChat] = useState(false);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-10 right-5 shadow-custom-blue p-3 rounded-full bg-white z-40 ">
      <div
        className={`shadow-custom-full bg-white p-4 px-5 absolute bottom-5 right-10 rounded-3xl w-[270px] flex flex-col gap-4 items-center justify-center transition duration-300 ease-in origin-bottom-right ${
          showChat ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div
          className="absolute left-5 top-3 text-2xl cursor-pointer"
          onClick={() => setShowChat(false)}
        >
          &times;
        </div>
        <h1 className="text-xl font-semibold mb-2">Hi There!</h1>
        <div className="p-2 px-4 rounded-3xl bg-primary text-white w-[230px] flex justify-center">
          What are you upto now?
        </div>
        <div className="p-2 px-4 rounded-3xl bg-primary text-white w-[230px] flex justify-center">
          What personal projects are you working on?
        </div>
        <div className="p-2 px-4 rounded-3xl bg-primary text-white flex items-center gap-3 w-[230px] justify-center">
          <FaMusic />
          <span onClick={handlePlayPause} className="cursor-pointer">
            {isPlaying ? "Pause" : "Play"} theme song
          </span>
          <audio ref={audioRef} src="/themeSong.mp3" />
        </div>
      </div>
      <MdMessage
        className="text-2xl cursor-pointer"
        onClick={() => setShowChat(!showChat)}
      />
    </div>
  );
};

export default Chat;
