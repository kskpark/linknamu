import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-zinc-100 px-5 py-12 dark:bg-black sm:py-16">
      <div className="flex w-full max-w-md flex-col items-center gap-10">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        <LinkList links={profile.links} />
        <footer className="mt-auto pt-6 text-xs text-zinc-400">링크나무</footer>
      </div>
    </main>
  );
}
