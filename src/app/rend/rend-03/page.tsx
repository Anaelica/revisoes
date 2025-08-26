"use client"
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function List() {
  const [items, setItems] = useState([
    { id: 1, nome: "Pão", comprado: false },
    { id: 2, nome: "Presunto", comprado: false },
    { id: 3, nome: "Queijo", comprado: false },
    { id: 4, nome: "Bolo", comprado: false },
  ]);

  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  return (
    <div className="flex items-center justify-center w-100 to-white px-4">
      <div className="backdrop-blur-md bg-white/80 shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/40">

        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700 tracking-tight drop-shadow-sm">
          🛒 Minha Lista
        </h1>

        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="flex items-center justify-between p-4 rounded-2xl cursor-pointer
                         bg-white shadow-sm hover:shadow-md hover:scale-[1.02]
                         transition-all duration-300 border border-gray-100"
            >
              <span
                className={`text-lg font-semibold transition-all duration-300 ${item.comprado
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                  }`}
              >
                {item.nome}
              </span>

              {item.comprado ? (
                <FaCheckCircle className="text-blue-500 text-2xl transition-transform duration-300 scale-110" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 transition-all"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
