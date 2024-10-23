import { ReactNode } from 'react'
import Navbar from './Navbar'


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <Navbar />
      <main className="container mx-auto px-4">
        {children}
      </main>
    </div>
  )
}