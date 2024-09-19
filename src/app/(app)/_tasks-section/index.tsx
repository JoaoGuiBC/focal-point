'use client'

import { useTasks } from '@/contexts/task-context'

import { TaskCard } from '@/components/task-card'

import './style.scss'

export function TasksSection() {
  const { tasks } = useTasks()

  return (
    <div className="tasks-sections">
      <span className="task-section-title">Suas tarefas de hoje</span>

      <div className="section">
        {tasks
          .filter(task => !task.completed)
          .map(task => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              isChecked={task.completed}
            />
          ))}
      </div>

      <span className="task-section-title">Tarefas finalizadas</span>

      <div className="section">
        {tasks
          .filter(task => task.completed)
          .map(task => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              isChecked={task.completed}
            />
          ))}
      </div>
    </div>
  )
}
