export default function ErrorState({ onRetry }) {
  return (
    <div
      className="mt-4 flex min-w-0 flex-col items-center rounded-lg border border-amber-200 bg-gradient-to-b from-amber-50 to-red-50 px-4 py-8 text-center sm:px-6"
      role="alert"
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 ring-1 ring-inset ring-amber-200/80"
        aria-hidden="true"
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
      </div>
      <p className="mt-4 max-w-full text-sm font-medium leading-relaxed text-red-900 sm:max-w-sm">
        Something went wrong loading your todos.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-5 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-red-800 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 focus:ring-offset-amber-50"
      >
        Retry
      </button>
    </div>
  )
}
