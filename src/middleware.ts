import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/INVESTMENT" || pathname === "/Investment") {
    const url = request.nextUrl.clone();
    url.pathname = "/investment";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/INVESTMENT", "/Investment"],
};
