import { NextResponse } from "next/server";
import { readAllArticles } from "@/lib/articlesHelper";

export async function GET() {
  const articles = readAllArticles();
  return NextResponse.json(articles);
}