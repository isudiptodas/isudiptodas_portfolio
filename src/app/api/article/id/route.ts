import { NextResponse } from "next/server";
import { readArticle } from "@/lib/articlesHelper";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const encodedSlug = searchParams.get("slug");

    if (!encodedSlug) {
      return NextResponse.json(
        { message: "Missing slug parameter" },
        { status: 400 }
      );
    }

    // decode slug from query
    const slug = decodeURIComponent(encodedSlug);

    const article = await readArticle(slug);

    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json(
      { message: "Article not found" },
      { status: 404 }
    );
  }
}