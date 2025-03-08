import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("ミドルウェア", request.nextUrl.pathname);
  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/task"],
};
