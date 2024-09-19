'use client'

import { useState } from 'react'
import { Trash } from 'lucide-react'

import { Button } from '@/components/button'

import './style.scss'
import { useTasks } from '@/contexts/task-context'

interface DeleteTaskDialogTriggerProps {
  taskId: string
}

export function DeleteTaskDialogTrigger({ taskId }: DeleteTaskDialogTriggerProps) {
  const [isVisible, setIsVisible] = useState(false)

  function handleChangeVisibility() {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <button onClick={handleChangeVisibility} className="delete-button" type="button">
        <Trash />
      </button>
      <div className="overlay" data-is-visible={isVisible}>
        <DeleteTaskDialog
          taskId={taskId}
          isVisible={isVisible}
          closeDialog={handleChangeVisibility}
        />
      </div>
    </>
  )
}

interface DeleteTaskDialogProps {
  taskId: string
  isVisible: boolean
  closeDialog: () => void
}

export function DeleteTaskDialog({
  taskId,
  isVisible,
  closeDialog,
}: DeleteTaskDialogProps) {
  const { deleteTask } = useTasks()

  return (
    <div className="delete-task-dialog-container" data-is-visible={isVisible}>
      <h1>Deletar tarefa</h1>

      <span>Tem certeza que você deseja deletar essa tarefa?</span>

      <div className="buttons-container">
        <Button onClick={() => deleteTask(taskId)} visualType="deletion">
          Deletar
        </Button>
        <Button onClick={closeDialog} visualType="secondary">
          Cancelar
        </Button>
      </div>
    </div>
  )
}
