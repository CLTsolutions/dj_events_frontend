export const API_URL =
  // 'next public' visible within client (Nextjs environment variables requires this)
  // process.env is the environment variable for deployment
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
