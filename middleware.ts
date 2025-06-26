// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Only protect the root path "/"
const isProtectedRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If not signed in and accessing "/", redirect to /sign-in (or any public page)
  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/"], // This ensures the middleware only runs on the root route "/"
};
