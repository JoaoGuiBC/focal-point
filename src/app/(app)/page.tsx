import './style.scss'

import { TasksSection } from './_tasks-section'

import { FocalPointLogo } from '@/components/focal-point-logo'
import { CreateTaskDialogTrigger } from '@/components/dialogs/create-task'

const today = new Date().toLocaleDateString('pt-BR', {
  dateStyle: 'full',
})

export default function Home() {
  return (
    <div>
      <header>
        <FocalPointLogo />
        <span className="welcoming-text">Bem-vindo de volta, Marcus</span>
        <span>{today}</span>
      </header>

      <div className="separator" />

      <TasksSection />

      <CreateTaskDialogTrigger />
    </div>
  )
}
