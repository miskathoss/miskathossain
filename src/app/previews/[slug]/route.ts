import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const candidatePaths = [
    path.join(process.cwd(), "previews", slug, "index.html"),
    path.join(process.cwd(), "public", "previews", slug, "index.html"),
    path.join(process.cwd(), "public", "preview", slug, "index.html"),
  ];

  for (const filePath of candidatePaths) {
    if (fs.existsSync(filePath)) {
      const html = fs.readFileSync(filePath, "utf-8");
      return new NextResponse(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "X-Robots-Tag": "noindex, nofollow",
          "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
        },
      });
    }
  }

  return new NextResponse(
    `<!DOCTYPE html><html><body style="font-family:sans-serif;text-align:center;padding:50px;"><h2>Preview Not Found</h2><p>No preview generated for slug: ${slug}</p><a href="/">Return to Home</a></body></html>`,
    {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    }
  );
}
