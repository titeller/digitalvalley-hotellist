import React, { FC } from 'react'

interface HeaderProps {
  title: string;
}
const Header: FC<HeaderProps> = ({
  title
}) => {
  return (
    <div className="m-auto">
      <h1 className="w-full text-white font-medium bg-sky p-3">{title}</h1>
    </div>
  )
}

export default Header
