import React, { FC } from 'react'

import Header from './Header'
import Meta from './Meta'

import { ILayout } from '../@types/layout'

const Layout: FC<ILayout> = ({ children }) => {
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