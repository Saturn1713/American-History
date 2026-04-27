export function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border-4 border-gold bg-navy shadow-museum">
      <div className="border-b border-gold/40 bg-navy px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-crimson" />
          Now Playing
        </div>
        <div className="mt-1 font-display text-base text-parchment">{title}</div>
      </div>
      <div className="relative aspect-video w-full bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
