'use client'

import { useState } from "react"

export default function MiniDisplay() {

    const [display, setDisplay] = useState("")

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="flex justify-end text-black items-center border border-gray-400 bg-gray-100 rounded-lg px-4 w-64 h-14 text-2xl font-mono overflow-hidden whitespace-nowrap shadow-md">
                {display || <span className="text-gray-400">0</span>}
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
                {[..."1234567890"].map((num) => (
                    <button
                        key={num}
                        className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold p-4 rounded-lg shadow-md w-19 transition-all active:scale-95"
                        onClick={() => setDisplay(display.length < 15 ? display + num : display)}
                    >
                        {num}
                    </button>
                ))}

                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg col-span-2 p-4 rounded-lg shadow-md transition-all active:scale-95"
                    onClick={() => setDisplay(display.slice(0, -1))}
                >
                    ⌫ Apagar
                </button>
            </div>
        </div>
    )
}
