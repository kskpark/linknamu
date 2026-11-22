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
  image: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "blog", title: "블로그", url: "https://example.com/blog" },
    { id: "youtube", title: "YouTube", url: "https://youtube.com" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com" },
  ],
};
