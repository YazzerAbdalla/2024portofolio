// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-lvh items-center justify-center bg-primary text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <Link className="text-white underline" href="/">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
