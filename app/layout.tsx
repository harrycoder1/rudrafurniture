import type { Metadata } from 'next'
import Script from 'next/script';
import { Inter ,Michroma } from 'next/font/google'
import './globals.css'
// import '@/styles/mediaScreen.css'
// import '@/styles/contact.css'd
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
import { Footer, Nav } from '@/components';
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

      <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet"/>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Viaoda+Libre&display=swap" rel="stylesheet"></link>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
{/* <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Viaoda+Libre&display=swap" rel="stylesheet"></link> */} 
 

    {/* <!-- Bootstrap CSS --> */}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" />

    {/* <title>Hello, world!</title> */}
  </head>
      <body className={``}  style={{height:"auto" ,backgroundColor:"e2e3e5"}}>
      <Nav />

<div className="  ">
{children}

<Footer />
</div>

{/* <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      /> */}
{/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script> */}
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"  ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" ></script>
        {/* <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.jss"></script> */}
        </body>
    </html>
  )
}
