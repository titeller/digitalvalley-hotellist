import React, { FC, ReactNode } from 'react'
import Head from 'next/head'

import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hotels</title>
        <meta name="description" content="Hotels in Thailand." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header title="Phuket" />
      <main>
        {children}
      </main>
    </>
  )
}
export default Layout