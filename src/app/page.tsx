import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="warm-backdrop flex flex-1 justify-center px-7 pt-16 pb-10 sm:px-10 sm:pt-24">
      <div className="flex w-full max-w-[26rem] flex-col items-center">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        <div className="mt-12 w-full">
          <LinkList links={profile.links} />
        </div>
        <footer className="mt-auto pt-16 text-xs font-medium tracking-[0.2em] text-[#2b211c]/35 dark:text-[#f6ece4]/30">
          링크나무
        </footer>
      </div>
    </main>
  );
}
