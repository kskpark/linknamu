// 메인 페이지에 표시할 프로필과 링크 목록.
// 지금은 이 파일을 직접 고쳐서 내용을 바꾼다.

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 기준 경로 또는 외부 이미지 URL */
  image: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "박 대니얼",
  bio: "바이브코딩 입문",
  image: "/profile.jpeg",
  links: [
    { id: "github", title: "깃허브", url: "https://github.com/kskpark" },
    { id: "blog", title: "블로그", url: "https://vercel.com/kskpark" },
    { id: "email", title: "이메일", url: "mailto:kskpark1@naver.com" },
  ],
};
