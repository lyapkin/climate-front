import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const apiKey = (await headers()).get("API-key");

  if (process.env.REVALIDATE_KEY !== apiKey) {
    notFound();
  }

  const searchParams = request.nextUrl.searchParams;
  const tags = searchParams.getAll("tags");
  if (tags.length) {
    for (const tag of tags) {
      revalidateTag(tag, { expire: 0 });
    }
  }

  return new Response();
}
