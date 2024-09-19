import type { Metadata } from 'next'

import icon from '../assets/icon.png'

import './globals.scss'
import { TasksProvider } from '@/contexts/task-context'

export const metadata: Metadata = {
  title: 'Focal Point',
  description: 'Uma aplicação de gerenciamento de tarefas',
  icons: icon.src,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <TasksProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </TasksProvider>
  )
}
