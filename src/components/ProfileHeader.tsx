import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 흰 테두리 링 + 부드러운 그림자로 살짝 떠 보이게 */}
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_18px_40px_-12px_rgba(120,60,30,0.35),0_4px_10px_-4px_rgba(120,60,30,0.2)] ring-1 ring-white/80 dark:bg-white/10 dark:ring-white/15 dark:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)]">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={240}
          height={240}
          priority
          className="size-28 rounded-full object-cover sm:size-32"
        />
      </div>
      <h1 className="mt-6 text-[1.375rem] font-bold tracking-[-0.02em]">{name}</h1>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-[#2b211c]/60 dark:text-[#f6ece4]/60">
        {bio}
      </p>
    </header>
  );
}
