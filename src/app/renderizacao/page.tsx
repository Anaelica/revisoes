import MusicPlayer from "./player/player";

export default function home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Music Player</h1>
      <MusicPlayer />
    </div>
  );
}