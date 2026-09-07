import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5 py-24 bg-white">
      <span className="text-[13px] font-bold uppercase tracking-wider text-accent mb-3">404</span>
      <h1 className="text-3xl sm:text-4xl font-normal text-navy tracking-tight mb-4">
        Page not found
      </h1>
      <p className="text-slate text-base mb-8 max-w-md">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#00305f] transition-colors"
      >
        Back to home
      </Link>
    </section>
  )
}
