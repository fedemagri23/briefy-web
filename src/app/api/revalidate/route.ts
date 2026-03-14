import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env["REVALIDATE_SECRET"]) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/");
  revalidatePath("/news/item/[id]", "page");

  return NextResponse.json({ revalidated: true });
}