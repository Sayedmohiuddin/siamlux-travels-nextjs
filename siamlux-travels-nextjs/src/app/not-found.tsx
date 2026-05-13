import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="text-8xl font-display font-bold text-amber-400 mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-navy-800 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="btn-gold">Back to Home</Link>
          <Link href="/packages" className="btn-outline">View Packages</Link>
        </div>
      </div>
    </div>
  );
}
