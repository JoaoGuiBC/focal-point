'use client'

import { Check } from 'lucide-react'

import { useTasks } from '@/contexts/task-context'

import { DeleteTaskDialogTrigger } from '../dialogs/delete-task'

import './style.scss'

interface TaskCardProps {
  id: string
  title: string
  isChecked: boolean
}

export function TaskCard({ id, title, isChecked }: TaskCardProps) {
  const { changeTaskCompletion } = useTasks()

  return (
    <div className="task-card-container">
      <button
        onClick={() => changeTaskCompletion(id)}
        className="check-button"
        data-checked={isChecked}
        type="button"
      >
        {isChecked && <Check />}
      </button>

      <span data-checked={isChecked}>{title}</span>

      <DeleteTaskDialogTrigger taskId={id} />
    </div>
  )
}
