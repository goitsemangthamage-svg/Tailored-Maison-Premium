export const metadata = {
  title: 'Tailored Maison',
  description: 'Light for Leaders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
