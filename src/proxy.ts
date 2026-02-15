// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

// Configure your locales
const locales = ['en', 'ar'];
const defaultLocale = 'en';

// Create the next-intl middleware
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always', // or 'always' to always show locale in URL
  localeDetection: true, // Auto-detect user's locale from browser
});

export default function middleware(req: NextRequest) {
  // You can add custom logic here before or after intl middleware
  
  // Example: Add custom headers
  const response = intlMiddleware(req);
  
  // Add custom headers to all responses
  /* response.headers.set('X-Custom-Header', 'custom-value'); */
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)',
    '/(api|trpc)(.*)'
  ]
};