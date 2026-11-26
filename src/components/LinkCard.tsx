type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-h-[3.75rem] w-full items-center justify-center rounded-3xl border border-white/70 bg-white/45 px-6 py-4 text-center text-[0.9375rem] font-semibold tracking-[-0.01em] text-[#2b211c] shadow-[0_8px_24px_-12px_rgba(120,60,30,0.25),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl backdrop-saturate-150 transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_12px_28px_-12px_rgba(120,60,30,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c96f4a] active:translate-y-0 active:bg-white/55 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-[#f6ece4] dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
