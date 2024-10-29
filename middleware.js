import { NextResponse } from 'next/server';
export function middleware(req) {
  const path = req.nextUrl.pathname;

  const publicPaths = ['/', '/login', '/register', '/forgetPassword', "/RegistrationReward"];
  const isAuthenticated = !!req.cookies.get('sessionId');

  console.log('Cookie check:', req.cookies.get('sessionId'));
  console.log('Middleware check:', { path, isAuthenticated });

  if (!isAuthenticated && !publicPaths.includes(path)) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthenticated && publicPaths.includes(path)) {
    const dashboardUrl = new URL('/dashboard', req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|favicon.ico|api|static|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg)).*)'],
};
