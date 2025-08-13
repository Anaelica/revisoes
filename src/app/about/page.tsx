'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Card from "@/components/Card";

const LikeButton = () => {
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
      className="flex items-center gap-1 bg-white/80 rounded-full px-3 py-1 shadow-md hover:bg-white transition absolute top-2 right-2 z-10"
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
};

const items = [
  {
    title: "Revisão de Componentes",
    description: "Revisão das aulas de React e Next.js",
    imageUrl: "https://i.pinimg.com/1200x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg",
    category: "Estudo",
  },
  {
    title: "Fall Gays",
    description: "Dispute com colegas em pistas desajeitadas e absurdas.",
    imageUrl: "https://i.pinimg.com/1200x/56/c4/8a/56c48a8d444890c076f74d043cae3c6a.jpg",
    category: "Jogo",
  },
  {
    title: "One Piece",
    description: "Luffy busca o tesouro lendário para se tornar o rei dos piratas.",
    imageUrl: "/baixados (3).jpg",
    category: "Anime",
  },
  {
    title: "Vingadores: Guerra Infinita",
    description: "É um filme de super-herói americano de 2018, baseado na equipe Vingadores da Marvel Comics",
    imageUrl: "https://i.pinimg.com/1200x/7d/c6/85/7dc685ee97872f4e5ed23d9e6503434b.jpg",
    category: "Filme",
  },
  {
    title: "Fortnite",
    description: "Reviva os primórdios do Battle Royale no Capítulo 1: Temporada 4. Mergulhe no passado e explore o mapa Raiz.",
    imageUrl: "https://i.pinimg.com/736x/44/c6/01/44c60130de437ec9b361d61b5f86e7a4.jpg",
    category: "Jogo",
  },
  {
    title: "Dandadan",
    description: "Uma missão espacial para salvar a humanidade.",
    imageUrl: "/Turbo Granny - Ken - Momo.jpg",
    category: "Anime",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200 text-gray-800">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Sobre nós</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Informações sobre a empresa, missão, valores e propósitos apresentados de forma clara.
        </p>
      </header>

      <main className="grid lg:grid-cols-3 gap-8 px-20 py-12 justify-center">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <LikeButton />
          </div>
        ))}
      </main>
    </div>
  );
}
