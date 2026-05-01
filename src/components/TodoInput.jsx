import { useRef, useState } from 'react'

export default function TodoInput({ onAdd = () => {}, disabled = false }) {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const trimmed = value.trim()
  const canSubmit = trimmed.length > 0

  function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit) return
    onAdd(trimmed)
    setValue('')
    inputRef.current?.focus()
  }

  return (
    <form
      className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-2"
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder="What needs to be done?"
        className="min-h-11 w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-400 sm:flex-1"
        aria-label="New todo"
      />
      <button
        type="submit"
        disabled={!canSubmit || disabled}
        className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:text-zinc-400 disabled:hover:bg-zinc-200 sm:w-auto"
      >
        Add
      </button>
    </form>
  )
}
