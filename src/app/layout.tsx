import './globals.scss'

export const metadata = {
  title: 'Gachalab',
  description: '辻永泰輔のポートフォリオ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
