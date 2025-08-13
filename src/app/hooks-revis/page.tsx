// app/page.tsx
import MiniDisplay from "@/components/miniDisplay";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-2xl text-white font-bold mb-6">Exemplo de MiniDisplay</h1>
      <MiniDisplay />   
    </main>
  );
}
