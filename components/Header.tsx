import React, { FC } from 'react'

import { IHeader } from '../@types/header'

const Header: FC<IHeader> = ({
  title
}) => {
  return (
    <div className="m-auto">
      <h1 className="w-full text-white font-medium bg-sky p-3">{title}</h1>
    </div>
  )
}

export default Header
