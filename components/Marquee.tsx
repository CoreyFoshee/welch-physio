export function Marquee({ words }: { words: string[] }) {
  const sequence = (
    <>
      {words.map((w) => (
        <span key={w} className="flex items-center gap-8">
          <span className="font-display text-2xl text-cream md:text-3xl">{w}</span>
          <span className="h-2 w-2 rounded-full bg-leaf" aria-hidden="true" />
        </span>
      ))}
    </>
  );
  return (
    <section
      aria-label={`Services: ${words.join(", ")}`}
      className="overflow-hidden bg-olive py-5"
    >
      <div className="marquee-track flex w-max items-center gap-8" aria-hidden="true">
        {sequence}
        {sequence}
        {sequence}
        {sequence}
      </div>
    </section>
  );
}
