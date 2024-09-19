'use client'

import { createId } from '@paralleldrive/cuid2'
import { getCookie, setCookie } from 'cookies-next'
import { createContext, useContext, useEffect, useState } from 'react'

export interface Task {
  id: string
  completed: boolean
  title: string
}

interface ContextProps {
  tasks: Array<Task>

  createTask: (title: string) => void
  changeTaskCompletion: (taskId: string) => void
  deleteTask: (taskId: string) => void
}

const TasksContext = createContext({} as ContextProps)

function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Array<Task>>([])

  function createTask(title: string) {
    setTasks([...tasks, { id: createId(), completed: false, title }])

    setCookie('@focalPoint:tasks', [
      ...tasks,
      { id: createId(), completed: false, title },
    ])
  }

  function changeTaskCompletion(taskId: string) {
    const completionChangedTasks = tasks.map(task => {
      if (task.id !== taskId) return task

      return { id: task.id, completed: !task.completed, title: task.title }
    })

    setTasks(completionChangedTasks)

    setCookie('@focalPoint:tasks', completionChangedTasks)
  }

  function deleteTask(taskId: string) {
    const remainingTasks = tasks.filter(task => task.id !== taskId)

    setTasks(remainingTasks)

    setCookie('@focalPoint:tasks', remainingTasks)
  }

  useEffect(() => {
    const storedTasksCookies = getCookie('@focalPoint:tasks') as string

    if (!storedTasksCookies) {
      setTasks([])

      return
    }

    const storedTasks: Array<Task> = JSON.parse(storedTasksCookies)

    setTasks(storedTasks)
  }, [])

  return (
    <TasksContext.Provider
      value={{ tasks, createTask, changeTaskCompletion, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}

function useTasks() {
  const context = useContext(TasksContext)

  return context
}

export { TasksProvider, useTasks }
