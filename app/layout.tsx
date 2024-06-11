import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from '@/components';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rudra Furniture',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
     
      </head>
      <body className={`${inter.className} h-bglight`} >
      <Nav />

<div className="container  ">
{children}

</div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"  ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" ></script>
        {/* <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.jss"></script> */}
        </body>
    </html>
  )
}
