'use client'

import { useState } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward} from "react-icons/fa";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col text-black items-center justify-center p-6">
      <div className="w-full max-w-lg h-1 bg-gray-300 rounded-full mb-6">
        <div className="w-3/4 h-1 bg-black rounded-full relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
        </div>
      </div>

      <div className="flex items-center justify-between w-50 space-x-6">
        <FaStepBackward className="text-2xl cursor-pointer" />
        
        <button 
          onClick={togglePlay} 
          className="p-4 border-2 border-black rounded-full flex items-center justify-center"
        >
          {isPlaying ? <FaPause className="text-3xl" /> : <FaPlay className="text-3xl ml-1" />}
        </button>
        
        <FaStepForward className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}
