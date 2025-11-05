// Rights Reserved, Unlicensed
export const metadata = { title: 'HypnoNeuro' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
