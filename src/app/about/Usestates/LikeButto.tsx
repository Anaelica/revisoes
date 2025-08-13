'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    setIsLiked(true);
    setTimeout(() => setIsLiked(false), 300);
  };

  return (
    <motion.button
      onClick={handleLike}
      whileTap={{ scale: 0.8 }}
      className="flex items-center gap-1 bg-white/80 rounded-full px-3 py-1 shadow-md hover:bg-white transition absolute top-2 right-2"
    >
      <motion.div
        animate={isLiked ? { scale: [1, 1.4, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <Heart
          size={20}
          className={isLiked ? "fill-red-500 text-red-500" : "text-red-500"}
        />
      </motion.div>
      <span className="text-sm font-medium">{likes}</span>
    </motion.button>
  );
}
