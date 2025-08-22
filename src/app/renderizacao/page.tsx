
import React from 'react';
import LikeButton from '@/components/LikeButton';

export default function RenderizacaoPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center">
            <div className='flex text-black font-semibold p-6 rounded-lg shadow-md'>
                <h1>Renderização de Páginas</h1>
            </div>
            <div className="text-black font-semibold flex flex-col items-center">

                <LikeButton />
            </div>
        </div>
    );
}