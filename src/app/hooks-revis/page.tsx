// app/page.tsx
import MiniDisplay from "@/components/miniDisplay";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl text-blue-950 font-bold mb-6">Exemplo de MiniDisplay</h1>
      <MiniDisplay />   
    </main>
  );
}
