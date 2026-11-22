import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  if (links.length === 0) {
    return (
      <p className="text-center text-sm text-zinc-500">아직 등록된 링크가 없어요.</p>
    );
  }

  return (
    <ul className="flex w-full flex-col gap-6">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard title={link.title} url={link.url} />
        </li>
      ))}
    </ul>
  );
}
