import { useCallback, useEffect, useRef, useState } from 'react'
import AppShell from './components/AppShell.jsx'
import Header from './components/Header.jsx'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'
import StatusBar from './components/StatusBar.jsx'

const LOAD_MS = 1200

function buildMockTodos() {
  const t = Date.now()
  return [
    {
      id: t,
      text: 'Review BMAD artifacts',
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: t + 1,
      text: 'Build Todo prototype in Cursor',
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: t + 2,
      text: 'Write the README',
      completed: false,
      createdAt: new Date().toISOString(),
    },
  ]
}

export default function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const loadTimerRef = useRef(null)

  const clearLoadTimer = useCallback(() => {
    if (loadTimerRef.current != null) {
      clearTimeout(loadTimerRef.current)
      loadTimerRef.current = null
    }
  }, [])

  useEffect(() => {
    loadTimerRef.current = setTimeout(() => {
      setTodos(buildMockTodos())
      setLoading(false)
      loadTimerRef.current = null
    }, LOAD_MS)
    return () => clearLoadTimer()
  }, [clearLoadTimer])

  const handleAdd = useCallback((text) => {
    setTodos((prev) => [
      {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ])
  }, [])

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }, [])

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [])

  const handleClearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }, [])

  const handleRetry = useCallback(() => {
    setError(false)
    setLoading(true)
    clearLoadTimer()
    loadTimerRef.current = setTimeout(() => {
      setLoading(false)
      loadTimerRef.current = null
    }, LOAD_MS)
  }, [clearLoadTimer])

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <AppShell>
      <Header />
      <TodoInput onAdd={handleAdd} disabled={loading} />
      <TodoList
        todos={todos}
        loading={loading}
        error={error}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onRetry={handleRetry}
      />
      <StatusBar
        count={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleClearCompleted}
      />
    </AppShell>
  )
}
