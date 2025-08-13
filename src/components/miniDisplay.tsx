'use client'

import { useState } from "react"

export default function MiniDisplay() {
    const [display, setDisplay] = useState("")

    const handleClick = (value) => {
        if (display.length < 20) setDisplay(display + value)
    }

    const calculateResult = () => {
        try {
            const expression = display.replace(/×/g, '*').replace(/÷/g, '/')
            const result = eval(expression) // ⚠️ Apenas para testes
            setDisplay(result.toString())
        } catch {
            setDisplay("Erro")
        }
    }

    const buttons = [
        { label: "C", color: "bg-gray-400 text-black", action: () => setDisplay("") },
        { label: "%", color: "bg-gray-400 text-black", action: () => handleClick("%") },
        { label: "⌫", color: "bg-gray-400 text-black", action: () => setDisplay(display.slice(0, -1)) },
        { label: "÷", color: "bg-orange-500 text-white", action: () => handleClick("÷") },

        { label: "7", color: "bg-gray-700 text-white", action: () => handleClick("7") },
        { label: "8", color: "bg-gray-700 text-white", action: () => handleClick("8") },
        { label: "9", color: "bg-gray-700 text-white", action: () => handleClick("9") },
        { label: "×", color: "bg-orange-500 text-white", action: () => handleClick("×") },

        { label: "4", color: "bg-gray-700 text-white", action: () => handleClick("4") },
        { label: "5", color: "bg-gray-700 text-white", action: () => handleClick("5") },
        { label: "6", color: "bg-gray-700 text-white", action: () => handleClick("6") },
        { label: "-", color: "bg-orange-500 text-white", action: () => handleClick("-") },

        { label: "1", color: "bg-gray-700 text-white", action: () => handleClick("1") },
        { label: "2", color: "bg-gray-700 text-white", action: () => handleClick("2") },
        { label: "3", color: "bg-gray-700 text-white", action: () => handleClick("3") },
        { label: "+", color: "bg-orange-500 text-white", action: () => handleClick("+") },

        { label: "0", color: "bg-gray-700 text-white h-16 w-32 col-span-2", action: () => handleClick("0") },
        { label: ".", color: "bg-gray-700 text-white", action: () => handleClick(".") },
        { label: "=", color: "bg-orange-500 text-white", action: calculateResult }
    ]

    return (
        <div className="flex flex-col items-center mt-10 bg-[#222] p-6 rounded-[2rem] shadow-2xl w-80">
            
            {/* Display */}
            <div className="flex flex-col items-end w-full text-white mb-6">
                <div className="text-lg text-gray-400">
                    {display.includes("=") ? display.split("=")[0] : ""}
                </div>
                <div className="text-5xl font-light overflow-hidden whitespace-nowrap">
                    {display || "0"}
                </div>
            </div>

            {/* Botões */}
            <div className="grid grid-cols-4 gap-3 w-full">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        className={`${btn.color} rounded-full py-4 text-2xl font-medium active:scale-95 transition-transform`}
                        style={{ aspectRatio: "1 / 1" }}
                        onClick={btn.action}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
