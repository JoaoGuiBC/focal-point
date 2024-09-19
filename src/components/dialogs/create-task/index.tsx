'use client'

import { useState } from 'react'

import { Button } from '@/components/button'

import { useTasks } from '@/contexts/task-context'

import './style.scss'

export function CreateTaskDialogTrigger() {
  const [isVisible, setIsVisible] = useState(false)

  function handleChangeVisibility() {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <Button onClick={handleChangeVisibility}>Adicionar nova tarefa</Button>
      <div className="overlay" data-is-visible={isVisible}>
        <CreateTaskDialog isVisible={isVisible} closeDialog={handleChangeVisibility} />
      </div>
    </>
  )
}

interface CreateTaskDialogProps {
  isVisible: boolean
  closeDialog: () => void
}

export function CreateTaskDialog({ isVisible, closeDialog }: CreateTaskDialogProps) {
  const [title, setTitle] = useState('')

  const { createTask } = useTasks()

  function handleCreateTask() {
    if (!title) return

    createTask(title)

    setTitle('')
    closeDialog()
  }

  return (
    <div className="create-task-dialog-container" data-is-visible={isVisible}>
      <h1>Nova tarefa</h1>

      <label htmlFor="title">
        <span>Título</span>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Digite"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>

      <div className="buttons-container">
        <Button onClick={handleCreateTask}>Adicionar</Button>
        <Button onClick={closeDialog} visualType="secondary">
          Cancelar
        </Button>
      </div>
    </div>
  )
}
