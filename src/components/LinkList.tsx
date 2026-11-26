"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

type Counts = Record<string, number>;

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모두 0회
  const [counts, setCounts] = useState<Counts>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져온다.
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Counts>;
      })
      // 응답 전에 클릭해서 이미 늘어난 값이 있으면 큰 쪽을 유지한다.
      .then((data) =>
        setCounts((prev) => {
          const next = { ...data };
          for (const [id, n] of Object.entries(prev)) next[id] = Math.max(n, next[id] ?? 0);
          return next;
        }),
      )
      .catch((err) => {
        if (err.name !== "AbortError") console.error("클릭 수 불러오기 실패:", err);
      });
    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    // 화면은 바로 +1 하고, 서버 응답이 오면 실제 값으로 맞춘다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${encodeURIComponent(id)}`, { method: "POST", keepalive: true })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<{ count: number }>;
      })
      .then(({ count }) => setCounts((prev) => ({ ...prev, [id]: count })))
      .catch((err) => console.error("클릭 수 저장 실패:", err));
  }

  if (links.length === 0) {
    return (
      <p className="text-center text-sm text-[#2b211c]/50 dark:text-[#f6ece4]/50">
        아직 등록된 링크가 없어요.
      </p>
    );
  }

  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            clicks={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
