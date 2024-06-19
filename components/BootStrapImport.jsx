"use client"
import React, { useEffect } from 'react'
// import
export default function BootStrapImport() {
    useEffect(() => {
        // Dynamically import Bootstrap JS on client-side only
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
      }, []);
  return (
    <div></div>
  )
}
