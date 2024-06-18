import type { Metadata } from 'next'
import { Inter ,Michroma } from 'next/font/google'
import './globals.css'
// import '@/styles/mediaScreen.css'
// import '@/styles/contact.css'd
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from '@/components';
// const inter = Inter({ subsets: ['latin'] })
const michroma = Michroma({weight:'400'  ,subsets:['latin', 'latin-ext' ] })

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
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet"/>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Viaoda+Libre&display=swap" rel="stylesheet"></link>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Viaoda+Libre&display=swap" rel="stylesheet"></link>
      </head>
      <body className={``}  style={{height:"auto" ,backgroundColor:"e2e3e5"}}>
      <Nav />

<div className="  ">
{children}

</div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"  ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" ></script>
        {/* <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.jss"></script> */}
        </body>
    </html>
  )
}
