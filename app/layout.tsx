import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '업무 히스토리',
  description: '팀 업무 히스토리 관리 시스템',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
