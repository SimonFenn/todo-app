export default function EmptyState() {
  return (
    <div className="mt-4 flex min-w-0 flex-col items-center justify-center rounded-lg border border-dashed border-zinc-200 bg-zinc-50 px-4 py-12 text-center sm:px-6">
      <svg
        className="h-12 w-12 max-w-full shrink-0 text-zinc-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="7" y="3" width="10" height="4" rx="1" />
        <rect x="5" y="6" width="14" height="15" rx="2" />
        <path d="M9 11h6M9 15h4" />
      </svg>
      <h2 className="mt-4 text-base font-semibold tracking-tight text-zinc-600">
        All clear!
      </h2>
      <p className="mt-2 max-w-full text-sm leading-relaxed text-zinc-500 sm:max-w-sm">
        Add your first task above to get started.
      </p>
    </div>
  )
}
