import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'

const Layout = ({ children, title, canonical, description }) => (
  <main>
    <NextSeo 
      title={title} 
      description={description}
      canonical={canonical}
      openGraph={{ title, description }} />
    <duv>
      {children}
    </duv>
  </main>
)

export default Layout