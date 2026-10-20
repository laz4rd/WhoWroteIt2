export default function TopicDisplay({ topic, round }: { topic: string; round: number }) {
  return (
    <div className="animate-pop-in text-center">
      <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/40 mb-2">
        Round {String(round).padStart(2, "0")} · Topic
      </div>
      <div className="font-display text-4xl md:text-6xl font-bold uppercase text-white">
        {topic}
      </div>
    </div>
  );
}
