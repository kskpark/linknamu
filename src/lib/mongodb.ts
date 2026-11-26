import "server-only";
import { MongoClient, type Collection } from "mongodb";

/** clicks 컬렉션 문서: _id = 링크 id */
export type ClickDoc = { _id: string; count: number };

// 개발 모드의 핫 리로드나 서버리스 인스턴스 재사용 때
// 연결이 계속 새로 생기지 않도록 클라이언트를 전역에 한 번만 만든다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경변수가 설정되지 않았습니다 (.env.local 확인).");
    }
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      // 연결 실패 시 다음 요청에서 다시 시도할 수 있게 캐시를 비운다.
      globalForMongo._mongoClientPromise = undefined;
      throw err;
    });
  }
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection(): Promise<Collection<ClickDoc>> {
  const client = await getClient();
  // DB 이름은 URI 경로(/linknamu)를 따른다.
  return client.db().collection<ClickDoc>("clicks");
}
