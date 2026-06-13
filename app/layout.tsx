import React from 'react'

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0a0a' }}>
        {children}
      </body>
    </html>
  )
}
