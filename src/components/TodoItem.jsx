function formatRelativeTime(createdAt) {
  const date = new Date(createdAt)
  const diffMs = Date.now() - date.getTime()
  const sec = Math.floor(diffMs / 1000)

  if (sec < 60) return 'Just now'

  const min = Math.floor(sec / 60)
  if (min < 60) return `${min} min ago`

  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr} hr ago`

  const day = Math.floor(hr / 24)
  if (day < 7) return `${day} day${day === 1 ? '' : 's'} ago`

  const now = new Date()
  const opts =
    date.getFullYear() === now.getFullYear()
      ? { month: 'short', day: 'numeric' }
      : { month: 'short', day: 'numeric', year: 'numeric' }
  return date.toLocaleDateString(undefined, opts)
}

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="group flex min-w-0 items-center gap-2 rounded-lg px-2 py-1 transition-colors hover:bg-zinc-50 sm:gap-3 sm:px-3 sm:py-2.5">
      <label className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-zinc-900/20">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 cursor-pointer rounded border-zinc-300 text-zinc-900 focus:ring-0 focus:ring-offset-0"
          aria-label={todo.completed ? 'Mark as not done' : 'Mark as done'}
        />
      </label>
      <span
        className={`min-w-0 flex-1 truncate text-sm ${
          todo.completed ? 'text-[#9CA3AF] line-through' : 'text-zinc-900'
        }`}
      >
        {todo.text}
      </span>
      <time
        className="hidden shrink-0 whitespace-nowrap text-xs text-zinc-400 tabular-nums sm:block"
        dateTime={new Date(todo.createdAt).toISOString()}
        title={new Date(todo.createdAt).toLocaleString()}
      >
        {formatRelativeTime(todo.createdAt)}
      </time>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="inline-flex h-11 min-h-11 w-11 min-w-11 shrink-0 items-center justify-center rounded-md text-xl leading-none text-zinc-400 transition-opacity duration-150 hover:bg-zinc-200/80 hover:text-zinc-700 sm:pointer-events-none sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100"
        aria-label="Delete todo"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  )
}
