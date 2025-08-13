'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

type DogImage = {
    message: string;
};

export default function DogsPage() {
    const [dog, setDog] = useState<DogImage>({ message: "" });
    const [loading, setLoading] = useState(false);

    const fetchDog = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await res.json();
            setDog(data);
        } catch (error) {
            console.error("Erro ao buscar imagem do cachorro:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDog();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 p-6">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6 animate-pulse">
                🐶 Cachorrinho Aleatório
            </h1>

            <div className="relative w-80 h-80 mb-6">
                {dog.message ? (
                    <Image
                        src={dog.message}
                        alt="Random dog"
                        fill
                        className="object-cover rounded-2xl shadow-2xl border-4 border-gray-300"
                        priority
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-2xl animate-pulse">
                        <span className="text-gray-500 text-lg">Carregando...</span>
                    </div>
                )}
            </div>

            <button
                onClick={fetchDog}
                disabled={loading}
                className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold shadow-md hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "Buscando..." : "Buscar outro cachorro"}
            </button>
        </div>
    );
}
