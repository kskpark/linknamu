import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

/** 링크 하나의 클릭 수를 1 늘리고, 늘어난 값을 돌려준다: { count } */
export async function POST(_req: Request, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;

  // profile.ts에 있는 링크만 집계한다 (임의의 id로 문서가 쌓이는 것 방지).
  if (!profile.links.some((link) => link.id === id)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  try {
    const clicks = await getClicksCollection();
    const doc = await clicks.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return Response.json({ count: doc?.count ?? 1 });
  } catch (err) {
    console.error("[POST /api/clicks/:id]", err);
    return Response.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
