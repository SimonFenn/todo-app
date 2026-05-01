const ROWS = [
  { bar: 'w-[88%]' },
  { bar: 'w-[58%]' },
  { bar: 'w-[72%]' },
]

export default function LoadingState() {
  return (
    <div className="mt-4 min-w-0">
      <p className="sr-only">Loading…</p>
      <ul
        className="min-w-0 max-w-full divide-y divide-zinc-100 overflow-hidden rounded-lg border border-zinc-200 bg-white"
        aria-busy="true"
        aria-label="Loading todos"
      >
        {ROWS.map((row, i) => (
          <li
            key={i}
            className="flex min-w-0 items-center gap-2 px-2 py-1 sm:gap-3 sm:px-3 sm:py-2.5"
          >
            <div
              className="h-11 w-11 shrink-0 rounded-md bg-zinc-200 animate-pulse"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1" aria-hidden="true">
              <div
                className={`h-4 rounded-md bg-zinc-200 animate-pulse ${row.bar}`}
              />
            </div>
            <div
              className="hidden h-3 w-12 shrink-0 rounded bg-zinc-200 animate-pulse sm:block"
              aria-hidden="true"
            />
            <div
              className="h-11 w-11 shrink-0 rounded-md bg-zinc-200 animate-pulse"
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
