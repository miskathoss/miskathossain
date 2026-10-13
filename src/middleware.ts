import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = (request.headers.get("host") || "").toLowerCase();

  // Subdomain rewriting for Veronicana Holistic Therapies
  if (
    hostname.startsWith("veronicana.") ||
    hostname.startsWith("veronicanaholistictherapies.")
  ) {
    if (
      !pathname.startsWith("/_next") &&
      !pathname.startsWith("/assets") &&
      !pathname.startsWith("/api") &&
      !pathname.startsWith("/veronicana")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = `/veronicana${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Subdomain rewriting for CYV Coaching
  if (
    hostname.startsWith("cyvcoaching.") ||
    hostname.startsWith("cyv.")
  ) {
    if (
      !pathname.startsWith("/_next") &&
      !pathname.startsWith("/assets") &&
      !pathname.startsWith("/api") &&
      !pathname.startsWith("/cyvcoaching")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = `/cyvcoaching${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Subdomain rewriting for Shelley Bridgman
  if (
    hostname.startsWith("shelleybridgman.") ||
    hostname.startsWith("shelley.")
  ) {
    if (
      !pathname.startsWith("/_next") &&
      !pathname.startsWith("/assets") &&
      !pathname.startsWith("/api") &&
      !pathname.startsWith("/shelleybridgman")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = `/shelleybridgman${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Legacy route redirection
  if (pathname === "/INVESTMENT" || pathname === "/Investment") {
    const url = request.nextUrl.clone();
    url.pathname = "/investment";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets
     */
    "/((?!_next/static|_next/image|favicon.ico|assets/).*)",
  ],
};
