import type { Metadata } from 'next'
import Script from 'next/script';
import { Inter ,Michroma } from 'next/font/google'
import './globals.css'
// import '@/styles/mediaScreen.css'
// import '@/styles/contact.css'd
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/js/src/button'

// import 'bootstrap/dist/js/bootstrap.bundle';
import { Footer, Nav } from '@/components';
import BootStrapImport from '@/components/BootStrapImport.jsx';
// const inter = Inter({ subsets: ['latin'] })
const michroma = Michroma({weight:'400'  ,subsets:['latin', 'latin-ext' ] })

export const metadata: Metadata = {
  title: 'Rudra Furniture - Premium Furniture for Every Home',
  description: 'Explore a wide range of premium furniture collections at Rudra Furniture. Shop for living room, bedroom, kitchen, and office furniture with ease. Quality and style await you.',
  openGraph: {
    title: 'Rudra Furniture',
    description: 'Shop for stylish and functional furniture at Rudra Furniture. Browse living room, bedroom, and office furniture collections.',
    url: 'https://rudrafurniture.vercel.app/',
    type: 'website',
    // image: '/images/og-image.png', // Add an appropriate image for the open graph
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rudrafurniture',
    title: 'Rudra Furniture',
    description: 'Premium furniture for every room in your home. Discover the best furniture collections today!',
    // image: '/images/twitter-image.png', // Add an appropriate image for Twitter card
  },
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


  </head>
      <body className={``}  style={{height:"auto" ,backgroundColor:"e2e3e5"}}>
<BootStrapImport />

      <Nav />
      

<div className="  ">
{children}

<Footer />
</div>

        </body>
    </html>
  )
}
