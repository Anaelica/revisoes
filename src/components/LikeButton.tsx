'use client'

import {FaHeart} from 'react-icons/fa';
import { useState } from 'react';
import {FaRegHeart} from 'react-icons/fa';

export default function likebutton() {

    const [isLiked, setIsLiked] = useState (false);

  return (
    <div className="flex justify-center mt-10 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
        <button 
        onclick={() => {setIsLiked(!isLiked)}}
        className={`flex items-center space-x-2 rounded-2xl 

        `${isLiked ? 
        'text-red-500 ' : ' text-black'}
    }>
        <span><FaHeart/></span>
        <span>Curtir</span>
        </button>
    </div>
  );
}