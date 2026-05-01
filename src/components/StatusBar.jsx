export default function StatusBar({ count, completedCount, onClearCompleted }) {
  const total = count + completedCount
  if (total === 0) return null

  const itemsLabel = count === 1 ? 'item' : 'items'

  return (
    <footer className="mt-3 flex min-w-0 flex-wrap items-center justify-between gap-2 border-t border-zinc-200 pt-3 text-xs text-zinc-500">
      <p className="min-w-0 tabular-nums">
        {count} {itemsLabel} left
      </p>
      {completedCount > 0 && (
        <button
          type="button"
          onClick={onClearCompleted}
          className="inline-flex min-h-11 max-w-full shrink-0 items-center justify-center rounded-md px-3 text-left text-zinc-500 underline-offset-2 transition hover:bg-zinc-100 hover:text-zinc-700"
        >
          Clear completed
        </button>
      )}
    </footer>
  )
}
