import React, { FC, ReactNode } from 'react'

import Header from './Header'
import Meta from './Meta'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta
      />
      <Header title="Phuket" />
      <main>
        {children}
      </main>
    </>
  )
}
export default Layout