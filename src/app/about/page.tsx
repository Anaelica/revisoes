import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200 text-gray-800">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Sobre nós</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Informações sobre a empresa, missão, valores e propósitos apresentados de forma clara.
        </p>
      </header>

      <main className="flex items-center gap-7 justify-center px-4 py-10">
        <Card
          title="Revisão de Componentes"
          description="Revisão das aulas de React e Next.js"
          imageUrl="https://i.pinimg.com/1200x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg"
        />
        {/* <Card
          title="React Framework"
          description="Revisão das aulas de React e Next.js"
          imageUrl="https://i.pinimg.com/1200x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg"
        />
        <Card
          title="NextJs"
          description="Revisão das aulas de React e Next.js"
          imageUrl="https://i.pinimg.com/1200x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg"
        /> */}
      </main>
    </div>
  );
}
