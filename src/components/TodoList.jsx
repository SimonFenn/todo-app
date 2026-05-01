import EmptyState from './EmptyState.jsx'
import ErrorState from './ErrorState.jsx'
import LoadingState from './LoadingState.jsx'
import TodoItem from './TodoItem.jsx'

export default function TodoList({
  todos,
  loading,
  error,
  onToggle,
  onDelete,
  onRetry,
}) {
  let content

  if (loading) {
    content = <LoadingState />
  } else if (error) {
    content = <ErrorState onRetry={onRetry} />
  } else if (todos.length === 0) {
    content = <EmptyState />
  } else {
    content = (
      <ul className="mt-4 min-w-0 max-w-full divide-y divide-zinc-100 overflow-hidden rounded-lg border border-zinc-200 bg-white">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    )
  }

  return content
}
