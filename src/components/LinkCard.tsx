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
      className="flex min-h-14 w-full items-center justify-center rounded-2xl border-2 border-zinc-900 bg-white px-5 py-4 text-center text-base font-semibold text-zinc-900 shadow-[0_3px_0_0_#18181b] transition active:translate-y-[3px] active:shadow-none hover:-translate-y-0.5 hover:shadow-[0_5px_0_0_#18181b] dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 dark:shadow-[0_3px_0_0_#f4f4f5] dark:hover:shadow-[0_5px_0_0_#f4f4f5]"
    >
      {title}
    </a>
  );
}
