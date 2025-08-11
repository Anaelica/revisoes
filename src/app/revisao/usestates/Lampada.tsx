'use client'

import { useState } from "react";

export default function Lampada() {
  const [ligada, setLigada] = useState(false);

  const lampadaLigada = "/Lâmpada_isolada_em_fundo_transparente___PSD_Premium_gerado_com_IA-removebg-preview.png";
  const lampadaDesligada = "/ee454afb-ff0a-4bc0-934e-3c462cc00575-removebg-preview.png";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-300 p-6">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800 drop-shadow-md select-none">
        Clique para acender/apagar a lâmpada:
      </h1>


      <div className="w-48 h-48 mb-6 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center ">
        <img
          src={ligada ? lampadaLigada : lampadaDesligada}
          alt="Lâmpada"
          className={`max-w-full max-h-full transition-transform duration-500 ${
            ligada ? "scale-110" : "scale-100"
          }`}
          style={{ objectFit: "contain" }}
        />
      </div>

      <button
        onClick={() => setLigada(!ligada)}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 hover:scale-105 active:scale-95 transition-transform duration-300 select-none focus:outline-none focus:ring-4"
        aria-pressed={ligada}
      >
        {ligada ? "Desligar" : "Ligar"}
      </button>
    </div>
  );
}
