import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={176}
        height={176}
        priority
        className="size-36 rounded-full border-2 border-white object-cover shadow-md sm:size-44"
      />
      <h1 className="mt-5 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-1.5 text-base text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
